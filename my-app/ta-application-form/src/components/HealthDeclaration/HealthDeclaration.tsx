import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg';
import bannerImage from '../../assets/cm.jpg';

interface HealthDeclarationFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const HealthDeclarationForm: React.FC<HealthDeclarationFormProps> = ({ onNext, onPrev }) => {
  // Correct initialization with parsing for boolean values
  const [formValues, setFormValues] = useState({
    hasHealthIssue: localStorage.getItem('hasHealthIssue') || 'no',
    healthInfo: localStorage.getItem('healthInfo') || '',
    supportNeeds: localStorage.getItem('supportNeeds') || '',
    doctorLetterProvided: localStorage.getItem('doctorLetterProvided') === 'true', // Correctly parse boolean
    consentGiven: localStorage.getItem('consentGiven') === 'true', // Correctly parse boolean
    date: localStorage.getItem('date') || '',
  });

  const isNonMobileScreens = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    // Synchronize formValues with localStorage
    Object.entries(formValues).forEach(([key, value]) => {
      localStorage.setItem(key, typeof value === 'boolean' ? String(value) : value);
    });
  }, [formValues]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onNext(); // Navigate to the next step
  };

  const isNextDisabled = () => {
    if (formValues.hasHealthIssue === 'yes' && (!formValues.healthInfo || !formValues.supportNeeds)) {
      return true;
    }
    return !formValues.consentGiven || !formValues.date;
  };

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

          <form onSubmit={handleSubmit}>
            {/* Health Declaration Fields */}
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Do you have any health issues or disabilities relevant to the role you seek?</FormLabel>
              <RadioGroup
                row
                aria-label="hasHealthIssue"
                name="hasHealthIssue"
                value={formValues.hasHealthIssue}
                onChange={handleInputChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            {formValues.hasHealthIssue === 'yes' && (
              <>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  name="healthInfo"
                  label="Health Information"
                  value={formValues.healthInfo}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  name="supportNeeds"
                  label="Support Needs"
                  value={formValues.supportNeeds}
                  onChange={handleInputChange}
                />
                <FormControlLabel
                  control={<Checkbox checked={formValues.doctorLetterProvided} onChange={handleInputChange} name="doctorLetterProvided" />}
                  label="I will provide a doctor's letter"
                />
              </>
            )}

            <FormControlLabel
              control={<Checkbox checked={formValues.consentGiven} onChange={handleInputChange} name="consentGiven" />}
              label="I consent to the processing of my health information"
            />
            <TextField
              fullWidth
              type="date"
              margin="normal"
              name="date"
              label="Date"
              value={formValues.date}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" onClick={onPrev}>Previous</Button>
              <Button variant="contained" color="primary" type="submit" disabled={isNextDisabled()}>Next</Button>
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

export default HealthDeclarationForm;
