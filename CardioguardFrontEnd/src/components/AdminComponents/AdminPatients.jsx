// // AdminPatients.jsx
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../axios-client";

// const AdminPatients = () => {
//   const { patientId } = useParams(); // Get patientId from URL
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         const response = await axiosClient.get(`admin/patient/${patientId}`);
//         setPatient(response.data);
//       } catch (err) {
//         setError("Please select a patient from dashboard!");
//         console.error("Error fetching patient data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientData();
//   }, [patientId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Patient Details</h1>
//       {patient && (
//         <div className="bg-white p-6 shadow-md rounded-lg">
//           <div className="flex items-center mb-4">
//             <img
//               src="https://via.placeholder.com/60"
//               alt="Patient"
//               className="rounded-full w-16 h-16"
//             />
//             <div className="ml-4">
//               <p className="font-semibold">{patient.firstName} {patient.lastName}</p>
//               <p>Patient ID: {patient.patientId}</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="font-bold">Personal Info</h4>
//               <p>Email: {patient.email}</p>
//               <p>D.O.B: {patient.dateOfBirth}</p>
//               <p>Gender: {patient.gender}</p>
//               <p>N.I.C: {patient.nic}</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="font-bold">Medical Info</h4>
//               <p>Height: {patient.height}</p>
//               <p>Weight: {patient.weight}</p>
//               <p>Blood Pressure: {patient.bloodPressure}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPatients;







// // AdminPatients.jsx
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../axios-client";
// import FetchAllPatients from "./FetchAllPatients";

// const AdminPatients = () => {
//   const { patientId } = useParams(); // Get patientId from URL
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         const response = await axiosClient.get(`admin/patients`);
//         setPatient(response.data);
//       } catch (err) {
//         setError("Please select a patient from dashboard!");
//         console.error("Error fetching patient data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientData();
//   }, [patientId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div>
//       <FetchAllPatients/>
//     </div>
//   );
// };

// export default AdminPatients;

import FetchAllPatients from "./FetchAllPatients";

const AdminPatients = () => {
  return (
    <div>
      {/* Render the FetchAllPatients component */}
      <FetchAllPatients />
    </div>
  );
};

export default AdminPatients;
