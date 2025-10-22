"use client"
import Menu from './Menu'
import { ReactNode, useState } from 'react'
import { IconMenu2 } from '@tabler/icons-react'
import { motion } from 'framer-motion'

export interface PaginaProps {
    children: ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <div className="flex min-h-screen md:flex-row flex-col">
            {/* Header mobile */}
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:hidden sticky top-0 z-30 bg-zinc-950/80 backdrop-blur border-b border-zinc-800"
            >
                <div className="flex items-center gap-3 p-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Abrir menu"
                        onClick={() => setMenuAberto(true)}
                        className="p-2 rounded-md hover:bg-zinc-900 transition-colors duration-200"
                    >
                        <IconMenu2 size={24} />
                    </motion.button>
                    <span className="font-semibold">Menu</span>
                </div>
            </motion.header>

            <Menu open={menuAberto} onClose={() => setMenuAberto(false)} />
            <motion.main 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex-1 p-4 md:p-7 ${props.className ?? ''}`}
            >
                {props.children}
            </motion.main>
        </div>
    )
}
