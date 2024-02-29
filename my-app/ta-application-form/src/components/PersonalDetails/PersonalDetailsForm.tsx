import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, Typography, RadioGroup,Radio, FormControlLabel, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { countries } from 'countries-list';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

const countryOptions = Object.entries(countries).map(([code, { name }]) => ({
  label: name,
  value: name,
}));

interface PersonalDetailsProps {

  onNext: () => void;
}
type FormValues = {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  knownAs: string;
  previousNames: string;
  address: string;
  postcode: string;
  phoneNumber: string;
  yourEmail: string;
  dateOfBirth: string;
  townOfBirth: string;
  selectedNationality: string;
  nationalInsurance: string;
  gender: string;
  needNewDBS: boolean;
  haveDBSOnUpdateService: boolean;
  [key: string]: string | boolean; // Index signature
};


const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  // Initializing state with localStorage values or default values
  const [formValues, setFormValues] = useState<FormValues>({
    title: localStorage.getItem('title') || '',
    firstName: localStorage.getItem('firstName') || '',
    middleName: localStorage.getItem('middleName') || '',
    lastName: localStorage.getItem('lastName') || '',
    knownAs: localStorage.getItem('knownAs') || '',
    previousNames: localStorage.getItem('previousNames') || '',
    address: localStorage.getItem('address') || '',
    postcode: localStorage.getItem('postcode') || '',
    phoneNumber: localStorage.getItem('phoneNumber') || '',
    yourEmail: localStorage.getItem('yourEmail') || '',
    dateOfBirth: localStorage.getItem('dateOfBirth') || '',
    townOfBirth: localStorage.getItem('townOfBirth') || '',
    selectedNationality: localStorage.getItem('selectedNationality') || '',
    nationalInsurance: localStorage.getItem('nationalInsurance') || '',
    gender: localStorage.getItem('gender') || '',
    needNewDBS: localStorage.getItem('needNewDBS') === 'true',
    haveDBSOnUpdateService: localStorage.getItem('haveDBSOnUpdateService') === 'true',
  });
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

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
    Object.entries(formValues).forEach(([key, value]) => {
      // Convert boolean values to strings before saving
      const valueToStore = typeof value === 'boolean' ? String(value) : value;
      localStorage.setItem(key, valueToStore);
    });
  }, [formValues]);

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
  // console.log(title)

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  //   setDbsCheck((prev) => {
  //     const updated = { ...prev, [name]: checked };
  //     localStorage.setItem(name, checked.toString());
  //     return updated;
  //   });
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic here
    onNext();
  };
  


  

  return (
    
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4,}}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '80px' }} />
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

<form onSubmit={handleSubmit}>
  {/* Title dropdown */}
  <TextField
    select
    label="Title"
    name="title"
    value={formValues.title}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
  >
    <MenuItem value="Dr.">Dr.</MenuItem>
    <MenuItem value="Mr.">Mr.</MenuItem>
    <MenuItem value="Mrs.">Mrs.</MenuItem>
    <MenuItem value="Ms.">Ms.</MenuItem>
    {/* Add more options as needed */}
  </TextField>
  {/* Text fields for personal information, now using formValues and handleInputChange */}
  {['firstName', 'middleName', 'lastName', 'knownAs', 'previousNames', 'address', 'postcode', 'yourEmail', 'nationalInsurance'].map((field) => (
    <TextField
      key={field}
      label={field.split(/(?=[A-Z])/).join(" ").replace(/^\w/, c => c.toUpperCase())} // Converts camelCase to words
      name={field}
      value={formValues[field]}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
      type={field === 'dateOfBirth' ? 'date' : 'text'}
      InputLabelProps={field === 'dateOfBirth' ? { shrink: true } : undefined}
    />
  ))}

  <PhoneInput
    international
    defaultCountry="GB"
    value={formValues.phoneNumber}
    onChange={(value) => setFormValues(prev => ({ ...prev, phoneNumber: value || '' }))}
    style={{ width: '100%', margin: '16px 0' }}
  />

  {/* Date of Birth */}
  <TextField
    type="date"
    label="Date of Birth"
    name="dateOfBirth"
    value={formValues.dateOfBirth}
    onChange={handleInputChange}
    InputLabelProps={{ shrink: true }}
    fullWidth
    margin="normal"
  />

  {/* Town of Birth, Nationality, and Gender, now using formValues and handleInputChange */}
  <TextField
    label="Town of Birth"
    name="townOfBirth"
    value={formValues.townOfBirth}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
  />

  <TextField
    select
    label="Nationality"
    name="selectedNationality"
    value={formValues.selectedNationality}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
  >
    {countryOptions.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    select
    label="Gender"
    name="gender"
    value={formValues.gender}
    onChange={handleInputChange}
    fullWidth
    margin="normal"
  >
    <MenuItem value="Female">Female</MenuItem>
    <MenuItem value="Male">Male</MenuItem>
    {/* Add more options as needed */}
  </TextField>

  {/* DBS Check information */}
  <Typography variant="body1" gutterBottom sx={{ m: "1.5rem", letterSpacing: "0.7px" }}>
    If Hanson Recruitment are completing a new DBS for you, it will be Child and Adult Workforce. Do you need a new DBS or do you have one (child workforce/ child & adult workforce) on the update service?
  </Typography>
  <RadioGroup
              name="hasCriminalRecord"
              value={formValues.hasCriminalRecord}
              onChange={handleInputChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes, I already have an enhance child and adult workforce one on the update service" />
              <FormControlLabel value="no" control={<Radio />} label="No, I need a new DBS" />
            </RadioGroup>
            {formErrors.hasCriminalRecord && <Typography color="error">{formErrors.hasCriminalRecord}</Typography>}

  {/* Submission Button - Removed onClick, using only onSubmit for form submission */}
  <Button 
    variant="contained"
    type="submit"
    fullWidth
    sx={{ m: "2rem 0", p: "1rem" }}
  >
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

export default PersonalDetails;