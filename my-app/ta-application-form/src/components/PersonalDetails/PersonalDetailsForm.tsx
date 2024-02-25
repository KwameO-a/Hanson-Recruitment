import React, { useState } from 'react';
import { TextField, MenuItem, Button, Typography, Checkbox, FormControlLabel, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { countries } from 'countries-list';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary




const countryOptions = Object.entries(countries).map(([code, { name }]) => ({
  label: name,
  value: code,
}));



interface PersonalDetailsProps {
  onNext: () => void; // Function to navigate to the next form section
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [knownAs, setKnownAs] = useState(''); // Separate state for Known As
  const [previousNames, setPreviousNames] = useState(''); // Separate state for Previous Names
  const [address, setAddress] = useState(''); // State for Address
  const [postcode, setPostcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [townOfBirth, setTownOfBirth] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [nationalInsurance, setNationalInsurance] = useState('');
  const [gender, setGender] = useState('');
  const [dbsCheck, setDbsCheck] = useState({ needNewDBS: false, haveDBSOnUpdateService: false, });
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDbsCheck({
      needNewDBS: name === "needNewDBS" ? checked : false,
      haveDBSOnUpdateService: name === "haveDBSOnUpdateService" ? checked : false,
    });
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

          <form>
          {/* Title dropdown */}
          <TextField select label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal">
            <MenuItem value="Dr.">Dr.</MenuItem>
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
            <MenuItem value="Ms.">Ms.</MenuItem>
            {/* Add more options as needed */}
          </TextField>
          {/* Text fields for personal information */}
          <TextField label="Legal First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Legal Middle Name(s)" value={middleName} onChange={(e) => setMiddleName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Legal Surname" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Known as" value={knownAs} onChange={(e) => setKnownAs(e.target.value)} fullWidth margin="normal" />
          <TextField label="Previous Names" value={previousNames} onChange={(e) => setPreviousNames(e.target.value)} fullWidth margin="normal" />
          <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth margin="normal" />
          <TextField label="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} fullWidth margin="normal" />

          <PhoneInput
            international
            defaultCountry="GB"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value || '')}
            style={{ width: '100%', margin: '16px 0', }}
          />
          <TextField label="Your email" value={yourEmail} onChange={(e) => setYourEmail(e.target.value)} fullWidth margin="normal" />


          <TextField type="date" label="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} InputLabelProps={{ shrink: true, }} fullWidth margin="normal" />
          <TextField label="Town of Birth" value={townOfBirth} onChange={(e) => setTownOfBirth(e.target.value)} fullWidth margin="normal" />
          <TextField
            select
            label="Nationality"
            value={selectedNationality}
            onChange={(e) => setSelectedNationality(e.target.value)}
            fullWidth
            margin="normal"
          >
            {countryOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="National Insurance No." value={nationalInsurance} onChange={(e) => setNationalInsurance(e.target.value)} fullWidth margin="normal" />
          <TextField select label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} fullWidth margin="normal">
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            {/* Add more options as needed */}
          </TextField>
          <Typography variant="body1" gutterBottom sx={{ m: "1.5rem", letterSpacing: "0.7px" }}  >
            If Hanson Recruitment are completing a new DBS for you, it will be Child and Adult Workforce. Do you need a new DBS or do you have one (child workforce/ child & adult workforce) on the update service?
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={dbsCheck.needNewDBS}
                onChange={handleCheckboxChange}
                name="needNewDBS"
              />
            }
            label="No, I need a new DBS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dbsCheck.haveDBSOnUpdateService}
                onChange={handleCheckboxChange}
                name="haveDBSOnUpdateService"
              />
            }
            label="Yes, I already have an enhance child and adult workforce one on the update service"
          />
          <Typography fontWeight="500" variant="body1" sx={{ m: "1.5rem", letterSpacing: "0.7px" }} gutterBottom>
            If you have a DBS on the update service, we will need a copy of the DBS sent to us, and the physical copy must be presented to the schools when you go in for work.
          </Typography>


          <Button 
            variant="contained"
            onClick={onNext}
            fullWidth
            type="submit"
            sx={{
              m: "2rem 0",
              p: "1rem",
            }}>
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


