'use client'

import Pagina from './components/templates/Pagina'
import CardApresentacao from './components/shared/CardApresentacao'
import { RiNextjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import { motion } from 'framer-motion'

export default function Home() {
    return <Pagina>
        <div className='flex flex-col'>
            {/* Card de Apresentação */}
            <CardApresentacao />
            
            {/* Conteúdo principal com animações */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-3xl font-black text-gray-800 dark:text-white mb-4'
                >
                    Tela de Início
                </motion.h1>
                
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className='text-lg text-gray-600 dark:text-gray-300 mb-6'
                >
                    Aplicação FullStack com NextJS e Banco de dados SQLite
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-6 text-sm text-zinc-400"
                >
                    <p>
                        Projeto feito com NextJS e react como frontend e banco de dados SQLite, utilizando CRUD Usuario, Podendo adicionar, alterar e excluir, ao excluir o banco de dadados NÃO irá excluir definitivamente, irá ficar salvo no banco de dados interno, utilizando de flag ativo, booleano true ou false, para dar uma impressão que o dado foi excluido de verdade.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className='flex flex-wrap gap-4'
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                        <RiNextjsFill className='text-4xl text-blue-600'/> 
                        <h3 className='p-2 text-gray-700 dark:text-white font-medium'>NextJS</h3>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                        <SiSqlite className='text-4xl text-blue-500' /> 
                        <h3 className='p-2 text-gray-700 dark:text-white font-medium'>SQLite</h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </Pagina>
}
