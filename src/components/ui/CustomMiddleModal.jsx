import { useAppContext } from "@/context/AppContext"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const CustomMiddleModal = ({
  modalId,
  children,
  className,
  closeModalOutside = true,
}) => {
  const { activeMiddleModal, setActiveMiddleModal } = useAppContext()

  const closeModal = (e) => {
    if (e.target.id === "modal-backdrop") {
      setActiveMiddleModal(null)
    }
  }

  return (
    <AnimatePresence>
      {activeMiddleModal === modalId && (
        <motion.div
          id='modal-backdrop'
          onClick={closeModalOutside ? closeModal : null}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`${className} shadow-lg`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CustomMiddleModal
