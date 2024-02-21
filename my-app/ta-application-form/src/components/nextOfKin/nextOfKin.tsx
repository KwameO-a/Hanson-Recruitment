import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

interface NextOfKinProps {
  onNext: () => void;
  onPrev: () => void;
}

const NextOfKin: React.FC<NextOfKinProps> = ({ onNext, onPrev }) => {
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  return (
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
  );
};

export default NextOfKin;
