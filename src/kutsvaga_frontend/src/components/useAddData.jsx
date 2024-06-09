// import * as React from 'react';
// import { NavBarLists } from '../constants/navBarLists';
// import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
// import Badge from '@mui/material/Badge';
// import Tooltip from '@mui/material/Tooltip';
// import { Notifications } from "@mui/icons-material";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { IconButton } from '@material-ui/core';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// import './navBar.css'

// const UserBox = styled(Box)(({theme}) => ({
//   display:"flex",
//   gap:"10px",
//   alignItems:'center'
// }))
// const Icons = styled(Box)(({theme}) => ({
//   display:"flex",
//   gap:"20px",
//   alignItems:'center'
// }))
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });
                {/* <DialogTitle>
                    <Typography variant="span">
                        {title}
                    </Typography>
                    <br/>
                    <Tooltip title='close'>
                        <IconButton onClick={() => setopenNum(!openNum)} style={{float:'right'}}>
                            <CloseIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                </DialogTitle>
                <DialogContent>
                    <form style={{ margin: '1%' }}>
                        <Stack>
                            <TextField sx={{margin:'1%'}} required type='number' error={numRooms.length===0} variant="outlined" value={numRooms} onChange={(e) => setnumRooms(e.target.value)} label="Number of free Rooms" />
                            <CommonButton sx={{ width:'60%', marginLeft:'15%'}} onClick={returnToMarket} variant="contained" type="submit"> Submit </CommonButton>
                        </Stack>
                    </form>
                </DialogContent> */}

// export default function NavBar({user, LogOut}) {
//   const location = useLocation()
//   const navigate = useNavigate()
//     const parsedTitle = location.pathname.replace(/\W/g, ' ')
//     const page = parsedTitle.toLocaleUpperCase()
//   const [open, setOpen] = useState(false)
//   let both = []
//   NavBarLists.slice(3, 6).forEach(item => {          
//     console.log( 'user outside if' ,item.level)
//   })
//   // console.log(both)
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <ThemeProvider theme={darkTheme}>
//       <AppBar component="nav">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Icons>
//                     <Tooltip title="Notification">
//                         <Badge badgeContent={4} color="error">
//                             <Notifications  />
//                         </Badge>
//                     </Tooltip>
//                     <UserBox onClick={(e) => setOpen(true)}>
//                         <Avatar sx={{width:30, height:30}} src={require("./dougy.jpg")} />
//                     </UserBox>
//             </Icons>
//               {/* <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"100px", top:"20px" }}>
//                 {page}
//               </Typography> */}
//               <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"330px", top:"20px" }}> 
//                 (DOLLARS) - <IconButton color="inherit" size="small"> <CurrencyExchangeIcon /> </IconButton> - {user.amountInDolls}
//               </Typography>
//               <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"530px", top:"20px" }}>
//               (ICP) - <IconButton color="inherit" size="small"> <CurrencyBitcoinIcon /> </IconButton> - {user.amountInICP}
//               </Typography>
//           </Typography>
//           <Menu
//                 id="demo-positioned-menu"
//                 aria-labelledby="demo-positioned-button"
//                 open={open}
//                 onClose={(e) => setOpen(false)}
//                 anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//                 }}
//                 >
//                 <Typography p={3} color='#9c9797' variant="span">{user.name}</Typography>
                
//                 {NavBarLists.slice(10).map((item) => (
//               <MenuItem key={item.id} onClick={() => navigate(item.route)} >
//                 {item.label}
//               </MenuItem>
//             ))}
//               <Button sx={{ padding:'2', width:'100%' }} variant='outline' onClick={() => LogOut()} >
//                 LogOut
//               </Button>
//             </Menu>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {NavBarLists.slice(3, 6).map((item) => (
//                 <Button key={item.id} sx={{ color: '#fff' }} onClick={() => navigate(item.route)} >
//                   {item.label} 
//                 </Button>
//             ))}
//               <Button sx={{ color: '#fff' }} onClick={() => LogOut()} >
//                 LogOut
//               </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//       </ThemeProvider>
//     </Box>
//   );
// }


// import React from "react";
// import { NavBarLists } from '../constants/navBarLists';
// import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
// import Badge from '@mui/material/Badge';
// import Tooltip from '@mui/material/Tooltip';
// import { Notifications } from "@mui/icons-material";
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import './navBar.css'
// import MenuIcon from '@mui/icons-material/Menu';

// const UserBox = styled(Box)(({theme}) => ({
//   display:"flex",
//   gap:"5px",
//   alignItems:'center'
// }))
// const Icons = styled(Box)(({theme}) => ({
//   display:"flex",
//   gap:"20px",
//   alignItems:'center'
// }))
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

// export default class NavBar extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       open : false,
//       data:[],
//       arr:[],
//       side:'',
//       getLevel:props.userLevel,
//       navigate: props.navigate,
//       getting: true,
//       page: '',
//     }
//   }
//   navigateModal (link) {
//     this.state.navigate(link)
//     this.setState({open : false})
//   }
//   modalClose () {
//     this.setState({open : false})
//     this.setState({arr : NavBarLists.slice(13)})
//     this.setState({side : 'left'})
//   }
//   modalOpen(data, side){
//     this.setState({open : true})
//     this.setState({arr : data})
//     this.setState({side : side})
//   }
//   navigateAround (link) {
//     this.state.navigate(link)
//   }
//   LogOutOption(){
//     this.props.LogOut()
//     this.state.navigate('/')
//   }
//   componentDidMount(){
//     this.setState({page : this.props.location.pathname.replace(/\W/g, ' ').toUpperCase()})
//     console.log(this.state.page)
//     console.log(this.state.getLevel)
//     console.log(this.state.NavBarLists)

//   }
//   displayHtml(){
//     return(
//       <Menu
//                 id="demo-positioned-menu"
//                 aria-labelledby="demo-positioned-button"
//                 open={this.state.open}
//                 onClose={(e) => this.modalClose()}
//                 PaperProps={{
//                   elevation: 0,
//                   sx: {
//                     overflow: 'visible',
//                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                     mt: 1.5,
//                     '& .MuiAvatar-root': {
//                       width: 32,
//                       height: 32,
//                       ml: -0.5,
//                       mr: 1,
//                     },
//                     '&::before': {
//                       content: '""',
//                       display: 'block',
//                       position: 'absolute',
//                       top: 0,
//                       right: 14,
//                       width: 10,
//                       height: 10,
//                       bgcolor: 'background.paper',
//                       transform: 'translateY(-50%) rotate(45deg)',
//                       zIndex: 0,
//                     },
//                   },
//                 }}
//                 anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: this.state.side,
//                 }}
//                 transformOrigin={{
//                 vertical: 'top',
//                 horizontal: this.state.side,
//                 }}
//                 >
//                 <Typography p={3} color='#9c9797' variant="span">{ this.props.user.name }</Typography>
//                 {this.state.arr.map((item) => (
//                     item.level === 'both' ? (
//                       <MenuItem key={item.id} onClick={() => this.navigateModal(item.route)} >
//                         {item.label}
//                       </MenuItem> ) : (
//                             this.state.getLevel === item.level ? (
//                               <MenuItem key={item.id} onClick={() => this.navigateModal(item.route)} >
//                                 {item.label}
//                               </MenuItem> ) : (
//                                     null
//                                   )
//                           )
//             ))}
//               <Button sx={{ padding:'2', width:'100%' }} variant='outline' onClick={() => this.LogOutOption()} >
//                 LogOut
//               </Button>
//             </Menu>
//     )
//   }
//   showNav(){
//     return(
//       <Box sx={{ display: 'flex' }} >
//       <ThemeProvider theme={darkTheme}>
//       <AppBar component="nav" >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Icons>
//                     <Tooltip title="Notification">
//                         <Badge badgeContent={4} color="error">
//                             <Notifications  />....
//                         </Badge>
//                     </Tooltip>
//                     <UserBox onClick={(e) => this.modalOpen(NavBarLists.slice(13), 'left')} >
//                         <Avatar sx={{width:30, height:30}} />......
//                     </UserBox>
//             </Icons>
//             <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"100px", top:"20px" }}>
//               {this.state.page}................
//             </Typography>
//           </Typography>
//           <Typography sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' }}}>
//               <UserBox onClick={(e) => this.modalOpen(NavBarLists.slice(13), 'left')} >
//                 <Avatar sx={{width:30, height:30}} />.........
//               </UserBox>
//               <Typography sx={{ color:'white', flexDirection:"row", position:"absolute", alignItems:"center", marginLeft:"100px", top:"20px" }}>
//                 {this.state.page}............
//               </Typography>
//           </Typography>
//           <Box>
//             {this.displayHtml()}
//           </Box>
//           <Box>
//             <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//               {NavBarLists.slice(3, 8).map((item) => (
//                   <>
//                     {
//                       item.level ==='both' ? (
//                         <Button key={item.id} sx={{ color: '#fff' }} onClick={() => this.navigateAround(item.route)} >
//                           {item.label} 
//                         </Button>
//                       ) : (
//                         this.state.getLevel === item.level ? (
//                           <Button key={item.id} sx={{ color: '#fff' }} onClick={() => this.navigateAround(item.route)} >
//                             {item.label} 
//                           </Button>
//                         ) : (
//                           null
//                         )
//                       )
//                     }
//                   </>
//               ))}
//                 <Button sx={{ color: '#fff' }} onClick={() => this.LogOutOption()} >
//                   LogOut
//                 </Button>
//             </Box>
//             <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
//               <Icons>
//                 <UserBox onClick={(e) => this.modalOpen(NavBarLists.slice(3, 8), 'right')} >
//                     <MenuIcon />
//                 </UserBox>
//               </Icons>
//               {this.displayHtml()}
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//       </ThemeProvider>
//     </Box>
//     )
//   }
//   render(){
//     return (
//       <Box>
//         {this.showNav()}
//       </Box>
//     );
//   }
// }



// import TrieMap "mo:base/TrieMap";
// import Text "mo:base/Text";
// import Result "mo:base/Result";
// import Iter "mo:base/Iter";
// import Nat "mo:base/Nat";
// import Users "users";
// import Recomendations "recomendations";
// import Houses "houses";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Principal "mo:base/Principal";
// import Error "mo:base/Error";
// import Int "mo:base/Int";
// import Float "mo:base/Float";
// import basic_bitcoin "canister:basic_bitcoin";

// actor {

//   type GetUtxosResponse = basic_bitcoin.GetUtxosResponse;
//   type MillisatoshiPerVByte = basic_bitcoin.MillisatoshiPerVByte;
//   type SendRequest = basic_bitcoin.SendRequest;
//   type BitcoinAddress = basic_bitcoin.BitcoinAddress;
//   type Satoshi = basic_bitcoin.Satoshi;
  
//   let default_House : Houses.House = {
//       houseID = "";
//       address = "";
//       city = "";
//       province="";
//       principleIdAgent = Principal.fromText("2vxsx-fae");
//       phase = "";
//       roomsAvailable = 0;
//       conditions = "";
//       amountPerRoom = 0.0;
//       requirements = "";
//       utilities = "";
//       available = true;
//       country="";
//       physicalDescription = "";
//       agentEmail = "";
//   };
//   let default_reco : Recomendations.Recomendation = {
//       principleIdClient = Principal.fromText("2vxsx-fae");
//       address = "";
//       agentEmail = "";
//       clientEmail = "";
//       principleIdAgent = Principal.fromText("2vxsx-fae");
//       houseID = "";
//       phase = "";
//       city = "";
//       done = false;
//   };
//   let default_need : Recomendations.ClientNeeds = {
//       principleIdClient = Principal.fromText("2vxsx-fae");
//       clientEmail = "";
//       amountPerRoom = 0.0;
//       roomsNeeded = 0;
//       budget = 0;
//       country = "";
//       city = "";
//       personalInfo = "";
//       phase = "";
//       province="";
//       consideration = "";
//       requirements = "";
//       dateExpectingHouse = "";
//   };
//   let default_user : Users.User = {
//       title = "";
//       name = "";
//       surname= "";
//       principleId = Principal.fromText("2vxsx-fae");
//       email ="";
//       contact = "";
//       dob = "";
//       gender = "";
//       country = "";
//       registered = false;
//       level = #AGENT;
//       regDate = "";
//       done = false
//   };
//   let default_agent : Users.Agent = {
//       principleIdAgent = Principal.fromText("2vxsx-fae");
//       email="";
//       physicalAddress = "";
//       city = "";
//       province = "";
//       phase = "";
//       regExpire = "";
//   };
//   let default_offMarket : Houses.HouseOffMarket = {
//       principleIdClient = Principal.fromText("2vxsx-fae");
//       principleIdAgent = Principal.fromText("2vxsx-fae");
//       clientEmail = "";
//       agentEmail = "";
//       address = "";
//       houseID = "";
//       clientContact = "";
//       roomsTaken = 0;
//   };
//   let default_shortlist : Houses.ShortListedHouse = {
//       principleIdClient = Principal.fromText("2vxsx-fae");
//       principleIdAgent = Principal.fromText("2vxsx-fae");
//       agentEmail = "";
//       clientEmail = "";
//       address = "";
//       houseID = "";
//       clientContact = "";
//       roomsTaken = 0;
//   };
//   var users = TrieMap.TrieMap<Principal, Users.User>(Principal.equal, Principal.hash);
//   var payments = TrieMap.TrieMap<Principal, Users.Payments>(Principal.equal, Principal.hash);
//   var paymentsHistory = TrieMap.TrieMap<Text, Users.Payments>(Text.equal, Text.hash);
//   stable var usersEntries: [(Principal, Users.User)] = [];
//   stable var paymentsEntries: [(Principal, Users.Payments)] = [];
//   stable var paymentsEntriesHistory: [(Text, Users.Payments)] = [];
//   var agents = TrieMap.TrieMap<Principal, Users.Agent>(Principal.equal, Principal.hash);
//   stable var agentsEntries: [(Principal, Users.Agent)] = [];
//   var recommendations = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//   var recommendationsHistory = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//   stable var recommendationsEntries: [(Text, Recomendations.Recomendation)] = [];
//   stable var recommendationsHistoryEntries: [(Text, Recomendations.Recomendation)] = [];
//   var recommendationsAuto = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//   var recommendationsHistoryAuto = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//   stable var recommendationsEntriesAuto: [(Text, Recomendations.Recomendation)] = [];
//   stable var recommendationsHistoryEntriesAuto: [(Text, Recomendations.Recomendation)] = [];
//   var clientNeeds = TrieMap.TrieMap<Principal, Recomendations.ClientNeeds>(Principal.equal, Principal.hash);
//   var clientNeedsHistory = TrieMap.TrieMap<Text, Recomendations.ClientNeeds>(Text.equal, Text.hash);
//   stable var clientNeedsEntries: [(Principal, Recomendations.ClientNeeds)] = [];
//   stable var clientNeedsHistoryEntries: [(Text, Recomendations.ClientNeeds)] = [];
//   var house = TrieMap.TrieMap<Text, Houses.House>(Text.equal, Text.hash);
//   stable var houseEntries: [(Text, Houses.House)] = [];
//   var shortListedHouse = TrieMap.TrieMap<Text, Houses.ShortListedHouse>(Text.equal, Text.hash);
//   var shortListedHouseHistory = TrieMap.TrieMap<Text, Houses.ShortListedHouse>(Text.equal, Text.hash);
//   stable var shortListedHouseEntries: [(Text, Houses.ShortListedHouse)] = [];
//   stable var shortListedHouseHistoryEntries: [(Text, Houses.ShortListedHouse)] = [];
//   var housesOffMarkets = TrieMap.TrieMap<Text, Houses.HouseOffMarket>(Text.equal, Text.hash);
//   var housesOffMarketsHistory = TrieMap.TrieMap<Text, Houses.HouseOffMarket>(Text.equal, Text.hash);
//   stable var housesOffMarketsEntries: [(Text, Houses.HouseOffMarket)] = [];
//   stable var housesOffMarketsHistoryEntries: [(Text, Houses.HouseOffMarket)] = [];
//   system func preupgrade() {
//     usersEntries := Iter.toArray(users.entries());
//     paymentsEntries := Iter.toArray(payments.entries());
//     paymentsEntriesHistory := Iter.toArray(paymentsHistory.entries());
//     agentsEntries := Iter.toArray(agents.entries());
//     recommendationsEntries := Iter.toArray(recommendations.entries());
//     recommendationsEntriesAuto := Iter.toArray(recommendationsAuto.entries());
//     clientNeedsEntries := Iter.toArray(clientNeeds.entries());
//     shortListedHouseEntries := Iter.toArray(shortListedHouse.entries());
//     houseEntries := Iter.toArray(house.entries());
//     recommendationsHistoryEntries := Iter.toArray(recommendationsHistory.entries());
//     recommendationsHistoryEntriesAuto := Iter.toArray(recommendationsHistoryAuto.entries());
//     clientNeedsHistoryEntries := Iter.toArray(clientNeedsHistory.entries());
//     shortListedHouseHistoryEntries := Iter.toArray(shortListedHouseHistory.entries());
//     housesOffMarketsEntries := Iter.toArray(housesOffMarkets.entries());
//     housesOffMarketsHistoryEntries := Iter.toArray(housesOffMarketsHistory.entries());
//   };
//   system func postupgrade() {
//     users := TrieMap.fromEntries(usersEntries.vals(), Principal.equal, Principal.hash);
//     payments := TrieMap.fromEntries(paymentsEntries.vals(), Principal.equal, Principal.hash);
//     paymentsHistory := TrieMap.fromEntries(paymentsEntriesHistory.vals(), Text.equal, Text.hash);
//     agents := TrieMap.fromEntries(agentsEntries.vals(), Principal.equal, Principal.hash);
//     recommendations := TrieMap.fromEntries(recommendationsEntries.vals(), Text.equal, Text.hash);
//     recommendationsAuto := TrieMap.fromEntries(recommendationsEntriesAuto.vals(), Text.equal, Text.hash);
//     clientNeeds := TrieMap.fromEntries(clientNeedsEntries.vals(), Principal.equal, Principal.hash);
//     shortListedHouse := TrieMap.fromEntries(shortListedHouseEntries.vals(), Text.equal, Text.hash);
//     house := TrieMap.fromEntries(houseEntries.vals(), Text.equal, Text.hash);
//     recommendationsHistory := TrieMap.fromEntries(recommendationsHistoryEntries.vals(), Text.equal, Text.hash);
//     recommendationsHistoryAuto := TrieMap.fromEntries(recommendationsHistoryEntriesAuto.vals(), Text.equal, Text.hash);
//     clientNeedsHistory := TrieMap.fromEntries(clientNeedsHistoryEntries.vals(), Text.equal, Text.hash);
//     shortListedHouseHistory := TrieMap.fromEntries(shortListedHouseHistoryEntries.vals(), Text.equal, Text.hash);
//     housesOffMarkets := TrieMap.fromEntries(housesOffMarketsEntries.vals(), Text.equal, Text.hash);
//     housesOffMarketsHistory := TrieMap.fromEntries(housesOffMarketsHistoryEntries.vals(), Text.equal, Text.hash);
//   };
//   public shared({caller}) func createUser(args : Users.UserUnOfficial) : async (Text) {
//     try {
//       if(user_has_account(caller)) {
//         return "The user is already registered";
//       }
//       else{
//         var exist : Bool = false;
//         for((key, value) in users.entries()){
//           if(value.email == args.email){
//             exist := true;
//           }else if(value.contact == args.contact){
//             exist := true;
//           }
//         };
//         if(exist){
//           return "User Email or Contact already exist";
//         }else{
//           let new_user : Users.User = {
//           principleId = caller;
//           name = args.name;
//           email = args.email;
//           level = args.level;
//           regDate = args.regDate;
//           title = args.title;
//           surname= args.surname;
//           contact = args.contact;
//           dob = args.dob;
//           gender = args.gender;
//           country = args.country;
//           registered = args.registered;
//           done = false;
//       };
//       users.put(caller, new_user);
//       return "added";
//         }
//       }
//     } catch e {
//       return Error.message(e);
//     }
//   };
//   public shared({caller}) func userHasAccount() : async Bool {
//     return user_has_account(caller);
//   };
//   public shared({caller}) func addedNeed() : async Bool {
//     let option_need: ?Recomendations.ClientNeeds = clientNeeds.get(caller);
//     return Option.isSome(option_need);
//   };
//   public shared({caller}) func addNeeds(args : Recomendations.UnofficialClientNeeds) : async () {
//     let new_userNeed : Recomendations.ClientNeeds = {
//       principleIdClient = caller;
//       clientEmail = args.clientEmail;
//       amountPerRoom = args.amountPerRoom;
//       roomsNeeded = args.roomsNeeded;
//       budget = args.budget;
//       province = args.province;
//       country = args.country;
//       city = args.city;
//       personalInfo = args.personalInfo;
//       phase = args.phase;
//       consideration = args.consideration;
//       requirements = args.requirements;
//       dateExpectingHouse = args.dateExpectingHouse;
//       };
//     clientNeeds.put(caller, new_userNeed);
//   };
  // public shared({caller}) func addHouseOffMarketByAgent(args : Houses.HouseOffMarket) : async () {
  //   var unique = Text.concat(args.address, args.clientEmail);
  //   housesOffMarkets.put(unique, args);
  // };
//   func addHouseOffMarket(args : Houses.HouseOffMarket): () {
//     var unique = Text.concat(args.address, args.clientEmail);
//     housesOffMarkets.put(unique, args);
//   };
//   public shared({caller}) func addHouse(args : Houses.UnofficialHouse) : async (Text) {
//     var exist : Bool = false;
//     var existSameEmail : Bool = false;
//     for((key, value) in house.entries()){
//       if(value.address == args.address){
//         if(value.agentEmail == args.agentEmail){
//           existSameEmail := true;
//         };
//         exist := true;
//       }
//     };
//     if(exist){
//       if(existSameEmail){
//         let new_House : Houses.House = {
//           houseID = args.houseID;
//           address = args.address;
//           city = args.city;
//           country = args.country;
//           province = args.province;
//           principleIdAgent = caller;
//           agentEmail = args.agentEmail;
//           phase = args.phase;
//           roomsAvailable = args.roomsAvailable;
//           conditions = args.conditions;
//           amountPerRoom = args.amountPerRoom;
//           requirements = args.requirements;
//           utilities = args.utilities;
//           available = true;
//           physicalDescription = args.physicalDescription;
//       };
//       house.put(new_House.address, new_House);
//       return "House Updated";
//       }
//       else{
//         return "The address already exist and managed by another agent!!";
//       }
//     }else{
//       let new_House : Houses.House = {
//           houseID = args.houseID;
//           address = args.address;
//           city = args.city;
//           country = args.country;
//           province = args.province;
//           principleIdAgent = caller;
//           agentEmail = args.agentEmail;
//           phase = args.phase;
//           roomsAvailable = args.roomsAvailable;
//           conditions = args.conditions;
//           amountPerRoom = args.amountPerRoom;
//           requirements = args.requirements;
//           utilities = args.utilities;
//           available = true;
//           physicalDescription = args.physicalDescription;
//       };
//       house.put(new_House.address, new_House);
//       return "Added";
//     }
//   };
//   public shared({caller}) func addAgent(args : Users.AgentUnOfficial) : async (Text) {
//       try{
//         let official_user : Users.Agent = {
//         principleIdAgent = caller;
//         email = args.email;
//         physicalAddress = args.physicalAddress;
//         city = args.city;
//         province = args.province;
//         phase = args.phase;
//         regExpire = args.regExpire;
//         };
//         agents.put(caller, official_user);
//         return "added";
//         }
//         catch e {
//         return Error.message(e);
//       }
//   };
//   func user_has_account(user_id: Principal): Bool {
//     if (Principal.isAnonymous(user_id)) { 
//       return false;
//     };
//     let option_user: ?Users.User = users.get(user_id);
//     return Option.isSome(option_user);
//   };
//   public shared({caller}) func getUser() : async Result.Result<Users.User, Text> {
//     return await getUserById(caller);
//   };
//   public shared func getUserById(id : Principal) : async Result.Result<Users.User, Text> {
//     switch (users.get(id)){
//       case (null) {
//         return #err("User not found");
//       };
//       case (?user) {
//         return #ok(user);
//       };
//     };
//   };
//   public shared func getUserByEmail(email:Text) : async Result.Result<Users.User, Text> {
//     var id : Principal = Principal.fromText("2vxsx-fae");
//     for ((key, value) in users.entries()) {
//       if(value.email == email){
//         id := key;
//       }
//     };
//     return await getUserById(id); 
//   };
//   public shared query func getHouseCount() : async (Int) {
//     return house.size();
//   };
//   public shared query func getAgentsCount() : async (Int) {
//     return agents.size();
//   };
//   public shared query func getClientsCount() : async (Int) {
//     return users.size() - agents.size();
//   };
//   public shared query func getAgents() : async [Users.Agent] {
//     Iter.toArray(agents.vals());
//   };
//   public shared query func getMyAutoReccomended(userEmail :Text) : async Result.Result<[Recomendations.Recomendation], Text> {
//     let recomendationTempo = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//     for ((key, value) in recommendationsAuto.entries()) {
//       if(value.agentEmail == userEmail){
//         recomendationTempo.put(key, value);
//       }else if(value.clientEmail == userEmail){
//         recomendationTempo.put(key, value);
//       }
//     };
//     if(recomendationTempo.size() == 0){
//       return #err("No Auto recommendeations exist");
//     };
//     return #ok(Iter.toArray(recomendationTempo.vals()));
//   };
//   public shared query func getUsers() : async [Users.User] {
//     Iter.toArray(users.vals());
//   };
//   public shared query func getMyPaymentHistory(email :Text) : async Result.Result<[Users.Payments], Text> {
//     let pymnts = TrieMap.TrieMap<Text, Users.Payments>(Text.equal, Text.hash);
//     for ((key, value) in paymentsHistory.entries()) {
//       if(value.email == email){
//         pymnts.put(key, value);
//       }
//     };
//     if(pymnts.size() == 0){
//       return #err("No history exist yet");
//     };
//     return #ok(Iter.toArray(pymnts.vals()));
//   };
//   public shared({caller}) func getSpecificAgent() : async Result.Result<Users.Agent, Text> {
//     switch (agents.get(caller)) {
//       case (null) {
//         return #err("Agent not found");
//       };
//       case (?user) {
//         return #ok(user);
//       };
//     };
//   };
//   public shared({caller}) func updateUser(args : Users.UserUpdateUnOfficial) : async () {
//     let new_userDAta : Users.User = {
//           principleId = caller;
//           name = args.name;
//           email = args.email;
//           level = args.level;
//           regDate = args.regDate;
//           title = args.title;
//           surname= args.surname;
//           contact = args.contact;
//           dob = args.dob;
//           gender = args.gender;
//           country = args.country;
//           registered = args.registered;
//           done = args.done;
//       };
//     users.put(caller, new_userDAta);
//   };
//   public shared({caller}) func createLocalLedger(args : Users.PaymentsUnOfficial) : async (Text) {
//     var unique = Text.concat(args.datePaymentMade, args.email);
//     let payment : Users.Payments = {
//           principleId = caller;
//           email = args.email;
//           receiverAddress = args.receiverAddress;
//           myAddress = args.myAddress;
//           receiverEmail = args.receiverEmail;
//           amount = args.amount;
//           purpose = args.purpose;
//           valid = true;
//           datePaymentMade = args.datePaymentMade
//       };
//     paymentsHistory.put(unique, payment);
//     payments.put(caller, payment);
//     return "added";
//   };
//   public shared query func getPayments() : async [Users.Payments] {
//     Iter.toArray(payments.vals());
//   };
//   public shared({caller}) func getLocalLedger() : async (Bool) {
//     return getLocalLedgerLocal(caller);
//   };
//   func getLocalLedgerLocal(caller: Principal) : (Bool) {
//     switch (payments.get(caller)) {
//       case (null) {
//         return false;
//       };
//       case (?user) {
//         if(user.valid){
//           return user.valid;
//         }else{
//           return user.valid;
//         }
//       };
//     };
//   };
//   public shared func updateHouse(args : Houses.UnofficialUpdatingHouse) : async () {
//     let new_House : Houses.House = {
//           houseID = args.houseID;
//           address = args.address;
//           city = args.city;
//           country = args.country;
//           province = args.province;
//           principleIdAgent = Principal.fromText(args.id);
//           agentEmail = args.agentEmail;
//           phase = args.phase;
//           roomsAvailable = args.roomsAvailable;
//           conditions = args.conditions;
//           amountPerRoom = args.amountPerRoom;
//           requirements = args.requirements;
//           utilities = args.utilities;
//           available = args.available;
//           physicalDescription = args.physicalDescription;
//       };
//     house.put(args.address, new_House);
//   };
//   public shared({caller}) func returnToMarket(address : Text, freeRooms: Int) : async () {
//     let toMarket = housesOffMarkets.remove(address);
//     let user_house : Houses.HouseOffMarket = Option.get(toMarket, default_offMarket);
//     housesOffMarketsHistory.put(address, user_house);
//     let toreturn = house.get(address);
//     let user_return : Houses.House = Option.get(toreturn, default_House);
//     let update_House : Houses.House = {
//           houseID = user_return.houseID;
//           address = user_return.address;
//           city = user_return.city;
//           country = user_return.country;
//           province = user_return.province;
//           principleIdAgent = caller;
//           agentEmail = user_return.agentEmail;
//           phase = user_return.phase;
//           roomsAvailable = user_return.roomsAvailable + freeRooms;
//           conditions = user_return.conditions;
//           amountPerRoom = user_return.amountPerRoom;
//           requirements = user_return.requirements;
//           utilities = user_return.utilities;
//           available = true;
//           physicalDescription = user_return.physicalDescription;
//       };
//       house.put(address, update_House);
//   };
//   public shared query func getAllHouses() : async [Houses.House] {
//     Iter.toArray(house.vals());
//   };
//   public shared({caller}) func getMyHouses() : async Result.Result<[Houses.House], Text> {
//     let houseTempo = TrieMap.TrieMap<Text, Houses.House>(Text.equal, Text.hash);
//     for ((key, value) in house.entries()) {
//       if(value.principleIdAgent == caller){
//         if(value.available){
//           houseTempo.put(key, value);
//         }else if(value.roomsAvailable > 0){
//           houseTempo.put(key, value);
//         }
//       }
//     };
//     if(houseTempo.size() == 0 ){
//       return #err("Currently user has no houses to manage. Please add some!!");
//     }else{
//       return #ok(Iter.toArray(houseTempo.vals()));
//     }
//   };
//   public shared query func getAllHousesByAgent(email:Text) : async Result.Result<[Houses.House], Text> {
//     let houseTempo = TrieMap.TrieMap<Text, Houses.House>(Text.equal, Text.hash);
//     for ((key, value) in house.entries()) {
//       if(value.agentEmail == email){
//         if(value.available){
//           houseTempo.put(key, value);
//         }else if(value.roomsAvailable > 0){
//           houseTempo.put(key, value);
//         }
//       }
//     };
//     if(houseTempo.size() == 0 ){
//       return #err("Currently user has no houses to manage. Please add some!!");
//     }else{
//       return #ok(Iter.toArray(houseTempo.vals()));
//     }
//   };
//   public shared query func getAllShortListsForUser(userEmail : Text) : async [Houses.ShortListedHouse] {
//     let shortListedHouseTempo = TrieMap.TrieMap<Text, Houses.ShortListedHouse>(Text.equal, Text.hash);
//     for ((key, value) in shortListedHouse.entries()) {
//       if(value.clientEmail == userEmail){
//         shortListedHouseTempo.put(key, value);
//       }else if(value.agentEmail == userEmail){
//         shortListedHouseTempo.put(key, value);
//       }
//     };
//     Iter.toArray(shortListedHouseTempo.vals());
//   };
//   public shared func getClients(agent:Text) : async Result.Result<[Users.User], Text> {
//     let data = await getAllShortListsForUser(agent);
//     let clients = TrieMap.TrieMap<Principal, Users.User>(Principal.equal, Principal.hash);
//     for (value in data.vals()) {
//             for ((key1, value1) in users.entries()) {
//               if(value1.email == value.clientEmail){
//                 clients.put(key1, value1);
//               }
//             };
//         };
//     if(clients.size() == 0){
//       return #err("Currently you do not have clients");
//     }
//     else{
//       return #ok(Iter.toArray(clients.vals()));
//     }
//   };
// public shared query func getSpecificRecomendations(userEmail :Text) : async Result.Result<[Recomendations.Recomendation], Text> {
//     let recomendationTempo = TrieMap.TrieMap<Text, Recomendations.Recomendation>(Text.equal, Text.hash);
//     for ((key, value) in recommendations.entries()) {
//       if(value.agentEmail == userEmail){
//         recomendationTempo.put(key, value);
//       }else if(value.clientEmail == userEmail){
//         recomendationTempo.put(key, value);
//       }
//     };
//     if(recomendationTempo.size() == 0){
//       return #err("No recommendeations exist");
//     };
//     return #ok(Iter.toArray(recomendationTempo.vals()));
//   };
//   public shared({caller}) func getHousesOffMarketForAgent() : async Result.Result<[Houses.HouseOffMarket], Text> {
//         let houseOffMarketTempo = TrieMap.TrieMap<Text, Houses.HouseOffMarket>(Text.equal, Text.hash);
//         for ((key, value) in housesOffMarkets.entries()) {
//             if(value.principleIdAgent == caller){
//                 houseOffMarketTempo.put(key, value);
//             }
//         };
//         if(houseOffMarketTempo.size() == 0 ){
//           return #err("Currently you have no houses off market to manage");
//         }else{
//           return #ok(Iter.toArray(houseOffMarketTempo.vals()));
//         }
//     };
//   public shared({caller}) func recomend(args : Recomendations.UnOfficialRecomendation) : async (Text) {
//     var count : Int = 0;
//     var exist : Bool = false;
//     for ((key, value) in recommendations.entries()) {
//         if(value.agentEmail == args.agentEmail){
//             count := count+1;
//         }else if(value.address == args.address){
//           exist := true;
//         }
//         else{
//           if(recommendationsAuto.size() > 0){
//             for((key, value1) in recommendationsAuto.entries()){
//               if(value1.address == args.address){
//                 exist := true;
//               }
//             }
//           }
//         }
//     };
//     if(Int.less(count, 3)){
//       if(exist){
//         return "You already recommended the house or system recommended it";
//       }
//       else{
//         var unique = Text.concat(args.address, args.clientEmail);
//         let reco : Recomendations.Recomendation = {
//           principleIdClient = Principal.fromText(args.principleIdClient);
//           address = args.address;
//           clientEmail = args.clientEmail;
//           agentEmail  = args.agentEmail;
//           principleIdAgent = caller;
//           houseID  = args.houseID;
//           phase  = args.phase;
//           city  = args.city;
//           done  = args.done;
//         };
//         recommendations.put(unique, reco);
//         return "successfully recomended";
//         }
//       }
//       else{
//         return "Agent Cannot recommend more than 3 houses on 1 client";
//       };
//   };
//   public shared({caller}) func autoRecomend() : async (Text) {
//     switch (clientNeeds.get(caller)) {
//       case (null) {
//         return "Cannot find your needs !!";
//       };
//       case (?data) {
//         for ((key, value) in house.entries()) {
//           var count : Nat = 0;
//           var unique = Text.concat(value.address, data.clientEmail);
//             for ((key, value1) in recommendationsAuto.entries()) {
//                 if( value1.agentEmail == value.agentEmail ){
//                   if(value1.clientEmail == data.clientEmail){
//                     count := count+1;
//                 };
//               };
//           };
//           if(value.available){
//             if(value.roomsAvailable>0){
//               if(value.available){
//           if(value.roomsAvailable > 0){
//             if( data.roomsNeeded <= value.roomsAvailable + 1 ){
//             if(data.city == value.city){
//             var unique = Text.concat(value.address, data.clientEmail);
//             let reco : Recomendations.Recomendation = {
//               principleIdClient = caller;
//               address = value.address;
//               clientEmail = data.clientEmail;
//               agentEmail  = value.agentEmail;
//               principleIdAgent = value.principleIdAgent;
//               houseID  = value.houseID;
//               phase  = value.phase;
//               city  = value.city;
//               done  = false
//               };
//             recommendationsAuto.put(unique, reco);
//             };
//           }
//         else if( data.phase == value.phase ){
//             if(data.city == value.city){
//               var unique = Text.concat(value.address, data.clientEmail);
//             let reco : Recomendations.Recomendation = {
//               principleIdClient = caller;
//               address = value.address;
//               clientEmail = data.clientEmail;
//               agentEmail  = value.agentEmail;
//               principleIdAgent = value.principleIdAgent;
//               houseID  = value.houseID;
//               phase  = value.phase;
//               city  = value.city;
//               done  = false
//             };
//             recommendationsAuto.put(unique, reco);
//             };
//           }
//           else if( data.amountPerRoom == value.amountPerRoom ){
//             if(data.city == value.city){
//               var unique = Text.concat(value.address, data.clientEmail);
//             let reco : Recomendations.Recomendation = {
//               principleIdClient = caller;
//               address = value.address;
//               clientEmail = data.clientEmail;
//               agentEmail  = value.agentEmail;
//               principleIdAgent = value.principleIdAgent;
//               houseID  = value.houseID;
//               phase  = value.phase;
//               city  = value.city;
//               done  = false
//             };
//             recommendationsAuto.put(unique, reco);
//                     };
//                   };
//                 };
//               };
//             };
//           };
//         };
//         return "Your Houses recommended based on your needs";
//       };
//     };
//   };
//   public shared({caller}) func shortList(args : Houses.UnofficialShortListedHouse) : async (Text) {
//     var unique = Text.concat(args.address, args.clientEmail);
//         var count : Int = 0;
//         var exist : Bool = false;
//         var avai : Bool = false;
//         for ((key, value) in shortListedHouse.entries()) {
//             if(value.clientEmail == args.clientEmail){
//                 count := count+1;
//             }else if(key == unique){
//                 exist := true;
//             }
//         };
//         if(not exist){
//             if(Int.less(count, 3)){
//               for((key, value) in house.entries()){
//                 if(key == args.address){
//                   if(value.available){
//                     avai := true;
//                   }else if(value.roomsAvailable > 0){
//                     avai := true;
//                   };
//                 }
//               };
//               if(avai){
//                 let shortList : Houses.ShortListedHouse = {
//                 principleIdClient = caller;
//                 address = args.address;
//                 clientEmail = args.clientEmail;
//                 agentEmail  = args.agentEmail;
//                 principleIdAgent = Principal.fromText(args.principleIdAgent);
//                 houseID  = args.houseID;
//                 clientContact = args.clientContact;
//                 roomsTaken = args.roomsTaken
//               };
//               shortListedHouse.put(unique, shortList);
//               return "data added";
//               }else{
//                 return "already off market";
//               }
//           }else{
//             return "you cannot Shortlist more than 3 houses";
//           }
//         }else{
//           return "you cannot Shortlist same House more than once";
//         }
//   };
//     public shared func getAHouse(address : Text) : async Result.Result<Houses.House, Text> {
//         switch (house.get(address)) {
//             case (null) {
//                 return #err("House not found");
//             };
//             case (?need) {
//                 return #ok(need);
//             };
//         };
//     };
//   public shared query func getAllClientsNeeds() : async [Recomendations.ClientNeeds] {
//     Iter.toArray(clientNeeds.vals());
//   };
//   public shared({caller}) func getClientNeeds() : async Result.Result<Recomendations.ClientNeeds, Text> {
//     return getNeed(caller);
//   };
//   func controlNeed(user_id: Principal) : Result.Result<Recomendations.ClientNeeds, Text> {
//     return getNeed(user_id: Principal);
//   };
//   func getNeed(user_id: Principal): Result.Result<Recomendations.ClientNeeds, Text> {
//     switch (clientNeeds.get(user_id)) {
//       case (null) {
//         return #err("User needs not found");
//       };
//       case (?need) {
//         return #ok(need);
//       };
//     };
//   };
//   public shared({caller}) func confirm(address : Text) : async Text {
//     var roomsTaken : Int = 0;
//     var email : Text = "";
//     switch (users.get(caller)){
//       case (?user) {
//         email := user.email;
//       };
//     };
//     for((key, value) in recommendations.entries()) {
//       if(value.clientEmail == email){
//         recommendationsHistory.put(key, value);
//         recommendationsHistoryAuto.put(key, value);
//         recommendations.delete(key);
//         recommendationsAuto.delete(key);
//       }
//     };
//     for ((key, value) in shortListedHouse.entries()) {
//       if(value.principleIdClient == caller){
//         if(value.address == address){
//             addHouseOffMarket(value);
//             roomsTaken := value.roomsTaken;
//         };
//         shortListedHouseHistory.put(key, value);
//         shortListedHouse.delete(key);
//       }
//     };
//       let deletedNeeded = clientNeeds.remove(caller);
//       let dNeedy: Recomendations.ClientNeeds = Option.get(deletedNeeded, default_need);
//       var unique = Text.concat(dNeedy.dateExpectingHouse, dNeedy.clientEmail);
//       clientNeedsHistory.put(unique, dNeedy);
//       let user_Update = users.get(caller);
//       let new_user: Users.User = Option.get(user_Update, default_user);
//       let update_user : Users.User = {
//         principleId = caller;
//         title = new_user.title;
//         name = new_user.name;
//         surname= new_user.surname;
//         email = new_user.email;
//         contact = new_user.contact;
//         dob = new_user.dob;
//         gender = new_user.gender;
//         country = new_user.country;
//         registered = new_user.registered;
//         level = new_user.level;
//         regDate = new_user.regDate;
//         done = true
//     };
//       users.put(caller, update_user);
//       let option_house = house.get(address);
//       let user_house : Houses.House = Option.get(option_house, default_House);
//       if(Int.lessOrEqual(user_house.roomsAvailable - roomsTaken, 0)){
//         let update_House : Houses.House = {
//           houseID = user_house.houseID;
//           address = user_house.address;
//           city = user_house.city;
//           province = user_house.province;
//           country = user_house.country;
//           principleIdAgent = user_house.principleIdAgent;
//           phase = user_house.phase;
//           roomsAvailable = user_house.roomsAvailable - roomsTaken;
//           conditions = user_house.conditions;
//           amountPerRoom = user_house.amountPerRoom;
//           requirements = user_house.requirements;
//           utilities = user_house.utilities;
//           available = false;
//           physicalDescription = user_house.physicalDescription;
//           agentEmail = user_house.agentEmail;
//       };
//         house.put(address, update_House);
//       }
//       else{
//         let update_House : Houses.House = {
//           houseID = user_house.houseID;
//           address = user_house.address;
//           city = user_house.city;
//           province = user_house.province;
//           country = user_house.country;
//           principleIdAgent = user_house.principleIdAgent;
//           agentEmail = user_house.agentEmail;
//           phase = user_house.phase;
//           roomsAvailable = user_house.roomsAvailable - roomsTaken;
//           conditions = user_house.conditions;
//           amountPerRoom = user_house.amountPerRoom;
//           requirements = user_house.requirements;
//           utilities = user_house.utilities;
//           available = user_house.available;
//           physicalDescription = user_house.physicalDescription;
//       };
//         house.put(address, update_House);
//       };
//       switch (payments.get(caller)) {
//           case (null) {
//             return "";
//           };
//           case (?payment) {
//             let pymnt : Users.Payments = {
//               principleId = caller;
//               email = payment.email;
//               receiverAddress = payment.receiverAddress;
//               myAddress = payment.myAddress;
//               receiverEmail = payment.receiverEmail;
//               amount = payment.amount;
//               purpose = payment.purpose;
//               valid = false;
//               datePaymentMade = payment.datePaymentMade
//           };
//             payments.put(caller, pymnt);
//             return "You have successfully found a house to rent!! Congratulations";
//           };
//         };
//   };
//   public shared({caller}) func updateAgent(args : Users.AgentUpdateUnOfficial) : async (Text) {
//     let userLevel = level(caller);
//     if(Text.equal(userLevel, "AGENT")){
//       try{
//         let official_user : Users.Agent = {
//         principleIdAgent = caller;
//         email = args.email;
//         physicalAddress = args.physicalAddress;
//         city = args.city;
//         province = args.province;
//         phase = args.phase;
//         regExpire = args.regExpire;
//         };
//         agents.put(caller, official_user);
//         return "added";
//         }
//         catch e {
//         return Error.message(e);
//       };
//     }else{
//       return "not allowed";
//     }
//   };
//   public shared({caller}) func getUserLevel() : async Text {
//     return level(caller);
//   };
//   func level(user_id: Principal): Text {
//     switch (users.get(user_id)) {
//       case (null) {
//         return "User not found";
//       };
//       case (?user) {
//         switch (user.level) {
//           case (#AGENT) {
//             return "AGENT";
//           };
//           case (#CLIENT) {
//             return "CLIENT";
//           };
//         };
//       };
//     };
//   };
//   public func get_balance(address : BitcoinAddress) : async Satoshi {
//     await basic_bitcoin.get_balance(address);
//       };
//   public func get_utxos(address : BitcoinAddress) : async GetUtxosResponse {
//     await basic_bitcoin.get_utxos(address);
//       };
//   public func get_current_fee_percentiles() : async [MillisatoshiPerVByte] {
//     await basic_bitcoin.get_current_fee_percentiles();
//       };
//   public func get_p2pkh_address() : async BitcoinAddress {
//     await basic_bitcoin.get_p2pkh_address();
//       };
//   public func send(request : SendRequest) : async Text {
//     await basic_bitcoin.send(request);
//       };
// };



// import * as React from 'react';

// import Alert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import RadioGroup from '@mui/material/RadioGroup';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

// import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
// import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

// import { styled } from '@mui/system';

// const FormGrid = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
// }));

// export default function PaymentForm({data, changeHandles}) {
//   const [paymentType, setPaymentType] = React.useState('coinInfo');

//   const handlePaymentTypeChange = (event) => {
//     setPaymentType(event.target.value);
//   };

//   return (
//     <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
//       <FormControl component="fieldset" fullWidth>
//         <RadioGroup
//           aria-label="Payment options"
//           name="paymentType"
//           value={paymentType}
//           onChange={handlePaymentTypeChange}
//           sx={{
//             flexDirection: { sm: 'column', md: 'row' },
//             gap: 2,
//           }}
//         >
//           <Card
//             raised={paymentType === 'coinInfo'}
//             sx={{
//               maxWidth: { sm: '100%', md: '50%' },
//               flexGrow: 1,
//               outline: '1px solid',
//               outlineColor:
//                 paymentType === 'coinInfo' ? 'primary.main' : 'divider',
//               backgroundColor:
//                 paymentType === 'coinInfo' ? 'background.default' : '',
//             }}
//           >
//             <CardActionArea onClick={() => setPaymentType('coinInfo')}>
//               <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <CreditCardRoundedIcon color="primary" fontSize="small" />
//                 <Typography fontWeight="medium">Bitcoin Account</Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//           <Card
//             raised={paymentType === 'sendCoins'}
//             sx={{
//               maxWidth: { sm: '100%', md: '50%' },
//               flexGrow: 1,
//               outline: '1px solid',
//               outlineColor:
//                 paymentType === 'sendCoins' ? 'primary.main' : 'divider',
//               backgroundColor:
//                 paymentType === 'sendCoins' ? 'background.default' : '',
//             }}
//           >
//             <CardActionArea onClick={() => setPaymentType('sendCoins')}>
//               <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <AccountBalanceRoundedIcon color="primary" fontSize="small" />
//                 <Typography fontWeight="medium">Send Coins</Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </RadioGroup>
//       </FormControl>
//       {paymentType === 'sendCoins' && (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               p: 3,
//               height: { xs: 300, sm: 350, md: 375 },
//               width: '100%',
//               borderRadius: '20px',
//               border: '1px solid ',
//               borderColor: 'divider',
//               backgroundColor: 'background.paper',
//               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//             }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//               <Typography variant="subtitle2">Bitcoin</Typography>
//               <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
//             </Box>
//             <CurrencyBitcoinIcon
//               sx={{
//                 fontSize: { xs: 48, sm: 56 },
//                 color: 'text.secondary',
//               }}
//             />
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 width: '100%',
//                 gap: 2,
//               }}
//             >
//               <FormGrid sx={{ flexGrow: 1 }}>
//                 <FormLabel htmlFor="receiverAddress" required>
//                   Receiver Address
//                 </FormLabel>
//                 <OutlinedInput
//                   id="receiverAddress"
//                   type="receiverAddress"
//                   name="receiverAddress"
//                   required
//                   value={data.receiverAddress}
//                   onChange={(e) =>changeHandles({...data, receiverAddress : e.target.value})}
//                 />
//               </FormGrid>
//             </Box>
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <FormGrid sx={{ flexGrow: 1 }}>
//                 <FormLabel htmlFor="receiverEmail" required>
//                   Receiver Email
//                 </FormLabel>
//                 <OutlinedInput
//                   id="receiverEmail"
//                   type="email"
//                   name="receiverEmail"
//                   value={data.receiverEmail}
//                   onChange={(e) =>changeHandles({...data, receiverEmail : e.target.value})}
//                   required
//                 />
//               </FormGrid>
//               <FormGrid sx={{ flexGrow: 1 }}>
//                 <FormLabel htmlFor="purpose" required>
//                 Purpose
//                 </FormLabel>
//                 <OutlinedInput
//                   id="purpose"
//                   type="purpose"
//                   name="purpose"
//                   required
//                   value={data.purpose}
//                   onChange={(e) =>changeHandles({...data, purpose : e.target.value})}
//                 />
//               </FormGrid>
//             </Box>
//           </Box>
//         </Box>
//       )}

//       {paymentType === 'coinInfo' && (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//           }}
//         >
//           <Alert severity="warning" icon={<WarningRoundedIcon />}>
//             Please note be patient for your
//           </Alert>
//           <Typography variant="subtitle1" fontWeight="medium">
//             Bitcoin Account Information
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Please note the details shown below are current.
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <Typography variant="body1" color="text.secondary">
//               Bitcoin Address :
//             </Typography>
//             <Typography variant="body1" fontWeight="medium">
//               {data.myTransAddress}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <Typography variant="body1" color="text.secondary">
//               Amount:
//             </Typography>
//             <Typography variant="body1" fontWeight="medium">
//               {data.myBalance}
//             </Typography>
//           </Box>
//         </Box>
//       )}
//     </Stack>
//   );
// }
