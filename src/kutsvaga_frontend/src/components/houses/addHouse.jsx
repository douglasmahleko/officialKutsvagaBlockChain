import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Navigate, useNavigate } from "react-router-dom";
import CheckoutAgent from "./Checkout";

export default function AddHouse({user, handleClickSnackBar, handleCloseSnackBar, handleCloseBar, isAuthenticated, backendActor, paid}){
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const [data, setdata]= useState({
    city: '',
    agent: user.email,
    address:'',
    phase: '',
    roomsAvailable: 0,
    conditions: '',
    amountPerRoom:0,
    physicalDescription:"",
    requirements: '',
    utilities: '',
    country:'',
    province:'',
  })
      const sendMessage = async () => {
        setloading(true)
        try {
          setloading(true)
          const message = {
            city: data.city, 
            address: data.address, 
            agentEmail: user.email,
            phase: data.phase, 
            roomsAvailable: parseInt(data.roomsAvailable), 
            conditions: data.conditions,
            amountPerRoom: parseFloat(data.amountPerRoom), 
            requirements: data.requirements,
            utilities: data.utilities, 
            country: data.country, 
            province: data.province, 
            available:true,
            physicalDescription : data.physicalDescription, 
            houseID: Math.random().toString(36).substring(2,8)
          }
          await backendActor.addHouse(message);
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar('Data added successfully', 'success')
          navigate('/showHouses')
          setloading(false)
        } catch (error) {
          handleCloseSnackBar()
          handleCloseBar()
          handleClickSnackBar(error.message, 'error')
          setloading(false)
        }
      };
    const validateText = (val) => {
      // const rgExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const pattern = new RegExp(/[a-zA-Z0-9]+\d/g)
      return pattern.test(val)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.roomsAvailable > 0){
      if(data.amountPerRoom > 0){
        if(data.conditions != ""){
          if(data.country != "" && !validateText(data.country)){
            if(data.city != "" && !validateText(data.city)){
              if(data.province != "" && !validateText(data.province)){
                if(data.phase != ""){
                  if(data.agent != ""){
                    if(data.physicalDescription != ""){
                      if(data.requirements != ""){
                        if(data.address != "" ){
                          if(data.utilities != "" ){
                            setloading(true)
                            sendMessage()
                            setloading(false)
                          }else{
                            handleCloseSnackBar()
                            handleCloseBar()
                            handleClickSnackBar("Utilities cannot be empty", 'error')
                          }
                        }else{
                          handleCloseSnackBar()
                          handleCloseBar()
                          handleClickSnackBar("Address cannot be empty", 'error')
                        }
                      }else{
                        handleCloseSnackBar()
                        handleCloseBar()
                        handleClickSnackBar("Requirements cannot be empty", 'error')
                      }
                    }else{
                      handleCloseSnackBar()
                      handleCloseBar()
                      handleClickSnackBar("Physical Description phases cannot be empty", 'error')
                    }
                  }else{
                    handleCloseSnackBar()
                    handleCloseBar()
                    handleClickSnackBar("Agent cannot be empty", 'error')
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
          handleClickSnackBar("Conditions cannot be empty", 'error')
        }
      }else{
        handleCloseSnackBar()
        handleCloseBar()
        handleClickSnackBar("Amount Per Room cannot be zero", 'error')
      }
    }else{
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar("Rooms Available cannot be zero", 'error')
    }
  }
    return(
      <Box>
        {
          isAuthenticated ? (
            <CheckoutAgent handleSubmit={handleSubmit} loading={loading} user={data} setUser={setdata} paid={paid} disabled={false} title="HOUSE ADDITION" /> ) : (
            <Navigate to="/" replace={true} />
        )}
      </Box>
    )
}