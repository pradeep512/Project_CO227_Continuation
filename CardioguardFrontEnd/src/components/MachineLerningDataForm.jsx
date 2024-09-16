// import { useState } from "react";

// export default function MachineLearningData() {
//   const [formData, setFormData] = useState({
//     age: "",
//     sex: "",
//     cp: "",
//     trestbps: "",
//     chol: "",
//     fbs: "",
//     restecg: "",
//     thalach: "",
//     exang: "",
//     oldpeak: "",
//     slope: "",
//     ca: "",
//     thal: "",
//   });

//   const [responseData, setResponseData] = useState(null);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const jsonData = {
//       data: {
//         age: Number(formData.age),
//         sex: Number(formData.sex),
//         cp: Number(formData.cp),
//         trestbps: Number(formData.trestbps),
//         chol: Number(formData.chol),
//         fbs: Number(formData.fbs),
//         restecg: Number(formData.restecg),
//         thalach: Number(formData.thalach),
//         exang: Number(formData.exang),
//         oldpeak: Number(formData.oldpeak),
//         slope: Number(formData.slope),
//         ca: Number(formData.ca),
//         thal: Number(formData.thal),
//       },
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8005/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(jsonData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       setResponseData(result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
//         <h1 className="text-3xl font-bold text-center mb-8">
//           The Prediction System - Evaluation of Patients
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {[
//               {
//                 id: "age",
//                 label: "Enter your age",
//                 adornment: "years",
//                 value: formData.age,
//               },
//               {
//                 id: "sex",
//                 label: "Sex (0 = Female, 1 = Male)",
//                 adornment: "0 or 1",
//                 value: formData.sex,
//               },
//               {
//                 id: "cp",
//                 label: "Chest Pain Type (0-3)",
//                 adornment: "type",
//                 value: formData.cp,
//               },
//               {
//                 id: "trestbps",
//                 label: "Resting Blood Pressure",
//                 adornment: "mm Hg",
//                 value: formData.trestbps,
//               },
//               {
//                 id: "chol",
//                 label: "Serum Cholesterol",
//                 adornment: "mg/dL",
//                 value: formData.chol,
//               },
//               {
//                 id: "fbs",
//                 label: "Fasting Blood Sugar (1 if > 120 mg/dL)",
//                 adornment: "0 or 1",
//                 value: formData.fbs,
//               },
//               {
//                 id: "restecg",
//                 label: "Resting ECG Result",
//                 adornment: "0-2",
//                 value: formData.restecg,
//               },
//               {
//                 id: "thalach",
//                 label: "Maximum Heart Rate",
//                 adornment: "bpm",
//                 value: formData.thalach,
//               },
//               {
//                 id: "exang",
//                 label: "Exercise-Induced Angina (1 = Yes)",
//                 adornment: "0 or 1",
//                 value: formData.exang,
//               },
//               {
//                 id: "oldpeak",
//                 label: "ST Depression",
//                 adornment: "mm",
//                 value: formData.oldpeak,
//               },
//               {
//                 id: "slope",
//                 label: "Slope of Peak Exercise ST Segment",
//                 adornment: "0-2",
//                 value: formData.slope,
//               },
//               {
//                 id: "ca",
//                 label: "Number of Major Vessels Colored by Fluoroscopy",
//                 adornment: "0-3",
//                 value: formData.ca,
//               },
//               {
//                 id: "thal",
//                 label: "Thalassemia (0-3)",
//                 adornment: "0-3",
//                 value: formData.thal,
//               },
//             ].map((field) => (
//               <div key={field.id}>
//                 <label
//                   className="block text-sm font-bold text-gray-700 mb-1"
//                   htmlFor={field.id}
//                 >
//                   {field.label}
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id={field.id}
//                     name={field.id}
//                     value={field.value}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     placeholder={field.adornment}
//                   />
//                   <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
//                     {field.adornment}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>

//         {/* {responseData && (
//           <div className="mt-6">
//           <div className="bg-gray-100 p-4 rounded">
//             <p><strong style={{alignItems:'center'}}>Name:</strong></p>
//             <p><strong></strong> {responseData.Result}</p>

//           </div>
//           </div>
//         )} */}

// {responseData && (
//   <div className="mt-6" style={{ display: "flex", justifyContent: "center" }}>
//     <div
//       style={{
//         width: "450px",
//         borderRadius: "15px",
//         boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)",
//         overflow: "hidden",
//         fontFamily: "'Roboto', sans-serif",
//         transform: "translateY(-5px)",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//       }}
//     >
      
//       {/* Upper part with light blue background and title */}
//       <div
//         style={{
//           background: "linear-gradient(135deg, #3182ce, #63b3ed)",
//           color: "#fff",
//           padding: "20px",
//           textAlign: "center",
//           fontWeight: "bold",
//           fontSize: "1.4rem",
//           height: "100px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           boxShadow: "inset 0 -4px 8px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         Prediction Results
//       </div>

//       {/* Lower part with white background for the result */}
//       <div
//         style={{
//           backgroundColor: "#efe",
//           padding: "30px",
//           textAlign: "center",
//           height: "150px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "1.5rem",
//           fontWeight: "bold",
//           color: "#2d3748",
//           borderTop: "1px solid #ddd",
//         }}
//       >
//         {responseData.Result}
//       </div>
//     </div>
//   </div>
// )}




//       </div>
//     </div>
//   );
// }


// New Code
import { useState } from "react";

export default function MachineLearningData() {
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
          The Prediction System - Evaluation of Patients
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
                Prediction Results
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








////////////////////////////////////////////////
// import { useState } from "react";

// export default function MachineLearningData() {
//   const [formData, setFormData] = useState({
//     age: "",
//     sex: "",
//     cp: "",
//     trestbps: "",
//     chol: "",
//     fbs: "",
//     restecg: "",
//     thalach: "",
//     exang: "",
//     oldpeak: "",
//     slope: "",
//     ca: "",
//     thal: "",
//   });

//   const [responseData, setResponseData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [animationCompleted, setAnimationCompleted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate form data
//     for (const key in formData) {
//       if (formData[key].trim() === "") {
//         setError(`Please fill out all fields. The field "${key}" is missing.`);
//         return;
//       }
//     }

//     setError(null); 
//     setLoading(true);
//     setAnimationCompleted(false);

//     const jsonData = {
//       data: {
//         age: Number(formData.age),
//         sex: Number(formData.sex),
//         cp: Number(formData.cp),
//         trestbps: Number(formData.trestbps),
//         chol: Number(formData.chol),
//         fbs: Number(formData.fbs),
//         restecg: Number(formData.restecg),
//         thalach: Number(formData.thalach),
//         exang: Number(formData.exang),
//         oldpeak: Number(formData.oldpeak),
//         slope: Number(formData.slope),
//         ca: Number(formData.ca),
//         thal: Number(formData.thal),
//       },
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8005/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(jsonData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();

//       setTimeout(() => {
//         setResponseData(result);
//         setAnimationCompleted(true);
//         setLoading(false);
//       }, 1500);
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
//         <h1 className="text-3xl font-bold text-center mb-8">
//           The Prediction System - Evaluation of Patients
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Render form inputs dynamically */}
//             {[
//               { id: "age", label: "Enter your age", adornment: "years" },
//               { id: "sex", label: "Sex (0 = Female, 1 = Male)", adornment: "0 or 1" },
//               { id: "cp", label: "Chest Pain Type (0-3)", adornment: "type" },
//               { id: "trestbps", label: "Resting Blood Pressure", adornment: "mm Hg" },
//               { id: "chol", label: "Serum Cholesterol", adornment: "mg/dL" },
//               { id: "fbs", label: "Fasting Blood Sugar (1 if > 120 mg/dL)", adornment: "0 or 1" },
//               { id: "restecg", label: "Resting ECG Result", adornment: "0-2" },
//               { id: "thalach", label: "Maximum Heart Rate", adornment: "bpm" },
//               { id: "exang", label: "Exercise-Induced Angina (1 = Yes)", adornment: "0 or 1" },
//               { id: "oldpeak", label: "ST Depression", adornment: "mm" },
//               { id: "slope", label: "Slope of Peak Exercise ST Segment", adornment: "0-2" },
//               { id: "ca", label: "Number of Major Vessels Colored by Fluoroscopy", adornment: "0-3" },
//               { id: "thal", label: "Thalassemia (0-3)", adornment: "0-3" },
//             ].map((field) => (
//               <div key={field.id}>
//                 <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor={field.id}>
//                   {field.label}
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id={field.id}
//                     name={field.id}
//                     value={formData[field.id]}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     placeholder={field.adornment}
//                   />
//                   <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
//                     {field.adornment}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {error && <div className="text-red-500 text-center mt-4">{error}</div>}

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Submit"}
//               </button>
//             </div>
//             </form>

//             {/* Display Prediction Results and Graphs */}
//             {responseData && animationCompleted && (
//             <div className="mt-8">
//               <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
//                 {responseData.Result}
//               </h2>
//               <p className="text-center text-gray-700 mb-4">
//                 Accuracy on Training Data: {responseData['Accuracy on Training data']}
//               </p>
//               <p className="text-center text-gray-700 mb-4">
//                 Accuracy on Test Data: {responseData['Accuracy on Test data']}
//               </p>

//               <div className="mt-6">
//                 <h3 className="text-xl font-semibold text-center mb-4">
//                   Graphs Comparing Input Data with Dataset:
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {/* Dynamically render graphs from response data */}
//                   {Object.entries(responseData.Graphs).map(([feature, graphData], index) => (
//                     <div key={index} className="border rounded-lg p-4 shadow-sm">
//                       <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
//                         {feature}
//                       </h4>
//                       <img
//                         src={`data:image/png;base64,${graphData}`}
//                         alt={`${feature} graph`}
//                         className="w-full h-auto rounded-lg"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
// )}
// </div>
// </div>
// );
// }

