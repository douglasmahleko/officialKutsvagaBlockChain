import {Skeleton, Box} from '@mui/material';

function Skelet(){
    
    return(
        <Box>
            < Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6, width:'100%', margin:'1%' }} />
            < Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6, width:'100%', margin:'1%' }} />
            < Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6, width:'100%', margin:'1%' }} />
            < Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6, width:'100%', margin:'1%' }} />
        </Box>
    )
}

export default Skelet