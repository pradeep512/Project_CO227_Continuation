import { useState } from "react";
import axiosClient from "../../../axios-client"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const CreateDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    nic: "",
    surname: "",
    lastName: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDoctorData({
      ...doctorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting doctor data:", doctorData); // Debugging line
      const response = await axiosClient.post(
        "/admin/createDoctor",
        doctorData
      );
      console.log("Doctor created successfully:", response.data);

      // Set the success message
      setSuccessMessage("Doctor created successfully.");
      setError(null); // Clear any previous errors

      // Delay redirection to show the success message
      setTimeout(() => {
        navigate("/admin/doctors"); // Navigate back to the doctors list page after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      console.error("Error creating doctor:", error);
      setError("Failed to create doctor. Please try again.");
      setSuccessMessage(null); // Clear any previous success messages
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create New Doctor
      </h2>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      {successMessage && (
        <p className="text-green-600 mb-4 text-center">{successMessage}</p>
      )}{" "}
      {/* Display success message */}
      <div className="mb-4">
        <label
          htmlFor="nic"
          className="block text-sm font-medium text-gray-700"
        >
          NIC
        </label>
        <input
          type="text"
          name="nic"
          id="nic"
          value={doctorData.nic}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="surname"
          className="block text-sm font-medium text-gray-700"
        >
          Surname
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
          value={doctorData.surname}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={doctorData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Create Doctor
      </button>
    </form>
  );
};

export default CreateDoctorForm;
