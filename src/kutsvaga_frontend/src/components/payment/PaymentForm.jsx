import * as React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import FormControl from '@mui/material/FormControl';
import OutboxIcon from '@mui/icons-material/Outbox';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function PaymentForm({data1, data2, changeHandles2, disabled, internal, setInternal}) {
  const [paymentType, setPaymentType] = React.useState('coinInfo');

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleTransactionLevel = () => {
    setInternal(!internal);
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
        <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="Transaction level"
          name="internal"
          value={internal}
          onChange={handleTransactionLevel}
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Card
            raised={internal === true}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                internal === true ? 'primary.main' : 'divider',
              backgroundColor:
                internal === true ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setInternal(true)}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MoveToInboxIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">Sent Internal</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            raised={internal === false}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                internal === false ? 'primary.main' : 'divider',
              backgroundColor:
                internal === false ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setInternal(false)}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <OutboxIcon color="primary" fontSize="small" />
                <Typography fontWeight="medium">Sent External</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
          {
            internal ? (
              <>
              <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 3,
              height: { xs: 350, sm: 300, md: 425 },
              width: '100%',
              borderRadius: '20px',
              border: '1px solid ',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">INTERNAL</Typography>
              <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
            </Box>
            <CurrencyBitcoinIcon
              sx={{
                fontSize: { xs: 48, sm: 56 },
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
                  disabled={internal}
                  value={data1.receiverAddress}
                />
              </FormGrid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="myTransAddress" required>
                  My TransAddress
                </FormLabel>
                <OutlinedInput
                  id="myTransAddress"
                  type="myTransAddress"
                  name="myTransAddress"
                  required
                  disabled={internal}
                  value={data1.myTransAddress}
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
                  disabled={internal}
                  type="email"
                  name="receiverEmail"
                  value={data1.receiverEmail}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="amountInBitCoins" required>
                  Amount In Satoshis
                </FormLabel>
                <OutlinedInput
                  id="amountInBitCoins"
                  disabled={internal}
                  type="amountInBitCoins"
                  name="amountInBitCoins"
                  required
                  value={data1.amountInBitCoins}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="purpose" required>
                Purpose
                </FormLabel>
                <OutlinedInput
                  id="purpose"
                  disabled={internal}
                  type="purpose"
                  name="purpose"
                  required
                  value={data1.purpose}
                />
              </FormGrid>
            </Box>
          </Box>
              </>
            ) : (
              <>
              <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 3,
              height: { xs: 350, sm: 300, md: 425 },
              width: '100%',
              borderRadius: '20px',
              border: '1px solid ',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">EXTERNAL</Typography>
              <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
            </Box>
            <CurrencyBitcoinIcon
              sx={{
                fontSize: { xs: 48, sm: 56 },
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
                  disabled={internal}
                  value={data2.receiverAddress}
                  onChange={(e) => changeHandles2({...data2, receiverAddress : e.target.value})}
                />
              </FormGrid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="myTransAddress" required>
                  My TransAddress
                </FormLabel>
                <OutlinedInput
                  id="myTransAddress"
                  type="myTransAddress"
                  name="myTransAddress"
                  required
                  disabled={internal}
                  value={data1.myTransAddress}
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
                  disabled={disabled}
                  type="email"
                  name="receiverEmail"
                  value={data2.receiverEmail}
                  onChange={(e) => changeHandles2({...data2, receiverEmail : e.target.value})}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="amountInBitCoins" required>
                  Amount In Satoshis
                </FormLabel>
                <OutlinedInput
                  id="amountInBitCoins"
                  disabled={disabled}
                  type="amountInBitCoins"
                  name="amountInBitCoins"
                  required
                  value={data2.amountInBitCoins}
                  onChange={(e) => changeHandles2({...data2, amountInBitCoins : e.target.value})}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="purpose" required>
                Purpose
                </FormLabel>
                <OutlinedInput
                  id="purpose"
                  disabled={disabled}
                  type="purpose"
                  name="purpose"
                  required
                  value={data2.purpose}
                  onChange={(e) => changeHandles2({...data2, purpose : e.target.value})}
                />
              </FormGrid>
            </Box>
          </Box>
              </>
            )
          }
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
            Please note be patient for your bitcoin info
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
              {data1.myTransAddress}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="body1" color="text.secondary">
              My Balance:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {data1.myBalance.toString()}
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
