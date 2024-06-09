import { Navigate, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import './client.css'
import { Box} from "@mui/material";
import validator from "validator";
import 'react-phone-input-2/lib/style.css'
import emailjs from '@emailjs/browser';
import CheckoutClient from "./Checkout";

function AddClient({backendActor, handleClickBar, handleCloseBar, logout, isAuthenticated, handleCloseSnackBar}){
  const [open, setopen] = useState(false)
  const [loading, setloading] = useState(false)
  const [verifyingNum, setverifyingNum] = useState(Math.random().toString(36).substring(2,7).toUpperCase())
  const form = useRef();
  const navigate = useNavigate()
  const [user, setUser] = React.useState({
    surname: "",
    email: "",
    contact: "",
    dob: "",
    name: "",
    country: "",
    gender: "",
    title: "",
  })

  const sendMessage = async () => {
    setloading(true)
    handleCloseBar()
    handleCloseSnackBar()
    handleClickBar('Inserting Data', 'info')
    setloading(true)
    const d = new Date(user.dob)
    let real_dob = d.toDateString()
    const regDate = new Date()
    let real_regDate = regDate.toDateString()
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
        level: {CLIENT : null },
        regDate: real_regDate,
      };
      const message2 = {
        email: user.email,
        receiverEmail: "dmlambo@gmail.com",
        receiverAddress: "",
        myAddress:"",
        amount: 12.5,
        purpose: "re-register",
        datePaymentMade: real_regDate,
      }
      if(validateEmail()){
        // sendEmail()
        // if(done){
          const addUserRes = await backendActor.createUser(message);
          if(addUserRes === 'added'){
            // const paymentInfo = await backendActor.createLocalLedger(message2, "", true);
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar(addUserRes, 'success')
            navigate("/", { replace: true })
            logout()
            navigate("/", { replace: true })
            logout()
          }
          else if(addUserRes === 'The user is already registered'){
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar(addUserRes, 'info')
            setloading(false)
          }else if(addUserRes === 'User Email or Contact already exist'){
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar(addUserRes, 'info')
            setloading(false)
          }else{
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar(addUserRes, 'error')
            setloading(false)
          }
        // }
    }else{
      handleCloseBar()
      handleCloseSnackBar()
      handleClickBar( 'Email is invalid', 'error')
      setloading(false)
    }
  };
    const validateEmail = () => {
      return validator.isEmail(user.email)
    }
    const sendEmail = async () => {
      await emailjs.sendForm('service_bcqhxt9', 'template_q2ny4kg', form.current, '-qF8akIE4pkA51mhw')
        .then(() => {
            setopen(true)
          },
          (error) => {
            handleCloseBar()
            handleCloseSnackBar()
            handleClickBar( error.text, 'error')
          },
        );
    };
    const nav = () => {
      logout()
      navigate("/", { replace: true })
    }
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
                  if(user.name != "" && !validateText(user.name)){
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
                  }else{
                    handleCloseBar()
                    handleCloseSnackBar()
                    handleClickBar("Name cannot be empty or contain a number", 'error')
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
        { isAuthenticated ? ( <CheckoutClient loading={loading} handleSubmit={handleSubmit} user={user} setUser={setUser} disabled={false} title="CLIENT REGISTRATION" /> ) : ( 
           <>
           {nav()}
           {/* <Navigate to="/" replace={true} /> */}
         </>
         ) }
    </Box>
  )
}
export default AddClient