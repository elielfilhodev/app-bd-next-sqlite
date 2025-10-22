"use client"
import Pagina from "@/app/components/templates/Pagina";
import Titulo from "@/app/components/templates/Titulo";
import { IconUser } from '@tabler/icons-react';
import FormularioUsuario from "@/app/components/templates/usuario/FormularioUsuario";
import { useEffect, useState } from "react";
import { Usuario } from "@/core/model/Usuario";
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Page() {
    const [lista, setLista] = useState<Usuario[]>([])
    const [selecionado, setSelecionado] = useState<Partial<Usuario> | undefined>()
    const [carregando, setCarregando] = useState(false)

    async function carregar() {
        setCarregando(true)
        const resp = await fetch('/api/usuarios', { cache: 'no-store' })
        const dados = await resp.json()
        setLista(dados)
        setCarregando(false)
    }

    useEffect(() => {
        carregar()
    }, [])

    // alternarAtivo removido: optamos por exclusão lógica (inativar)

    async function excluir(id: string) {
        const ok = confirm('Deseja realmente excluir este usuário?')
        if (!ok) return
        await fetch(`/api/usuarios/${id}`, { method: 'DELETE' })
        carregar()
    }

    return (
        <Pagina className="flex flex-col gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Titulo icone={IconUser} principal='Usuários' secundario='Cadastro de Usuário' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <FormularioUsuario
                    usuario={selecionado}
                    onSaved={() => {
                        setSelecionado(undefined)
                        carregar()
                    }}
                    onCancel={() => setSelecionado(undefined)}
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4 p-4 rounded-md"
            >
                <AnimatePresence mode="wait">
                    {carregando && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center py-8"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
                            />
                            <span className="ml-3 text-gray-600">Carregando...</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!carregando && lista.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center py-8"
                    >
                        <span className="text-zinc-400 text-lg">Nenhum usuário cadastrado.</span>
                    </motion.div>
                )}

                <AnimatePresence>
                    {!carregando && lista.map((u, index) => (
                        <motion.div
                            key={u.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="flex items-center justify-between p-4 bg-zinc-900 hover:bg-zinc-800 rounded-md transition-all duration-200"
                        >
                            <div className="flex flex-col">
                                <span className="text-xl font-black text-white">{u.nome}</span>
                                <span className="text-sm text-zinc-400">{u.email}</span>
                                <motion.span 
                                    className={`text-xs ${u.ativo ? 'text-green-400' : 'text-red-400'}`}
                                    animate={{ scale: u.ativo ? 1 : 0.9 }}
                                >
                                    {u.ativo ? 'Ativo' : 'Inativo'}
                                </motion.span>
                            </div>
                            <div className="flex gap-2">
                                <motion.button 
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded-md cursor-pointer transition-colors duration-200" 
                                    onClick={() => setSelecionado(u)}
                                >
                                    Editar
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md cursor-pointer transition-colors duration-200" 
                                    onClick={() => excluir(u.id)}
                                >
                                    Excluir
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Pagina>
    )
}
