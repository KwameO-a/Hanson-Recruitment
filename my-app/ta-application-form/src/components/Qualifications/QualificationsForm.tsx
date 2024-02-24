import React, { useState } from 'react';
import { TextField, Button, Typography, FormControlLabel, Checkbox, MenuItem, Box, useMediaQuery} from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface QualificationsFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const QualificationsForm: React.FC<QualificationsFormProps> = ({ onNext, onPrev }) => {
  const [highestQualification, setHighestQualification] = useState('');
//   const [isOverseasRequired, setIsOverseasRequired] = useState(false);
  const [overseasCountries, setOverseasCountries] = useState('');
  const [checkState, setCheckState] = useState({notRequired: false,required: false,});
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [email, setEmail] = useState('');
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");


  // Assume additional fields as needed based on the PDF content

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    // Reset both and then set the clicked one as true
    setCheckState({
      notRequired: false,
      required: false,
      [name]: true,
    });
  };
  
  return (
    <Box>
    <Box
      p="1rem 6%"
      textAlign="center"
    >
      <Typography fontWeight="bold" fontSize="32px" color="primary">
      Highest Level of Qualification
      </Typography>
    </Box>

    <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    >
       <form>
        <Typography variant="body1" gutterBottom>
        Hanson Recruitment checks that candidates (if applicable) are registered with the National
College for Teaching & leadership (NCTL), whether any restrictions are in place and whether they
have completed their QTS and Induction. Teachers and TAs working in Wales must be registered
with the EWC
      </Typography>
      <TextField
        label="Highest Level of Qualification"
        value={highestQualification}
        onChange={(e) => setHighestQualification(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
      Overseas Police Check
    </Typography>
      <Typography variant="body1" gutterBottom>
        Please state, if applicable, any periods of residence outside of the UK within the last 5 years and any periods of more than 6 months at any time. 
        E.g. Spain - 10 months - Jan 2018 to October 2018
      </Typography>

      <FormControlLabel
            control={<Checkbox checked={checkState.notRequired} onChange={handleCheckboxChange} name="notRequired" />}
            label="Not Required Y/N"
            />
     <FormControlLabel
            control={<Checkbox checked={checkState.required} onChange={handleCheckboxChange} name="required" />}
            label="Required Y/N (Which country/ies)"
            />
        {checkState.required && (
        <TextField
            label="Specify Countries"
            value={overseasCountries}
            onChange={(e) => setOverseasCountries(e.target.value)}
            fullWidth
            margin="normal"
        />
        )}
        <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
        References
    </Typography>
    <Typography variant="body1" gutterBottom>
    Hanson Recruitment will contact your previous employers to confirm employment dates, verify
    experience and qualifications. Referees will also be asked to confirm details of your reason for
    leaving, disciplinary hearings or safeguarding concerns. One referee must be your current or most
    recent employer, head teacher or line manager. Open references, testimonials or agreed
    references will be verified.

    Please give details of 3 referees if you have not already done so. Please include your current/ last
    employer. (Only professional email address are accepted)
      </Typography>

      <Typography variant="body1" gutterBottom>
      Please give details of 3 referees if you have not already done so. Please include your current/ last
    employer. (Only professional email address are accepted)
    </Typography>
    <TextField label="Forename" value={forename} onChange={(e) => setForename(e.target.value)} fullWidth margin="normal" />
    <TextField label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} fullWidth margin="normal" />

    <TextField select label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal">
        <MenuItem value="Dr.">Dr.</MenuItem>
        <MenuItem value="Mr.">Mr.</MenuItem>
        <MenuItem value="Mrs.">Mrs.</MenuItem>
        <MenuItem value="Ms.">Ms.</MenuItem>
        {/* Add more options as needed */}
      </TextField>
      <TextField label="Position" value={position} onChange={(e) => setPosition(e.target.value)} fullWidth margin="normal" />
      <TextField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth margin="normal" />
      <PhoneInput
        international
        defaultCountry="GB"
        value={phoneNumber}
        onChange={(value) => setPhoneNumber(value || '')}
        style={{ width: '100%', margin: '16px 0', }}
      />
      <TextField
        label="Start Date of Employment (e.g., MM/YYYY)"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        margin="normal"
        type="month" // This renders a month-picker in browsers that support it
        />
        <TextField
        label="End Date of Employment(e.g., MM/YYYY)"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        margin="normal"
        type="month" // This renders a month-picker in browsers that support it
        />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />




      {/* Add more input fields as necessary */}
      
      <Button variant="contained" onClick={onPrev} style={{ marginRight: '10px' }}>
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </form>
    </Box>
  </Box>
 
  );
};

export default QualificationsForm;
