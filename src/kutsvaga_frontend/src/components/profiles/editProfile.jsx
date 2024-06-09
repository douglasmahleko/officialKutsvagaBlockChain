import React, { useEffect, useState } from "react";
import 'react-phone-input-2/lib/style.css'
import { Navigate, useNavigate } from "react-router-dom";
import CheckoutAgent from "./Checkout";

function EditProfile({ userLevel, user, paid, handleCloseSnackBar, handleCloseBar, isAuthenticated, handleClickSnackBar, agentLogged,backendActor }){
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [data, setData] = useState({
      contact: user.contact,
      physicalAddress : userLevel === "AGENT" ? agentLogged.physicalAddress :'',
      province : userLevel === "AGENT" ? agentLogged.province :'',
      city : userLevel === "AGENT" ? agentLogged.city :'',
      phase : userLevel === "AGENT" ? agentLogged.phase :'',
    })
  const sendMessage = async () => {
    setloading(true)
      if(user != null){
        const message = {
          surname: user.surname,
          email: user.email,
          contact: data.contact,
          dob: user.dob,
          name: user.name,
          country: user.country,
          gender: user.gender,
          title: user.title,
          level: user.level,
          regDate: user.regDate,
        };
        let res = await backendActor.updateUser(message);
        if(res === "Update was successful"){
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar(res, 'success')
        }else{
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar(res, 'error')
        }
      }if(agentLogged != null){
        if(userLevel === "AGENT"){
          const message1 = {
            email: user.email,
            city: data.city,
            province: data.province,
            physicalAddress: data.physicalAddress,
            regExpire: agentLogged.regExpire,
            phase: data.phase,
          }
          let rez = await backendActor.updateAgent(message1);
          if(rez === "added"){
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar(rez, 'success')
          }else{
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar(rez, 'error')
          }
        }
      }
      setloading(false)
  };
  const validateText = (val) => {
    // const rgExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const pattern = new RegExp(/[a-zA-Z0-9]+\d/g)
    return pattern.test(val)
}
const handleSubmit = (e) => {
  e.preventDefault();
  setloading(true)
  if(userLevel === "AGENT"){
    if(data.contact != ""){
      if(data.physicalAddress != ""){
        if(data.city != "" && !validateText(data.city)){
          if(data.province != "" && !validateText(data.province)){
            if(data.phase != ""){
              setloading(true)
              sendMessage()
              setloading(false)
            }else{
              handleCloseSnackBar()
              handleCloseBar()
              handleClickSnackBar("Phase cannot be empty", 'error')
            }
          }else{
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar("Province cannot be empty or contain a number", 'error')
          }
        }else{
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar("City cannot be empty or contain a number", 'error')
        }
      }else{
        handleCloseSnackBar()
        handleCloseBar()
        handleClickSnackBar("Physical Address cannot be empty", 'error')
      }
    }else{
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar("Contact cannot be empty", 'error')
    }
  }else if(userLevel === "CLIENT"){
    if(data.contact != ""){
      sendMessage()
    }else{
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar("Contact cannot be empty", 'error')
    }
  }
}
  useEffect(() => {
    handleCloseSnackBar()
    handleCloseBar()
    handleClickSnackBar('Loading', 'info')
  }, [userLevel, agentLogged ])
      return(
        <>
          { isAuthenticated ? ( userLevel === "AGENT" ? ( 
            agentLogged != null ? <CheckoutAgent loading={loading} paid={paid} handleSubmit={handleSubmit} userLevel={userLevel} user={data} setUser={setData} disabled={false} title="EDIT CONTACT INFO" /> : null
           ) : ( user != null ? <CheckoutAgent paid={paid} loading={loading} handleSubmit={handleSubmit} userLevel={userLevel} user={data} setUser={setData} disabled={false} title="EDIT CONTACT INFO" /> : null ) 
           ) : ( <Navigate to="/" replace={true} /> ) }
        </>
      )

}
export default EditProfile