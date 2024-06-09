import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Hero from './home/hero/hero';
import Value from './home/values/value';
import Contact from './home/contact/contact';
import GetStarted from './home/getStarted/getStarted';
import '../App.css';
import Skelet from './constants/skelet'

function Home({backendActor, agentLogged, handleCloseSnackBar, handleCloseBar, setregistered, userLevel, refresh, setneedAdded, handleClickBar, setpaid, confirm, registered, logout, setloading, loading, setuserLogged, setuserlevel, setagentLogged, determineExistance, accountExist, login, isAuthenticated}){
  const [usersCount, setuserscount] = useState(0)
  const [agentsCount, setagentscount] = useState(0)
  const [houseCount, sethousescount] = useState(0)
  const navigate = useNavigate()
  if(isAuthenticated){
    determineExistance()
  }
  const getData = async () =>{
    handleCloseBar()
    handleCloseSnackBar()
    handleClickBar('Loading', "info")
    if(isAuthenticated){
      setloading(true)
      if(accountExist){
        let user = await backendActor.getUser()
        if(user.err === 'User not found'){
          handleCloseBar()
          handleCloseSnackBar()
          handleClickBar('User not found', "error")
          setloading(false)
        }else{
          setuserLogged(user.ok)
          let userlvl = await backendActor.getUserLevel()
          let paidie = await backendActor.getLocalLedger()
          setpaid(paidie)
          let usersCounts = await backendActor.getClientsCount()
          setuserscount(usersCounts)
          let agentsCounts = await backendActor.getAgentsCount()
          setagentscount(agentsCounts)
          let houseCounts = await backendActor.getHouseCount()
          sethousescount(houseCounts)
          if(userlvl ==='AGENT'){
            let agentIonf = await backendActor.getSpecificAgent()
            setagentLogged(agentIonf.ok)
          }else{
            let needeExist = await backendActor.addedNeed()
            setneedAdded(needeExist)
          }
          handleCloseBar()
          handleCloseSnackBar()
          handleClickBar('You have logged in', "success")
          setuserlevel(userlvl)
          if(registered === "registered"){
            navigate('/showHouses', { replace: true })
          }
          else{
            navigate('/', { replace: true })
            logout()
            setregistered("registered")
            navigate('/', { replace: true })
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar(registered, "success")
          }
          setloading(false)
        }
      }else{
        handleCloseBar()
        handleCloseSnackBar()
        handleClickBar('User not found', "error")
        setloading(false)
      }
    }
    else{
      handleCloseBar()
      handleCloseSnackBar()
      handleClickBar('Try to log In to Register or Log In if regitered', "info")
      setloading(false)
    }
    setloading(false)
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
    getData()
    setExpire()
  }, [isAuthenticated, confirm, refresh])
      return(
        <>
          { !loading ? (
            <div className='App'>
              <Box sx={{ width : '1500px'}} >
                <Box className='white-gradient' />
                <Hero login={login} isAuthenticated={isAuthenticated} houseCount={houseCount} usersCount={usersCount} agentsCount={agentsCount} />
              </Box>
              <Value />
              <Contact />
              <GetStarted />
            </div>
          ) : (
            <>
              <Skelet />
            </>
          ) }
        </>
      )
}
export default Home
