import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary
interface ConsentDisclosureFormProps {
  onNext: () => void;
  onPrev: () => void;
  // Include any other props you might need
}

const ConsentDisclosureForm: React.FC<ConsentDisclosureFormProps> = ({ onNext, onPrev }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [date, setDate] = useState('');
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");


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
<Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
Consent to Disclose Information Relating to Disability, Health or Pregnancy
      </Typography>
<Typography>
Under the Data Protection Act, Information relating to disability, health or pregnancy is considered to be ‘personal sensitive data’
Hanson Recruitment will never pass this information on to its clients without first gaining your written consent. We are required to collect this information and to share it with our clients to:
</Typography>
<Typography component="div">
<ul>
  {[
    "Ensure the health, safety and welfare of temporary workers",
    "Ensure a safe working environment",
    "Consider reasonable adjustments to the workplace to accommodate workers with disabilities",
    "Prevent any possible discrimination on the part of client employers."
  ].map((point, index) => (
    <li key={index}>
      {index === 4|| index === 8|| index === 9 || index === 13 || index === 14? <strong>{point}</strong> : point}
      
      </li>
  ))}
</ul>
</Typography>
<Typography>
Please sign the declaration below to confirm that we have your consent to share this information as outlined above.
</Typography>

<Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>Candidate Declaration</Typography>
<Typography component="div">
<ul>
  {[
    "I certify that the answers given in my health declaration are correct to the best of my knowledge and that I understand the consequences of any falsification.",
    "I agree to inform Hanson Recruitment immediately if my health changes for any reason and I no longer have the physical or mental fitness to be appointed to a post involving regular contact with children",
    "I consent to any health information relevant to my role being disclosed to hirers in order for them to uphold their legal obligations regarding health & Safety and make reasonable adjustments to the workplace where appropriate",
  ].map((point, index) => (
    <li key={index}>
      {index === 4|| index === 8|| index === 9 || index === 13 || index === 14? <strong>{point}</strong> : point}
      
      </li>
  ))}
</ul>
</Typography>

<FormControlLabel
  control={
    <Checkbox
      checked={consentGiven}
      onChange={(e) => setConsentGiven(e.target.checked)}
      name="consentGiven"
    />
  }
  label="I consent to any health information relevant to my role being disclosed to hirers in order for them to uphold their legal obligations regarding health & Safety and make reasonable adjustments to the workplace where appropriate."
/>
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

export default ConsentDisclosureForm;

