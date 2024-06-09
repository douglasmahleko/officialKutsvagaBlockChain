import * as React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm({data, changeHandles}) {
  const [paymentType, setPaymentType] = React.useState('coinInfo');

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="Payment options"
          name="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Card
            raised={paymentType === 'coinInfo'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                paymentType === 'coinInfo' ? 'primary.main' : 'divider',
              backgroundColor:
                paymentType === 'coinInfo' ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setPaymentType('coinInfo')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CreditCardRoundedIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">Bitcoin Account</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            raised={paymentType === 'sendCoins'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                paymentType === 'sendCoins' ? 'primary.main' : 'divider',
              backgroundColor:
                paymentType === 'sendCoins' ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setPaymentType('sendCoins')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">SendCoins</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      {paymentType === 'sendCoins' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 3,
              height: { xs: 300, sm: 350, md: 375 },
              width: '100%',
              borderRadius: '20px',
              border: '1px solid ',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Bitcoin</Typography>
              <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
            </Box>
            <SimCardRoundedIcon
              sx={{
                fontSize: { xs: 48, sm: 56 },
                transform: 'rotate(90deg)',
                color: 'text.secondary',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="receiverAddress" required>
                  Receiver Address
                </FormLabel>
                <OutlinedInput
                  id="receiverAddress"
                  type="receiverAddress"
                  name="receiverAddress"
                  required
                  value={data.receiverAddress}
                  onChange={(e) =>changeHandles({...data, receiverAddress : e.target.value})}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="receiverEmail" required>
                  Receiver Email
                </FormLabel>
                <OutlinedInput
                  id="receiverEmail"
                  type="email"
                  name="receiverEmail"
                  value={data.receiverEmail}
                  onChange={(e) =>changeHandles({...data, receiverEmail : e.target.value})}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="purpose" required>
                Purpose
                </FormLabel>
                <OutlinedInput
                  id="purpose"
                  type="purpose"
                  name="purpose"
                  required
                  value={data.purpose}
                  onChange={(e) =>changeHandles({...data, purpose : e.target.value})}
                />
              </FormGrid>
            </Box>
          </Box>
        </Box>
      )}

      {paymentType === 'coinInfo' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Alert severity="warning" icon={<WarningRoundedIcon />}>
            Please note be patient for your
          </Alert>
          <Typography variant="subtitle1" fontWeight="medium">
            Bitcoin Account Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please note the details shown below are current.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Bitcoin Address :
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data.myTransAddress}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Amount:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data.myBalance}
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
