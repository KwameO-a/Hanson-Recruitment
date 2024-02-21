import React, { useState, useRef, MouseEvent } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
// import { date } from 'yup';

interface DisclosureOfCriminalRecordsProps {
  onNext: () => void;
  onPrev: () => void;
}

const validationSchema = Yup.object({
  hasCriminalRecord: Yup.boolean().required('Required'),
  criminalRecordDetails: Yup.string().when('hasCriminalRecord', (hasCriminalRecord, schema) => {
    return hasCriminalRecord ? schema.required('You must provide details for your criminal record') : schema;
  }),
});

const initialValues = {
  hasCriminalRecord: false,
  criminalRecordDetails: '',
};

const DisclosureOfCriminalRecords: React.FC<DisclosureOfCriminalRecordsProps> = ({ onNext, onPrev }) => {
    const [date, setDate] = useState('');
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isSigning, setIsSigning] = useState(false);
  // Function to start drawing
  const startDrawing = (e: MouseEvent) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsSigning(true); // Set signing to true when drawing starts
  };

  // Function to draw
  const draw = (e: MouseEvent) => {
    if (!canvasRef.current || !isSigning) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // Function to stop drawing
  const stopDrawing = () => {
    setIsSigning(false); // Set signing to false when drawing stops
  };

  // Function to clear the canvas
  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  };

      
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        onNext(); // Assume you want to go to the next step on form submission
      }}
    >
      {({ errors, touched }) => (
        <Form>
             <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
             Advice to Applicants
            </Typography>
            <Typography>
            Hanson Recruitment is committed to safeguarding and promoting the welfare of children and young people and expect all our supply staff to share this commitment
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
            Disclosure of Criminal Records
            </Typography>
            <Typography>
            The work you are applying for involves regular care for, training, supervision or contact with those under the age of 18 and is therefore exempt from the rehabilitation of Offenders Act. This means you must disclose information about any spent or unspent convictions, cautions, reprimands or final warnings that are not “protected” as defined by the Rehabilitation of Offenders Act 1974 (Exceptions) order 1975 (as amended in 2013) when completing the Declaration of Criminal Records below. You must provide this information, no matter how long ago they occurred and regardless of whether the offences were committed as an adult or juvenile. The information you give will be regarded as confidential and will only be disclosed in relation to appointments in educational establishments.

            It is an offence for anyone who has been convicted of certain offences or included on the lists of people considered unsuitable by the Department for Education (DFE), Department of Health (DoH) or Disclosure and Barring Service (DBS) to apply for work with young people.

            The disclosure of a criminal record, or other information, will not debar you from appointment unless Hanson Recruitment considers or is advised by the DFE, DoH, DBS or Teaching Agency, that it renders you unsuitable for appointment. Hanson Recruitment will consider the nature of the offence, how long ago it occurred, what age you were, when it was committed any other factors which may be relevant.

            Unless you are subscribed to the DBS Update Service Hanson Recruitment will require and arrange for a new check to be carried out by the Disclosure and Barring Service.

            If you are an overseas candidate, Hanson Recruitment will also require an original police clearance document from the country where you have spent most of your adult life. Any work or travel abroad of 6 months or more within the last five years, must be covered by an appropriate police check or letter of good conduct.

            Failure to complete and sign the declaration of criminal records or declare any convictions, cautions, reprimands or final warnings including those usually regarded as “spent” is an offence and may disqualify you from appointment or result in your appointment being terminated when the discrepancy comes to light with possible referral to the police and Disclosure and Barring Service.
         </Typography>
         <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
         Declaration of Criminal Record
            </Typography>
            <Typography>
            Do you have any convictions, cautions, reprimands or final warnings that are not “protected” as defined by the rehabilitation of Offenders Act 1974 (Exceptions) order 1975 (as amended in 2013)? Are you aware of any police enquiries undertaken following allegations made against you which may have a bearing on your suitability for this work?
            </Typography>
            
          <FormControlLabel
            control={<Field as={Checkbox} name="hasCriminalRecord" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="hasCriminalRecord" />}
            label="No"
          />
          {errors.hasCriminalRecord && touched.hasCriminalRecord ? <div>{errors.hasCriminalRecord}</div> : null}

          <Field
            as={TextField}
            name="criminalRecordDetails"
            label="If Yes, please state here:"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            error={touched.criminalRecordDetails && Boolean(errors.criminalRecordDetails)}
            helperText={touched.criminalRecordDetails && errors.criminalRecordDetails}
          />
          <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
          Applicant’s Declaration
            </Typography>
            <Typography component="div">
      <ul>
        {[
          "I certify that I have answered all questions on this form fully and accurately, and that I possess the qualifications that I claim to hold",
          "I certify that I am not on the List 99/ DBS Barred List or disqualified to work with children",
          "I give my consent for Hanson Recruitment to request a DBS update Service Check and other checks such as references, and the Teaching Regulation Agency lists",
          "I certify that I am not subject to sanctions imposed by the Teaching Agency and I am not currently suspended from work or awaiting the outcome of a disciplinary enquiry",
          "I certify that I am legally entitled to work in the UK",
          "I am aware that physical contact with pupils should be avoided and that inflicting physical punishment could have serious consequences including criminal prosecution and referral to the Disclosure & Barring Service (DBS)/ EWC/ LADO/ NCTL",
          "I agree to support Hanson Recruitment’s commitment to child protection and Equal Opportunities and I have received and understand Hanson Recruitment’s Health & Safety information for temporary workers",
          "I understand that if I have knowingly given false information omitted or concealed any relevant fact about my eligibility for work, I will have my name removed from Hanson Recruitment’s register and will be reported to the National College for Teaching and leadership/ LADO / EWC which could lead to barring from work within education and possible referral to the police",
          "I have read the DFE Keeping Children Safe in Education (Part 1).  You have been sent a link on this before you attend interview. ",
          "I have read the DFE Guidance Disqualification Under the Childcare Act 2006 (for working with children under the age of 8) you have been sent this link before interview.",
          "I am not disqualified on any of the grounds set out in the DfE guidance.",
          "I will notify Hanson Recruitment if any of the above changes.",
          "I understand that communication between pupils and supply staff, by whatever method, should take place within clear professional boundaries as outlined in Hanson Recruitment’ s E-Safety policy. This includes the wider use of technology such as mobile phone text messaging, emails, digital cameras, videos, web-cams, websites, social networking sites, instant messaging and blogs",
          "I will return all swipes/ keys and school property to the school at the end of my placement with them, either directly or by post if necessary.",
          "I give permission for Hanson Recruitment to share any references obtained by the agency with a school/ setting for the purposes of employment. ",
          
          "By signing this declaration I allow Hanson Recruitment to process my application using the information that I have provided in accordance with the requirements of the Data Protection Policy and in keeping with the Data Protection Act 1998. The information provided will be used by Hanson Recruitment recruitment Ltd to inform you by letter, phone or email of relevant information and other services which may interest you. No information will be passed to any third parties."
        ].map((point, index) => (
          <li key={index}>
            {index === 4|| index === 8|| index === 9 || index === 13 || index === 14? <strong>{point}</strong> : point}
            
            </li>
        ))}
      </ul>
    </Typography>
    <canvas
            ref={canvasRef}
            style={{ border: '1px solid #000', marginBottom: '10px' }}
            width={300}
            height={100}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing} // Ensure signing stops if the mouse leaves the canvas area
          />
          <br />
          <Button variant="contained" color="secondary" onClick={clearCanvas}>
            Clear Signature
          </Button>
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <Button variant="contained" onClick={onPrev} style={{ marginRight: '10px' }}>
            Previous
          </Button>
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DisclosureOfCriminalRecords;
