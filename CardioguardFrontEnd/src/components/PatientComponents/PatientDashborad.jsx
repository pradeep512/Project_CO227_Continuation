// import NextClinicDayCountdown from "./PatientFunctionlities/PatientDashboardDetails/NextClinicDayCountdown";
// import PatientContactInfo from "./PatientFunctionlities/PatientDashboardDetails/PatientContactInfo";
// import CalendarComponent from "./PatientFunctionlities/PatientDashboardDetails/PatientFunctionlityUtils/Calender";
// import PatientGeneralInfo from "./PatientFunctionlities/PatientDashboardDetails/PatientGeneralInfo";
// import PatientProfileHeader from "./PatientFunctionlities/PatientDashboardDetails/PatientProfileHeader";

// const PatientDashboard = () => {
//   //   const [selectedDate, setSelectedDate] = useState(new Date()); // State for the selected date

//   // Example date for the next clinic day
//   const nextClinicDay = "2024-09-30";

//   return (
//     <div className="p-8 space-y-8 bg-gray-100">
//       {/* Patient Profile Header */}
//       <PatientProfileHeader />

//       {/* Contact and General Info */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* Contact Info */}
//         <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
//           <PatientContactInfo />
//         </div>
//         {/* General Info */}
//         <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
//           <PatientGeneralInfo />
//         </div>
//         {/* Calendar Component */}
//         <div className="bg-white shadow-lg rounded-lg p-4 h-auto">
//           <CalendarComponent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;



import NextClinicDayCountdown from "./PatientFunctionlities/PatientDashboardDetails/NextClinicDayCountdown";
import PatientContactInfo from "./PatientFunctionlities/PatientDashboardDetails/PatientContactInfo";
import CalendarComponent from "./PatientFunctionlities/PatientDashboardDetails/PatientFunctionlityUtils/Calender";
import PatientGeneralInfo from "./PatientFunctionlities/PatientDashboardDetails/PatientGeneralInfo";
import PatientProfileHeader from "./PatientFunctionlities/PatientDashboardDetails/PatientProfileHeader";

const PatientDashboard = () => {
  // Example date for the next clinic day
  const nextClinicDay = "2024-09-30";

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      {/* Patient Profile Header */}
      <PatientProfileHeader />

      {/* Contact and General Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <PatientContactInfo />
        </div>

        {/* General Info */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <PatientGeneralInfo />
        </div>

        {/* Calendar Component */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:col-span-2 lg:col-span-1">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
