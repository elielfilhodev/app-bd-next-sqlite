'use client'
import { Usuario } from "@/core/model/Usuario"
import { motion } from 'framer-motion'

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex p-4 bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors duration-200 cursor-pointer"
        >
            <div className="flex flex-col">
                <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-black text-white"
                >
                    {props.usuario.nome}
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-sm text-zinc-400"
                >
                    {props.usuario.email}
                </motion.span>
            </div>
        </motion.div>
    )
}
