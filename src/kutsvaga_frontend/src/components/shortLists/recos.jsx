import React from "react";
import CreateTable from '../constants/createTable'
import { Box, Grid, Typography } from "@mui/material";
import './shortList.css'
import Skelet from '../constants/skelet'
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link, Navigate } from "react-router-dom";

class ViewRecommendations extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data1:null,
      data:null,
      search: '',
      dataSearch:[],
      dataSearch2:[],
      getLevel:props.userLevel,
      displayRearchResult: false,
      displayRearchResult2: false,
      value:'1',
      tableHeader:null,
      tableHeaderClient : [
        { id: 'agentEmail', name : 'Agent Email' },
        { id: 'houseID', name : 'HouseID' },
        { id: 'city', name : 'City' },
        { id: 'phase', name : 'Phase' },
    ],
    tableHeaderNotPaid : [
      { id: 'houseID', name : 'HouseID' },
      { id: 'city', name : 'City' },
  ],
    tableHeaderAgent : [
      { id: 'clientEmail', name : 'Client Email' },
      { id: 'houseID', name : 'HouseID' },
      { id: 'city', name : 'City' },
      { id: 'phase', name : 'Phase' },
      { id: 'address', name : 'Address' },
    ],
      getting:true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
  }
  closeSearch(){
    this.setState({ displayRearchResult : false })
    this.setState({ dataSearch :[]})
    this.setState({ displayRearchResult2 : false })
    this.setState({ dataSearch2 :[]})
  }
  componentDidMount(){
    if(!this.props.isAuthenticated){
      this.props.navigate("/", {replace:true})
    }
    const getData = async () => {
      this.props.handleCloseSnackBar()
      this.props.handleCloseBar()
      this.props.handleClickSnackBar('Loading', 'info')
      if(this.state.getLevel === "AGENT"){
        this.setState({title : "View Recomendations Made"})
        if(!this.props.paid){
          this.setState({ tableHeader:this.state.tableHeaderNotPaid})
        }else{
          this.setState({ tableHeader:this.state.tableHeaderAgent})
        }
      }
      else{
        this.setState({title : "View Recomendations Received"})
        if(!this.props.paid){
          this.setState({ tableHeader:this.state.tableHeaderNotPaid})
        }else{
          this.setState({ tableHeader:this.state.tableHeaderClient})
        }
      }
      try {
        const messages = await this.props.backendActor.getSpecificRecomendations(this.props.user.email);
        const messages1 = await this.props.backendActor.getMyAutoReccomended(this.props.user.email);
        if(messages.err != "No recommendeations exist"){
          this.setState({data:messages.ok});
        }
        else{
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.props.handleClickSnackBar(messages.err, 'error')
        }
        if(messages1.err != "No Auto recommendeations exist"){
          this.setState({data1:messages1.ok});
        }
        else{
          if(this.state.value === "1"){
            this.props.handleCloseSnackBar()
            this.props.handleCloseBar()
            this.props.handleClickSnackBar(messages1.err, 'error')
          }
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
handleChange = (e, val) => {
  this.setState({value : val})
};
handleSearch = (e) => {
  e.preventDefault()
  this.props.handleCloseSnackBar()
  this.props.handleCloseBar()
  this.props.handleClickSnackBar('Loading Search Result', 'info')
  if(this.state.value === "1"){
      if( this.state.data != null ){
        this.state.data.forEach((dat) => {
          if(dat.city.toUpperCase() === this.state.search.toUpperCase() || dat.address.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.phase.toUpperCase() === this.state.search.toUpperCase() || dat.agentEmail.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.city.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.agentEmail.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
            dat.phase.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.address.toUpperCase().startsWith(this.state.search.toUpperCase())){
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
  else if(this.state.value === "2"){
      if(this.state.data1 != null){
        this.state.data1.forEach((dat) => {
          if(dat.city.toUpperCase() === this.state.search.toUpperCase() || dat.address.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.phase.toUpperCase() === this.state.search.toUpperCase() || dat.agentEmail.toUpperCase()  === this.state.search.toUpperCase() ||
            dat.city.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.agentEmail.toUpperCase().startsWith(this.state.search.toUpperCase()) ||
            dat.phase.toUpperCase().startsWith(this.state.search.toUpperCase()) || dat.address.toUpperCase().startsWith(this.state.search.toUpperCase()) ){
              this.state.dataSearch2.push(dat)
              this.props.handleCloseSnackBar()
          }
        })
        if(this.state.dataSearch2.length <= 0){
          this.props.handleCloseSnackBar()
          this.props.handleCloseBar()
          this.props.handleClickSnackBar('No search result found', 'info')
          this.setState({displayRearchResult2:false})
          this.setState({search:""})
        }else{
          this.props.handleCloseSnackBar()
          this.setState({search:""})
          this.setState({displayRearchResult2:true})
          this.props.handleCloseBar()
          this.props.handleClickSnackBar('Here your search results', 'info')
        }
      }
  }
}
headerShow(title){
  return(
    <Box sx={{marginLeft:"10%"}}>
        <Typography variant="h4" gutterBottom fontWeight={600} > {title} </Typography>
        { !this.props.paid && <Typography sx={{ flowDirection: "row"}} fontWeight={500} variant = "h5" color="red" > please pay to get all data and all features click <span style={{ color: 'black' }}><Link to="/pay"> here </Link></span> </Typography> }
        { this.state.displayRearchResult && <CommonButton sx={{ width:'60%', flexDirection:"row", marginLeft:'1%'}} onClick={this.closeSearch} variant="contained" type="submit"> Close Search </CommonButton>}
    </Box>
  )
}
render(){
  return(
    <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }} bgcolor={"background.default"}>
    { this.props.isAuthenticated ? 
      ( 
        (this.state.getLevel === "AGENT") ? (
          <Box>
          <TabContext value={this.state.value} >
          <Box sx={{ width:"1200px" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth:"100%", position:"absolute" }}>
            <TabList onChange={this.handleChange} textColor="secondary" centered indicatorColor="secondary" >
              <Tab icon={<SensorWindowIcon />} iconPosition="start" label="My Houses System Recommendeded" value='1' />
              <Tab icon={<LaunchIcon />} iconPosition="start" label="Houses I Recommended" value='2' />
            </TabList >
          </Box>
          <Box paddingTop={6} sx={{marginLeft:"5%", marginRight: "8%" }} >
          <TabPanel value='1'>
            <div className={ !this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"5%", marginRight: "8%" }} >
              { this.headerShow("My Houses System Recommended")}
              <Box>
              { this.state.data1 != null && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.data1} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor}/> ) : (
                  <Skelet />
                )}
                </Box>
                </Box>
            </div>
            <div className={ this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"5%", marginRight: "8%" }} >
              { this.headerShow("My Houses System Recommended")}
              <Box>
              { this.state.dataSearch.length > 0  && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.dataSearch} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor}  /> ) : (
                  <Skelet />
                )}
                </Box>
                </Box>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            <div className={ !this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"5%", marginRight: "8%" }} >
              { this.headerShow("Houses I Recommended")}
              <Box>
              { this.state.data != null  && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.data} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor}  /> ) : (
                  <Skelet />
                )}
                </Box>
                </Box>
            </div>
            <div className={ this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"5%", marginRight: "8%" }} >
              {this.headerShow("Houses I Recommended")}
              <Box>
              { this.state.dataSearch2.length > 0 && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.dataSearch2} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor}  /> ) : (
                  <Skelet />
                )}
                </Box>
                </Box>
            </div>
          </TabPanel>
          </Box>
          </Box>
        </TabContext>
        </Box>
        ) : (
          <Box>
          <TabContext value={this.state.value} >
            <Box sx={{ width:"1000px" }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                <TabList onChange={this.handleChange} textColor="secondary" centered indicatorColor="secondary" >
                  <Tab icon={<SensorWindowIcon />} iconPosition="start" label="System Recommended" value='1' />
                  <Tab icon={<LaunchIcon />} iconPosition="start" label="Agent Recommended" value='2' />
                </TabList >
              </Box>
            <Box >
          <TabPanel value='1'>
            <div className={ !this.state.displayRearchResult ? "show" : "hide"}>
              <Box sx={{marginLeft:"15%" }} >
                { this.headerShow("Houses Recommended by System")}
                <Box>
                { this.state.data1 != null && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                  link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                  data={this.state.data1} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar} /> ) : (
                    <Skelet />
                  )}
                </Box>
              </Box>
            </div>
            <div className={ this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"15%" }} >
              { this.headerShow("Houses Recommended by System")}
              <Box>
              { this.state.dataSearch.length > 0  && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.dataSearch} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar} /> ) : (
                  <Skelet />
                )}
                </Box>
              </Box>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            <div className={ !this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"15%" }} >
              { this.headerShow("Houses Recommended by Agent")}
              <Box>
              { this.state.data != null  && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.data} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor}  /> ) : (
                  <Skelet />
                )}
                </Box>
              </Box>
            </div>
            <div className={ this.state.displayRearchResult ? "show" : "hide"}>
            <Box sx={{marginLeft:"15%" }} >
              {this.headerShow("Houses Recommended by Agent")}
              <Box>
              { this.state.dataSearch2.length > 0 && this.state.tableHeader != null ? ( <CreateTable link2="agentEmail" handleClickSnackBar={this.props.handleClickSnackBar}
                link="clientEmail" user={this.props.user} routie2="/moreURL" routie="/moreURL" focus="Recommended" getLevel={this.state.getLevel} paid={this.props.paid}
                data={this.state.dataSearch2} tableHeader={this.state.tableHeader} backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar} /> ) : (
                  <Skelet />
                )}
                </Box>
              </Box>
            </div>
          </TabPanel>
          </Box>
          </Box>
        </TabContext>
        </Box>
        )
       ) : ( <Navigate to="/" replace={true} /> )
    }
    </Grid>
   )
}
}
export default ViewRecommendations