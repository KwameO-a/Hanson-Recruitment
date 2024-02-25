import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, Button, Box, useMediaQuery, Grid, Paper } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary
interface Answers {
  [key: string]: string;
}

interface QuestionnaireFormProps {
  onNext: () => void;
  onPrev: () => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onNext, onPrev }) => {
  const [answers, setAnswers] = useState<Answers>({});
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

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
          label={`If yes, please provide details here`}
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

  </RadioGroup>
  {renderConditionalTextField('question1')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">2. Do you have any other cautions or convictions that would not be filtered?</FormLabel>
  <RadioGroup
    row
    name="question2"
    onChange={(e) => handleRadioChange('question2', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question2')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">3. Are you included on the DBS children’s barred list?</FormLabel>
  <RadioGroup
    row
    name="question3"
    onChange={(e) => handleRadioChange('question3', e.target.value)}
    
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question3')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">4. (Teaching posts only) Are you, or have you ever been, prohibited from teaching
by the TRA or sanctioned by the GTCE?</FormLabel>
  <RadioGroup
    row
    name="question4"
    onChange={(e) => handleRadioChange('question4', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
    <FormControlLabel value="not_applicable" control={<Radio />} label="Not applicable" />
  </RadioGroup>
  {renderConditionalTextField('question4')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">5. Have you been prohibited from management of an independent school (s128)?</FormLabel>
  <RadioGroup
    row
    name="question5"
    onChange={(e) => handleRadioChange('question5', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
    <FormControlLabel value="not_applicable" control={<Radio />} label="Not applicable" />
  </RadioGroup>
  {renderConditionalTextField('question5')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">6.Have you lived or worked outside the UK for more than 3 months in the last 5 years?</FormLabel>
  <RadioGroup
    row
    name="question6"
    onChange={(e) => handleRadioChange('question6', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question6')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">7. Are you subject to any sanctions relating to work with children in any country outside the UK?</FormLabel>
  <RadioGroup
    row
    name="question7"
    onChange={(e) => handleRadioChange('question7', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question7')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">8. The Disqualification under the Childcare Act 2006 Regulations (2018) state that
  anyone employed to care for children in early years (children under the age of 5)
  or later years (wrap-around care for children under the age of 8) is disqualified
  from that work if they meet certain criteria. These criteria include (this is not an
  exhaustive list):
  Certain serious criminal offences
  Court orders relating to the care of your own child
  Being prohibited from private fostering
  Do you have any reason to believe you are disqualified from working in childcare?</FormLabel>
  <RadioGroup
    row
    name="question8"
    onChange={(e) => handleRadioChange('question8', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question8')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">9. Are you aware of any current police investigation in the United Kingdom or any
other country following allegations made against you by the police?</FormLabel>
  <RadioGroup
    row
    name="question9"
    onChange={(e) => handleRadioChange('question9', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question9')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">10. Are you aware of any current NHS Counter Fraud and Security Management
Service Investigation following allegations made against you?</FormLabel>
  <RadioGroup
    row
    name="question10"
    onChange={(e) => handleRadioChange('question10', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question10')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">
    11. Have you ever been investigated by the Police, CFSMS or any other
    Investigatory Body resulting in a caution, conviction or dismissal from your
    employment?
    (Investigatory bodies include Local Authorities, Customs and Exercise, Immigration,
    Passport Agency, Inland Revenue, Department of Trade and Industry, Department
    of work and Pensions, DBS, Security Agencies, Financial Service Authority, Banks
    and Building Societies, General, Life Insurance Companies- This list is not
    exhaustive, and you must declare any investigation conducted by an
    Investigatory Body)</FormLabel>
  <RadioGroup
    row
    name="question11"
    onChange={(e) => handleRadioChange('question11', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question11')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">12. Have you ever been dismissed by reason of misconduct from any employment, office or other position previously held by you?</FormLabel>
  <RadioGroup
    row
    name="question12"
    onChange={(e) => handleRadioChange('question12', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question12')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">13. Have you ever been disqualified from the practice of a profession or required
  to practice subject to specified limitations following fitness to practice proceedings
  by a regulatory or licencing body in the United Kingdom or any other country?</FormLabel>
  <RadioGroup
    row
    name="question13"
    onChange={(e) => handleRadioChange('question13', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question13')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">14. Are you currently the subject of any Investigation or fitness to practice
proceedings by any licencing or regulatory body in the United Kingdom or in any
other country?</FormLabel>
  <RadioGroup
    row
    name="question14"
    onChange={(e) => handleRadioChange('question14', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question14')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">15. Are you currently subject to any other prohibition, limitation, or restriction that
means that means we are unable to consider you for the position which you are
applying?</FormLabel>
  <RadioGroup
    row
    name="question15"
    onChange={(e) => handleRadioChange('question15', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question15')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">16. Have you ever had registration refused or cancelled in relation to childcare or
children’s homes or being disqualified from private fostering in the United Kingdom
or in any other country?</FormLabel>
  <RadioGroup
    row
    name="question16"
    onChange={(e) => handleRadioChange('question16', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question16')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">17. Have you ever been disqualified from a practise on grounds relating to the
care of children (Including where an order is made in respect of a child under the
person’s care) in the UK or in any other country?</FormLabel>
  <RadioGroup
    row
    name="question17"
    onChange={(e) => handleRadioChange('question17', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question17')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">18. Are or have your children ever been, the subject of a child protection order?</FormLabel>
  <RadioGroup
    row
    name="question18"
    onChange={(e) => handleRadioChange('question18', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question18')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">19. Have your children been taken into care?</FormLabel>
  <RadioGroup
    row
    name="question19"
    onChange={(e) => handleRadioChange('question19', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question19')}
</FormControl>
<FormControl component="fieldset" margin="normal">
  <FormLabel component="legend">20. Please read the Disqualification under the Childcare Act 2006 for a full list
of relevant offences and ordered for disqualification under the Childcare Act.
Are you disqualified on any of the grounds set up in the DfE guidance (not already
mentioned in the questions above)</FormLabel>
  <RadioGroup
    row
    name="question20"
    onChange={(e) => handleRadioChange('question20', e.target.value)}
  >
    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel value="no" control={<Radio />} label="No" />
  </RadioGroup>
  {renderConditionalTextField('question20')}
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

export default QuestionnaireForm;





