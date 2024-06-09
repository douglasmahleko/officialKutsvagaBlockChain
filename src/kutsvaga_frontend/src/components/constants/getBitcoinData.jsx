import React from "react";

class GetBitcoinData extends React.Component{
  
  componentDidMount(){
    
    const getData = async () => {
        let get_p2pkh_address = await this.props.backendActor.get_p2pkh_address()
        if(get_p2pkh_address){
            this.props.setAddress(get_p2pkh_address)
          let get_balance = await this.props.backendActor.get_balance(get_p2pkh_address)
          if(get_balance){
            this.props.setBalance(get_balance)
          }
        }
    };
      this.props.handleCloseBar()
      this.props.handleCloseSnackBar()
      this.props.handleClickSnackBar("loading Bitcoin Information", "infor")
      getData()
  }
  render(){
    return(
      <></>
    )
  }
}
export default GetBitcoinData
