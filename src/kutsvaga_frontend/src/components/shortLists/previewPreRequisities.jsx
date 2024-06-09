import React from "react";
import CreateTable from '../constants/createTable'
import SearchBar from "../constants/searchBar";
import { Box, Grid, Typography } from '@material-ui/core';
import { Stack } from "@mui/material"
import Skelet from '../constants/skelet'
import CheckoutAgent from "./Checkout";
import MakeReco from '../constants/makeReco';
import './shortList.css'
import { Link, Navigate } from "react-router-dom";

class PreviewPreRequisities extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:"",
      open:false,
      stories:null,
      stories1:null,
      clientInfo: null,
      displayRearchResult: false,
      sending:false,
      search:"",
      dataSearch:[],
      getLevel:props.userLevel,
      getting:true,
      tableHeader : [
        {id:'clientEmail', name:"Client Email"},
        {id:'phase', name:"Phase/Street"},
        {id:'roomsNeeded', name:"Rooms Needed"},
        {id:'amountPerRoom', name:"Amount Per Room"},
        {id:'requirements', name:"Requirements"},
        {id:'budget', name:"Budget"}, 
        {id:'city', name:"City"},
        {id:'country', name:"Country"},
        {id:'personalInfo', name:"Personal Info"},
        {id:'consideration', name:"Consideration"},
        {id:'requirements', name:"Requirements"}, 
        {id:'dateExpectingHouse', name:"Date Expecting House"}, 
      ],
      tableHeaderNotPaid : [
        {id:'roomsNeeded', name:"Rooms Needed"},
        {id:'amountPerRoom', name:"Amount Per Room"},
        {id:'requirements', name:"Requirements"},
        {id:'requirements', name:"Requirements"}, 
        {id:'dateExpectingHouse', name:"Date Expecting House"}, 
      ],
      tableHeader1 : [
        {id:'agentEmail', name:"Agent"},
        {id:'city', name:"City"},
        {id:'phase', name:"Phase/Street"},
        {id:'roomsAvailable', name:"Rooms Available"},
        {id:'amountPerRoom', name:"Amount Per Room"},
      ],
      tableHeaderForMore : [
        {id:'houseID', name:"House ID"},
        {id:'address', name:"Address"},
        {id:'agentEmail', name:"Agent"},
        {id:'city', name:"City"},
        {id:'phase', name:"Phase/Street"},
        {id:'roomsAvailable', name:"Rooms Available"},
        {id:'conditions', name:"Conditions"},
        {id:'amountPerRoom', name:"Amount Per Room"},
        {id:'requirements', name:"Requirements"},
        {id:'utilities', name:"Utilities"},
        {id:'physicalDescription', name:"Physical Description"},
        ],
        tableHeaderForMoreNotPaid : [
          {id:'roomsAvailable', name:"Rooms Available"},
          {id:'amountPerRoom', name:"Amount Per Room"},
          {id:'requirements', name:"Requirements"},
          {id:'utilities', name:"Utilities"},
          ]
    }
    this.change = this.change.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
  }
  handleChange = (e) => {
    this.setState({search : e.target.value})
  }
  closeSearch(){
    this.setState({ displayRearchResult : false })
    this.setState({ dataSearch :[]})
  }
  componentDidMount(){
    if(!this.props.isAuthenticated){
      this.props.navigate("/", {replace:true})
    }
    if(!this.props.paid){
      this.setState({tableHeader : this.state.tableHeaderNotPaid})
      this.setState({tableHeaderForMore : this.state.tableHeaderForMoreNotPaid})
      this.setState({open : false})
    }
    const getData = async () => {
      this.props.handleCloseBar()
      this.props.handleCloseSnackBar()
      this.props.handleClickSnackBar('Loading', 'info')
      let messages = []
      try {
        if(this.state.getLevel === "AGENT"){
          messages = await this.props.backendActor.getAllClientsNeeds();
          if(messages.length === 0){
            this.props.handleCloseBar()
            this.props.handleCloseSnackBar()
            this.props.handleClickSnackBar('No needs posted at the moment', 'info')
          }
          else{
            this.setState({stories:messages});
            const msg = await this.props.backendActor.getMyHouses();
            if(messages.err != "Currently user has no houses to manage. Please add some!!"){
              this.setState({stories1:msg.ok});
            }else{
              this.props.handleCloseBar()
              this.props.handleCloseSnackBar()
              this.props.handleClickSnackBar(msg.err, 'error')
            }
          }
        }else{
          messages = await this.props.backendActor.getClientNeeds();
          if(messages.err != 'User needs not found'){
            this.setState({stories:messages.ok});
          }
          else{
            this.props.handleCloseBar()
            this.props.handleCloseSnackBar()
            this.props.handleClickSnackBar(messages.err, 'error')
          }
        }
      } catch (error) {
        this.props.handleCloseBar()
        this.props.handleCloseSnackBar()
        this.props.handleClickSnackBar(error.error, 'error')
      }
    };
      getData()
      if(this.state.search != ""){
        this.handleSearch()
      }
    }
    getHead(title){
      return(
        <Box bgcolor={"background.default"}>
            <Typography variant="h4" gutterBottom> {title} </Typography>
            { !this.props.paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features click <span style={{ color: 'red' }}><Link to="/pay"> here </Link></span> </Typography> ) : ( null ) }
            { this.state.displayRearchResult && <CommonButton sx={{ width:'60%', marginLeft:'1%'}} onClick={this.closeSearch} variant="contained" type="submit"> Close Search </CommonButton>}
        </Box>
      )
    }
    change(data){
      this.setState({ clientInfo: data})
    }
    handleSearch = (e) => {
      e.preventDefault()
      this.props.handleCloseBar()
      this.props.handleCloseSnackBar()
      this.props.handleClickSnackBar('Loading Search Result', 'info')
      if( this.state.stories != null){
        this.state.stories.forEach((dat) => {
          if(dat.city.toUpperCase() === this.state.search.toUpperCase() || dat.country.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.phase.toUpperCase() === this.state.search.toUpperCase() || dat.budget.toString()  === this.state.search.toString() || dat.country.toUpperCase().startsWith(this.state.search.toUpperCase()) || 
            dat.clientEmail.toUpperCase()  === this.state.search.toUpperCase() || dat.amountPerRoom.toString() === this.state.search.toString() ||
            dat.roomsNeeded.toUpperCase()  === this.state.search.toUpperCase() || dat.clientEmail.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
            dat.city.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.phase.toUpperCase().startsWith(this.state.search.toUpperCase())){
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
          this.setState({search:""})
          this.setState({displayRearchResult:true})
          this.props.handleCloseBar()
          this.props.handleClickSnackBar('Here your search results', 'info')
        }
      }
    }
    viewPreRequisities(){
      return(
        <Box>
        <Stack bgcolor={"background.default"} >
            {
              this.state.getLevel === 'AGENT' ? (
                <Box bgcolor={"background.default"}>
                  <Box bgcolor={"background.default"} className={ !this.state.displayRearchResult ? "show" : "hide"}>
                      <SearchBar searchValue={this.state.search} onClick={this.handleSearch} paid={this.props.paid}
                          onChange={(e) => this.setState({ search : e.target.value})} user={this.props.user}
                          placeholder="Search for Requirements" title={this.getHead("View Pre-Needs")} />
                    { this.state.stories != null ? ( <CreateTable data={this.state.stories} backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar}
                    user={this.props.user} link="clientEmail" focus="Requirements" getLevel={this.state.getLevel} paid={this.props.paid}
                    routie="/moreURL" tableHeader={this.state.tableHeader} handleClickSnackBar={this.props.handleClickSnackBar}
                    canDownload={true} onClick={() => this.setState({ open : true})} onClick1={this.change} /> ) : (
                      <Skelet />
                    )}
                  </Box>
                  <Box bgcolor={"background.default"} className={ this.state.displayRearchResult ? "show" : "hide"}>
                    { this.getHead("View Pre-Needs")}
                    { this.state.dataSearch.length > 0 ? ( <CreateTable data={this.state.dataSearch} backendActor={this.props.backendActor}
                    user={this.props.user} link="clientEmail" focus="Requirements" getLevel={this.state.getLevel} paid={this.props.paid}
                    routie="/moreURL" tableHeader={this.state.tableHeader} handleClickSnackBar={this.props.handleClickSnackBar} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar}
                    canDownload={true} onClick={() => this.setState({ open : true})} onClick1={this.change} /> ) : (
                      <Skelet />
                    )}
                  </Box>
                  <MakeReco open={this.state.open} stories1={this.state.stories1} getLevel={this.state.getLevel}
                    tableHeader1={this.state.tableHeader1} clientInfo={this.state.clientInfo} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar}
                    tableHeaderForMore={this.state.tableHeaderForMore} backendActor={this.props.backendActor}
                    closeUp={(e) => this.setState( { open : false } ) } user={this.props.user} 
                    handleClickSnackBar={this.props.handleClickSnackBar} paid={this.props.paid}
                  />
                </Box>
              ) : (
                <Box bgcolor={"background.default"}>
                  { this.state.stories != null ? ( <CheckoutAgent user={this.state.stories} paid={this.props.paid} disabled={true} isAuthenticated={this.props.isAuthenticated} title="MY NEEDS AND EXPECTATIONS PRE-VIEW" /> ) : (
                        <Skelet />
                  )}
                </Box>
              )
            }
        </Stack>
        </Box>
      )
    }
    render(){
      return(
        <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }} bgcolor={"background.default"}>
          { this.props.isAuthenticated ? (this.viewPreRequisities()) : ( <Navigate to="/" replace={true} /> )}
        </Grid>
    )
    }
}
export default PreviewPreRequisities