// import { useState, useEffect } from "react";
// import axiosClient from "../../../axios-client";
// import PatientProfileHeader from "../PatientHomePageComponents/PatientProfileHeader";
// import PatientContactInfo from "../PatientHomePageComponents/PatientContactInfo";
// import PatientGeneralInfo from "../PatientHomePageComponents/PatientGeneralInfo";
// import CalendarComponent from "./Calender";

// const PatientDashboard = () => {
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const patientId = 1;

//   useEffect(() => {
//     const fetchPatientDataById = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         setPatient(null);

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
//   }, [patientId]);

//   return (
//     <div className="p-8 space-y-8 bg-gray-120">
//       {/* Patient Profile Header */}
    
//         <PatientProfileHeader />

//       {/* Contact and General Info */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Contact Info */}
//           <PatientContactInfo />
//         {/* General Info */}
//           <PatientGeneralInfo />
//           <CalendarComponent/>
//       </div>

//     </div>
//   );
// };

// export default PatientDashboard;



import { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import PatientProfileHeader from "../PatientHomePageComponents/PatientProfileHeader";
import PatientContactInfo from "../PatientHomePageComponents/PatientContactInfo";
import PatientGeneralInfo from "../PatientHomePageComponents/PatientGeneralInfo";
import CalendarComponent from "./Calender";

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const patientId = 1;

  useEffect(() => {
    const fetchPatientDataById = async () => {
      try {
        setLoading(true);
        setError(null);
        setPatient(null);

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
  }, [patientId]);

  return (
    <div className="p-8 space-y-8 bg-gray-100">
      {/* Patient Profile Header */}
      <PatientProfileHeader />

      {/* Contact and General Info */}
      <div className="grid grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
          <PatientContactInfo />
        </div>
        {/* General Info */}
        <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
          <PatientGeneralInfo />
        </div>
        {/* Calendar Component */}
        <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
