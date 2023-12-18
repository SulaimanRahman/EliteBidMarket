import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="border-t-4 border-blue-500 border-solid h-8 w-8 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
