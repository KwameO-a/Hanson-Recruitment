import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel, RadioGroup, Radio, Typography, Box, Grid, Paper, Checkbox } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg';
import bannerImage from '../../assets/cm.jpg';

interface DisclosureOfCriminalRecordsProps {
  onNext: () => void;
  onPrev: () => void;
}

const DisclosureOfCriminalRecords: React.FC<DisclosureOfCriminalRecordsProps> = ({ onNext, onPrev }) => {
  const [formValues, setFormValues] = useState({
    hasCriminalRecord: '',
    criminalRecordDetails: '',
    consentGiven: false,
    date: '',
  });

  const [formErrors, setFormErrors] = useState({
    hasCriminalRecord: '',
    criminalRecordDetails: '',
    consentGiven: '',
    date: '',
  });

  const validate = (values: typeof formValues) => {
    const errors: any = {};
    if (!values.hasCriminalRecord) {
      errors.hasCriminalRecord = 'Required';
    }
    if (values.hasCriminalRecord === 'yes' && !values.criminalRecordDetails) {
      errors.criminalRecordDetails = 'You must provide details for your criminal record';
    }
    if (!values.consentGiven) {
      errors.consentGiven = 'You must agree to the declarations to proceed';
    }
    if (!values.date) {
      errors.date = 'Date is required';
    }
    return errors;
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('formValues') || '{}');
    if (Object.keys(storedValues).length > 0) {
      setFormValues(storedValues);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const updatedValues = {
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    };
    setFormValues(updatedValues);

    // Optionally validate on change
    setFormErrors(validate(updatedValues));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem('formValues', JSON.stringify(formValues));
      onNext();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>Apply for this role</Typography>
            <Typography variant="subtitle1">UX Designer • Full time • Remote</Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>Disclosure of Criminal Records</Typography>

            <RadioGroup
              name="hasCriminalRecord"
              value={formValues.hasCriminalRecord}
              onChange={handleInputChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes, I have a criminal record" />
              <FormControlLabel value="no" control={<Radio />} label="No, I do not have a criminal record" />
            </RadioGroup>
            {formErrors.hasCriminalRecord && <Typography color="error">{formErrors.hasCriminalRecord}</Typography>}

            {formValues.hasCriminalRecord === 'yes' && (
              <TextField
                name="criminalRecordDetails"
                label="If Yes, please provide details:"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
                value={formValues.criminalRecordDetails}
                error={!!formErrors.criminalRecordDetails}
                helperText={formErrors.criminalRecordDetails}
              />
            )}

            <FormControlLabel
              control={
                <Checkbox
                  name="consentGiven"
                  checked={formValues.consentGiven}
                  onChange={handleInputChange}
                />
              }
              label="I consent to the processing of my application with the provided information."
            />
            {formErrors.consentGiven && <Typography color="error">{formErrors.consentGiven}</Typography>}

            <TextField
              name="date"
              label="Date"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              onChange={handleInputChange}
              value={formValues.date}
              error={!!formErrors.date}
              helperText={formErrors.date}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" onClick={onPrev}>Previous</Button>
              <Button variant="contained" color="primary" type="submit">Next</Button>
            </Box>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box
         sx={{
          position: 'relative',
          height: '100%',
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
            opacity: 1,
            borderRadius: 1,
            zIndex: 0,
          },
        }}
        />
      </Grid>
    </Grid>
  );
};

export default DisclosureOfCriminalRecords;
