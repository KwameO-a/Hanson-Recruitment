import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel, Box, useMediaQuery } from '@mui/material';

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
    <Box>
    <Box
      p="1rem 6%"
      textAlign="center"
    >
      <Typography fontWeight="bold" fontSize="32px" color="primary">
      Advice to Applicants
      </Typography>
    </Box>

    <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    >
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
    </Box>
  </Box>
  
  );
};

export default GDPRInformationForm;
