import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, FormControlLabel, Checkbox, MenuItem, Box, Grid, Paper } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

interface QualificationsFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const QualificationsForm: React.FC<QualificationsFormProps> = ({ onNext, onPrev }) => {
  const [highestQualification, setHighestQualification] = useState(localStorage.getItem('highestQualification') || '');
  const [overseasCountries, setOverseasCountries] = useState(localStorage.getItem('overseasCountries') || '');
  const [checkState, setCheckState] = useState({ notRequired: localStorage.getItem('notRequired') === 'true', required: localStorage.getItem('required') === 'true' });
  const [forename, setForename] = useState(localStorage.getItem('forename') || '');
  const [surname, setSurname] = useState(localStorage.getItem('surname') || '');
  const [title, setTitle] = useState(localStorage.getItem('title') || '');
  const [position, setPosition] = useState(localStorage.getItem('position') || '');
  const [company, setCompany] = useState(localStorage.getItem('company') || '');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');
  const [startDate, setStartDate] = useState(localStorage.getItem('startDate') || '');
  const [endDate, setEndDate] = useState(localStorage.getItem('endDate') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  useEffect(() => {
    // Store form data in localStorage when any state changes
    localStorage.setItem('highestQualification', highestQualification);
    localStorage.setItem('overseasCountries', overseasCountries);
    localStorage.setItem('notRequired', String(checkState.notRequired));
    localStorage.setItem('required', String(checkState.required));
    localStorage.setItem('forename', forename);
    localStorage.setItem('surname', surname);
    localStorage.setItem('title', title);
    localStorage.setItem('position', position);
    localStorage.setItem('company', company);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('email', email);
  }, [highestQualification, overseasCountries, checkState, forename, surname, title, position, company, phoneNumber, startDate, endDate, email]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckState(prevState => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
              Apply for this role
            </Typography>
            <Typography variant="subtitle1">
              UX Designer • Full time • Remote
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom>
              Hanson Recruitment checks that candidates (if applicable) are registered with the National College for Teaching & Leadership (NCTL), whether any restrictions are in place and whether they have completed their QTS and Induction. Teachers and TAs working in Wales must be registered with the EWC.
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
              E.g., Spain - 10 months - Jan 2018 to October 2018
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
              Hanson Recruitment will contact your previous employers to confirm employment dates, verify experience and qualifications. Referees will also be asked to confirm details of your reason for leaving, disciplinary hearings or safeguarding concerns. One referee must be your current or most recent employer, head teacher or line manager. Open references, testimonials or agreed references will be verified.
            </Typography>
            {/* Fields for references */}
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
              style={{ width: '100%', margin: '16px 0' }}
            />
            <TextField
              label="Start Date of Employment (e.g., MM/YYYY)"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
              margin="normal"
              type="month"
            />
            <TextField
              label="End Date of Employment (e.g., MM/YYYY)"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
              margin="normal"
              type="month"
            />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" onClick={onPrev} style={{ marginRight: '10px' }}>
                Previous
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
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

export default QualificationsForm;
