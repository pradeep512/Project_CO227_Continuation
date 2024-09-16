import { useState, useEffect } from "react";
import axiosClient from "../../../axios-client"; // Ensure the correct path for axiosClient
import {
  FaHeartbeat,
  FaDiagnoses,
  FaSyringe,
  FaLungs,
  FaSmoking,
  FaTint,
  FaRuler,
  FaStethoscope,
  FaArrowUp,
} from "react-icons/fa"; // Import relevant icons

const PatientExaminationDataById = () => {
  const [clinicalData, setClinicalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hardcoded patient ID
  const patientId = 3;

  const fetchClinicalData = async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalData([]);

      // Fetch clinical data
      const clinicalDataResponse = await axiosClient.get(
        `/doctors/${patientId}/examines`
      );

      if (clinicalDataResponse.data) {
        setClinicalData(clinicalDataResponse.data);
      } else {
        setError("No clinical data found.");
      }
    } catch (err) {
      setError("Failed to fetch clinical data. Please check the Patient ID and try again.");
      console.error("Error fetching clinical data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically fetch data on component load
    fetchClinicalData();
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-6">Examination Data</h1>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Display clinical data */}
        {clinicalData.length > 0 && (
          <div className="bg-gray-50 rounded-md p-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: "Tachycardia at Rest",
                  value: clinicalData[0].tachycardiaAtrest ? "Yes" : "No",
                  color: clinicalData[0].tachycardiaAtrest ? "text-green-500" : "text-red-500",
                  icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Hypotension",
                  value: clinicalData[0].hypotention ? "Yes" : "No",
                  color: clinicalData[0].hypotention ? "text-green-500" : "text-red-500",
                  icon: <FaStethoscope className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Raised Jugular Venous Pressure",
                  value: clinicalData[0].raisedJugularVenousPressure ? "Yes" : "No",
                  color: clinicalData[0].raisedJugularVenousPressure ? "text-green-500" : "text-red-500",
                  icon: <FaArrowUp className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Displaced Apex Beat",
                  value: clinicalData[0].displacedApexBeat ? "Yes" : "No",
                  color: clinicalData[0].displacedApexBeat ? "text-green-500" : "text-red-500",
                  icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Right Ventricular Heave",
                  value: clinicalData[0].rightVenticularHeave ? "Yes" : "No",
                  color: clinicalData[0].rightVenticularHeave ? "text-green-500" : "text-red-500",
                  icon: <FaLungs className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Pleural Effusion",
                  value: clinicalData[0].pleuralEffusion ? "Yes" : "No",
                  color: clinicalData[0].pleuralEffusion ? "text-green-500" : "text-red-500",
                  icon: <FaLungs className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Hepatomegaly",
                  value: clinicalData[0].hepatomegaly ? "Yes" : "No",
                  color: clinicalData[0].hepatomegaly ? "text-green-500" : "text-red-500",
                  icon: <FaTint className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Gallop Rhythm on Auscultation",
                  value: clinicalData[0].gallopRhythmOnAuscultation ? "Yes" : "No",
                  color: clinicalData[0].gallopRhythmOnAuscultation ? "text-green-500" : "text-red-500",
                  icon: <FaStethoscope className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Pedal and Ankle Oedema",
                  value: clinicalData[0].pedalAndAnkleOedema ? "Yes" : "No",
                  color: clinicalData[0].pedalAndAnkleOedema ? "text-green-500" : "text-red-500",
                  icon: <FaRuler className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Tachypnoea",
                  value: clinicalData[0].tachypnoea ? "Yes" : "No",
                  color: clinicalData[0].tachypnoea ? "text-green-500" : "text-red-500",
                  icon: <FaLungs className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Ascites",
                  value: clinicalData[0].ascites ? "Yes" : "No",
                  color: clinicalData[0].ascites ? "text-green-500" : "text-red-500",
                  icon: <FaTint className="text-blue-500 mr-4" size={40} />,
                },
                {
                  label: "Examination Date",
                  value: clinicalData[0].examinationDate
                    ? new Date(clinicalData[0].examinationDate).toLocaleDateString()
                    : "N/A",
                  color: "text-gray-700",
                  icon: <FaStethoscope className="text-blue-500 mr-4" size={40} />,
                },
              ].map((data, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-100 p-4 rounded-lg h-28"
                >
                  {data.icon}
                  <div>
                    <p className="text-sm font-medium">{data.label}</p>
                    <p className={`text-lg ${data.color}`}>{data.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No data message */}
        {!clinicalData.length && !loading && !error && (
          <p className="text-gray-600 text-center">No examination data available.</p>
        )}
      </div>
    </div>
  );
};

export default PatientExaminationDataById;
