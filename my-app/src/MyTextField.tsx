// MyTextField.tsx

import React from 'react';
import TextField from '@mui/material/TextField';



const MyTextField: React.FC<{ label: string }> = ({ label }) => (
  <TextField label={label} variant="outlined" />
);

export default MyTextField;


