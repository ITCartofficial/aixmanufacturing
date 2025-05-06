import React from 'react';

// This function generates a consistent color based on the name string
const getColorFromName = (name) => {
  // List of vibrant colors for avatars
  const colors = [
    '#0091E4', // blue
    '#e74c3c', // red
    '#1D9300', // green
    '#E45F00', // orange
    '#6100E9', // purple
    '#1abc9c', // teal
    '#d35400', // dark orange
    '#c0392b', // dark red
    '#27ae60', // dark green
    '#8e44ad', // dark purple
    '#16a085', // dark teal
    '#f1c40f', // yellow
    '#e67e22'  // orange
  ];
  
  // Create a hash from the name to get a consistent index
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use the hash to get an index from the colors array
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

// Get initials from a name (up to 2 characters)
const getInitials = (name) => {
  if (!name) return '';
  
  // Split the name and get initials from first and last name
  const parts = name.split(' ');
  
  if (parts.length === 1) {
    // If only one name, use first two letters or just first letter if it's only one character
    return parts[0].charAt(0).toUpperCase() + (parts[0].length > 1 ? parts[0].charAt(1).toUpperCase() : '');
  }
  
  // Get first letter of first name and first letter of last name
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const Avatar = ({ name, size = 'md' }) => {
  const initials = getInitials(name);
  const backgroundColor = getColorFromName(name);
  
  // Size classes
  const sizeClasses = {
    'sm': 'w-6 h-6 text-xs',
    'md': 'w-8 h-8 text-sm',
    'lg': 'w-10 h-10 text-base'
  };
  
  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white font-medium`}
      style={{ backgroundColor }}
    >
      {initials}
    </div>
  );
};

export default Avatar;