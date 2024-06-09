import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
export const NavBarLists = [
    
    {
        id: "REGISTER",
        children : [
            {
                id : 0,
                icon : <PersonAddIcon />,
                label : "Register as Agent",
                route : "addAgent"
            },
            {
                id : 1,
                icon : <GroupAddIcon />,
                label : "Register as Client",
                route : "addClient"
            },
        ]
    },
    {
        id: "CLIENT",
        children : [
            {
                id :0,
                icon : <SupportAgentIcon />,
                label : "Show Agents",
                route : "showAgents"
            },
        ]
    },
    {
        id: "AGENT",
        children : [
            {
                id : 0,
                icon : <SwapHorizIcon />,
                label : "Show Clients",
                route : "showClients"
            },
            {
                id : 1,
                icon : <MapsHomeWorkIcon />,
                label : "Payment History",
                route : "history"
            },
            {
                id : 2,
                icon : <PlaylistAddCircleIcon />,
                label : "Houses Off Market",
                route : "offMarket"
            },
        ]
    },
    {
        id: "BOTH",
        children : [
            {
                id : 0,
                icon : <MapsHomeWorkIcon />,
                label : "Show Houses",
                route : "showHouses"
            },
            {
                id : 1,
                icon : <PublicIcon />,
                label : "Preview Prerequisites",
                route : "previewPrerequisites"
            },
            {
                id : 2,
                icon : <FormatListNumberedRtlIcon />,
                label : "View Short Lists",
                route : "viewShortLists"
            },
            {
                id : 3,
                icon : <DnsRoundedIcon />,
                label : "Houses Reccommended",
                route : "recommendations"
            },
        ]
    },
    {
        id: "PROFILE",
        children : [
            {
                id : 0,
                icon : <ManageAccountsIcon />,
                label : "Edit Contact",
                route : "editProfile"
            },
            {
                id : 1,
                icon : <PersonIcon />,
                label : "Show Profile",
                route : "showProfile"
            }
        ]
    },
    // {
    //     id : 5,
    //     icon : <AddHomeWorkIcon />,
    //     label : "Add House",
    //     level : "agent",
    //     route : "addHouse"
    // },
    
    // {
    //     id : 8,
    //     icon : <PlaylistAddCircleIcon />,
    //     label : "Add Prerequisites",
    //     level : "client",
    //     route : "myPrerequisites"
    // },
    
]