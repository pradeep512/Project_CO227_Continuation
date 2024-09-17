// import React, { useState, useCallback } from 'react';
// import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

// // Define container style for the Google Map
// const containerStyle = {
//     width: '100%',
//     height: '500px',
// };

// // Center the map over Sri Lanka
// const center = {
//     lat: 7.8731,
//     lng: 80.7718,
// };

// // Predefined list of hospital locations
// const hospitalLocations = [
//     { id: 1, name: 'National Hospital of Sri Lanka', position: { lat: 6.9271, lng: 79.8612 } },
//     { id: 2, name: 'Teaching Hospital Karapitiya', position: { lat: 6.0535, lng: 80.2210 } },
//     { id: 3, name: 'Sri Jayewardenepura General Hospital', position: { lat: 6.8880, lng: 79.9602 } },
//     { id: 4, name: 'Kandy General Hospital', position: { lat: 7.2939, lng: 80.6372 } },
//     { id: 5, name: 'Jaffna Teaching Hospital', position: { lat: 9.6615, lng: 80.0249 } },
//     // Add more hospital locations as needed
// ];

// function HospitalLocations() {
//     const [map, setMap] = useState(null);

//     // Callback to handle the map load event
//     const onLoad = useCallback(function callback(map) {
//         // Store the map instance in the state
//         setMap(map);
//     }, []);

//     // Callback to handle the map unmount event
//     const onUnmount = useCallback(function callback(map) {
//         setMap(null);
//     }, []);

//     return (
//         <div>
//             <h2 className="text-2xl font-bold mb-4 text-center bg-blue-600 text-white">Hospitals in Sri Lanka</h2>

//             {/* Load the Google Map */}
//             <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={8}
//                     onLoad={onLoad}
//                     onUnmount={onUnmount}
//                 >
//                     {/* Loop through the hospital locations and place markers on the map */}
//                     {hospitalLocations.map((hospital) => (
//                         <Marker
//                             key={hospital.id}
//                             position={hospital.position}
//                             title={hospital.name}
//                         />
//                     ))}
//                 </GoogleMap>
//             </LoadScript>
//         </div>
//     );
// }

// export default HospitalLocations;




import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function HospitalMap() {
    const mapRef = useRef(null);  // Use ref to store map instance

    useEffect(() => {
        if (mapRef.current) return; // Prevent re-initialization

        // Initialize the map only once
        const map = L.map('map').setView([7.8731, 80.7718], 8);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        const hospitalLocations = [
            { id: 1, name: 'National Hospital of Sri Lanka', lat: 6.9271, lng: 79.8612 },
            { id: 2, name: 'Teaching Hospital Karapitiya', lat: 6.0535, lng: 80.2210 },
            { id: 3, name: 'Sri Jayewardenepura General Hospital', lat: 6.8880, lng: 79.9602 },
            { id: 4, name: 'Kandy General Hospital', lat: 7.2939, lng: 80.6372 },
            { id: 5, name: 'Jaffna Teaching Hospital', lat: 9.6615, lng: 80.0249 },
            { id: 6, name: 'Colombo South Teaching Hospital', lat: 6.8443, lng: 79.9987 },
            { id: 7, name: 'Castle Street Hospital for Women', lat: 6.9333, lng: 79.9821 },
            { id: 8, name: 'De Soysa Hospital for Women', lat: 6.9250, lng: 79.9631 },
            { id: 9, name: 'Apeksha Hospital', lat: 6.8916, lng: 79.9575 },
            { id: 10, name: 'Maharagama Hospital', lat: 6.8914, lng: 79.9897 },
            { id: 11, name: 'Ragama Teaching Hospital', lat: 7.0696, lng: 79.9776 },
            { id: 12, name: 'Batticaloa Teaching Hospital', lat: 7.7086, lng: 81.6930 },
            { id: 13, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 14, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 15, name: 'Vavuniya General Hospital', lat: 8.7652, lng: 80.5170 },
            { id: 16, name: 'Trincomalee Base Hospital', lat: 8.5714, lng: 81.2083 },
            { id: 17, name: 'Anuradhapura Teaching Hospital', lat: 8.3114, lng: 80.4093 },
            { id: 18, name: 'Ratnapura General Hospital', lat: 6.6833, lng: 80.3833 },
            { id: 19, name: 'Galle District General Hospital', lat: 6.0322, lng: 80.2174 },
            { id: 20, name: 'Kalutara District General Hospital', lat: 6.5777, lng: 79.9557 },
            { id: 21, name: 'Nawalapitiya Base Hospital', lat: 6.9867, lng: 80.6117 },
            { id: 22, name: 'Gampaha District General Hospital', lat: 7.0698, lng: 80.0607 },
            { id: 23, name: 'Jaffna Teaching Hospital', lat: 9.6615, lng: 80.0249 },
            { id: 24, name: 'Wattala District General Hospital', lat: 7.0056, lng: 79.9869 },
            { id: 25, name: 'Mullaitivu District Hospital', lat: 8.8485, lng: 81.5502 },
            { id: 26, name: 'Hambantota District General Hospital', lat: 6.1245, lng: 81.1265 },
            { id: 27, name: 'Dambulla Base Hospital', lat: 7.8642, lng: 80.6460 },
            { id: 28, name: 'Kegalle District General Hospital', lat: 7.2373, lng: 80.3537 },
            { id: 29, name: 'Kurunegala Teaching Hospital', lat: 7.4800, lng: 80.3553 },
            { id: 30, name: 'Mannar District Hospital', lat: 8.9807, lng: 79.9981 },
            { id: 31, name: 'Nuwara Eliya General Hospital', lat: 6.9650, lng: 80.7833 },
            { id: 32, name: 'Puttalam District General Hospital', lat: 8.3008, lng: 79.8310 },
            { id: 33, name: 'Kandy General Hospital', lat: 7.2939, lng: 80.6372 },
            { id: 34, name: 'Jaffna Teaching Hospital', lat: 9.6615, lng: 80.0249 },
            { id: 35, name: 'Vavuniya General Hospital', lat: 8.7652, lng: 80.5170 },
            { id: 36, name: 'Matara District General Hospital', lat: 5.9646, lng: 80.5385 },
            { id: 37, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 38, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 39, name: 'Ratnapura General Hospital', lat: 6.6833, lng: 80.3833 },
            { id: 40, name: 'Galle District General Hospital', lat: 6.0322, lng: 80.2174 },
            { id: 41, name: 'Kalutara District General Hospital', lat: 6.5777, lng: 79.9557 },
            { id: 42, name: 'Nawalapitiya Base Hospital', lat: 6.9867, lng: 80.6117 },
            { id: 43, name: 'Gampaha District General Hospital', lat: 7.0698, lng: 80.0607 },
            { id: 44, name: 'Wattala District General Hospital', lat: 7.0056, lng: 79.9869 },
            { id: 45, name: 'Mullaitivu District Hospital', lat: 8.8485, lng: 81.5502 },
            { id: 46, name: 'Hambantota District General Hospital', lat: 6.1245, lng: 81.1265 },
            { id: 47, name: 'Dambulla Base Hospital', lat: 7.8642, lng: 80.6460 },
            { id: 48, name: 'Kegalle District General Hospital', lat: 7.2373, lng: 80.3537 },
            { id: 49, name: 'Kurunegala Teaching Hospital', lat: 7.4800, lng: 80.3553 },
            { id: 50, name: 'Mannar District Hospital', lat: 8.9807, lng: 79.9981 },
            { id: 51, name: 'Nuwara Eliya General Hospital', lat: 6.9650, lng: 80.7833 },
            { id: 52, name: 'Puttalam District General Hospital', lat: 8.3008, lng: 79.8310 },
            { id: 53, name: 'Ragama Teaching Hospital', lat: 7.0696, lng: 79.9776 },
            { id: 54, name: 'Batticaloa Base Hospital', lat: 7.7086, lng: 81.6930 },
            { id: 55, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 56, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 57, name: 'Vavuniya General Hospital', lat: 8.7652, lng: 80.5170 },
            { id: 58, name: 'Matara District General Hospital', lat: 5.9646, lng: 80.5385 },
            { id: 59, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 60, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 61, name: 'Ratnapura General Hospital', lat: 6.6833, lng: 80.3833 },
            { id: 62, name: 'Galle District General Hospital', lat: 6.0322, lng: 80.2174 },
            { id: 63, name: 'Kalutara District General Hospital', lat: 6.5777, lng: 79.9557 },
            { id: 64, name: 'Nawalapitiya Base Hospital', lat: 6.9867, lng: 80.6117 },
            { id: 65, name: 'Gampaha District General Hospital', lat: 7.0698, lng: 80.0607 },
            { id: 66, name: 'Wattala District General Hospital', lat: 7.0056, lng: 79.9869 },
            { id: 67, name: 'Mullaitivu District Hospital', lat: 8.8485, lng: 81.5502 },
            { id: 68, name: 'Hambantota District General Hospital', lat: 6.1245, lng: 81.1265 },
            { id: 69, name: 'Dambulla Base Hospital', lat: 7.8642, lng: 80.6460 },
            { id: 70, name: 'Kegalle District General Hospital', lat: 7.2373, lng: 80.3537 },
            { id: 71, name: 'Kurunegala Teaching Hospital', lat: 7.4800, lng: 80.3553 },
            { id: 72, name: 'Mannar District Hospital', lat: 8.9807, lng: 79.9981 },
            { id: 73, name: 'Nuwara Eliya General Hospital', lat: 6.9650, lng: 80.7833 },
            { id: 74, name: 'Puttalam District General Hospital', lat: 8.3008, lng: 79.8310 },
            { id: 75, name: 'Ragama Teaching Hospital', lat: 7.0696, lng: 79.9776 },
            { id: 76, name: 'Batticaloa Base Hospital', lat: 7.7086, lng: 81.6930 },
            { id: 77, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 78, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 79, name: 'Vavuniya General Hospital', lat: 8.7652, lng: 80.5170 },
            { id: 80, name: 'Matara District General Hospital', lat: 5.9646, lng: 80.5385 },
            { id: 81, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 82, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 },
            { id: 83, name: 'Ratnapura General Hospital', lat: 6.6833, lng: 80.3833 },
            { id: 84, name: 'Galle District General Hospital', lat: 6.0322, lng: 80.2174 },
            { id: 85, name: 'Kalutara District General Hospital', lat: 6.5777, lng: 79.9557 },
            { id: 86, name: 'Nawalapitiya Base Hospital', lat: 6.9867, lng: 80.6117 },
            { id: 87, name: 'Gampaha District General Hospital', lat: 7.0698, lng: 80.0607 },
            { id: 88, name: 'Wattala District General Hospital', lat: 7.0056, lng: 79.9869 },
            { id: 89, name: 'Mullaitivu District Hospital', lat: 8.8485, lng: 81.5502 },
            { id: 90, name: 'Hambantota District General Hospital', lat: 6.1245, lng: 81.1265 },
            { id: 91, name: 'Dambulla Base Hospital', lat: 7.8642, lng: 80.6460 },
            { id: 92, name: 'Kegalle District General Hospital', lat: 7.2373, lng: 80.3537 },
            { id: 93, name: 'Kurunegala Teaching Hospital', lat: 7.4800, lng: 80.3553 },
            { id: 94, name: 'Mannar District Hospital', lat: 8.9807, lng: 79.9981 },
            { id: 95, name: 'Nuwara Eliya General Hospital', lat: 6.9650, lng: 80.7833 },
            { id: 96, name: 'Puttalam District General Hospital', lat: 8.3008, lng: 79.8310 },
            { id: 97, name: 'Ragama Teaching Hospital', lat: 7.0696, lng: 79.9776 },
            { id: 98, name: 'Batticaloa Base Hospital', lat: 7.7086, lng: 81.6930 },
            { id: 99, name: 'Ampara District General Hospital', lat: 7.2970, lng: 81.6708 },
            { id: 100, name: 'Polonnaruwa Base Hospital', lat: 7.9450, lng: 81.0168 }
        ];
        
        hospitalLocations.forEach(hospital => {
            L.marker([hospital.lat, hospital.lng]).addTo(map)
                .bindPopup(hospital.name)
                .openPopup();
        });

        mapRef.current = map; // Store map instance in ref to prevent re-initialization

        // Cleanup the map when the component unmounts
        return () => {
            if (mapRef.current) {
                mapRef.current.remove(); // Properly remove map instance on unmount
                mapRef.current = null;
            }
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }} />;
}

export default HospitalMap;
