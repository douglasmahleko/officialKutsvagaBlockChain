import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

export default function Review({data1, data2, internal, userLevel}) {
  return (
    <Stack spacing={2}>
          {
            internal ? (
            <>
              <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              My Balance:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.myBalance}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Amount In Satoshis :
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.amountInBitCoins}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Purpose:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.purpose}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Receiver Email:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.receiverEmail}
            </Typography>
          </Box>
          { userLevel === "AGENT" ? ( <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Request My FUNDS:
            </Typography>
            <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    sx={{
                      width: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    <a href="mailto:douglasmahleko@gmail.com"> Submit</a>
                  </Button>
          </Box> ) : null}
          </>
            ) : (
              <>
              <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              My Balance:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.myBalance.toString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Amount In Satoshis :
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data2.amountInBitCoins}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Purpose:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data2.purpose}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Receiver Email:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data2.receiverEmail}
            </Typography>
          </Box>
          { userLevel === "AGENT" ? ( <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Request My FUNDS:
            </Typography>
            <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    sx={{
                      width: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    <a href="mailto:douglasmahleko@gmail.com"> Submit</a>
                  </Button>
          </Box> ) : ( null )}
              </>
            )
          }
      <Divider />
    </Stack>
  );
}
