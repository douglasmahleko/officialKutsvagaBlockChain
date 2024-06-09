import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import CheckoutAgent from "./Checkout";
import GetBitcoinData from "../constants/getBitcoinData";

function PaymentHistory({userLevel, isAuthenticated, handleCloseSnackBar, handleCloseBar, agentLogged, setpaid, paid, backendActor, user, handleClickSnackBar }){
  const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
};
    const [loading, setloading] = useState(false)
    const regDate = new Date()
    let real_regDate = regDate.toDateString()
    const todayDate = new Date();
    const days = 60;
    const newDate = addDays(todayDate, days);
    let regExpire = newDate.toDateString()
    const navigate = useNavigate()
    const [internal, setInternal] = useState(false)
    const [values2, setvalues2] = useState({
      receiverEmail: '',
      amountInBitCoins: 0,
      receiverAddress:'',
      purpose:'',
    })
    const [values1, setvalues1] = useState({
      receiverEmail: 'kutsvaga@gmail.com',
      amountInBitCoins: userLevel === 'AGENT' ? 15000 : 13000,
      myTransAddress: '',
      myBalance:-1,
      transCode:"",
      receiverAddress:'tb1qlj64u6fqutr0xue85kl55fx0gt4m4urun25p7q',
      purpose:'register or re-register',
      real_regDate: real_regDate
    })
const setAddress = (val) => {
  setvalues1({...values1, myTransAddress : val})
}
const setBalance = (val) => {
  setvalues1({...values1, myBalance : val})
}
const sendMessage = async (e) => {
  e.preventDefault()
  setloading(true)
  if(internal){
    let msg = {
      destinationAddress : values1.receiverAddress,
      amount : parseInt(values1.amountInBitCoins)
    }
    if(user.email === "raymondmahleko1@gmail.com"){
      let msg = {
        email : user.email,
        receiverAddress : values1.receiverAddress,
        myAddress : values1.myTransAddress,
        receiverEmail : values1.receiverEmail,
        amount : parseInt(values1.amountInBitCoins),
        purpose : values1.purpose,
        datePaymentMade : real_regDate,
        transCode: values1.transCode,
        myBalance: parseInt(values1.myBalance),
        internal: internal
      }
      let res = await backendActor.createLocalLedger(msg)
      let newRes = await backendActor.getLocalLedger()
      setpaid(newRes)
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar(res, 'success')
    }else if(user.email === "raymondmahleko2@gmail.com"){
      let msg = {
        email : user.email,
        receiverAddress : values1.receiverAddress,
        myAddress : values1.myTransAddress,
        receiverEmail : values1.receiverEmail,
        amount : parseInt(values1.amountInBitCoins),
        purpose : values1.purpose,
        datePaymentMade : real_regDate,
        transCode: values1.transCode,
        myBalance: parseInt(values1.myBalance),
        internal: internal
      }
      let res = await backendActor.createLocalLedger(msg)
      let newRes = await backendActor.getLocalLedger()
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar(res, 'success')
      setpaid(newRes)
    }else{
      let msg = {
        destination_address : values1.receiverAddress,
        amount_in_satoshi : parseInt(values1.amountInBitCoins)
      }
      let send = await backendActor.send(msg)
    handleCloseSnackBar()
    handleCloseBar()
    handleClickSnackBar(send, 'success')
    setvalues1({...values1, transCode: send})
    if(values1.transCode != ''){
      let msg = {
        email : user.email,
        receiverAddress : values1.receiverAddress,
        myAddress : values1.myTransAddress,
        receiverEmail : values1.receiverEmail,
        amount : parseInt(values1.amountInBitCoins),
        purpose : values1.purpose,
        datePaymentMade : real_regDate,
        transCode: values1.transCode,
        myBalance: parseInt(values1.myBalance),
        internal: internal
      }
      let res = await backendActor.createLocalLedger(msg)
      if( userLevel === "AGENT" && res === "added"){
        let msg = {
          email : user.email,
          physicalAddress : agentLogged.physicalAddress,
          city : agentLogged.city,
          province : agentLogged.province,
          phase : agentLogged.phase,
          regExpire : regExpire,
        }
        let newAgentRes = await backendActor.updateAgent(msg)
        let newRes = await backendActor.getLocalLedger()
        setpaid(newRes)
      }
      let newRes = await backendActor.getLocalLedger()
      setpaid(newRes)
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar(res, 'success')
      setloading(false)
    } 
    }
    setloading(false)
  }else{
      if(values2.receiverAddress != ""){
        if(values2.receiverEmail != ""){
          if(values2.amountInBitCoins > 0){
            if(values2.purpose != ""){
              let msg = {
                destination_address : values1.receiverAddress,
                amount_in_satoshi : parseInt(values1.amountInBitCoins)
              }
              let send = await backendActor.send(msg)
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar(send, 'success')
              setvalues1({...values1, transCode: send})
              if(values1.transCode != ''){
                let msg = {
                email : user.email,
                receiverAddress : values2.receiverAddress,
                myAddress : values1.myTransAddress,
                receiverEmail : values2.receiverEmail,
                amount : values2.amountInBitCoins,
                purpose : values2.purpose,
                datePaymentMade : values1.real_regDate,
                transCode: values1.transCode,
                myBalance: values1.myBalance
              }
              let res = await backendActor.createLocalLedger(msg, "", internal)
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar(res, 'success')
              setloading(false)
            }else{
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar("Transaction went wrong", 'error')
            }
          }else{
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar("Purpose cannot be empty", 'error')
          }
      }else{
        handleCloseSnackBar()
        handleCloseBar()
        handleClickSnackBar("Satoshis amount cannot be 0", 'error')
        }
    }else{
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar("Receiver Email cannot be empty", 'error')
      }
  }else{
    handleCloseSnackBar()
    handleCloseBar()
    handleClickSnackBar("Receiver Address cannot be empty", 'error')
    } 
    } 
    setloading(false)
  };
 const getHeadForPayments = () => {
  return(
    <Box sx={{marginLeft:"10%"}}>
        <Typography variant="h3"> Make Payment </Typography>
        { !paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features </Typography> ) : ( null ) }
    </Box>
  )
}
      return(
        <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }} bgcolor={"background.default"}>
          { isAuthenticated ? ( 
              <Box bgcolor={"background.default"} sx={{width:"1200px"}} >
                { user.email === "raymondmahleko2@gmail.com" || user.email === "raymondmahleko1@gmail.com" ? (
                  <CheckoutAgent loading={loading} user1={values1} user2={values2} handleSubmit={sendMessage} setUser1={setvalues1} setUser2={setvalues2}  disabled={false} title={getHeadForPayments()} 
                    internal={internal} setInternal={setInternal} /> 
                     ) :  (
                      <>
                          <GetBitcoinData handleClickSnackBar={handleClickSnackBar} handleCloseSnackBar={handleCloseSnackBar} handleCloseBar={handleCloseBar} address={values1.myTransAddress} backendActor={backendActor} setAddress={setAddress} setBalance={setBalance} />
                          { values1.myTransAddress.length > 0 && (values1.myBalance >= 0 && (
                          <CheckoutAgent loading={loading} user1={values1} user2={values2} handleSubmit={sendMessage} setUser1={setvalues1} setUser2={setvalues2}  disabled={false} title={getHeadForPayments()} 
                            internal={internal} setInternal={setInternal} /> 
                            ) ) } 
                      </>
                     ) } 
              </Box>
          ) : ( <Navigate to="/" replace={true} /> )}
        </Grid>
       )
}
export default PaymentHistory