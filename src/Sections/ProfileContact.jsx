// ProfileContact.js
import React from 'react';

function ProfileContact({ email, location }) {
  return (
    <div className="bg-white p-4 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
      <p className="text-sm">Email: {email}</p>
      <p className="text-sm">Location: {location}</p>
      {/* Add other contact info fields */}
    </div>
  );
}

export default ProfileContact;
