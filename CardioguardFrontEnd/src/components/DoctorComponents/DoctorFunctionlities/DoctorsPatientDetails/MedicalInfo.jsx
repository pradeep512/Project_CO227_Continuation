import SymptomDataById from "./SymptomsDataById";
import ClinicalDataById from "./ClinicalDataById";
import ExaminationDataById from "./ExaminationDataById";

const MedicalInfo = () => {
  return (
    <div className="mb-4">
      <SymptomDataById />
      <div className="flex w-full">
        <ClinicalDataById />
        <ExaminationDataById />
      </div>
    </div>
  );
};

export default MedicalInfo;
