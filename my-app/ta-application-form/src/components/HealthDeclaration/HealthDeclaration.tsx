import React, { useState } from 'react';
import { Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';

interface HealthDeclarationFormProps {
  onNext: () => void;
  onPrev: () => void;
  // Include any other props you might need
}

const HealthDeclarationForm: React.FC<HealthDeclarationFormProps> = ({ onNext, onPrev }) => {
  const [hasHealthIssue, setHasHealthIssue] = useState('no');
  const [healthInfo, setHealthInfo] = useState('');
  const [supportNeeds, setSupportNeeds] = useState('');
  const [doctorLetterProvided, setDoctorLetterProvided] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [date, setDate] = useState('');

  const handleHealthIssueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasHealthIssue(event.target.value);
  };
  const isNextDisabled = () => {
    if (hasHealthIssue === 'yes' && (!healthInfo || !supportNeeds)) {
      return true;
    }
    if (!consentGiven || !date) {
      return true;
    }
    return false;
  };

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Health Declaration
      </Typography>
      <Typography>
      The Education (Health Standards) (England) Regulations 2003 and The Education (Health
      Standards) (Wales) Regulations 2004 require employers and employment businesses to satisfy themselves that individuals are medically fit and have the appropriate level of physical and mental fitness to be appointed to a post involving regular contact with children. Under Section 60
      of the Equality Act, an individual can be asked relevant questions about disability and health in
      order to establish whether they have the physical and mental capacity for the specific role. This
      question does not form part of our recruitment decision, but we may ask you for further
      information before confirming your registration and deploying you to work.
      Any proven falsification of this declaration may result in the withdrawal of an offer of a placement
      if it has not yet commenced and removal from Hanson Recruitment’s register if the placement has
      already commenced.
      </Typography>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Do you have any health issues or disability relevant which may make it difficult for you to carry out functions which are essential for the role you seek?</FormLabel>
        <RadioGroup
          row
          aria-label="hasHealthIssue"
          name="hasHealthIssue"
          value={hasHealthIssue}
          onChange={handleHealthIssueChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {hasHealthIssue === 'yes' && (
        <Typography>
          If you answered ‘Yes’, please provide further information by responding to questions below,
          sign and date the declaration at the end and please provide Hanson Recruitment with a
          doctor’s letter confirming your fitness to work in the role for which you have applied.
                    <TextField
            label="Please outline the health information that affects your physical/mental fitness to be
            appointed to a post involving regular contact with children."
            value={healthInfo}
            onChange={(e) => setHealthInfo(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="If relevant, what support/adjustments can an employer offer to assist you in the workplace?"
            value={supportNeeds}
            onChange={(e) => setSupportNeeds(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={doctorLetterProvided}
                onChange={(e) => setDoctorLetterProvided(e.target.checked)}
                name="doctorLetterProvided"
              />
            }
            label="I will provide a doctor's letter confirming my fitness to work"
          />
        </Typography>
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            name="consentGiven"
          />
        }
        label="I consent to the collection and processing of my health information as outlined above"
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
      <Button variant="contained" color="primary" onClick={onNext} disabled={isNextDisabled()}> Next</Button>
       
      
    </form>
  );
};

export default HealthDeclarationForm;
