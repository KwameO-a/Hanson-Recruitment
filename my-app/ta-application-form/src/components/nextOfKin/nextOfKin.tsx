import React, { useState } from 'react';
import { TextField, Button, Typography, Box, useMediaQuery } from '@mui/material';

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
    <Box>
    <Box
      p="1rem 6%"
      textAlign="center"
    >
      <Typography fontWeight="bold" fontSize="32px" color="primary">
      Next of Kin / Emergency Contact
      </Typography>
    </Box>

    <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    >
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
    </Box>
  </Box>
   
  );
};

export default NextOfKin;
