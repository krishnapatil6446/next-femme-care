import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-ring loading-lg"></span> {/* DaisyUI Loader */}
    </div>
  );
};

export default Loader;
