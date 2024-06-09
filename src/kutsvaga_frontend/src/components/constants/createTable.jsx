import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { visuallyHidden } from '@mui/utils';
import { useNavigate, useLocation, Link  } from "react-router-dom";
import RecommendIcon from '@mui/icons-material/Recommend';
import SmallScreenCard from "./smallScreenCard";
import AddNum from "./addNum";
import { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Typography } from "@mui/material"

export default function CreateTable({tableHeader, data, getLevel, logout, handleCloseSnackBar, title1, backendActor, setconfirm, paid, handleCloseBar, handleClickSnackBar, tableHeaderForMore, dataReco, user, link, link2, link3, routie, routie2, focus, canDownload, onClick, onClick1}){
    const [rows, setRows] = React.useState(data)
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [headCells, setHeadCells] = React.useState(tableHeader)
    const navigate = useNavigate()
    const [numRooms, setnumRooms] = React.useState(0)
    const [address, setaddress] = React.useState('')
    const [openNum, setopenNum] = React.useState(false)
    const [tableHead, setTableHead] = React.useState(tableHeader)
    const [numRoomsToTake, setnumRoomsToTake] = useState('')
    const [client, setclient] = useState('')
    const [title, settitle] = useState('')
    const [shortListingData, setshortListingData] = useState(null)
    const [openNumForRooms, setopenNumForRooms] = useState(false)
    const [loading, setloading] = useState(false)
    const h = []
    tableHead.forEach((th) => (
        h.push(th.id)
    ))
      
      const StyledTableCell = styled(TableCell)(({ theme }) => ({
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
        }));
        const StyledTableRow = styled(TableRow)(({ theme }) => ({
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        }));
      
      function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      }

      const housesByAnAgent = (data) => {
        navigate('/getHouseByAgent', {
            state:{
                stories : data,
            }
        })
      }
      const moreOfData = (tableHead, data, title) => {
        navigate('/more', {
            state:{
                tableHead : tableHead,
                data : data,
                title : title
            }
        })
      }
      const moreOfDataNoTHead = (tableHead, data, title) => {
        navigate('/moreURL', {
            state:{
                headerType : tableHead,
                url : data,
                title : title
            }
        })
      }
      const openSetNumRooms = (address, client) => {
        setopenNum(true)
        settitle("Add rooms free")
        setaddress(address)
        setclient(client)
      }
      const returnToMarket = async () => {
        setloading(true)
        if(numRooms > 0){
            const result = await backendActor.returnToMarket(address, client, parseInt(numRooms))
            handleCloseBar()
            handleCloseSnackBar()
            handleClickSnackBar(result, 'info')
        }
        else{
          handleCloseBar()
          handleCloseSnackBar()
          handleClickSnackBar("Please add number of rooms free", 'info')
        }
        setopenNum(false)
        setloading(false)
      }
      const takeHouse = async (houseData) => {
        setloading(true)
        let returnStatement = await backendActor.confirm(houseData)
        setconfirm(true)
        handleCloseBar()
        handleCloseSnackBar()
        handleClickSnackBar(returnStatement, 'info')
        setloading(false)
        logout()
      }
      const openRecoAndSetData = (data) => {
        onClick()
        onClick1(data)
      }
      const selectHouseToReco = async (data) => {
        setloading(true)
        const message = {
            principleIdClient: dataReco.principleIdClient.toString(),
            address : data.address,
            clientEmail: dataReco.clientEmail,
            agentEmail : user.email,
            houseID : data.houseID,
            phase : data.phase,
            city : data.city,
            done : false
        }
        let res = await backendActor.recomend(message)
        handleCloseBar()
        handleCloseSnackBar()
        handleClickSnackBar(res, 'info')
        setloading(false)
      }
      const shortList = async (data) => {
        settitle("Enter rooms wanted")
        setopenNumForRooms(true)
        const messsage = {
            principleIdAgent: data.principleIdAgent.toString(),
            agentEmail : data.agentEmail,
            clientEmail : user.email,
            address : data.address,
            houseID : data.houseID,
            clientContact : user.contact,
            roomsTaken : parseInt(numRoomsToTake),
        }
        setshortListingData(messsage)
      }
      const runShortList = async () => {
        setloading(true)
        setopenNumForRooms(false)
            if( parseInt(numRoomsToTake) > 0 ){
                const messsag = {
                    principleIdAgent: shortListingData.principleIdAgent,
                    agentEmail : shortListingData.agentEmail,
                    clientEmail : shortListingData.clientEmail,
                    address : shortListingData.address,
                    houseID : shortListingData.houseID,
                    clientContact : shortListingData.clientContact,
                    roomsTaken : parseInt(numRoomsToTake),
                }
                let res = await backendActor.shortList(messsag)
                handleCloseBar()
                handleCloseSnackBar()
                handleClickSnackBar(res, 'info')
            }
            else{
              handleCloseBar()
              handleCloseSnackBar()
              handleClickSnackBar('Please put the number of rooms you want !!', 'error')
            }
            setopenNum(false)
            setloading(false)
        }
      
      function getComparator(order, orderBy) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
      }
      function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }
      
      function EnhancedTableHead(props) {
        const { order, orderBy, onRequestSort } =
          props;
        const createSortHandler = (property) => (event) => {
          onRequestSort(event, property);
        };
      
        return (
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.name}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </StyledTableCell>
              ))}
              <StyledTableCell>ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
        );
      }
      
      EnhancedTableHead.propTypes = {
        onRequestSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
      };
      
      function EnhancedTableToolbar(props) {
        const { numSelected } = props;
      
        return (
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
              ...(numSelected > 0 && {
                bgcolor: (theme) =>
                  alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
              }),
            }}
          >
              <Typography
                sx={{ flex: '1 1 100%', flexDirection:"row" }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                {title1}
              </Typography>
          </Toolbar>
        );
      }
      
      EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired,
      };

        const handleRequestSort = (event, property) => {
          const isAsc = orderBy === property && order === 'asc';
          setOrder(isAsc ? 'desc' : 'asc');
          setOrderBy(property);
        };
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        };
      
        const handleChangeDense = (event) => {
          setDense(event.target.checked);
        };
      
        const emptyRows =
          page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
      
        const visibleRows = React.useMemo(
          () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            ),
          [order, orderBy, page, rowsPerPage],
        );
      
        return (
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {visibleRows.map((company, index) => {
      
                      return (
                        <StyledTableRow
                          hover
                          tabIndex={-1}
                          key={index}
                          sx={{ cursor: 'pointer' }}
                        >
                          {
                                                h.map((head) => (
                                                            <StyledTableCell>
                                                            {
                                                                    ( head === link) ? (
                                                                        (routie === 'more') ? (<Link to={routie} state={{
                                                                            tableHead : tableHead,
                                                                            data : company,
                                                                            title : "More On User Data"
                                                                        }} > {company[head]} </Link>) : (<Link to={routie} state={{
                                                                                url : company[link],
                                                                                headerType : 'user',
                                                                                title : "More On User Data"
                                                                        }} > {company[head]} </Link>)
                                                                    ):(
                                                                        (head === link2 ) ? (
                                                                            (routie2 === '/more') ? (<Link to={routie2} state={{
                                                                                tableHead : tableHead,
                                                                                data : company,
                                                                                title : "More On User Data"
                                                                            }} > {company[head]} </Link>) : (<Link to={routie2} state={{
                                                                                url : company[link2],
                                                                                headerType : 'user',
                                                                                title : "More On User Data"
                                                                            }} > {company[head]} </Link>)
                                                                        ):(
                                                                            (head === link3 ) ? (
                                                                                (routie2 === '/more') ? (<Link to={routie2} state={{
                                                                                    tableHead : tableHead,
                                                                                    data : company,
                                                                                    title : "More On House Data"
                                                                                }} > {company[head]} </Link>) : (<Link to={routie2} state={{
                                                                                    url : company['address'],
                                                                                    headerType : 'house',
                                                                                    title : "More On House Data"
                                                                                }} > {company[head]} </Link>)
                                                                            ) : (
                                                                                ( head === 'roomsNeeded' || head === "budget" || head === "roomsAvailable" || head === "roomsTaken" ) ?
                                                                                 ( company[head].toString() ) : 
                                                                                 ( company[head] )
                                                                            )
                                                                        )
                                                                    )
                                                                }
                                                            </StyledTableCell>
                                                ))
                                            }
                                            <StyledTableCell >
                                            {
                                                paid ? (
                                                        (focus === "MoreOnHouse") ? (
                                                        <div>
                                                            <Button onClick={() => moreOfData(tableHead, company, "More On A House")} variant="contained" size="small" color="primary" mt={5} >Details {/* More On House */} </Button>
                                                            {   
                                                                getLevel === 'CLIENT' ? (
                                                                    <Button onClick={() => shortList(company)} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >ShortList </Button>
                                                                ) : (
                                                                    null
                                                                )
                                                            }
                                                        </div>
                                                        ) : (
                                                        (focus === "housesByAgent") ? (
                                                          getLevel === "CLIENT" ? <Button onClick={() => onClick(company)} variant="contained" size="small" color="primary" mt={5} >AgentHouses </Button> : null
                                                        ) : (
                                                            (focus === "MoreOnClient") ? (
                                                                <Button onClick={() => navigate("/showHouses")} variant="contained" size="small" color="primary" mt={5} >Details {/* More On House ShortListed */}  </Button>
                                                            ) : (
                                                                (focus === "shortList") ? (
                                                                    
                                                                        getLevel === "CLIENT" ? (
                                                                            <LoadingButton onClick={() => takeHouse(company.address)} 
                                                                              variant="contained" size="small" color="primary" 
                                                                              loading={loading}
                                                                              loadingPosition="end"
                                                                              mt={5} >Confirm</LoadingButton>
                                                                        ) : (
                                                                            <Button onClick={() => moreOfData(tableHead, company, "More On ShortList")} variant="contained" size="small" color="primary" mt={5} >Details {/* More On ShortList */}</Button>
                                                                        )
                                                                ) : (
                                                                    (focus === "Requirements") ? (
                                                                        <div>
                                                                            <Button onClick={() => openRecoAndSetData(company)}  variant="contained" size="small" color="primary" mt={5} >Recommend</Button>
                                                                            <Button onClick={() => moreOfData(tableHead, company, "More On Prerequisities")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >Details {/* View Requirement */}</Button>
                                                                        </div>
                                                                    ) : (
                                                                        (focus === "Recommend") ? (
                                                                            <div>
                                                                                <LoadingButton onClick={() => selectHouseToReco(company)} 
                                                                                  loading={loading}
                                                                                  loadingPosition="end"
                                                                                  variant="contained" size="small" color="primary" 
                                                                                  mt={5} endIcon={<RecommendIcon />} >Select</LoadingButton>
                                                                                <Button onClick={() => moreOfDataNoTHead("house", company.address, "More On A House")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >Details {/* More On House */}</Button>
                                                                            </div>
                                                                        ) : (
                                                                            (focus === "Recommended") ? (
                                                                                <div>
                                                                                    {
                                                                                        (getLevel === 'CLIENT') ? (<Button onClick={() => shortList(company)}  variant="contained" size="small" color="primary" mt={5} endIcon={<RecommendIcon />} >ShortList</Button>) : ( null)
                                                                                    }
                                                                                    <Button onClick={() => moreOfDataNoTHead("house", company.address, "More On Reccommended House")} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >Details{/* More On House */}</Button>
                                                                                </div>
                                                                            ) : (
                                                                                <Button onClick={() => openSetNumRooms(company.address, company.clientEmail)} sx={{marginLeft:"3px"}} variant="outlined" size="small" color="primary" mt={5} >ReMarket</Button>
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ) : (
                                                        null
                                                    )
                                                }
                                            </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
            <Paper sx={{margin : '1%', display : { xs : 'block', sm:'none'  }, marginLeft : { xs : '150px'}}}>
                {
                    rows.map((note) => (
                        <SmallScreenCard header={h} takeHouse={takeHouse} shortList={shortList} openNum={openNum} setnumRooms={setnumRooms} numRoomsToTake={numRoomsToTake}
                            returnToMarket={returnToMarket} openSetNumRooms={openSetNumRooms} numRooms={numRooms} link3={link3} openNumForRooms={openNumForRooms} loading={loading}
                            moreOfDataNoTHead={moreOfDataNoTHead} routie={routie} routie2={routie2} getLevel={getLevel} runShortList={runShortList} paid={paid} handleCloseBar={handleCloseBar}
                            link2={link2} link={link} onClick={onClick} user={user} moreOfData={moreOfData} setopenNum={setopenNum} setnumRoomsToTake={setnumRoomsToTake}
                            tableHead={tableHead} note={note} focus={focus} tableHeaderForMore={tableHeaderForMore} setopenNumForRooms={setopenNumForRooms} logout={logout} />
                    ))
                }
            </Paper>
            <AddNum numRooms={numRooms} returnToMarket={returnToMarket} openNum={openNum}
                setnumRooms={setnumRooms} setopenNum={setopenNum} title={title} />
            <AddNum numRooms={numRoomsToTake} returnToMarket={runShortList} openNum={openNumForRooms}
                setnumRooms={setnumRoomsToTake} setopenNum={setopenNumForRooms} title={title} />
          </Box>
        );
      
}