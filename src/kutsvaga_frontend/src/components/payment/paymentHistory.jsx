import React, { useEffect, useState } from "react";
import CreateTable from '../constants/createTable'
import { Box, ButtonGroup, Typography } from "@mui/material";
import CommonButton from "../constants/commonButton";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import CheckoutAgent from "./Checkout";
import Skelet from '../constants/skelet'
import GetBitcoinData from "../constants/getBitcoinData";

function PaymentHistory({userLevel, agentLogged, handleCloseSnackBar, handleCloseBar, isAuthenticated, setpaid, paid, backendActor, user, handleClickSnackBar }){
  const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
};
    const [loading, setloading] = useState(false)
    const todayDate = new Date();
    const days = 60;
    const newDate = addDays(todayDate, days);
    let regExpire = newDate.toDateString()
    const regDate = new Date()
    let real_regDate = regDate.toDateString()
    const [data, setdata] = useState(null)
    const [visible, setvisible] = useState(0)
    const navigate = useNavigate()
    const [tableHeader, settableHeader] = useState([
      {count:1, id: 'myTransAddress', name : 'My TransAddress', numeric: false,disablePadding: false },
      {count:2, id: 'receiverAddress', name : 'Receiver Address', numeric: false,disablePadding: false },
      {count:3, id: 'receiverEmail', name : 'Receiver Email', numeric: false,disablePadding: false },
      {count:4, id: 'amountInBitCoins', name : 'Amount In Satoshis', numeric: true,disablePadding: false },
      {count:5, id: 'purpose', name : 'Purpose', numeric: false,disablePadding: false },
      {count:6, id: 'myBalance', name : 'My Balance', numeric: true,disablePadding: false },
      {count:7, id: 'datePaymentMade', name : 'Date Payment Made', numeric: false,disablePadding: false },
      {count:8, id: 'transCode', name : 'Transaction Code', numeric: false,disablePadding: false },
  ])
  const [internal, setInternal] = useState(false)
  const [values2, setvalues2] = useState({
    receiverEmail: '',
    amountInBitCoins: "",
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
  useEffect(() => {
    if(!isAuthenticated){
      navigate("/", {replace:true})
    }
    const getData = async () => {
      let history = await backendActor.getMyPaymentHistory(user.email)
      if(history.err != "No history exist yet"){
        setdata(history.ok)
      }
      else{
        if(visible === 0){
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar(history.err, "info")
        }
      }
    } 
    getData()
}, [])
const sendMessage = async (e) => {
  e.preventDefault()
  setloading(true)
  if(internal){
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
        amount : parseInt(values2.amountInBitCoins),
        purpose : values2.purpose,
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
              let send = await backendActor.send(values2.receiverAddress, values2.amountInBitCoins)
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar(send, 'success')
              setvalues1({...values1, transCode: send})
              if(values1.transCode != ''){
                msg = {
                  email : user.email,
                  receiverAddress : values2.receiverAddress,
                  myAddress : values1.myTransAddress,
                  receiverEmail : values2.receiverEmail,
                  amount : parseInt(values2.amountInBitCoins),
                  purpose : values2.purpose,
                  datePaymentMade : real_regDate,
                  transCode: values1.transCode,
                  myBalance: parseInt(values1.myBalance),
                  internal: internal
                }
              let res = await backendActor.createLocalLedger(msg)
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar(res, 'success')
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
    setloading(false)
  }
  setloading(false)
}
const getHead = () => {
  return(
    <Box bgcolor={"background.default"} sx={{ marginLeft:"5%", marginBottom: { sm : '30px', xs : '40px'}, 
    paddingBottom:{ sm : '30px', xs : '40px'}}}>
        <Typography variant="h3"> My Payments History </Typography>
        { !paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features click </Typography> ) : ( null ) }
    </Box>
  )
}
const buttons = () =>{
  return(
    <Box bgcolor={"background.default"} sx={{ flexDirection:'row', paddingBottom:"-20px", display: 'flex',alignItems: 'center', marginLeft:'150px','& > *': {m: 1,},}}>
        <CommonButton size='large' variant = {visible == 0 ? 'outlined' : "contained"} onClick={() => setvisible(0)}>Payment History</CommonButton>
        <CommonButton size='large' variant = {visible == 1 ? 'outlined' : "contained"} onClick={() => setvisible(1)}>Make Payment</CommonButton>
    </Box>
  )
}
const setAddress = (val) => {
  setvalues1({...values1, myTransAddress : val})
}
const setBalance = (val) => {
  setvalues1({...values1, myBalance : val})
}
 const getHeadForPayments = () => {
  return(
    <Box>
        <Typography variant="h3"> Make Payment </Typography>
        { !paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features </Typography> ) : ( null ) }
    </Box>
  )
}
      return(
        <Grid container sx={{ height: { xs: '100%', sm: '150dvh' } }} bgcolor={"background.default"}>
          { isAuthenticated ? ( 
            <Box  >
              <GetBitcoinData handleCloseSnackBar={handleCloseSnackBar} handleCloseBar={handleCloseBar} handleClickSnackBar={handleClickSnackBar} address={values1.myTransAddress} 
                backendActor={backendActor} setAddress={setAddress} setBalance={setBalance} />
              <Box bgcolor={"background.default"} >
                <ButtonGroup size="large" aria-label="Large button group">
                  {buttons()}
                </ButtonGroup>
              </Box>
              <Box bgcolor={"background.default"} sx={{ height: { xs: '100%', sm: '150dvh' } }}>
                <Box className={ visible === 0 ? "show" : "hide"}>
                  {getHead()}
                  { data != null ? ( <CreateTable link2="email" user={user} 
                    routie2="/more" data={data} tableHeader={tableHeader} /> ) : (
                      <Skelet />
                    ) }
                </Box>
                <Box className={ visible === 1 ? "show" : "hide"} sx={{width:"1200px"}} >
                { values1.myTransAddress != "" && (values1.myBalance >= 0 && (<CheckoutAgent loading={loading} user1={values1} userLevel={userLevel} user2={values2} handleSubmit={sendMessage} setUser1={setvalues1} 
                  setUser2={setvalues2} disabled={false} title={getHeadForPayments()} internal={internal} setInternal={setInternal} /> ) ) }
                </Box>
              </Box>
          </Box> 
          ) : ( <Navigate to="/" replace={true} /> )}
        </Grid>
       )
}
export default PaymentHistory