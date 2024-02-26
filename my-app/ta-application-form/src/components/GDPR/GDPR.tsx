import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper, FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

interface GDPRInformationFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const GDPRInformationForm: React.FC<GDPRInformationFormProps> = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    excludedCounties: '',
    excludedProvisions: '',
    emailMarketing: false,
    mailMarketing: false,
    smsMarketing: false,
    date: '',
    consentGiven: false,
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('GDPRFormData') || '{}');
    setFormData(savedData);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('GDPRFormData', JSON.stringify(formData)); // Save form data to local storage
    onNext(); // Proceed to the next step
  };

  const isNextDisabled = () => !formData.consentGiven || !formData.date;

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
          <Box width="100%" p="1rem" m="1rem auto" borderRadius="1.5rem">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>GDPR Related Information</Typography>
              <Typography>
                As part of our commitment to comply with GDPR, we require your consent to process your personal data. Please indicate your preferences below.
              </Typography>

              <TextField
                label="Counties you do NOT wish your details to be shared with"
                name="excludedCounties"
                value={formData.excludedCounties}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Provisions you do NOT wish your details shared with"
                name="excludedProvisions"
                value={formData.excludedProvisions}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <Typography>Please tick if you do NOT wish to be sent marketing information:</Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={formData.emailMarketing} onChange={handleChange} name="emailMarketing" />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.mailMarketing} onChange={handleChange} name="mailMarketing" />}
                  label="Mail"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.smsMarketing} onChange={handleChange} name="smsMarketing" />}
                  label="SMS"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.consentGiven} onChange={handleChange} name="consentGiven" />}
                  label="I consent to confirm that I have my consent to the information as outlined above."
                />
              </FormGroup>

              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={onPrev}>Previous</Button>
                <Button variant="contained" type="submit" color="primary" disabled={isNextDisabled()}>Next</Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Grid>
      
      {/* Background Image */}
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 1,
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${bannerImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: 1,
              borderRadius: 1,
              zIndex: 0,
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GDPRInformationForm;
