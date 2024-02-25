import React, { useState } from 'react';
import { TextField, Button, Typography, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

interface NextOfKinProps {
  onNext: () => void;
  onPrev: () => void;
}

const NextOfKin: React.FC<NextOfKinProps> = ({ onNext, onPrev }) => {
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
              Apply for this role
            </Typography>
            <Typography variant="subtitle1">
              UX Designer • Full time • Remote
            </Typography>
          </Box>
          <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    ></Box>

<div>
<Typography variant="h6" gutterBottom>
  Next of Kin Details
</Typography>
<TextField
  label="Next of Kin Name"
  value={nextOfKinName}
  onChange={(e) => setNextOfKinName(e.target.value)}
  fullWidth
  margin="normal"
/>
<TextField
  label="Relationship to Applicant"
  value={relationship}
  onChange={(e) => setRelationship(e.target.value)}
  fullWidth
  margin="normal"
/>
<TextField
  label="Contact Number"
  value={contactNumber}
  onChange={(e) => setContactNumber(e.target.value)}
  fullWidth
  margin="normal"
/>
<Button variant="contained" onClick={onPrev}>Previous</Button>
<Button variant="contained" onClick={onNext} style={{ marginLeft: '8px' }}>Next</Button>
</div>
          
          {/* Your form fields here */}

          {/* <Button
            variant="contained"
            onClick={onNext}
            fullWidth
            sx={{ mt: 2 }}
          >
            Continue
          </Button> */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box
          sx={{
            position: 'relative',
      height: '100%',
      borderRadius: 1,
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // This creates the dark overlay
        borderRadius: 1,
        zIndex: 1,
      },
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 1, // You can adjust this as needed
        borderRadius: 1,
        zIndex: 0,
        },
            
            
           
            
          }}
        />
      </Grid>
    </Grid>
   
  );
};

export default NextOfKin;



