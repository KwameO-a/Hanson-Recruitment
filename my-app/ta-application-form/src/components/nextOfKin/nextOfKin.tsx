import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

interface NextOfKinProps {
  onNext: () => void;
  onPrev: () => void;
}

const NextOfKin: React.FC<NextOfKinProps> = ({ onNext, onPrev }) => {
  // Define the initial state function to load values from localStorage or set default values
  const getInitialState = () => ({
    nextOfKinName: localStorage.getItem('nextOfKinName') || '',
    relationship: localStorage.getItem('relationship') || '',
    contactNumber: localStorage.getItem('contactNumber') || '',
    nextofkinaddress: localStorage.getItem('nextofkinaddress') || '',
  });

  const [nextOfKinValues, setNextOfKinValues] = useState(getInitialState);

  useEffect(() => {
    // This effect ensures that any change to nextOfKinValues updates localStorage
    Object.entries(nextOfKinValues).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [nextOfKinValues]); // Dependency on nextOfKinValues to capture changes

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNextOfKinValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>Apply for this role</Typography>
            <Typography variant="subtitle1">UX Designer • Full time • Remote</Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>Next of Kin Details</Typography>
            <TextField
              label="Next of Kin Name"
              name="nextOfKinName"
              value={nextOfKinValues.nextOfKinName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Relationship to Applicant"
              name="relationship"
              value={nextOfKinValues.relationship}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="nextofkinaddress"
              value={nextOfKinValues.nextofkinaddress}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact Number"
              name="contactNumber"
              value={nextOfKinValues.contactNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" onClick={onPrev}>Previous</Button>
              <Button variant="contained" type="submit">Next</Button>
            </Box>
          </form>
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
