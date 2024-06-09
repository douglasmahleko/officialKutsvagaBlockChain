import React from "react";
import { Box, Button, Grid } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Skeleton from '@mui/material/Skeleton';
import { Navigate } from "react-router-dom";
function ViewMoreWithoutURL({tableHead, handleCloseBar, msg, handleCloseSnackBar, paid, data1,handleClickSnackBar, user, title1, isAuthenticated}){
    const navigate = useNavigate()
    const h = []
    tableHead.forEach((th) => (
            h.push(th.id)
        ))
        const getHead = () => {
            return(
              <Box sx={{marginLeft:'10%', justifyContent:"center"}}>
                <Typography variant="h4" fontWeight={600}  gutterBottom>
                    {title1}
                </Typography>
              </Box>
            )
          }
        if(msg){
            handleCloseBar()
            handleCloseSnackBar()
            handleClickSnackBar(msg, 'info')
        }
    const getContent = () => {
        return(
            <Box >
                <div>
                { data1 != null ? ( <TableContainer>
                        <Table>
                            <TableBody>
                                {
                                    tableHead.map((head) => (
                                        <TableRow>
                                            <TableCell > {head.name} </TableCell>
                                            <TableCell > { (head.id === "roomsNeeded" || head.id === "budget" || head.id === "roomsAvailable" ) ?
                                                 ( data1[head.id].toString() ) : ( data1[head.id] )  } 
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer> ) : (
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {
                                    tableHead.map((head) => (
                                        <TableRow>
                                            <TableCell > {head.name} </TableCell>
                                            <TableCell > < Skeleton animation="wave" height={50}style={{ marginBottom: 6, width:'60%', margin:'1%' }} /> </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    )}
                </div>
                <Button onClick={() => navigate(-1)}> Get Back </Button>
            </Box>
        )
    }
    return(
        <Box bgcolor={"background.default"}>
            { isAuthenticated ? ( <>{getHead()} {getContent()} </> ) : ( <Navigate to="/" replace={true} /> )}
        </Box>
    )
}

export default ViewMoreWithoutURL