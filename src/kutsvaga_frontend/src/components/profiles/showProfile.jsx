
import React from "react";
import { Navigate } from "react-router-dom";
import CheckoutClient from "../clients/Checkout";
import CheckoutAgent from "../agents/Checkout";

class ShowProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: {
        surname: props.user.surname,
        email: props.user.email,
        contact: props.user.contact,
        dob: props.user.dob,
        name: props.user.name,
        country: props.user.country,
        gender: props.user.gender,
        title: props.user.title,
        city: props.userLevel === "AGENT" ? props.agentLogged.city :'',
        province: props.userLevel === "AGENT" ? props.agentLogged.province :'',
        phase: props.userLevel === "AGENT" ? props.agentLogged.phase :'',
        physicalAddress: props.userLevel === "AGENT" ? props.agentLogged.phase :'',
        regDate:props.user.surname,
        regExpire: props.userLevel === "AGENT" ? props.agentLogged.regExpire :''
      },
    }
  }
  componentDidMound(){
    this.props.handleCloseSnackBar()
    this.props.handleCloseBar()
    this.props.handleClickSnackBar('Loading', 'info')
  }
    render(){
      return(
        <>
          { this.props.isAuthenticated ? ( this.props.userLevel === 'CLIENT' ? (
            this.props.user != null ? <CheckoutClient user={this.props.user} disabled={true}  /> : null
          ) : (
            this.props.agentLogged  != null ? <CheckoutAgent user={this.state.data} disabled={true} title="MY PROFILE" /> : null
          ) ) : ( <Navigate to="/" replace={true} /> ) }
        </>
      )
    }
}     
export default ShowProfile