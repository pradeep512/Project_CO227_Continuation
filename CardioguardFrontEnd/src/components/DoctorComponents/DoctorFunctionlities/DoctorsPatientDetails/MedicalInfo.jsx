import SymptomDataById from "./SymptomsDataById";
import ClinicalDataById from "./ClinicalDataById";
import ExaminationDataById from "./ExaminationDataById";
// import ClinicalDataChart from "./ClinicalDataChart";
// import useStateContext from "../../../../contexts/useStateContext";

const MedicalInfo = () => {
  // const { user } = useStateContext();
  // const patientId = user.patientId;

  return (
    <div className="mb-4">
      <SymptomDataById />
      <ExaminationDataById />
      <ClinicalDataById />

      {/* <ClinicalDataChart patientId={patientId} /> */}
    </div>
  );
};

export default MedicalInfo;
