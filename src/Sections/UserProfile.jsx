// import React from 'react';

// function UserProfile({ username, imageUrl }) {
//   // Function to extract the first letter of the username
//   const getInitials = (name) => {
//     const words = name.split(' ');
//     return words.map((word) => word[0]).join('').toUpperCase();
//   };

//   return (
//     <div className="flex items-center">
//       <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center text-white font-semibold text-xl">
//         {getInitials(username)}
//       </div>
//       <div className="ml-4">
//         <p className="text-xl font-semibold">{username}</p>
//         <img src={imageUrl} alt={`${username}'s profile`} className="w-20 h-20 rounded-full" />
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import React from 'react';

function UserProfile({ username, imageUrl }) {
  const initials = username ? username[0].toUpperCase() : '';

  return (
    <div className="flex items-center">
      <div
        className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center text-white font-semibold text-xl"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        {initials}
      </div>
      <div className="ml-4">
        <p className="text-xl font-semibold">{username}</p>
        <img src={imageUrl} alt={`${username}'s profile`} className="w-20 h-20 rounded-full" />
      </div>
    </div>
  );
}

export default UserProfile;
