import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

interface ConsentDisclosureFormProps {
  onNext: () => void;
  onPrev: () => void;
  // Include any other props you might need
}

const ConsentDisclosureForm: React.FC<ConsentDisclosureFormProps> = ({ onNext, onPrev }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [date, setDate] = useState('');

  const isNextDisabled = () => {
    return !consentGiven || !date;
  };

  return (
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
  );
};

export default ConsentDisclosureForm;
