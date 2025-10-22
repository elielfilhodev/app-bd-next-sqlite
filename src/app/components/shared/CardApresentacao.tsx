'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function CardApresentacao() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center text-center"
      >
        {/* Foto do desenvolvedor */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-24 h-24 mb-6"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-700 dark:text-white">EF</span>
            </div>
          </div>
        </motion.div>

        {/* Informações do desenvolvedor */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Eliel Filho
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-6"
        >
          Desenvolvedor Full Stack
        </motion.p>

        {/* Links sociais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/elielfilhodev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://elielfilho.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <FaGlobe className="text-lg" />
            <span>Portfolio</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
