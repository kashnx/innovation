// // // ProfileForm.js
// // import React, { useState } from 'react';

// // function ProfileForm({ user, onSaveChanges }) {
// //   const [formData, setFormData] = useState(user);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSave = () => {
// //     onSaveChanges(formData);
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded-lg">
// //       <h2 className="text-lg font-semibold mb-2">Edit Profile</h2>
// //       <form>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium">Name:</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             className="w-full border rounded-md p-2"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium">Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             disabled
// //             className="w-full border rounded-md p-2"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium">Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             className="w-full border rounded-md p-2"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium">Location:</label>
// //           <input
// //             type="text"
// //             name="location"
// //             value={formData.location}
// //             onChange={handleInputChange}
// //             className="w-full border rounded-md p-2"
// //           />
// //         </div>
// //       </form>
// //       <button
// //         onClick={handleSave}
// //         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
// //       >
// //         Save Changes
// //       </button>
// //     </div>
// //   );
// // }

// // export default ProfileForm;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import ProfileHeader from './ProfileHeader';
// import ProfileForm from './ProfileForm';
// import ProfileContact from './ProfileContact';

// function Profile() {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: '********',
//     location: 'Your Location',
//     role: 'Supplier',
//     // Other user data
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditProfile = () => {
//     setIsEditing(true);
//   };

//   const handleSaveChanges = (updatedUser) => {
//     // Implement logic to save the changes (e.g., make an API request).
//     setUser(updatedUser);
//     setIsEditing(false);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-b from-green-400 to-green-200">
//       <motion.div
//         className="bg-white p-4 rounded-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <ProfileHeader
//           name={user.name}
//           role={user.role}
//           isEditing={isEditing}
//           onEditProfile={handleEditProfile}
//         />
//         {isEditing ? (
//           <ProfileForm user={user} onSaveChanges={handleSaveChanges} />
//         ) : (
//           <ProfileContact email={user.email} location={user.location} />
//         )}
//       </motion.div>
//     </div>
//   );
// }

// export default Profile;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProfileForm({ user, onSaveChanges }) {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSaveChanges(formData);
  };

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-2"
      >
        Edit Profile
      </motion.h2>
      <form>
        {/* Input fields with motion animations */}
        {/* Save Changes button with animations */}
      </form>
    </div>
  );
}

export default ProfileForm;
