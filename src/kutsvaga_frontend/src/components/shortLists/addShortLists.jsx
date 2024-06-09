import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CheckoutAgent from "./Checkout";

function AddShortList ( { backendActor, user, handleClickSnackBar, handleCloseBar, isAuthenticated, paid, handleCloseSnackBar } ){
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [need, setneed] = useState({
      roomsNeeded: 0,
      amountPerRoom: 0,
      country: "",
      city: "",
      province: "",
      personalInfo: "",
      phase: "",         
      consideration : "",
      requirements : "",
      dateExpectingHouse: "",
      budget:0.0
})

    const sendMessage = async () => {
      setloading(true)
          try {
            setloading(true)
            const message = {
              clientEmail: user.email,
              roomsNeeded: parseInt(need.roomsNeeded),
              amountPerRoom: parseFloat(need.amountPerRoom),
              country: need.country,
              city: need.city,
              budget:parseFloat(need.budget),
              province: need.province,
              personalInfo: need.personalInfo,
              phase: need.phase,         
              consideration : need.consideration,
              requirements : need.requirements,
              dateExpectingHouse: new Date(need.dateExpectingHouse).toDateString()
            };
            await backendActor.addNeeds(message);
            let response = await backendActor.autoRecomend();
              if(response != "Cannot find your needs !!"){
                handleCloseSnackBar()
                handleCloseBar()
                handleClickSnackBar(response, 'success')
              }
              else{
                handleCloseSnackBar()
                handleCloseBar()
                handleClickSnackBar(response, 'error')
              }
              navigate('/previewPrerequisites')
          } catch (error) {
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar(error.message, 'error')
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
      if(need.roomsNeeded > 0){
        if(need.amountPerRoom > 0){
          if(need.budget > 0.0){
            if(need.country != "" && !validateText(need.country)){
              if(need.city != "" && !validateText(need.city)){
                if(need.province != "" && !validateText(need.province)){
                  if(need.phase != ""){
                    if(need.personalInfo != ""){
                      if(need.consideration != ""){
                        if(need.requirements != ""){
                          if(need.dateExpectingHouse != "" ){
                            setloading(true)
                            sendMessage()
                            setloading(false)
                          }else{
                            handleCloseSnackBar()
                            handleCloseBar()
                            handleClickSnackBar("Date Expecting House cannot be empty", 'error')
                          }
                        }else{
                          handleCloseSnackBar()
                          handleCloseBar()
                          handleClickSnackBar("Requirements cannot be empty", 'error')
                        }
                      }else{
                        handleCloseSnackBar()
                        handleCloseBar()
                        handleClickSnackBar("Considered phases cannot be empty", 'error')
                      }
                    }else{
                      handleCloseSnackBar()
                      handleCloseBar()
                      handleClickSnackBar("Personal Information cannot be empty", 'error')
                    }
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
              handleClickSnackBar("Country cannot be empty or contain a number", 'error')
            }
          }else{
            handleCloseSnackBar()
            handleCloseBar()
            handleClickSnackBar("Budget cannot be zero", 'error')
          }
        }else{
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar("Amount Per Room cannot be zero", 'error')
        }
      }else{
        handleCloseSnackBar()
        handleCloseBar()
        handleClickSnackBar("Rooms Needed cannot be zero", 'error')
      }
    }
      return(
          <>
          {
            isAuthenticated ? ( 
              <CheckoutAgent user={need} loading={loading} handleSubmit={handleSubmit} paid={paid} setUser={setneed} disabled={false} title="MY NEEDS AND EXPECTATIONS" />
             ) : (
              <Navigate to="/" replace={true} />
             )
          }
        </>
      )
}
export default AddShortList