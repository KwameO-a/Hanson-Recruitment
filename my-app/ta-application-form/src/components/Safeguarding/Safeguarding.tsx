import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Button } from '@mui/material';

interface Answers {
  [key: string]: string;
}

interface QuestionnaireFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onNext, onPrev }) => {
  const [answers, setAnswers] = useState<Answers>({});

  const handleRadioChange = (questionNumber: string, value: string) => {
    setAnswers({ ...answers, [questionNumber]: value });
  };

  const handleDetailChange = (questionNumber: string, detail: string) => {
    setAnswers({ ...answers, [`${questionNumber}_detail`]: detail });
  };

  const renderConditionalTextField = (questionNumber: string) => {
    if (answers[questionNumber] === 'yes') {
      return (
        <TextField
          fullWidth
          label={`Please provide details for question ${questionNumber}`}
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
    // Example validation logic: Next button is disabled if any question answered 'yes' lacks details
    return Object.keys(answers).some((key) =>
      key.endsWith('_detail') ? !answers[key] && answers[key.replace('_detail', '')] === 'yes' : false
    );
  };

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Safeguarding and Background Information
      </Typography>
      <Typography>
      Hanson Recruitment is committed to safeguarding and promoting the welfare of children and we expect all staff to share this commitment.  This post is exempt from the Rehabilitation of Offenders Act 1974; pre-employment checks will be carried out, references will be sought and successful candidates will be subject to an enhanced DBS check and other relevant checks with statutory bodies.
      We comply with the Disclosure & Barring Service (DBS) code of practice. As you have been shortlisted, you are required to declare any relevant convictions, adult cautions or other matters which may affect your suitability to work with children. As a result of amendments to the Rehabilitation of Offenders Act 1974 (exceptions order 1975) in 2013 and 2020, some minor offences are now protected (filtered) and should not be disclosed to potential employers, and employers cannot take these offences into account. 
        If you are unsure whether you need to disclose criminal information, you should seek legal advice or you may wish to contact Nacro or Unlock for impartial advice. There is more information on filtering and protected offences on the Ministry of Justice website.
        Nacro:  https://www.nacro.org.uk/criminal-record-support-service/                                                 or email helpline@nacro.org.uk or phone 0300 123 1999  

        For further information on filtering please refer to Nacro guidance and DBS website. 

      </Typography>
      {/* ... */}
      {/* Repeat this block for each question */}
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="not_applicable" control={<Radio />} label="Not applicable" />

        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
          
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">1. Do you have any convictions or adult cautions that are unspent?</FormLabel>
        <RadioGroup
          row
          name="question1"
          onChange={(e) => handleRadioChange('question1', e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {renderConditionalTextField('question1')}
      </FormControl>
      {/* ... */}
      {/* Include other questions following the same pattern */}
      {/* ... */}

      {/* Navigation Buttons */}
      <Button variant="contained" onClick={onPrev}>
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={onNext} disabled={isNextDisabled()}>
        Next
      </Button>
    </form>
  );
};

export default QuestionnaireForm;
