import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import validator from "validator";
import 'react-phone-input-2/lib/style.css'
import emailjs from '@emailjs/browser';
import CheckoutAgent from "./Checkout";

function AddAgent({backendActor, handleClickBar, logout, isAuthenticated, handleCloseBar, handleCloseSnackBar}){
    const [open, setopen] = useState(false)
    const [verifyingNum, setverifyingNum] = useState(Math.random().toString(36).substring(2,7).toUpperCase())
    const form = useRef();
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [user, setUser] = useState({
      surname: "",
      email: "",
      contact: "",
      dob: "",
      name: "",
      country: "",
      gender: "",
      title: "",
      city: "",
      province: "",
      phase: "",
      physicalAddress: "",
    })

    const validateEmail = () => {
      return validator.isEmail(user.email)
    }
    const sendMessage = async () => {
      setloading(true)
      handleCloseSnackBar()
      handleCloseBar()
      handleClickBar('Inserting Data', 'info')
      const addDays = (date, days) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    };
    setloading(true)
    const todayDate = new Date();
    const days = 30;
    const newDate = addDays(todayDate, days);
      const d = new Date(user.dob)
      const regDate = new Date()
      let real_dob = d.toDateString()
      let real_regDate = regDate.toDateString()
      let regExpire = newDate.toDateString()
      setloading(true)
          const message = {
            surname: user.surname,
            email: user.email,
            contact: user.contact,
            dob: real_dob,
            name: user.name,
            country: user.country,
            gender: user.gender,
            title: user.title,
            level: {AGENT : null },
            regDate: real_regDate,
          };
          const message2 = {
            email: user.email,
            city: user.city,
            province: user.province,
            phase: user.phase,
            physicalAddress: user.physicalAddress,
            regExpire: regExpire,
          }
          let msg = {
            email : user.email,
            receiverAddress : "none",
            myAddress : "none",
            receiverEmail : "none",
            amount : 0,
            purpose : "register",
            datePaymentMade : real_regDate,
            transCode: "none",
            myBalance: 0,
            internal: true
          }
          if(validateEmail()){
            // sendEmail()
            // if(done){
                const userResp = await backendActor.createUser(message);
                if(userResp === 'added'){
                  handleCloseSnackBar()
                  handleCloseBar()
                  handleClickBar(userResp, 'success')
                  const agentResp = await backendActor.addAgent(message2);
                  if(agentResp === 'added'){
                    const paymentInfo = await backendActor.createLocalLedger(msg);
                    handleCloseSnackBar()
                    handleCloseBar()
                    handleClickBar(agentResp, 'success')
                    navigate("/", { replace: true })
                    logout()
                    navigate("/", { replace: true })
                    logout()
                    setloading(false)
                    }
                  }
                  else if(userResp === 'User Email or Contact already exist'){
                    handleCloseSnackBar()
                    handleCloseBar()
                    handleClickBar(userResp, 'info')
                    setloading(false)
                  }
                  else if(userResp === 'The user is already registered'){
                    handleCloseSnackBar()
                    handleCloseBar()
                    handleClickBar(userResp, 'info')
                    setloading(false)
                  }
                else{
                  handleCloseSnackBar()
                  handleCloseBar()
                  handleClickBar(userResp, 'error')
                  setloading(false)
                }
            // }
        }else{
          handleCloseSnackBar()
          handleCloseBar()
          handleClickBar("Email not valid", 'error')
          setloading(false)
        }
      };
      const nav = () => {
        logout()
        navigate("/", { replace: true })
      }
      const sendEmail = async () => {
        await emailjs.sendForm('service_bcqhxt9', 'template_q2ny4kg', form.current, '-qF8akIE4pkA51mhw')
          .then(() => {
              setopen(true)
              handleCloseSnackBar()
              handleCloseBar()
              handleClickBar('Email is Valid', 'success')
            },
            (error) => {
              handleCloseSnackBar()
              handleCloseBar()
              handleClickBar(error.text, 'error')
              setloading(false)
            },
          );
      };
      const validateText = (val) => {
        // const rgExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        const pattern = new RegExp(/[a-zA-Z0-9]+\d/g)
        return pattern.test(val)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(user.surname != "" && !validateText(user.surname)){
        if(user.email != ""){
          if(user.contact != ""){
            if(user.country != "" && !validateText(user.country)){
              if(user.city != "" && !validateText(user.city)){
                if(user.province != "" && !validateText(user.province)){
                  if(user.phase != ""){
                    if(user.name != "" && !validateText(user.name)){
                      if(user.physicalAddress != ""){
                        if(user.gender != "" && !validateText(user.gender)){
                          if(user.dob != "" ){
                            if(user.title != "" && !validateText(user.title)){
                              setloading(true)
                              sendMessage()
                              setloading(false)
                            }else{
                              handleCloseBar()
                              handleCloseSnackBar()
                              handleClickBar("Title cannot be empty or contain a number", 'error')
                            }
                          }else{
                            handleCloseBar()
                            handleCloseSnackBar()
                            handleClickBar("DOB cannot be empty", 'error')
                          }
                        }else{
                          handleCloseBar()
                          handleCloseSnackBar()
                          handleClickBar("Gender cannot be empty or contain a number", 'error')
                        }
                      }
                      else{
                        handleCloseBar()
                        handleCloseSnackBar()
                        handleClickBar("Physical Address cannot be empty", 'error')
                      }
                    }else{
                      handleCloseBar()
                      handleCloseSnackBar()
                      handleClickBar("Name cannot be empty or contain a number", 'error')
                    }
                  }else{
                    handleCloseBar()
                    handleCloseSnackBar()
                    handleClickBar("Phase cannot be empty", 'error')
                  }
                }else{
                  handleCloseBar()
                  handleCloseSnackBar()
                  handleClickBar("Province cannot be empty or contain a number", 'error')
                }
              }else{
                handleCloseBar()
                handleCloseSnackBar()
                handleClickBar("City cannot be empty or contain a number", 'error')
              }
            }else{
              handleCloseBar()
              handleCloseSnackBar()
              handleClickBar("Country cannot be empty or contain a number", 'error')
            }
          }else{
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar("Contact cannot be empty", 'error')
          }
        }else{
          handleCloseBar()
          handleCloseSnackBar()
          handleClickBar("Email cannot be empty", 'error')
        }
      }else{
        handleCloseBar()
        handleCloseSnackBar()
        handleClickBar("Surname cannot be empty or contain a number", 'error')
      }
    }
    return(
      <Box>
        { isAuthenticated ? ( <CheckoutAgent handleSubmit={handleSubmit} loading={loading} user={user} disabled={false} setUser={setUser} title={"AGENT REGISTRATION"} /> ) : (
          <>
            {nav()}
            {/* <Navigate to="/" replace={true} /> */}
          </>
          
        )}
      </Box>
    )
}
export default AddAgent
