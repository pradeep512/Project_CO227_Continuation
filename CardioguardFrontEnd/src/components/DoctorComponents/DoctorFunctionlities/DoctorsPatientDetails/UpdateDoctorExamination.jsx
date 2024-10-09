// import React, { useState } from "react";
// import axiosClient from "../../../../../axios-client"; // Adjust the path based on your structure

// const DoctorExaminationUpdate = ({ patientId, examinationData, onClose, refreshData }) => {
//   const [formData, setFormData] = useState({
//     tachycardiaAtRest: examinationData.tachycardiaAtRest,
//     hypotension: examinationData.hypotension,
//     raisedJugularVenousPressure: examinationData.raisedJugularVenousPressure,
//     displacedApexBeat: examinationData.displacedApexBeat,
//     pedalAndAnkleOedema: examinationData.pedalAndAnkleOedema,
//     gallopRhythm: examinationData.gallopRhythm,
//     tachypnoea: examinationData.tachypnoea,
//     ascites: examinationData.ascites,
//     examinationDate: examinationData.examinationDate,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosClient.put(
//         `/doctors/${patientId}/examines/${examinationData.examinationCode}`,
//         formData
//       );
//       refreshData(); // Refresh the data after the update
//       onClose(); // Close the modal
//     } catch (err) {
//       console.error("Error updating examination data:", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">Update Examination Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label>
//             Tachycardia at Rest:
//             <input
//               type="checkbox"
//               name="tachycardiaAtRest"
//               checked={formData.tachycardiaAtRest}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Hypotension:
//             <input
//               type="checkbox"
//               name="hypotension"
//               checked={formData.hypotension}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Raised Jugular Venous Pressure:
//             <input
//               type="checkbox"
//               name="raisedJugularVenousPressure"
//               checked={formData.raisedJugularVenousPressure}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Displaced Apex Beat:
//             <input
//               type="checkbox"
//               name="displacedApexBeat"
//               checked={formData.displacedApexBeat}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Pedal and Ankle Oedema:
//             <input
//               type="checkbox"
//               name="pedalAndAnkleOedema"
//               checked={formData.pedalAndAnkleOedema}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Gallop Rhythm:
//             <input
//               type="checkbox"
//               name="gallopRhythm"
//               checked={formData.gallopRhythm}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Tachypnoea:
//             <input
//               type="checkbox"
//               name="tachypnoea"
//               checked={formData.tachypnoea}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Ascites:
//             <input
//               type="checkbox"
//               name="ascites"
//               checked={formData.ascites}
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label>
//             Examination Date:
//             <input
//               type="date"
//               name="examinationDate"
//               value={formData.examinationDate}
//               onChange={handleChange}
//             />
//           </label>
//         </div>

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Update
//           </button>
//           <button
//             type="button"
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DoctorExaminationUpdate;



// import React, { useState, useEffect } from 'react';
// import axiosClient from '../../../../../axios-client'; // Adjust the path to your axios-client

// const DoctorExaminationUpdate = ({ patientId, examinationData, onClose, fetchData }) => {
//   // Initialize state for form fields, defaulting to the examinationData or fallback to false/null
//   const [formData, setFormData] = useState({
//     tachycardiaAtRest: examinationData?.tachycardiaAtRest || false,
//     hypotension: examinationData?.hypotension || false,
//     raisedJugularVenousPressure: examinationData?.raisedJugularVenousPressure || false,
//     displacedApexBeat: examinationData?.displacedApexBeat || false,
//     pleuralEffusion: examinationData?.pleuralEffusion || false,
//     hepatomegaly: examinationData?.hepatomegaly || false,
//     gallopRhythm: examinationData?.gallopRhythm || false,
//     pedalAndAnkleOedema: examinationData?.pedalAndAnkleOedema || false,
//     tachypnoea: examinationData?.tachypnoea || false,
//     ascites: examinationData?.ascites || false,
//     examinationDate: examinationData?.examinationDate || '',
//   });

//   // Handle input changes and update the formData state
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const updatedValue = type === 'checkbox' ? checked : value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: updatedValue,
//     }));
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Update the existing record using PUT request
//       await axiosClient.put(`/doctors/${patientId}/examines/${examinationData.examinationCode}`, formData);
//       fetchData(); // Refresh the data after successful update
//       onClose(); // Close the modal
//     } catch (err) {
//       console.error('Error updating examination data:', err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Update Doctor Examination</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-bold mb-2">Examination Date:</label>
//             <input
//               type="date"
//               name="examinationDate"
//               value={formData.examinationDate}
//               onChange={handleInputChange}
//               className="border rounded p-2 w-full"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Tachycardia at Rest:</label>
//             <input
//               type="checkbox"
//               name="tachycardiaAtRest"
//               checked={formData.tachycardiaAtRest}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.tachycardiaAtRest ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Hypotension:</label>
//             <input
//               type="checkbox"
//               name="hypotension"
//               checked={formData.hypotension}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.hypotension ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Raised Jugular Venous Pressure:</label>
//             <input
//               type="checkbox"
//               name="raisedJugularVenousPressure"
//               checked={formData.raisedJugularVenousPressure}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.raisedJugularVenousPressure ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Displaced Apex Beat:</label>
//             <input
//               type="checkbox"
//               name="displacedApexBeat"
//               checked={formData.displacedApexBeat}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.displacedApexBeat ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Pleural Effusion:</label>
//             <input
//               type="checkbox"
//               name="pleuralEffusion"
//               checked={formData.pleuralEffusion}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.pleuralEffusion ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Hepatomegaly:</label>
//             <input
//               type="checkbox"
//               name="hepatomegaly"
//               checked={formData.hepatomegaly}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.hepatomegaly ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Gallop Rhythm:</label>
//             <input
//               type="checkbox"
//               name="gallopRhythm"
//               checked={formData.gallopRhythm}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.gallopRhythm ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Pedal and Ankle Oedema:</label>
//             <input
//               type="checkbox"
//               name="pedalAndAnkleOedema"
//               checked={formData.pedalAndAnkleOedema}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.pedalAndAnkleOedema ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Tachypnoea:</label>
//             <input
//               type="checkbox"
//               name="tachypnoea"
//               checked={formData.tachypnoea}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.tachypnoea ? 'Yes' : 'No'}</span>
//           </div>

//           <div>
//             <label className="block font-bold mb-2">Ascites:</label>
//             <input
//               type="checkbox"
//               name="ascites"
//               checked={formData.ascites}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <span>{formData.ascites ? 'Yes' : 'No'}</span>
//           </div>
//         </div>

//         <div className="mt-4 flex justify-end">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Update
//           </button>
//           <button
//             type="button"
//             onClick={onClose}
//             className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DoctorExaminationUpdate;


import React, { useEffect, useState } from "react";
import axiosClient from "../../../../../axios-client"; // Adjust the path to your axios-client

const DoctorExaminationUpdate = ({ patientId, examinationData, onClose, fetchData }) => {
  const [formData, setFormData] = useState({
    tachycardiaAtRest: false,
    hypotension: false,
    raisedJugularVenousPressure: false,
    displacedApexBeat: false,
    pedalAndAnkleOedema: false,
    gallopRhythm: false,
    tachypnoea: false,
    ascites: false,
    examinationCode: "", // Add this to store the examination code
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (examinationData) {
      setFormData({
        ...examinationData,
        examinationCode: examinationData.examinationCode, // Set the examination code from props
      });
    }
  }, [examinationData]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await axiosClient.put(`/doctors/${patientId}/examines/${formData.examinationCode}`, formData);
      fetchData(); // Refresh the examination data
      onClose(); // Close the modal after successful submission
    } catch (err) {
      setError("Failed to update examination data.");
      console.error("Error updating examination data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">Update Examination Record</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {loading && <p className="text-blue-500">Updating...</p>}
      <div className="mb-4">
        <label>
          Tachycardia at Rest:
          <input
            type="checkbox"
            name="tachycardiaAtRest"
            checked={formData.tachycardiaAtRest}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Hypotension:
          <input
            type="checkbox"
            name="hypotension"
            checked={formData.hypotension}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Raised Jugular Venous Pressure:
          <input
            type="checkbox"
            name="raisedJugularVenousPressure"
            checked={formData.raisedJugularVenousPressure}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Displaced Apex Beat:
          <input
            type="checkbox"
            name="displacedApexBeat"
            checked={formData.displacedApexBeat}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Pedal and Ankle Oedema:
          <input
            type="checkbox"
            name="pedalAndAnkleOedema"
            checked={formData.pedalAndAnkleOedema}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Gallop Rhythm:
          <input
            type="checkbox"
            name="gallopRhythm"
            checked={formData.gallopRhythm}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Tachypnoea:
          <input
            type="checkbox"
            name="tachypnoea"
            checked={formData.tachypnoea}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Ascites:
          <input
            type="checkbox"
            name="ascites"
            checked={formData.ascites}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      <button
        type="button"
        onClick={onClose}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default DoctorExaminationUpdate;

