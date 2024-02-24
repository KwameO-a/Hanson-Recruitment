import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

interface DigitalSignatureProps {
  onSignatureSave: (signature: string) => void; // Callback to save the signature data
  onNext: () => void; // Function to navigate to the next step
  onPrev: () => void; // Function to navigate to the previous step
}

const DigitalSignature: React.FC<DigitalSignatureProps> = ({ onSignatureSave, onNext, onPrev }) => {
  const sigPad = useRef<SignatureCanvas>(null);
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

  const clear = () => sigPad.current?.clear();
  const save = () => {
    if (sigPad.current) {
      const signatureImage = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      onSignatureSave(signatureImage);
      onNext(); // Call onNext after saving the signature
    }
  };

  return (
    <Box>
    <Box
      p="1rem 6%"
      textAlign="center"
    >
      <Typography fontWeight="bold" fontSize="32px" color="primary">
      Confirmation of declaration
      </Typography>
      <Typography>
      I declare that all the information I have provided in this disclosure is full and correct at the time of application and that I have not omitted anything that could be relevant to the appointment of someone who will work with children. I understand that the information contained on this form, the results of the DBS
      check* and information supplied by third parties may be supplied by the
      organisation to other persons or organisations in circumstances where this is
      considered necessary to safeguard other children.
      In accordance with the organisation’s procedures, if required I agree to provide a
      valid DBS certificate* and consent to the organisation clarifying any information
      provided on the disclosure with the agencies providing it.
      I agree to inform the organisation within 24 hours if I am subsequently investigated
      by any agency or organisation in relation to concerns about my behaviour towards children or young people.
      I understand that the recruitment panel may be made aware of any relevant
      information that I have disclosed in order to discuss the matter(s) with me as part
      of the recruitment process and that, if my application is successful, a risk
      assessment of the disclosed information will be held securely on my personnel file. I
      understand that the declaration of a criminal record will not necessarily prevent
      me from being offered this role.
            </Typography>
    </Box>

    <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    >
       <div>
      <SignatureCanvas penColor='black'
                       canvasProps={{width: 500, height: 200, className: 'sigCanvas',}}
                       ref={sigPad} />
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save Signature</Button>
      <Button onClick={onPrev}>Previous</Button> {/* Optional: If you want to navigate back */}
    </div>
    </Box>
  </Box>
   
  );
};

export default DigitalSignature;
