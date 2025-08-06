import { useAppContext } from "@/context/AppContext"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const CustomSideModal = ({
  modalId,
  children,
  modalContentClassName,
  modalClassName,
  closeModalOutside = true,
}) => {
  const { activeSideModal, setActiveSideModal } = useAppContext()

  const closeModal = (e) => {
    if (e.target.id === "modal-backdrop") {
      setActiveSideModal(null)
    }
  }

  return (
    <AnimatePresence>
      {activeSideModal === modalId && (
        <motion.div
          id='modal-backdrop'
          onClick={closeModalOutside ? closeModal : null}
          className={`fixed inset-0 z-50 bg-black/40 ${modalClassName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`shadow-lg ${modalContentClassName}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CustomSideModal
