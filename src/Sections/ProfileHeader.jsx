import React from 'react';
import { motion } from 'framer-motion';
import { PencilIcon } from '@heroicons/react/solid';

function ProfileHeader({ name, role, isEditing, onEditProfile }) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-2"
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm"
      >
        Role: {role}
      </motion.p>
      {!isEditing ? (
        <motion.button
          onClick={onEditProfile}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 underline cursor-pointer mt-2 flex items-center"
        >
          <PencilIcon className="w-6 h-6 mr-2" /> Edit Profile
        </motion.button>
      ) : null}
    </div>
  );
}

export default ProfileHeader;
