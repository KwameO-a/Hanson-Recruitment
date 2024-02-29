import React from 'react';
import TextField from '@mui/material/TextField';

interface Step1Props {
  formData: {
    firstName: string;
    // Add other fields as needed
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleInputChange }) => {
  return (
    <div>
      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      {/* Add more form fields as needed */}
    </div>
  );
};

export default Step1;
