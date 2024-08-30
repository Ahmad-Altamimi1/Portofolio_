import { motion } from "framer-motion";

const Transition = () => {
  const transitionVariants = {
    initial: {
      x: "0%",
      width: "0%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "0%"],
      width: ["0%", "0%"],
    },
  };

  return (
    <>
      <motion.div
        role="status"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.0, duration: 0.2, ease: "linear" }}
        aria-hidden
      />
    </>
  );
};

export default Transition;
