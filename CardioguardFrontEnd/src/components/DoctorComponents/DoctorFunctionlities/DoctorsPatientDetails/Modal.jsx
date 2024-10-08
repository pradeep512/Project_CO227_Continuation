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
    <div className='p-4 rounded-xl'>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-full max-w-4xl mx-auto overflow-y-auto" style={{ maxHeight: '80%' }}> {/* Increased width to max-w-4xl and made it fully rounded */}
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
    </div>
  );
};

export default Modal;

