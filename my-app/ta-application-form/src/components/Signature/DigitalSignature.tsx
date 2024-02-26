import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Box, Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios'; // Import Axios

// Adjust path as necessary for your assets
import logoImage from '../../assets/Hanson RGB 60PX.jpg';
import bannerImage from '../../assets/cm.jpg';

interface DigitalSignatureProps {
  onSignatureSave: (signature: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const DigitalSignature: React.FC<DigitalSignatureProps> = ({ onSignatureSave, onNext, onPrev }) => {
  const sigPad = useRef<SignatureCanvas>(null);
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

  const clear = () => sigPad.current?.clear();

  const save = () => {
    if (sigPad.current) {
      const signatureImage = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      
      // Prepare the data to send, including the signature
      const dataToSend1 = {
        signature: signatureImage,
        // Add any other data you need to send
        // name: 'John Doe',
        // date: new Date().toISOString(),
      };

      const dataToSend = {
        "title":"MR",
        "firstName":"Ivan",
        "middleName":"Nii Amu",
        "lastName":"Dodoo",
        "knownAs":"",
        "previousNames":"",
        "address":"Accra",
        "postCode":"",
        "phoneNumber":"",
        "email":"HubertAmarfio@gmail.com",
        "dob":"11 Nov, 2001",
        "townofBirth":"",
        "nationality":"Ghanaian",
        "nationalInsuaranceNumber":"Gs-534532-34",
        "gender":"Male",
        "nextofkinName":"Wendy",
        "relationship":"sister",
        "nextofkinaddress":"Accra",
        "nextofkincontact":"232343243232",
        "qualification":"Tetiary",
        "position":"Snr Dev",
        "tel":"",
        "datesOfemployment":"12/02/01",
        "dbs":"dbssss oo",
        "country":"",
        "signature":""
       
    }

      // Use Axios to send the data to your API endpoint
      axios.post('http://172.20.10.3:3002/submit-form', dataToSend)
        .then(response => {
          console.log('Data submitted successfully', response.data);
          onSignatureSave(signatureImage);
          onNext();
        })
        .catch(error => {
          console.error('Error submitting data', error);
        });
    }
  };

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 4 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
            <img src={logoImage} alt="Company Logo" style={{ height: '50px' }} />
            <Typography variant="h5" component="h1" fontSize="32px" sx={{ fontWeight: 'bold' }}>
              Confirmation of Declaration
            </Typography>
          </Box>
          <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="1rem"
            m="1rem auto"
            borderRadius="1.5rem"
          ></Box>
          <Typography>
            {/* Declaration text here */}
          </Typography>
          <div>
            <SignatureCanvas penColor='black'
                             canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
                             ref={sigPad} />
            <Button onClick={clear}>Clear</Button>
            <Button onClick={save}>Save Signature</Button>
            <Button onClick={onPrev}>Previous</Button>
          </div>
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

export default DigitalSignature;