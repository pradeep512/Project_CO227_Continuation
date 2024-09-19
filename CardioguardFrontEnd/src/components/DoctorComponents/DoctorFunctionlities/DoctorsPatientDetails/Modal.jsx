// import React from 'react';

// const Modal = ({ isVisible, onClose, children }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
//         <div className="mb-4">
//           <button
//             className="float-right text-gray-500 hover:text-gray-700"
//             onClick={onClose}
//           >
//             ✖
//           </button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;



import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto overflow-y-auto max-h-full"> {/* Added max-h-full and overflow-y-auto */}
        <div className="mb-4">
          <button
            className="float-right text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
