import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails/PersonalDetailsForm';
import DigitalSignature from './components/Signature/DigitalSignature';
import QualificationsForm from './components/Qualifications/QualificationsForm';
import NextOfKin from './components/nextOfKin/nextOfKin';
import DisclosureOfCriminalRecords from './components/CriminalRecords/CriminalRecords';
import HealthDeclarationForm from './components/HealthDeclaration/HealthDeclaration';
import ConsentDisclosureForm from './components/ConsentDisclosure/ConsentDisclosure';
import GDPRInformationForm from './components/GDPR/GDPR';
import QuestionnaireForm from './components/Safeguarding/Safeguarding';

const MainForm: React.FC = () => {
    // Define state to track the current step of the form
    const [currentStep, setCurrentStep] = useState(0);

    // Function to move to the next step
    const nextStep = () => setCurrentStep(currentStep + 1);

    // Function to move to the previous step
    const prevStep = () => setCurrentStep(currentStep - 1);

    // Function to render the appropriate form section based on the current step
    const renderStep = () => {
        switch(currentStep) {
            case 0:
                return <PersonalDetails onNext={nextStep} />;
            case 1:
                return <NextOfKin onNext={nextStep} onPrev={prevStep} />;
            case 2:
                return <QualificationsForm onNext={nextStep} onPrev={prevStep} />;
            case 3:
                return <DisclosureOfCriminalRecords onNext={nextStep} onPrev={prevStep} />;
            
            case 4:
                return <HealthDeclarationForm onNext={nextStep} onPrev={prevStep} />;
            case 5:
                return<ConsentDisclosureForm onNext={nextStep} onPrev={prevStep} />;
            case 6:
                return <GDPRInformationForm onNext={nextStep} onPrev={prevStep} />;
            case 7:
                return <QuestionnaireForm onNext={nextStep} onPrev={prevStep} />;
            case 8:
                return <DigitalSignature onNext={nextStep} onPrev={prevStep} onSignatureSave={(signature: string) => {
                  console.log("Signature Saved:", signature);
                  // Implement the saving or processing of the signature here
                }} />;
            default:
                return <div>Form Completed</div>;
        }
    };

    // Render the component
    return (
        <div className="App">
            {renderStep()}
        </div>
    );
};

export default MainForm;
