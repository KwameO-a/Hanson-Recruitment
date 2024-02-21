import React, { useState } from 'react';
import { TextField, MenuItem, Button, Typography, Checkbox, FormControlLabel} from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { countries } from 'countries-list';

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
  const [dbsCheck, setDbsCheck] = useState({needNewDBS: false,haveDBSOnUpdateService: false,});

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setDbsCheck({
      needNewDBS: name === "needNewDBS" ? checked : false,
      haveDBSOnUpdateService: name === "haveDBSOnUpdateService" ? checked : false,
    });
  };
  

  

  return (
    <form>
        <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
      Personal Details
    </Typography>
       
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
      <Typography variant="body1" gutterBottom>
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
      <Typography variant="body2" gutterBottom>
        If you have a DBS on the update service, we will need a copy of the DBS sent to us, and the physical copy must be presented to the schools when you go in for work.
      </Typography>


      <Button variant="contained" onClick={onNext}>Next</Button>
    </form>
  );
};

export default PersonalDetails;
