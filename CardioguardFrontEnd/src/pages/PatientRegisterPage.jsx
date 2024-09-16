import { useState } from "react";
import axiosClient from "../../axios-client";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RegisterPage() {
  const [data, setData] = useState({
    nic: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = data.firstName ? "" : "First Name is required.";
    tempErrors.lastName = data.lastName ? "" : "Last Name is required.";
    tempErrors.nic = data.nic ? "" : "National ID is required.";
    tempErrors.gender = data.gender ? "" : "Gender is required.";
    tempErrors.dateOfBirth = data.dateOfBirth
      ? ""
      : "Date of Birth is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedData = {
      nic: formData.get("id"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      gender: formData.get("gender"),
      dateOfBirth: formData.get("dob"),
    };
    setData(updatedData);

    if (validate()) {
      console.log("Submitting data:", updatedData); // Log the data being sent

      axiosClient
        .post("/patients", updatedData)
        .then((response) => {
          const patientId = response.data.patientId; // Get the patientId from the response
          console.log("Data submitted successfully, Patient ID:", patientId);
          navigate("/register-user", { state: { patientId } }); // Navigate to /registerpatient with patientId
        })
        .catch((error) => {
          console.error("There was an error submitting the data:", error);
          // handle error, e.g., display error message to the user
        });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-6">
          <h1 className="text-xl font-bold mb-6 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`w-full px-3 py-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    errors.firstName
                      ? "focus:ring-red-500"
                      : "focus:ring-indigo-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`w-full px-3 py-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    errors.lastName
                      ? "focus:ring-red-500"
                      : "focus:ring-indigo-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">National ID</label>
              <input
                type="text"
                name="id"
                className={`w-full px-3 py-2 border ${
                  errors.nic ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.nic ? "focus:ring-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.nic && (
                <p className="text-red-500 text-sm mt-1">{errors.nic}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Gender</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className={`w-full px-3 py-2 border ${
                  errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.dateOfBirth
                    ? "focus:ring-red-500"
                    : "focus:ring-indigo-500"
                }`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span>
                I want to receive inspiration, marketing promotions, and updates
                via email.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Next
            </button>

            <div className="text-center mt-4">
              <Link to="/login" className="text-indigo-500 hover:underline">
                Already have an account? Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
