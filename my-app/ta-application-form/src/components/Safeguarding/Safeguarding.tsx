import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Grid,
  Paper
} from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary

// Assumed logoImage and bannerImage imports

interface Answers {
  [key: string]: string | undefined;
}

interface QuestionnaireFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onNext, onPrev }) => {
  const [answers, setAnswers] = useState<Answers>({});
  const isNonMobileScreens = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    const savedAnswers = localStorage.getItem('questionnaireAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleRadioChange = (questionNumber: string, value: string) => {
    const updatedAnswers = { ...answers, [questionNumber]: value };
    setAnswers(updatedAnswers);
    localStorage.setItem('questionnaireAnswers', JSON.stringify(updatedAnswers));
  };

  const handleDetailChange = (questionNumber: string, detail: string) => {
    const updatedAnswers = { ...answers, [`${questionNumber}_detail`]: detail };
    setAnswers(updatedAnswers);
    localStorage.setItem('questionnaireAnswers', JSON.stringify(updatedAnswers));
  };

  const renderConditionalTextField = (questionNumber: string) => {
    if (answers[questionNumber] === 'yes') {
      return (
        <TextField
          fullWidth
          label="If yes, please provide details here"
          margin="normal"
          variant="outlined"
          value={answers[`${questionNumber}_detail`] || ''}
          onChange={(e) => handleDetailChange(questionNumber, e.target.value)}
        />
      );
    }
    return null;
  };

  const isNextDisabled = (): boolean => {
    // Implement validation logic as needed
    return false; // Placeholder logic
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
        <Box
    width={isNonMobileScreens ? "50%" : "93%"}
    p="1rem"
    m="1rem auto"
    borderRadius="1.5rem"
  ></Box>
      {/* Form structure */}
      <form onSubmit={handleSubmit}>
        {/* Iterate through questions or manually list them */}
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
          <RadioGroup
            row
            name="question1"
            value={answers['question1'] || ''}
            onChange={(e) => handleRadioChange('question1', e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="not_applicable" control={<Radio />} label="Not applicable" />
          </RadioGroup>
          {renderConditionalTextField('question1')}
        </FormControl>
        {/* Repeat for other questions */}
        <Button variant="contained" onClick={onPrev}>
              Previous
            </Button>
            <Button variant="contained" color="primary" type="submit" disabled={isNextDisabled()}>
              Next
            </Button>
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

export default QuestionnaireForm;