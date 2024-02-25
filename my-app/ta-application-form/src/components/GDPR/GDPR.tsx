import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary
interface GDPRInformationFormProps {
  onNext: () => void;
  onPrev: () => void;
  // Include any other props you might need
}

const GDPRInformationForm: React.FC<GDPRInformationFormProps> = ({ onNext, onPrev }) => {
  const [excludedCounties, setExcludedCounties] = useState('');
  const [excludedProvisions, setExcludedProvisions] = useState('');
  const [emailMarketing, setEmailMarketing] = useState(false);
  const [mailMarketing, setMailMarketing] = useState(false);
  const [smsMarketing, setSMSMarketing] = useState(false);
  const [date, setDate] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  


  const handleMarketingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === 'emailMarketing') {
      setEmailMarketing(checked);
    } else if (name === 'mailMarketing') {
      setMailMarketing(checked);
    } else if (name === 'smsMarketing') {
      setSMSMarketing(checked);
    }
  };
  const isNextDisabled = () => {
    return !consentGiven || !date;
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

<form>
<Typography variant="h6" gutterBottom>
  GDPR Related Information
</Typography>
<Typography>
  {/* Insert the text from the provided image here */}
</Typography>

<TextField
  label="Counties you do NOT wish your details to be shared with"
  value={excludedCounties}
  onChange={(e) => setExcludedCounties(e.target.value)}
  fullWidth
  margin="normal"
/>

<TextField
  label="Provisions you do NOT wish your details shared with"
  value={excludedProvisions}
  onChange={(e) => setExcludedProvisions(e.target.value)}
  fullWidth
  margin="normal"
/>

<Typography>
  Please tick if you do NOT wish to be sent marketing information:
</Typography>
<FormGroup>
<FormControlLabel
control={
<Checkbox
  checked={emailMarketing}
  onChange={handleMarketingChange}
  name="emailMarketing"
/>
}
label="Email"
/>
<FormControlLabel
control={
<Checkbox
  checked={mailMarketing}
  onChange={handleMarketingChange}
  name="mailMarketing"
/>
}
label="Mail"
/>
<FormControlLabel
control={
<Checkbox
  checked={smsMarketing}
  onChange={handleMarketingChange}
  name="smsMarketing"
/>
}
label="SMS"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={consentGiven}
      onChange={(e) => setConsentGiven(e.target.checked)}
      name="consentGiven"
    />
  }
  label="I consent to confirm that have my consent to the information as outlined above."
/>
</FormGroup>

<TextField
  label="Date"
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
/>

<Button variant="contained" onClick={onPrev}>
  Previous
</Button>
<Button variant="contained" color="primary" onClick={onNext} disabled={isNextDisabled()}>
  Next
</Button>
</form>
          
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

export default GDPRInformationForm;

