import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Box, Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import logoImage from '../../assets/Hanson RGB 60PX.jpg'; // Adjust path as necessary
import bannerImage from '../../assets/cm.jpg'; // Adjust path as necessary
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
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" fontSize="32px" sx={{ fontWeight: 'bold'  }}>
            Confirmation of declaration
            </Typography>
            
          </Box>
          <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="1rem"
      m="1rem auto"
      borderRadius="1.5rem"
    ></Box>
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

<div>
<SignatureCanvas penColor='black'
                 canvasProps={{width: 500, height: 200, className: 'sigCanvas',}}
                 ref={sigPad} />
<Button onClick={clear}>Clear</Button>
<Button onClick={save}>Save Signature</Button>
<Button onClick={onPrev}>Previous</Button> {/* Optional: If you want to navigate back */}
</div>
          
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

export default DigitalSignature;







