'use client'
import usuarios from '../../../data/constants/usuarios'
import LinhaUsuario from './LinhaUsuario'
import { Usuario } from '@/core/model/Usuario'
import { motion } from 'framer-motion'

export default function ListaUsuario() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 p-4 rounded-md"
        >
            {usuarios.map((usuario: Usuario, index: number) => {
                return (
                    <motion.div
                        key={usuario.id!}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <LinhaUsuario usuario={usuario} />
                    </motion.div>
                )
            })}
        </motion.div>
    )
}