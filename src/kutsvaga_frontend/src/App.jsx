import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import './components/navBar/navBar.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AddAgent from './components/agents/addAgent';
import ShowAgents from './components/agents/showAgents';
import AddClient from './components/clients/addClients';
import ShowClients from './components/clients/showClients';
import AddHouse from "./components/houses/addHouse"
import ShowHouses from "./components/houses/showHouses"
import AddShortList from "./components/shortLists/addShortLists"
import ViewShortLists from "./components/shortLists/viewShortLists"
import Home from "./components/home"
import EditProfile from "./components/profiles/editProfile"
import ShowProfile from "./components/profiles/showProfile"
import MakePayment from './components/payment/makePayment';
import PreviewPreRequisities from './components/shortLists/previewPreRequisities';
import ViewMoreWithoutURL from './components/constants/viewMoreWithoutURL';
import ViewMoreWithURL from './components/constants/viewMoreWithURL';
import ViewMoreWithURLURL from './components/constants/viewMoreWithURLURL';
import PaymentHistory from './components/payment/paymentHistory';
import HousesOffMarkets from './components/houses/housesOffMarket';
import ViewRecommendations from './components/shortLists/recos';
import { useAuth } from './AppContext';
import { ThemeProvider } from '@emotion/react';
import {createTheme} from '@mui/material';
import Paperbase from './components/navBar/Paperbase';

function App() {
  const { backendActor, login, logout, isAuthenticated, identity } = useAuth();
  const [userLogged, setuserLogged] = useState(null);
  const [registered, setregistered] = useState("registered");
  const [needAdded, setneedAdded] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [agentLogged, setagentLogged] = useState(null);
  const [loading, setloading] = useState(false)
  const [paid, setpaid] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [accountExist, setaccountExist] = useState(false)
  const [mode, setmode] = useState('light')
  const [userLevel, setuserlevel] = useState('')
  const darkTheme = createTheme({
    palette:{
      mode : mode
    }
  })
  const [openSnackBar, setopenSnackBar] = useState(false);
  const [msgSnackBar, setmsgSnackBar] = useState('');
  const [svrtySnackBar, setsvrtySnackBar] = useState('');
  const [openBar, setopenBar] = useState(false);
  const [msgBar, setmsgBar] = useState('');
  const [svrtyBar, setsvrtyBar] = useState('');
  const handleClickSnackBar = (msg, svrty) => {
    setmsgSnackBar('')
    setopenSnackBar(true);
    setmsgSnackBar(msg)
    setsvrtySnackBar(svrty)
  };
  const handleCloseSnackBar = () => {
    setmsgSnackBar('')
    setopenSnackBar(false);
    setsvrtySnackBar('')
  };
  const toggleColorMode = () => {
    setmode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  const handleClickBar = (msg, svrty) => {
    setmsgBar('')
    setopenBar(true);
    setmsgBar(msg)
    setsvrtyBar(svrty)
  };
  const handleCloseBar = () => {
    setmsgBar('')
    setopenBar(false);
    setsvrtyBar('')
  };
  const determineExistance = async () => {
    let getExistance = await backendActor.userHasAccount()
    if(!getExistance){
      setregistered("none")
    }else if(getExistance && registered==="none"){
      setregistered("added")
      setrefresh(true)
    }
    setaccountExist(getExistance)
  }
  const setExpire = async () => {
    if(userLevel ==='AGENT'){
      const regDate = new Date()
      let real_regDate = regDate.toDateString()
      if(agentLogged != null){
        const dateObject = new Date(agentLogged.regExpire)
        if(real_regDate >= dateObject){
          let expiryCond = await backendActor.setExpiry()
          if(expiryCond){
            let paidie = await backendActor.getLocalLedger()
            setpaid(paidie)
          }
        }
      }
    }
  }
  useEffect(() => {
    setExpire()
  }, userLevel)
  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Paperbase user={userLogged} registered={registered} svrtySnackBar={svrtySnackBar} svrtyBar={svrtyBar} setloading={setloading} 
                handleCloseSnackBar={handleCloseSnackBar} mode={mode} userLevel={userLevel} msgBar={msgBar} openBar={openBar} loading={loading} 
                accountExist={accountExist} determineExistance={determineExistance} isAuthenticated={isAuthenticated} handleCloseBar={handleCloseBar}
                logout={logout} needAdded={needAdded} openSnackBar={openSnackBar} msgSnackBar={msgSnackBar} handleClickBar={handleClickBar}
                toggleColorMode={toggleColorMode} >
              <Box>
                  <Routes>
                  <Route path="/showHouses" element = {<ShowHouses paid={paid} isAuthenticated={isAuthenticated} agentLogged={agentLogged} 
                    handleCloseSnackBar={handleCloseSnackBar} handleClickSnackBar={handleClickSnackBar} userLevel={userLevel} 
                    user={userLogged} backendActor={backendActor}  navigate={navigate} handleCloseBar={handleCloseBar} />} />
                  <Route path="/addAgent" element = {<AddAgent backendActor={backendActor} logout={logout} isAuthenticated={isAuthenticated} handleClickBar={handleClickBar} handleCloseSnackBar={handleCloseSnackBar} handleCloseBar={handleCloseBar} />} />
                  <Route path="/showAgents" element = {<ShowAgents userLevel={userLevel} handleCloseSnackBar={handleCloseSnackBar} isAuthenticated={isAuthenticated} user={userLogged} handleClickSnackBar={handleClickSnackBar}
                    backendActor={backendActor} navigate={navigate} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/addClient" element = {<AddClient backendActor={backendActor} logout={logout} isAuthenticated={isAuthenticated} handleClickBar={handleClickBar} handleCloseSnackBar={handleCloseSnackBar} handleCloseBar={handleCloseBar} />} />
                  <Route path="/showClients" element = {<ShowClients handleCloseSnackBar={handleCloseSnackBar} userLevel={userLevel} isAuthenticated={isAuthenticated} user={userLogged} 
                    handleClickSnackBar={handleClickSnackBar} backendActor={backendActor} navigate={navigate} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/addHouse" element = {<AddHouse user={userLogged} userLevel={userLevel} isAuthenticated={isAuthenticated} backendActor={backendActor} handleCloseSnackBar={handleCloseSnackBar}
                    handleClickSnackBar={handleClickSnackBar} navigate={navigate} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/myPrerequisites" element = {<AddShortList handleCloseSnackBar={handleCloseSnackBar} user={userLogged} isAuthenticated={isAuthenticated} 
                    handleClickSnackBar={handleClickSnackBar} backendActor={backendActor} paid={paid} handleCloseBar={handleCloseBar} />}  />
                  <Route path="/viewShortLists" element = {<ViewShortLists logout={logout} handleCloseSnackBar={handleCloseSnackBar} user={userLogged} isAuthenticated={isAuthenticated} 
                    handleClickSnackBar={handleClickSnackBar} userLevel={userLevel} backendActor={backendActor} navigate={navigate} paid={paid} setconfirm={setconfirm} handleCloseBar={handleCloseBar} />} /> 
                  <Route path="/editProfile" element = {<EditProfile user={userLogged} agentLogged={agentLogged} isAuthenticated={isAuthenticated} paid={paid} handleCloseSnackBar={handleCloseSnackBar}
                    handleClickSnackBar={handleClickSnackBar} userLevel={userLevel} backendActor={backendActor} navigate={navigate} handleCloseBar={handleCloseBar} />} /> 
                  <Route path="/showProfile" element = {<ShowProfile handleCloseSnackBar={handleCloseSnackBar} user={userLogged} agentLogged={agentLogged} isAuthenticated={isAuthenticated} 
                    handleClickSnackBar={handleClickSnackBar} userLevel={userLevel} backendActor={backendActor} navigate={navigate} handleCloseBar={handleCloseBar} />} /> 
                  <Route path="/pay" element = {<MakePayment setpaid={setpaid} isAuthenticated={isAuthenticated} userLevel={userLevel} handleCloseSnackBar={handleCloseSnackBar}
                    handleClickSnackBar={handleClickSnackBar} user={userLogged} backendActor={backendActor} agentLogged={agentLogged} paid={paid} handleCloseBar={handleCloseBar} />} /> 
                  <Route path="/previewPrerequisites" element = {<PreviewPreRequisities handleCloseSnackBar={handleCloseSnackBar} isAuthenticated={isAuthenticated} userLevel={userLevel} handleCloseBar={handleCloseBar}
                    handleClickSnackBar={handleClickSnackBar} user={userLogged} location={location } navigate={navigate} backendActor={backendActor} paid={paid} />} /> 
                  <Route path="/" element = {<Home confirm={confirm} registered={registered} login={login} setpaid={setpaid} logout={logout} setloading={setloading} loading={loading}  setagentLogged={setagentLogged} setuserlevel={setuserlevel} 
                    handleClickBar={handleClickBar} needAdded={needAdded} determineExistance={determineExistance} setuserLogged={setuserLogged} handleCloseBar={handleCloseBar} refresh={refresh} agentLogged={agentLogged}
                    accountExist={accountExist} isAuthenticated={isAuthenticated} backendActor={backendActor} paid={paid} setneedAdded={setneedAdded} setregistered={setregistered} userLevel={userLevel} handleCloseSnackBar={handleCloseSnackBar} />}  />
                  <Route path="/more" element = {<ViewMoreWithURL userLevel={userLevel} user={userLogged} isAuthenticated={isAuthenticated} location={location } handleCloseBar={handleCloseBar}
                    handleClickSnackBar={handleClickSnackBar} backendActor={backendActor} navigate={navigate} paid={paid} handleCloseSnackBar={handleCloseSnackBar} />} />
                  <Route path="/moreOn" element = {<ViewMoreWithoutURL userLevel={userLevel} handleCloseSnackBar={handleCloseSnackBar} user={userLogged} isAuthenticated={isAuthenticated} location={location } 
                    handleClickSnackBar={handleClickSnackBar} backendActor={backendActor} navigate={navigate} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/moreURL" element = {<ViewMoreWithURLURL userLevel={userLevel} user={userLogged} isAuthenticated={isAuthenticated} location={location } handleCloseSnackBar={handleCloseSnackBar}
                    handleClickSnackBar={handleClickSnackBar} navigate={navigate} backendActor={backendActor} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/history" element = {<PaymentHistory user={userLogged} userLevel={userLevel} isAuthenticated={isAuthenticated} setpaid={setpaid} agentLogged={agentLogged} handleCloseSnackBar={handleCloseSnackBar}
                    handleClickSnackBar={handleClickSnackBar} backendActor={backendActor} paid={paid} handleCloseBar={handleCloseBar} />} />
                  <Route path="/recommendations" element = {<ViewRecommendations handleCloseSnackBar={handleCloseSnackBar} agentLogged={agentLogged} navigate={navigate} 
                    handleClickSnackBar={handleClickSnackBar} userLevel={userLevel} isAuthenticated={isAuthenticated} user={userLogged} handleCloseBar={handleCloseBar}
                    location={location} backendActor={backendActor} paid={paid} />}  />
                  <Route path="/offMarket" element = {<HousesOffMarkets handleCloseSnackBar={handleCloseSnackBar} user={userLogged} agentLogged={agentLogged} userLevel={userLevel} 
                    handleClickSnackBar={handleClickSnackBar} navigate={navigate} isAuthenticated={isAuthenticated} location={location} handleCloseBar={handleCloseBar}
                    backendActor={backendActor} paid={paid} />} />
                </Routes>
              </Box>
            </Paperbase>
          </Box>
      </ThemeProvider>
  );
}

export default App;
