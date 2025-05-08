import React from 'react';
import { DollarSign } from 'lucide-react';

const Logo = ({ color = '#1E40AF' }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-current">
      <DollarSign size={24} color={color === '#ffffff' ? '#1E40AF' : 'white'} strokeWidth={2.5} />
    </div>
  );
};

export default Logo;