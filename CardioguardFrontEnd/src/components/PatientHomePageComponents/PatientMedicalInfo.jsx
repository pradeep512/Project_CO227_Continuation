import PatientExaminationDataById from "../PatientHomePageComponents/PatientExaminationData";
import PatientClinicalDataById from "../PatientHomePageComponents/PatientClinicalData";
import PatientSymptomDataById from "../PatientHomePageComponents/PatientSymptomsData";

const PatientMedicalInfo = () => {
  return (
    <div>
      <PatientSymptomDataById />
      <PatientClinicalDataById/>
      <PatientExaminationDataById/>
    </div>
  );
};

export default PatientMedicalInfo;
