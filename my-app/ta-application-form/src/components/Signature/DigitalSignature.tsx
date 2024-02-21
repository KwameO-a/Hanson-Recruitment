import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from '@mui/material';

interface DigitalSignatureProps {
  onSignatureSave: (signature: string) => void; // Callback to save the signature data
  onNext: () => void; // Function to navigate to the next step
  onPrev: () => void; // Function to navigate to the previous step
}

const DigitalSignature: React.FC<DigitalSignatureProps> = ({ onSignatureSave, onNext, onPrev }) => {
  const sigPad = useRef<SignatureCanvas>(null);

  const clear = () => sigPad.current?.clear();
  const save = () => {
    if (sigPad.current) {
      const signatureImage = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      onSignatureSave(signatureImage);
      onNext(); // Call onNext after saving the signature
    }
  };

  return (
    <div>
      <SignatureCanvas penColor='black'
                       canvasProps={{width: 500, height: 200, className: 'sigCanvas',}}
                       ref={sigPad} />
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save Signature</Button>
      <Button onClick={onPrev}>Previous</Button> {/* Optional: If you want to navigate back */}
    </div>
  );
};

export default DigitalSignature;
