import React from "react";
import CreateTable from '../constants/createTable'
import SearchBar from "../constants/searchBar";
import './client.css'
import { Box, Grid, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import Skelet from '../constants/skelet'

class ShowClients extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sending : false,
      data:null,
      dataSearch:[],
      displayRearchResult: false,
      tableHeader : [
        { id: 'title', name : 'Title' },
        { id: 'name', name : 'Name' },
        { id: 'surname', name : 'Surname' },
        { id: 'clientEmail', name : 'Client Email' },
        { id: 'address', name : 'Address' },
        { id: 'houseID', name : 'House ID' },
        { id: 'clientContact', name : 'Client Contact' },
        { id: 'roomsTaken', name : 'Rooms Taken' }
    ],
    tableHeaderNotPaid : [
      { id: 'title', name : 'Title' },
      { id: 'name', name : 'Name' },
      { id: 'roomsTaken', name : 'Rooms Taken' }
  ],
      search:'',
      getting:true
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
  }
  closeSearch(){
    this.setState({ displayRearchResult : false })
    this.setState({ dataSearch :[]})
  }
  handleSearch = (e) => {
    e.preventDefault()
    this.props.handleCloseSnackBar()
    this.props.handleCloseBar()
    this.props.handleClickSnackBar('Loading Search Result', 'info')
      if(this.state.data != null){
        this.state.data.forEach((dat) => {
          if(dat.country.toUpperCase()  === this.state.search.toUpperCase() || dat.country.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
            dat.gender.toUpperCase()  === this.state.search.toUpperCase() || 
            dat.name.toUpperCase()  === this.state.search.toUpperCase() || dat.name.toUpperCase().startsWith(this.state.search.toUpperCase()) || 
            dat.contact.toString()  === this.state.search.toString() ||
            dat.surname.toUpperCase() === this.state.search.toUpperCase() || dat.surname.toUpperCase().startsWith(this.state.search.toUpperCase()) || 
            dat.email.toUpperCase()  === this.state.search.toUpperCase() || dat.email.toUpperCase().startsWith(this.state.search.toUpperCase())){
            this.state.dataSearch.push(dat)
            this.props.handleCloseSnackBar()
          }
        })
        if(this.state.dataSearch.length <= 0){
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.props.handleClickSnackBar('No search result found', 'info')
          this.setState({displayRearchResult:false})
          this.setState({search:""})
        }else{
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.setState({search:""})
          this.setState({displayRearchResult:true})
          this.props.handleClickSnackBar('Here your search results', 'success')
        }
      }
  }
  componentDidMount(){
    if(!this.props.isAuthenticated){
      this.props.navigate("/", {replace:true})
    }
    if(!this.props.paid){
      this.setState({ tableHeader : this.state.tableHeaderNotPaid })
    }
    const getData = async () => {
      this.props.handleCloseSnackBar()
      this.props.handleCloseBar()
      this.props.handleClickSnackBar('Loading', 'info')
      try {
        const messages = await this.props.backendActor.getClients(this.props.user.email);
        const messages2 = await this.props.backendActor.getAllShortListsForUser(this.props.user.email);
        if(messages.err != 'Currently you do not have clients' && messages2.length > 0 ){
          let clientData = []
          messages2.forEach((shortList) => {
            messages.ok.forEach((client) => {
            if(shortList.clientEmail === client.email){
              let msg = {
                title : client.title,
                name : client.name,
                surname : client.surname,
                clientEmail : client.email,
                address : shortList.address,
                houseID : shortList.houseID,
                clientContact : client.contact,
                roomsTaken : shortList.roomsTaken,
                }
                clientData.push(msg)
                }
              })
          })
          if(clientData.length > 0){
            this.setState({data:clientData});
          }else{
            this.props.handleCloseSnackBar()
            this.props.handleCloseBar()
            this.props.handleClickSnackBar("Have no clients", 'error')
          }
        }else{
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.props.handleClickSnackBar(messages.err, 'error')
        }
        this.setState({getting:true});
      } catch (error) {
        this.props.handleCloseSnackBar()
        this.props.handleCloseBar()
        this.props.handleClickSnackBar(error.message, 'error')
        this.setState({getting:true});
      }
    };
      getData()
      if(this.state.search != ""){
        this.handleSearch()
    }
  }
    getHead () {
      return(
        <Box sx={{marginLeft:'17%', justifyContent:"center"}}>
            <Typography variant="h3"> Available Clients </Typography>
            { !this.props.paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features click <span style={{ color: 'black' }}><Link to="/pay"> here </Link></span> </Typography> ) : ( null ) }
            { this.state.displayRearchResult && <CommonButton sx={{ width:'60%', marginLeft:'1%'}} onClick={this.closeSearch} variant="contained" type="submit"> Close Search </CommonButton>}
        </Box>
      )
    }
    render(){
      return(
          <Grid container bgcolor={"background.default"} sx={{ height: { xs: '100%', sm: '100dvh' } }}>
          {
            this.props.isAuthenticated ? (
              <Box>
                <div className={ !this.state.displayRearchResult ? "show" : "hide"}>
                <Grid sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  width: '100%',
                  maxWidth: { sm: '100%', md: 600 },
                  maxHeight: '720px',
                  gap: { xs: 5, md: 'none' },
                }}>
                  <SearchBar searchValue={this.state.search} onClick={this.handleSearch}
                    onChange={(e) => this.setState({search : e.target.value})} paid={this.props.paid}
                    placeholder="Search for Clients" title={this.getHead()} /> 
                </Grid>
                  { this.state.data != null ? ( <CreateTable link2="clientEmail" link3="address" user={this.props.user} focus="housesByAgent" backendActor={this.props.backendActor} handleCloseBar={this.props.handleCloseBar}
                    routie2="/more" data={this.state.data} tableHeader={this.state.tableHeader} handleClickSnackBar={this.props.handleClickSnackBar} handleCloseSnackBar={this.props.handleCloseSnackBar} paid={this.props.paid} /> ) : (
                      <Skelet />
                  )} 
                </div>
                <div className={ this.state.displayRearchResult ? "show" : "hide"}>
                  { this.getHead() }
                  { this.state.dataSearch.length > 0 ? ( <CreateTable link2="clientEmail" link3="address" user={this.props.user} focus="housesByAgent" backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar}
                    routie2="/more" data={this.state.dataSearch} tableHeader={this.state.tableHeader} handleClickSnackBar={this.props.handleClickSnackBar} handleCloseBar={this.props.handleCloseBar} paid={this.props.paid} /> ) : (
                      <Skelet />
                  )} 
                </div>
              </Box>
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
          </Grid>
      )
    }
}
export default ShowClients