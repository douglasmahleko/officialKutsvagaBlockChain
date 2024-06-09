import React from "react";
import CreateTable from '../constants/createTable'
import { Box, Grid, Typography } from "@mui/material";
import Skelet from '../constants/skelet'
import { Link, Navigate } from "react-router-dom";

class ViewShortLists extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sending : false,
      data:null,
      displayRearchResult: false,
      getLevel:props.userLevel,
      tableHeader:null,
      tableHeaderAgent : [
        {id:"address", name:"Address"},
        {id:"clientEmail", name:"Client Email"},
        {id:"houseID", name:"House Id"},
        {id:"roomsTaken", name:"Rooms Available"},
        {id:"clientContact", name:"Client Contact"},
      ],
      tableHeaderAgentNotPaid : [
        {id:"", name:"Address"},
        {id:"", name:"Client Email"},
        {id:"", name:"House Id"},
        {id:"roomsTaken", name:"Rooms Available"},
        {id:"clientContact", name:"Client Contact"},
      ],
      tableHeaderClient : [
        {id:"agentEmail", name:"Agent Email"},
        {id:"houseID", name:"House Id"},
        {id:"roomsTaken", name:"Rooms Available"},
      ],
      tableHeaderClientNotPaid : [
        {id:"", name:"Agent Email"},
        {id:"houseID", name:"House Id"},
        {id:"roomsTaken", name:"Rooms Available"},
      ],
    }
  }
  componentDidMount(){
    if(this.state.getLevel === "AGENT"){
      this.setState({ tableHeader : this.state.tableHeaderAgent })
      if(!this.props.paid){
        this.setState({ tableHeader : this.state.tableHeaderAgentNotPaid })
      }
    }else{
      this.setState({ tableHeader : this.state.tableHeaderClient })
      if(!this.props.paid){
        this.setState({ tableHeader : this.state.tableHeaderClientNotPaid })
      }
    }
    const getData = async () => {
      this.props.handleCloseSnackBar()
      this.props.handleCloseBar()
      this.props.handleClickSnackBar('Loading', 'info')
      try {
          const messages = await this.props.backendActor.getAllShortListsForUser(this.props.user.email);
          if(messages.length > 0){
            this.setState({data:messages});
            this.props.handleCloseSnackBar()
          }
          else{
            this.props.handleCloseSnackBar()
            this.props.handleCloseBar()
            this.props.handleClickSnackBar('None of Short list linked to you exist', 'info')
          }
      } catch (error) {
        this.props.handleCloseSnackBar()
        this.props.handleCloseBar()
        this.props.handleClickSnackBar(error.message, 'error')
      }
    };
    if(!this.state.displayRearchResult){
      getData()
    }
}
getHead() {
  return(
    <Box sx={{ marginLeft:"10%" }}>
        <Typography variant="h3" sx={{ marginLeft:"15%" }} gutterBottom fontWeight={600}> Houses On ShortList</Typography>
        { this.state.getLevel === "CLIENT" && <Typography variant="h6" fontWeight={500}> Remember when You Confirm a house you loose access for security reasons </Typography>}
        { !this.props.paid ? ( <Typography  variant = "h5" color="red" fontWeight={500} > please pay to get all data and all features click <span style={{ color: 'black' }}><Link to="/pay"> here </Link></span> </Typography> ) : ( null ) }
    </Box>
  )
}
render(){
return(
    <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }} bgcolor={"background.default"}>
      { this.props.isAuthenticated ? 
        (
          <Box sx={{ marginLeft:"15%" }}>
            {this.getHead()}
            <Box>
            { this.state.data != null ? ( <CreateTable user={this.props.user} 
                data={this.state.data} link2="agentEmail" link="clientEmail" link3="houseID" getLevel={this.state.getLevel}
                focus="shortList" routie2="/moreURL" routie="/moreURL" backendActor={this.props.backendActor} handleCloseSnackBar={this.props.handleCloseSnackBar} handleCloseBar={this.props.handleCloseBar}
                tableHeader={this.state.tableHeader} handleClickSnackBar={this.props.handleClickSnackBar} logout={this.props.logout}
                canDownload={this.state.getLevel === 'AGENT'} paid={this.props.paid} setconfirm={this.props.setconfirm} /> ) : (
                  <Skelet />
                )}
            </Box>
          </Box>
        ) : ( <Navigate to="/" replace={true} /> )
      }
    </Grid>
  )
  }
}
export default ViewShortLists