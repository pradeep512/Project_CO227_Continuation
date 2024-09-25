import { useState, useEffect } from "react";
import axiosClient from "../../../../../axios-client"; // Adjust the path accordingly
import { useNavigate } from "react-router-dom";

const PatientClinicalDataUpdate = ({ patientId, clinicalDataId, onClose }) => {
  const [formData, setFormData] = useState({
    diagnosisOfHeartDisease: false,
    presenceOfAnemia: true,
    creatininePhosphokinase: 150,
    diabetes: false,
    ejectionFraction: 55,
    bloodPressure: 120,
    platelets: 280000,
    serumCreatinine: 0.9,
    serumSodium: 145,
    smoking: true,
    followUpPeriodDays: 45,
    clinicalDate: "2024-07-10T10:00:00Z",
  });

  const navigate = useNavigate();

  // Fetch existing data to pre-fill the form
  useEffect(() => {
    const fetchClinicalData = async () => {
      try {
        const response = await axiosClient.get(
          `/doctors/patients/${patientId}/clinical-data/${clinicalDataId}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching clinical data:", error);
      }
    };

    fetchClinicalData();
  }, [patientId, clinicalDataId]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Patient details updated:", formData);

    try {
      await axiosClient.put(
        `/doctors/patients/${patientId}/clinical-data/${clinicalDataId}`,
        formData
      );
      console.log("Update successful, navigating to the previous page.");
      onClose(); // Close the modal
      navigate(-1); // Navigate to the previous page
    } catch (error) {
      console.error("There was an error with the update:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Patient Clinical Data Update Form
        </h1>

        <form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto"
        >
          {/* Diagnosis of Heart Disease */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="diagnosisOfHeartDisease"
              checked={formData.diagnosisOfHeartDisease}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="diagnosisOfHeartDisease" className="text-gray-700">
              Diagnosis of Heart Disease
            </label>
          </div>

          {/* Presence of Anemia */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="presenceOfAnemia"
              checked={formData.presenceOfAnemia}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="presenceOfAnemia" className="text-gray-700">
              Presence of Anemia
            </label>
          </div>

          {/* Creatinine Phosphokinase */}
          <div className="flex flex-col">
            <label htmlFor="creatininePhosphokinase" className="text-gray-700">
              Creatinine Phosphokinase:
            </label>
            <input
              type="number"
              name="creatininePhosphokinase"
              value={formData.creatininePhosphokinase}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Diabetes */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="diabetes"
              checked={formData.diabetes}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="diabetes" className="text-gray-700">
              Diabetes
            </label>
          </div>

          {/* Ejection Fraction */}
          <div className="flex flex-col">
            <label htmlFor="ejectionFraction" className="text-gray-700">
              Ejection Fraction:
            </label>
            <input
              type="number"
              name="ejectionFraction"
              value={formData.ejectionFraction}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Blood Pressure */}
          <div className="flex flex-col">
            <label htmlFor="bloodPressure" className="text-gray-700">
              Blood Pressure:
            </label>
            <input
              type="number"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Platelets */}
          <div className="flex flex-col">
            <label htmlFor="platelets" className="text-gray-700">
              Platelets:
            </label>
            <input
              type="number"
              name="platelets"
              value={formData.platelets}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Serum Creatinine */}
          <div className="flex flex-col">
            <label htmlFor="serumCreatinine" className="text-gray-700">
              Serum Creatinine:
            </label>
            <input
              type="number"
              name="serumCreatinine"
              value={formData.serumCreatinine}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Serum Sodium */}
          <div className="flex flex-col">
            <label htmlFor="serumSodium" className="text-gray-700">
              Serum Sodium:
            </label>
            <input
              type="number"
              name="serumSodium"
              value={formData.serumSodium}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Smoking */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="smoking"
              checked={formData.smoking}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="smoking" className="text-gray-700">
              Smoking
            </label>
          </div>

          {/* Follow-Up Period (Days) */}
          <div className="flex flex-col">
            <label htmlFor="followUpPeriodDays" className="text-gray-700">
              Follow-Up Period (Days):
            </label>
            <input
              type="number"
              name="followUpPeriodDays"
              value={formData.followUpPeriodDays}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          {/* Clinical Date */}
          <div className="flex flex-col">
            <label htmlFor="clinicalDate" className="text-gray-700">
              Clinical Date:
            </label>
            <input
              type="datetime-local"
              name="clinicalDate"
              value={new Date(formData.clinicalDate).toISOString().slice(0, 16)}
              onChange={handleChange}
              className="p-2 border rounded-md"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientClinicalDataUpdate;
