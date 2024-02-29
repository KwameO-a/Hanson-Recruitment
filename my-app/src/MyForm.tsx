import React, { useState } from 'react';
import Step1 from '/Users/eugeneosei-adjapong/my-app/src/Step1';
import Step2 from '/Users/eugeneosei-adjapong/my-app/src/Step2';

// Define the type for formData
interface FormData {
  firstName: string;
  lastName: string;
  // Add more fields as needed
}

const MyForm: React.FC = () => {
  // Initialize formData with an empty object of type FormData
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '' });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const totalSteps = 2;

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <Step1 formData={formData} handleInputChange={handleInputChange} />
      )}
      {currentStep === 2 && (
        <Step2 formData={formData} handleInputChange={handleInputChange} />
      )}
      {/* Add more steps as needed */}

      {currentStep > 1 && (
        <button type="button" onClick={prevStep}>
          Previous
        </button>
      )}
      {currentStep < totalSteps && (
        <button type="button" onClick={nextStep}>
          Next
        </button>
      )}
      {currentStep === totalSteps && (
        <button type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default MyForm;
