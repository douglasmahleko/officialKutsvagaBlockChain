import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack, Box, Typography } from "@mui/material"
import CreateTable from "./createTable"
import SearchBar from "./searchBar"
import Skelet from "./skelet"
import './consStyle.css'
import CommonButton from './commonButton';
import { Link } from 'react-router-dom';

 const MakeReco =  ({ open, stories1, handleCloseSnackBar, handleCloseBar, clientInfo, getLevel, paid, backendActor, handleClickSnackBar, tableHeader1, tableHeaderForMore, closeUp, user}) => {
  const [displayRearchResult, setdisplayRearchResult] = useState(false)
  const [search, setsearch] = useState("")
  let dataSearch = []
  const handleSearch = (e) => {
    e.preventDefault()
    handleCloseBar()
    handleCloseSnackBar()
    handleClickSnackBar('Loading Search Result', 'info')
    stories1.forEach((dat) => {
      if(dat.city.toUpperCase() === search.toUpperCase() || dat.country.toUpperCase()  === search.toUpperCase() ||
        dat.phase.toUpperCase() === search.toUpperCase() || dat.budget.toString()  === search.toString() || dat.country.toUpperCase().startsWith(search.toUpperCase()) || 
        dat.clientEmail.toUpperCase()  === search.toUpperCase() || dat.amountPerRoom.toString() === search.toString() ||
        dat.roomsNeeded.toUpperCase()  === search.toUpperCase() || dat.clientEmail.toUpperCase().startsWith(search.toUpperCase()) ||
        dat.city.toUpperCase().startsWith(search.toUpperCase()) || dat.phase.toUpperCase().startsWith(search.toUpperCase())){
          dataSearch.push(dat)
          handleCloseBar()
          handleCloseSnackBar()
      }
    })
    if(dataSearch.length <= 0){
      handleCloseSnackBar()
      handleCloseBar()
      handleClickSnackBar('No search result found', 'info')
      setdisplayRearchResult(false)
      setsearch("")
    }else{
      handleCloseSnackBar()
      handleCloseBar()
      setdisplayRearchResult(true)
      setsearch("")
      handleClickSnackBar('Here your search results', 'success')
    }
  }
  const closeSearch = () => {
    setdisplayRearchResult(false)
    dataSearch= []
  }
  const getHead = (title) => {
    return(
      <Box bgcolor={"background.default"} sx={{marginLeft:'20%', justifyContent:"center"}}>
          <Typography variant="h3"> {title} </Typography>
          { !paid ? ( <Typography  variant = "h5" color="red" > please pay to get all data and all features click <span style={{ color: 'black' }}><Link to="/pay"> here </Link></span> </Typography> ) : ( null ) }
          { displayRearchResult && <CommonButton sx={{ width:'60%', marginLeft:'1%'}} onClick={closeSearch} variant="contained" type="submit"> Close Search </CommonButton>}
      </Box>
    )
  }
  return (
            <Dialog open={open} fullScreen sx={{marginLeft :{ xs:'150px'}}} >
                <DialogTitle>
                    <br/>
                    <Tooltip title='close'>
                        <IconButton onClick={closeUp} style={{float:'right'}}>
                            <CloseIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{width : "1200px" }} bgcolor={"background.default"} p={3} borderRadius={5} >
                        <Stack gap={1} mt={2} mb={3} >
                            <Box className={ !displayRearchResult ? "show" : "hide"}>
                              <SearchBar searchValue={search} onClick={handleSearch} paid={paid}
                                onChange={(e) => setsearch(e.target.value)} title={getHead("Houses To Recommend")} 
                                placeholder="Search for House To Recommend"
                              />
                              { stories1 != null ? ( <CreateTable data={stories1} user={user} dataReco={clientInfo} getLevel={getLevel} handleCloseBar={handleCloseBar}
                                        link2="agent" sx={{ width: "500px" }} focus="Recommend" routie2="/moreURL" handleClickSnackBar={handleClickSnackBar}
                                        tableHeader={tableHeader1} tableHeaderForMore={tableHeaderForMore} backendActor={backendActor} paid={paid}
                                        canDownload={true} onClick1={closeUp} handleCloseSnackBar={handleCloseSnackBar} /> ) : (
                                            <Skelet />
                                        )}
                            </Box>
                            <Box className={ displayRearchResult ? "show" : "hide"}>
                                {getHead("Houses To Recommend")}
                                { dataSearch.length > 0 ? ( <CreateTable data={dataSearch} user={user} dataReco={clientInfo} getLevel={getLevel} handleCloseBar={handleCloseBar}
                                    link2="agent" sx={{ width: "500px" }} focus="Recommend" routie2="/moreURL" handleClickSnackBar={handleClickSnackBar}
                                    tableHeader={tableHeader1} tableHeaderForMore={tableHeaderForMore} backendActor={backendActor} paid={paid}
                                    canDownload={true} onClick1={closeUp} handleCloseSnackBar={handleCloseSnackBar} /> ) : (
                                      <Skelet />
                                    )}
                            </Box>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog>
  );
};
export default MakeReco