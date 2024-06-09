import React from "react"; 
import CreateTable from '../constants/createTable'
import SearchBar from "../constants/searchBar";
import { Box, Typography } from "@material-ui/core";
import './house.css'
import { Link, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Skelet from '../constants/skelet'

class HousesOffMarkets extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:null,
      dataSearch:[],
      userLevel:props.userLevel,
      displayRearchResult: false,
      tableHeader : [
        {id:'houseID', name:"House ID"},
        {id:'agentEmail', name:"Agent Email"},
        {id:'clientEmail', name:"Client Email"},
        {id:'address', name:"Address"},
        {id:'roomsTaken', name:"Rooms Taken"},
      ],
      search:'',
      getting: true
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
  }
  componentDidMount(){
    if(!this.props.isAuthenticated){
      this.props.navigate("/", {replace:true})
    }
    this.props.handleCloseSnackBar()
    this.props.handleCloseBar()
    this.props.handleClickSnackBar("Loading", 'info')
    const getData = async () => {
      try {
        let messages = null
        if(this.state.userLevel ==="AGENT"){
          messages = await this.props.backendActor.getHousesOffMarketForAgent();
        }if(messages.err != "Currently you have no houses off market to manage"){
          this.setState({data:messages.ok});
          this.props.handleCloseSnackBar()
        }else{
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.props.handleClickSnackBar(messages.err, 'error')
        }
      } catch (error) {
        this.props.handleCloseSnackBar()
        this.props.handleCloseBar()
        this.props.handleClickSnackBar(error.message, 'error')
      }
    };
      getData()
      if(this.state.search != ""){
        this.handleSearch()
      }
}  
headerShow(){
  return(
    <Box sx={{marginLeft:'20%', justifyContent:"center"}}>
        <Typography variant="h3" sx={{marginLeft:"5%"}}> Houses Off Market </Typography>
        { !this.props.paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features click <span style={{ color: 'red' }}><Link to="/pay"> here </Link></span> </Typography> ) : ( null ) }
        { this.state.displayRearchResult && <CommonButton sx={{ width:'60%', marginLeft:'1%'}} onClick={this.closeSearch} variant="contained" type="submit"> Close Search </CommonButton>}
    </Box>
  )
}
closeSearch(){
  this.setState({ displayRearchResult : false })
  this.setState({ dataSearch :[]})
}
handleSearch = (e) => {
  e.preventDefault()
  this.setState({displayRearchResult:true})
  this.props.handleCloseSnackBar()
  this.props.handleCloseBar()
  this.props.handleClickSnackBar('Loading Search Result', 'info')
      if(this.state.data != null){
        this.state.data.forEach((dat) => {
          if(dat.roomsTaken.toUpperCase() === this.state.search.toUpperCase() || dat.address.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.clientEmail.toUpperCase() === this.state.search.toUpperCase() || dat.agentEmail.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.clientEmail.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.agentEmail.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
            dat.address.toUpperCase().startsWith(this.state.search.toUpperCase())){
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
          this.props.handleClickSnackBar('Here your search results', 'info')
        }
      }
}
showHouses () {
  return(
    <Box >
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
                onChange={(e) => this.setState({search:e.target.value})} paid={this.props.paid}
                placeholder="Search for a House Off Market" title={this.headerShow()} />
          </Grid>
          
          { this.state.data != null && this.state.tableHeader != null ? ( <CreateTable user={this.props.user} handleClickSnackBar={this.props.handleClickSnackBar} handleCloseBar={this.props.handleCloseBar}
            data={this.state.data} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor} getLevel={this.state.userLevel} paid={this.props.paid} /> ) : (
              <Skelet />
            ) }
        </div>
        <div className={ this.state.displayRearchResult ? "show" : "hide"}>
          { this.headerShow()}
          { this.state.dataSearch.length > 0 && this.state.tableHeader != null ? ( <CreateTable user={this.props.user} handleClickSnackBar={this.props.handleClickSnackBar} handleCloseBar={this.props.handleCloseBar} 
            data={this.state.dataSearch} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor} getLevel={this.state.userLevel} paid={this.props.paid} handleCloseSnackBar={handleCloseSnackBar} /> ) : (
              <Skelet />
            ) }
        </div>
    </Box>
  )
}
render(){
return(
  <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }} bgcolor={"background.default"}>
    { this.props.isAuthenticated ? ( this.showHouses() ) : <Navigate to="/" replace={true} />}
  </Grid>
    )
  }
}
export default HousesOffMarkets