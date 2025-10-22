"use client"
import { IconHome, IconUser, IconX } from '@tabler/icons-react'
import MenuItem from './MenuItem'
import { motion, AnimatePresence } from 'framer-motion'

export interface MenuProps {
    open?: boolean
    onClose?: () => void
}

export default function Menu(props: MenuProps) {
    return (
        <>
            {/* Desktop */}
            <motion.aside 
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="hidden md:block w-72 bg-zinc-900 md:h-screen md:sticky md:top-0"
            >
                <nav className="flex flex-col gap-1 py-7">
                    <MenuItem icone={IconHome} texto="Início" url="/" />
                    <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/usuarios" />
                </nav>
            </motion.aside>

            {/* Mobile overlay */}
            <AnimatePresence>
                {props.open && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60" 
                            onClick={props.onClose} 
                        />
                        <motion.aside 
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute left-0 top-0 h-full w-72 bg-zinc-900 shadow-xl"
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                                <span className="font-semibold">Menu</span>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Fechar menu" 
                                    onClick={props.onClose} 
                                    className="p-2 rounded-md hover:bg-zinc-800 transition-colors duration-200"
                                >
                                    <IconX size={20} />
                                </motion.button>
                            </div>
                            <nav className="flex flex-col gap-1 py-4">
                                <MenuItem icone={IconHome} texto="Início" url="/" onClick={props.onClose} />
                                <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/usuarios" onClick={props.onClose} />
                            </nav>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
