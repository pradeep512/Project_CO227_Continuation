import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import useStateContext from "../contexts/useStateContext";

const MachineLearn = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const { user } = useStateContext();

  useEffect(() => {
    const fetchPatients = async () => {
      const doctor_id = user.doctorId;
      try {
        setLoading(true);
        const response = await axiosClient.get(`/doctors/patients/bulk/${doctor_id}`);
        if (response.data) {
          setPatients(response.data);
        } else {
          setError("Failed to fetch patients data.");
        }
      } catch (err) {
        setError("Failed to fetch patients data.");
        console.error("Error fetching patients data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [user.doctorId]);

  const handleRowClick = (patientId) => {
    setSelectedPatientId(patientId);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full mt-8">
      {!selectedPatientId ? (
        <>
          <h1 className="text-2xl font-bold text-left mb-12">
            Select Patient For Prediction Facility
          </h1>

          {loading ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
                ></path>
              </svg>
            </div>
          ) : error ? (
            <p className="text-red-600 text-center">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Patient ID</th>
                    <th className="px-4 py-2 text-left">First Name</th>
                    <th className="px-4 py-2 text-left">Last Name</th>
                    <th className="px-4 py-2 text-left">Gender</th>
                    <th className="px-4 py-2 text-left">Date of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr
                      key={patient.patientId}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleRowClick(patient.patientId)}
                    >
                      <td className="border-t px-4 py-2">{patient.patientId}</td>
                      <td className="border-t px-4 py-2">{patient.firstName}</td>
                      <td className="border-t px-4 py-2">{patient.lastName}</td>
                      <td className="border-t px-4 py-2">{patient.gender}</td>
                      <td className="border-t px-4 py-2">
                        {new Date(patient.dateOfBirth).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <MachineLearningData patientId={selectedPatientId} />
      )}
    </div>
  );
};

const MachineLearningData = ({ patientId }) => {
    const [formData, setFormData] = useState({
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: "",
      });
    
      const [responseData, setResponseData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [animationCompleted, setAnimationCompleted] = useState(false);
      const [error, setError] = useState(null);
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validate form data
        for (const key in formData) {
          if (formData[key].trim() === "") {
            setError(`Please fill out all fields. The field "${key}" is missing.`);
            return;
          }
        }
    
        setError(null); // Clear any previous error
        setLoading(true);
        setAnimationCompleted(false);
    
        const jsonData = {
          data: {
            age: Number(formData.age),
            sex: Number(formData.sex),
            cp: Number(formData.cp),
            trestbps: Number(formData.trestbps),
            chol: Number(formData.chol),
            fbs: Number(formData.fbs),
            restecg: Number(formData.restecg),
            thalach: Number(formData.thalach),
            exang: Number(formData.exang),
            oldpeak: Number(formData.oldpeak),
            slope: Number(formData.slope),
            ca: Number(formData.ca),
            thal: Number(formData.thal),
          },
        };


        const jsonDataForTables = {
          
            age: Number(formData.age),
            sex: Number(formData.sex),
            cp: Number(formData.cp),
            trestbps: Number(formData.trestbps),
            chol: Number(formData.chol),
            fbs: Number(formData.fbs),
            restecg: Number(formData.restecg),
            thalach: Number(formData.thalach),
            exang: Number(formData.exang),
            oldpeak: Number(formData.oldpeak),
            slope: Number(formData.slope),
            ca: Number(formData.ca),
            thal: Number(formData.thal),
          };
    
        try {
          const response = await fetch("http://127.0.0.1:8005/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
          });
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const result = await response.json();

          const sendPredictionData = async (patientId, jsonData) => {
          console.log("Sending prediction data for patient:", patientId);

          try {
            
            const formattedData = {
              ...jsonDataForTables,
              // Add any necessary formatting here, if required
            };

            await axiosClient.post(`http://localhost:8080/api/doctors/patients/${patientIdx}/prediction-data`, formattedData);
            console.log("Prediction data sent successfully for patient:", patientIdx);
          } catch (error) {
            console.error("There was an error sending the prediction data:", error);
          }

          

        };

        const patientIdx = patientId; // Example patient ID
        const jsonDatas = JSON.stringify(jsonDataForTables);
        sendPredictionData(patientIdx, jsonDatas);

          
          // Simulate a loading animation delay
          setTimeout(() => {
            setResponseData(result);
            setAnimationCompleted(true);
            setLoading(false);
          }, 1500); // Match the new animation duration
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
      };
    
      return (
        <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: "linear-gradient(to right, #bffffff, #ffeeee)" }}
    >
    
          <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl"
          style={{ background: "linear-gradient(to right, #cccccc, #aaaaaa)" }}>
            <h1 className="text-3xl font-bold text-center mb-8">
              Prediction System - Evaluation of Patient {patientId}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    id: "age",
                    label: "Enter your age",
                    adornment: "years",
                    value: formData.age,
                  },
                  {
                    id: "sex",
                    label: "Sex (0 = Female, 1 = Male)",
                    adornment: "0 or 1",
                    value: formData.sex,
                  },
                  {
                    id: "cp",
                    label: "Chest Pain Type (0-3)",
                    adornment: "type",
                    value: formData.cp,
                  },
                  {
                    id: "trestbps",
                    label: "Resting Blood Pressure",
                    adornment: "mm Hg",
                    value: formData.trestbps,
                  },
                  {
                    id: "chol",
                    label: "Serum Cholesterol",
                    adornment: "mg/dL",
                    value: formData.chol,
                  },
                  {
                    id: "fbs",
                    label: "Fasting Blood Sugar (1 if > 120 mg/dL)",
                    adornment: "0 or 1",
                    value: formData.fbs,
                  },
                  {
                    id: "restecg",
                    label: "Resting ECG Result",
                    adornment: "0-2",
                    value: formData.restecg,
                  },
                  {
                    id: "thalach",
                    label: "Maximum Heart Rate",
                    adornment: "bpm",
                    value: formData.thalach,
                  },
                  {
                    id: "exang",
                    label: "Exercise-Induced Angina (1 = Yes)",
                    adornment: "0 or 1",
                    value: formData.exang,
                  },
                  {
                    id: "oldpeak",
                    label: "ST Depression",
                    adornment: "mm",
                    value: formData.oldpeak,
                  },
                  {
                    id: "slope",
                    label: "Slope of Peak Exercise ST Segment",
                    adornment: "0-2",
                    value: formData.slope,
                  },
                  {
                    id: "ca",
                    label: "Number of Major Vessels Colored by Fluoroscopy",
                    adornment: "0-3",
                    value: formData.ca,
                  },
                  {
                    id: "thal",
                    label: "Thalassemia (0-3)",
                    adornment: "0-3",
                    value: formData.thal,
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      className="block text-sm font-bold text-gray-700 mb-1"
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id={field.id}
                        name={field.id}
                        value={field.value}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder={field.adornment}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                        {field.adornment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
    
              {error && (
                <div className="text-red-500 text-center mt-4">
                  {error}
                </div>
              )}
    
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
    
            
            {loading && !animationCompleted && (
              <div className="loader-container mt-6">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <style>
                  {`
                  .loader-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                  }
                  .progress-bar {
                    width: 80%;
                    max-width: 400px;
                    height: 20px;
                    background-color: #e0e0e0;
                    border-radius: 10px;
                    overflow: hidden;
                  }
                  .progress {
                    width: 0;
                    height: 100%;
                    background: linear-gradient(90deg, #ed56f5, #e8bd2e);
                    animation: fill 1.5s linear;
                  }
                  @keyframes fill {
                    0% {
                      width: 0;
                    }
                    100% {
                      width: 100%;
                    }
                  }
                `}
                </style>
              </div>
            )}
    
    
            {responseData && animationCompleted && (
              <div className="mt-6" style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: "450px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)",
                    overflow: "hidden",
                    fontFamily: "'Roboto', sans-serif",
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
      
                  <div
                    style={{
                      background: "linear-gradient(135deg, #3182ce, #63b3ed)",
                      color: "#fff",
                      padding: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "inset 0 -4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                  </div>
    
        
                  <div
                    style={{
                      backgroundColor: "#efe",
                      padding: "30px",
                      textAlign: "center",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#2d3748",
                      borderTop: "1px solid #ddd",
                    }}
                  >
                    {responseData.Result}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    

export default MachineLearn;








/////////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosClient from "../../axios-client";
// import useStateContext from "../contexts/useStateContext";

// const MachineLearn = () => {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const { user } = useStateContext();

//   useEffect(() => {
//     const fetchPatients = async () => {
//       const doctor_id = user.doctorId;
//       try {
//         setLoading(true);
//         const response = await axiosClient.get(`/doctors/patients/bulk/${doctor_id}`);
//         if (response.data) {
//           setPatients(response.data);
//         } else {
//           setError("Failed to fetch patients data.");
//         }
//       } catch (err) {
//         setError("Failed to fetch patients data.");
//         console.error("Error fetching patients data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, [user.doctorId]);

//   const handleRowClick = (patientId) => {
//     setSelectedPatientId(patientId);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 w-full mt-8">
//       {!selectedPatientId ? (
//         <>
//           <h1 className="text-2xl font-bold text-left mb-12">
//             Select Patient For Prediction Facility
//           </h1>

//           {loading ? (
//             <div className="flex justify-center">
//               <svg
//                 className="animate-spin h-5 w-5 text-blue-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//                 ></path>
//               </svg>
//             </div>
//           ) : error ? (
//             <p className="text-red-600 text-center">{error}</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white shadow-md rounded-md">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="px-4 py-2 text-left">Patient ID</th>
//                     <th className="px-4 py-2 text-left">First Name</th>
//                     <th className="px-4 py-2 text-left">Last Name</th>
//                     <th className="px-4 py-2 text-left">Gender</th>
//                     <th className="px-4 py-2 text-left">Date of Birth</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {patients.map((patient) => (
//                     <tr
//                       key={patient.patientId}
//                       className="hover:bg-gray-50 cursor-pointer"
//                       onClick={() => handleRowClick(patient.patientId)}
//                     >
//                       <td className="border-t px-4 py-2">{patient.patientId}</td>
//                       <td className="border-t px-4 py-2">{patient.firstName}</td>
//                       <td className="border-t px-4 py-2">{patient.lastName}</td>
//                       <td className="border-t px-4 py-2">{patient.gender}</td>
//                       <td className="border-t px-4 py-2">
//                         {new Date(patient.dateOfBirth).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </>
//       ) : (
//         <MachineLearningData patientId={selectedPatientId} />
//       )}
//     </div>
//   );
// };

// const MachineLearningData = ({ patientId }) => {
//     const [formData, setFormData] = useState({
//         age: "",
//         sex: "",
//         cp: "",
//         trestbps: "",
//         chol: "",
//         fbs: "",
//         restecg: "",
//         thalach: "",
//         exang: "",
//         oldpeak: "",
//         slope: "",
//         ca: "",
//         thal: "",
//       });
    
//       const [responseData, setResponseData] = useState(null);
//       const [loading, setLoading] = useState(false);
//       const [animationCompleted, setAnimationCompleted] = useState(false);
//       const [error, setError] = useState(null);
    
//       const handleChange = (event) => {
//         setFormData({
//           ...formData,
//           [event.target.name]: event.target.value,
//         });
//       };
    
//       const handleSubmit = async (event) => {
//         event.preventDefault();
    
//         // Validate form data
//         for (const key in formData) {
//           if (formData[key].trim() === "") {
//             setError(`Please fill out all fields. The field "${key}" is missing.`);
//             return;
//           }
//         }
    
//         setError(null); // Clear any previous error
//         setLoading(true);
//         setAnimationCompleted(false);
    
//         const jsonData = {
//           data: {
//             age: Number(formData.age),
//             sex: Number(formData.sex),
//             cp: Number(formData.cp),
//             trestbps: Number(formData.trestbps),
//             chol: Number(formData.chol),
//             fbs: Number(formData.fbs),
//             restecg: Number(formData.restecg),
//             thalach: Number(formData.thalach),
//             exang: Number(formData.exang),
//             oldpeak: Number(formData.oldpeak),
//             slope: Number(formData.slope),
//             ca: Number(formData.ca),
//             thal: Number(formData.thal),
//           },
//         };


//         const jsonDataForTables = {
          
//             age: Number(formData.age),
//             sex: Number(formData.sex),
//             cp: Number(formData.cp),
//             trestbps: Number(formData.trestbps),
//             chol: Number(formData.chol),
//             fbs: Number(formData.fbs),
//             restecg: Number(formData.restecg),
//             thalach: Number(formData.thalach),
//             exang: Number(formData.exang),
//             oldpeak: Number(formData.oldpeak),
//             slope: Number(formData.slope),
//             ca: Number(formData.ca),
//             thal: Number(formData.thal),
//           };
    
//         try {
//           const response = await fetch("http://127.0.0.1:8005/predict", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(jsonData),
//           });
    
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
    
//           const result = await response.json();

//           const sendPredictionData = async (patientId, jsonData) => {
//           console.log("Sending prediction data for patient:", patientId);

//           try {
            
//             const formattedData = {
//               ...jsonDataForTables,
//               // Add any necessary formatting here, if required
//             };

//             await axiosClient.post(`http://localhost:8080/api/doctors/patients/${patientIdx}/prediction-data`, formattedData);
//             console.log("Prediction data sent successfully for patient:", patientIdx);
//           } catch (error) {
//             console.error("There was an error sending the prediction data:", error);
//           }

          

//         };

//         const patientIdx = patientId; // Example patient ID
//         const jsonDatas = JSON.stringify(jsonDataForTables);
//         sendPredictionData(patientIdx, jsonDatas);

          
//           // Simulate a loading animation delay
//           setTimeout(() => {
//             setResponseData(result);
//             setAnimationCompleted(true);
//             setLoading(false);
//           }, 1500); // Match the new animation duration
//         } catch (error) {
//           console.error("Error:", error);
//           setLoading(false);
//         }
//       };
    
//       return (
//         <div
//       className="flex items-center justify-center min-h-screen"
//       style={{ background: "linear-gradient(to right, #bffffff, #ffeeee)" }}
//     >
    
//           <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl"
//           style={{ background: "linear-gradient(to right, #cccccc, #aaaaaa)" }}>
//             <h1 className="text-3xl font-bold text-center mb-8">
//               Prediction System - Evaluation of Patient {patientId}
//             </h1>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {[
//                   {
//                     id: "age",
//                     label: "Enter your age",
//                     adornment: "years",
//                     value: formData.age,
//                   },
//                   {
//                     id: "sex",
//                     label: "Sex (0 = Female, 1 = Male)",
//                     adornment: "0 or 1",
//                     value: formData.sex,
//                   },
//                   {
//                     id: "cp",
//                     label: "Chest Pain Type (0-3)",
//                     adornment: "type",
//                     value: formData.cp,
//                   },
//                   {
//                     id: "trestbps",
//                     label: "Resting Blood Pressure",
//                     adornment: "mm Hg",
//                     value: formData.trestbps,
//                   },
//                   {
//                     id: "chol",
//                     label: "Serum Cholesterol",
//                     adornment: "mg/dL",
//                     value: formData.chol,
//                   },
//                   {
//                     id: "fbs",
//                     label: "Fasting Blood Sugar (1 if > 120 mg/dL)",
//                     adornment: "0 or 1",
//                     value: formData.fbs,
//                   },
//                   {
//                     id: "restecg",
//                     label: "Resting ECG Result",
//                     adornment: "0-2",
//                     value: formData.restecg,
//                   },
//                   {
//                     id: "thalach",
//                     label: "Maximum Heart Rate",
//                     adornment: "bpm",
//                     value: formData.thalach,
//                   },
//                   {
//                     id: "exang",
//                     label: "Exercise-Induced Angina (1 = Yes)",
//                     adornment: "0 or 1",
//                     value: formData.exang,
//                   },
//                   {
//                     id: "oldpeak",
//                     label: "ST Depression",
//                     adornment: "mm",
//                     value: formData.oldpeak,
//                   },
//                   {
//                     id: "slope",
//                     label: "Slope of Peak Exercise ST Segment",
//                     adornment: "0-2",
//                     value: formData.slope,
//                   },
//                   {
//                     id: "ca",
//                     label: "Number of Major Vessels Colored by Fluoroscopy",
//                     adornment: "0-3",
//                     value: formData.ca,
//                   },
//                   {
//                     id: "thal",
//                     label: "Thalassemia (0-3)",
//                     adornment: "0-3",
//                     value: formData.thal,
//                   },
//                 ].map((field) => (
//                   <div key={field.id}>
//                     <label
//                       className="block text-sm font-bold text-gray-700 mb-1"
//                       htmlFor={field.id}
//                     >
//                       {field.label}
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         id={field.id}
//                         name={field.id}
//                         value={field.value}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         placeholder={field.adornment}
//                       />
//                       <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
//                         {field.adornment}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
    
//               {error && (
//                 <div className="text-red-500 text-center mt-4">
//                   {error}
//                 </div>
//               )}
    
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
    
            
//             {loading && !animationCompleted && (
//               <div className="loader-container mt-6">
//                 <div className="progress-bar">
//                   <div className="progress"></div>
//                 </div>
//                 <style>
//                   {`
//                   .loader-container {
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     height: auto;
//                   }
//                   .progress-bar {
//                     width: 80%;
//                     max-width: 400px;
//                     height: 20px;
//                     background-color: #e0e0e0;
//                     border-radius: 10px;
//                     overflow: hidden;
//                   }
//                   .progress {
//                     width: 0;
//                     height: 100%;
//                     background: linear-gradient(90deg, #ed56f5, #e8bd2e);
//                     animation: fill 1.5s linear;
//                   }
//                   @keyframes fill {
//                     0% {
//                       width: 0;
//                     }
//                     100% {
//                       width: 100%;
//                     }
//                   }
//                 `}
//                 </style>
//               </div>
//             )}
    
    
//             {responseData && animationCompleted && (
//               <div className="mt-6" style={{ display: "flex", justifyContent: "center" }}>
//                 <div
//                   style={{
//                     width: "450px",
//                     borderRadius: "15px",
//                     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)",
//                     overflow: "hidden",
//                     fontFamily: "'Roboto', sans-serif",
//                     transform: "translateY(-5px)",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   }}
//                 >
      
//                   <div
//                     style={{
//                       background: "linear-gradient(135deg, #3182ce, #63b3ed)",
//                       color: "#fff",
//                       padding: "20px",
//                       textAlign: "center",
//                       fontWeight: "bold",
//                       fontSize: "1.4rem",
//                       height: "100px",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       boxShadow: "inset 0 -4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   >
//                   </div>
    
        
//                   <div
//                     style={{
//                       backgroundColor: "#efe",
//                       padding: "30px",
//                       textAlign: "center",
//                       height: "150px",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       fontSize: "1.5rem",
//                       fontWeight: "bold",
//                       color: "#2d3748",
//                       borderTop: "1px solid #ddd",
//                     }}
//                   >
//                     {responseData.Result}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }
    
    

// export default MachineLearn;