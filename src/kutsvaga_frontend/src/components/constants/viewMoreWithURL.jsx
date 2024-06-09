import React from "react";
import { useLocation } from "react-router-dom";
import ViewMoreWithoutURL from "./viewMoreWithoutURL";
import { Box } from "@mui/material";

function ViewMoreWithURL({user, isAuthenticated, paid, handleCloseSnackBar, handleCloseBar}){
    const location = useLocation()
    const title = location.state.title
    const tableHead = location.state.tableHead
    const data = location.state.data
    return(
        <Box bgcolor={"background.default"}>
            <ViewMoreWithoutURL handleCloseBar={handleCloseBar} handleCloseSnackBar={handleCloseSnackBar} tableHead={tableHead} paid={paid} data1={data} user={user} title1={title} isAuthenticated={isAuthenticated} />
        </Box>
    )
}

export default ViewMoreWithURL