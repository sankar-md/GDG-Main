import React from "react";
import HackerText from "./HackerText";
import { motion, useAnimationControls } from "framer-motion";
import "./index.css";
const LoadingAnimation = () => {
  const leftControls = useAnimationControls();
  const rightControls = useAnimationControls();

  React.useEffect(() => {
    const animateLoader = async () => {
      await Promise.all([
        leftControls.start({ x: "-100vw" }),
        rightControls.start({ x: "100vw" }),
      ]);

      await Promise.all([
        leftControls.start({
          x: "-5%",
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }),
        rightControls.start({
          x: "5%",
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }),
      ]);

      leftControls.start({
        x: 0,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      });
      rightControls.start({
        x: 0,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      });
    };

    animateLoader();
  }, [leftControls, rightControls]);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden bg-gray-200">
      {/* Background with blinking effect */}
      <div className="bg-cover absolute w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 blinking-background">
        <img
          className="object-cover w-full h-full"
          src="./images/bg_loading.png"
          alt=""
        />
      </div>

      <motion.svg
        viewBox="0 0 126 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        className="relative"
      >
        <title>{"Google Developer Logo"}</title>
        <g fill="none">
          <motion.g id="left" initial={{ x: "-100vw" }} animate={leftControls}>
            <path
              fill="#EA4335"
              d="m30.327 31.165 20.311-11.687c4.452-3.06 5.565-9.46 2.504-13.913C50.36 1.67 45.073 0 40.622 2.226L5.286 22.54l25.041 8.626z"
            />
            <path
              fill="#4285F4"
              d="M45.63 61.496a9.975 9.975 0 0 0 10.016-10.018c0-3.617-1.947-6.956-5.008-8.626L15.303 22.54c-5.008-2.782-10.851-.835-13.634 3.896C-.835 31.165.556 37.009 5.286 39.79l35.336 20.313c1.39 1.113 3.06 1.392 5.008 1.392z"
            />
          </motion.g>
          <motion.g id="right" initial={{ x: "100vw" }} animate={rightControls}>
            <path
              fill="#FBBC04"
              d="M80.687 61.496c1.67 0 3.617-.557 5.008-1.392l35.336-20.313-24.763-8.904-20.867 11.965c-4.73 2.783-6.4 8.905-3.617 13.635 1.947 3.34 5.286 5.009 8.903 5.009z"
            />
            <path
              fill="#0F9D58"
              d="M115.744 41.183a9.975 9.975 0 0 0 10.017-10.018c0-3.617-1.948-6.956-5.009-8.626L85.695 2.226C81.244-.834 74.845.278 71.784 4.73c-3.06 4.453-1.948 10.853 2.504 13.913.556.279.834.557 1.39.835l35.336 20.313c1.391.835 3.06 1.392 4.73 1.392z"
            />
          </motion.g>
        </g>
      </motion.svg>

      {/* Blinking Text */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 text-lg font-bold text-center text-gray-800 loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5 } }}
      >
        <HackerText text="loading" />
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
