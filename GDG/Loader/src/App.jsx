import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Duration for the loading screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-10 overflow-x-hidden text-gray-100"></div>
  );
};

export default App;
