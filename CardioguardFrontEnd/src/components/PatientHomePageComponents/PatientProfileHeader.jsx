// import { useState, useEffect } from "react";
// import axiosClient from "../../../axios-client"; // Updated path for axiosClient

// const PatientProfileHeader = () => {
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Hardcoded patient ID
//   const patientId = 1; // Change this to the ID you want to fetch

//   // Fetch patient data when the component loads
//   useEffect(() => {
//     const fetchPatientDataById = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         setPatient(null);

//         // Fetch patient data
//         const patientResponse = await axiosClient.get(`/patients/${patientId}`);

//         if (patientResponse.data) {
//           setPatient(patientResponse.data);
//         } else {
//           setError("No patient data found.");
//         }
//       } catch (err) {
//         setError("Failed to fetch data. Please check the Patient ID and try again.");
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientDataById();
//   }, [patientId]); // Fetch data when patientId is loaded (which is hardcoded here)

//   return (
//     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
//       {patient ? (
//         <>
//           {/* Left Section: User Icon, Name, Patient ID */}
//           <div className="flex items-center space-x-4">
//             {/* User Icon */}
//             <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//               <svg
//                 className="w-8 h-8 text-blue-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5.121 19.121A1.25 1.25 0 016.25 18h11.5a1.25 1.25 0 011.129.736A9.978 9.978 0 0012 21a9.978 9.978 0 00-6.879-2.879zM12 11a5 5 0 100-10 5 5 0 000 10z"
//                 />
//               </svg>
//             </div>

//             <div>
//               {/* Patient Name */}
//               <div className="flex items-center space-x-2">
//                 <h2 className="text-lg font-bold text-gray-900">
//                   {patient.firstName} {patient.lastName}
//                 </h2>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
//                   Active
//                 </span>
//               </div>

//               {/* Patient ID */}
//               <p className="text-sm text-gray-500">
//                 Patient ID: <span className="font-bold">{patient.patientId}</span>
//               </p>
//             </div>
//           </div>

//           {/* Right Section: Actions */}
//           <div className="flex space-x-4">
//             {/* Message Icon */}
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
//               <svg
//                 className="w-6 h-6 text-gray-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M7 8h10M7 12h8m-3 4h6m-9 0a1 1 0 01-1-1v-5a1 1 0 011-1h.01"
//                 />
//               </svg>
//             </button>

//             {/* Call Icon */}
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
//               <svg
//                 className="w-6 h-6 text-gray-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 10v7a1 1 0 001 1h3l2.4-2.4a1 1 0 011.6 0L12 18a1 1 0 01.6 1.4l-2 3.2A1 1 0 0110 23H4a2 2 0 01-2-2v-9a2 2 0 012-2h4"
//                 />
//               </svg>
//             </button>

//             {/* Edit Button */}
//             <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
//               Edit Data
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="text-center text-gray-500">
//           {error || "Loading..."}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientProfileHeader;




import { useState, useEffect } from "react";
import axiosClient from "../../../axios-client"; // Updated path for axiosClient

const PatientProfileHeader = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hardcoded patient ID
  const patientId = 1; // Change this to the ID you want to fetch

  // Fetch patient data when the component loads
  useEffect(() => {
    const fetchPatientDataById = async () => {
      try {
        setLoading(true);
        setError(null);
        setPatient(null);

        // Fetch patient data
        const patientResponse = await axiosClient.get(`/patients/${patientId}`);

        if (patientResponse.data) {
          setPatient(patientResponse.data);
        } else {
          setError("No patient data found.");
        }
      } catch (err) {
        setError("Failed to fetch data. Please check the Patient ID and try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDataById();
  }, [patientId]); // Fetch data when patientId is loaded (which is hardcoded here)

  return (
    <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4">
      {patient ? (
        <>
          {/* Left Section: User Icon, Name, Patient ID */}
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 19.121A1.25 1.25 0 016.25 18h11.5a1.25 1.25 0 011.129.736A9.978 9.978 0 0012 21a9.978 9.978 0 00-6.879-2.879zM12 11a5 5 0 100-10 5 5 0 000 10z"
                />
              </svg>
            </div>

            <div>
              {/* Patient Name */}
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-gray-900">
                  {patient.firstName} {patient.lastName}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Active
                </span>
              </div>

              {/* Patient ID */}
              <p className="text-sm text-gray-500">
                Patient ID: <span className="font-bold">{patient.patientId}</span>
              </p>
            </div>
          </div>

          {/* Right Section: Actions */}
          <div className="flex space-x-4">
            {/* Message Icon */}
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h8m-3 4h6m-9 0a1 1 0 01-1-1v-5a1 1 0 011-1h.01"
                />
              </svg>
            </button>

            {/* Call Icon */}
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10v7a1 1 0 001 1h3l2.4-2.4a1 1 0 011.6 0L12 18a1 1 0 01.6 1.4l-2 3.2A1 1 0 0110 23H4a2 2 0 01-2-2v-9a2 2 0 012-2h4"
                />
              </svg>
            </button>

            {/* Edit Button */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Edit Data
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">
          {error || "Loading..."}
        </div>
      )}
    </div>
  );
};

export default PatientProfileHeader;

