"use client";
import { motion } from "framer-motion";

const popupVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 100, scale: 0.95 },
};

export default function NotificationPopup() {
  return (
    <motion.div
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-55 left-80 w-full max-w-sm rounded-xl bg-white shadow-xl p-5 z-[100]"
    >
      <h2 className="text-lg font-bold mb-4">Notifications</h2>

      <div className="border border-blue-300 rounded-lg p-4 mb-4 flex items-center gap-4">
        <div className="flex-shrink-0 bg-blue-400 rounded-lg w-10 h-10 flex items-center justify-center">
          <i className="fas fa-info text-white text-lg"></i>
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 text-sm">Info Alert</h3>
          <p className="text-blue-900 text-sm">This is an info notification.</p>
        </div>
      </div>

      <div className="border border-green-300 rounded-lg p-4 mb-4 flex items-center gap-4 bg-green-50">
        <div className="flex-shrink-0 bg-green-400 rounded-lg w-10 h-10 flex items-center justify-center">
          <i className="fas fa-check text-white text-lg"></i>
        </div>
        <div>
          <h3 className="font-semibold text-green-900 text-sm">Success</h3>
          <p className="text-green-900 text-sm">You have successfully updated.</p>
        </div>
      </div>
    </motion.div>
  );
}
