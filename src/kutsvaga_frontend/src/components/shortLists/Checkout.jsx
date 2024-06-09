import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AddressForm from './AddressForm';
import Review from './Review';

export default function CheckoutAgent({user, handleSubmit, loading, setUser, paid, disabled, title}) {
  
  return (
    <Box>
      <CssBaseline />
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 3,
            px: 6,
            gap: 5,
          }}
        >
          <Review data = {user} />
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
        <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 650 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
              <React.Fragment>
              <AddressForm data = {user} changeHandles={setUser} disabled={disabled} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    flexGrow: 1,
                    gap: 1,
                    pb: { xs: 12, sm: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: '60px',
                  }}
                >
                   { paid ? (
                <LoadingButton
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    disabled={disabled} 
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleSubmit}
                    sx={{
                      width: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    Submit
                  </LoadingButton>) : ( null )}
                </Box>
              </React.Fragment>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
