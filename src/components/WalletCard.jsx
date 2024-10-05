import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function WalletCard({ wallet }) {
  
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent sx={{ textAlign: 'left'}}>

        <Typography component="h2" variant="subtitle2" gutterBottom>
          My Wallet
        </Typography>

         {wallet.map((item, index) => (
         <Stack 
         key={index} 
         direction="column" 
         justifyContent="space-between" 
         alignItems="flex-start"
         sx={{ mb: 2 }}>
          
         <Typography variant="h7" component="p">
                {item.card}
              </Typography>
              
         <Typography variant="h7" component="p">
                {item.bal}
              </Typography>
              </Stack>
            
        ))}
      </CardContent>
    </Card>
  );
}

WalletCard.propTypes = {
  wallet: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.string.isRequired,
      bal: PropTypes.number
    })
  ).isRequired
};


export default WalletCard;