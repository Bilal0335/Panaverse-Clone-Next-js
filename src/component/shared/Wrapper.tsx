import React, { FC } from "react";

// Define a functional component named Wrapper
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-4 mx-auto max-w-screen-2xl">{children}</div>;
};

// Export the Wrapper component for use in other parts of the application
export default Wrapper;
