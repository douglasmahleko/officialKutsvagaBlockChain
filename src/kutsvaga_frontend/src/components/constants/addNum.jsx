import React from 'react';
import Dialog from '@mui/material/Dialog';
import CheckoutAgent from './Checkout';

export default function AddNum({ numRooms, setnumRooms, returnToMarket, openNum, setopenNum, title}){
    return(
        <Dialog open={openNum} fullWidth maxWidth="sm" height={250}>
            <CheckoutAgent handleSubmit={returnToMarket} openNum={openNum} setopenNum={setopenNum} user={numRooms} disabled={false} setUser={setnumRooms} title={title} />
        </Dialog>
    )
}