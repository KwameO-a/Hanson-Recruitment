import React from 'react';
import TextField from '@mui/material/TextField';

// Define interface for props
interface Step2Props {
  formData: any; // Adjust the type of formData according to your form data structure
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define Step2 component
const Step2: React.FC<Step2Props> = ({ formData, handleInputChange }) => {
  return (
    <div>
      {/* Example form field */}
      <TextField
        label="Address"
        variant="outlined"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
      {/* Add more form fields as needed */}
    </div>
  );
};

export default Step2;
