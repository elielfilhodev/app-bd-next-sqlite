"use client"
import { Usuario } from "@/core/model/Usuario"
import InputTexto from "../../shared/InputTexto"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import React from 'react'

export interface FormularioUsuarioProps {
    usuario?: Partial<Usuario>
    onSaved?: (u: Usuario) => void
    onCancel?: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    const [id, setId] = useState<string | undefined>(props.usuario?.id)
    const [nome, setNome] = useState(props.usuario?.nome ?? "")
    const [email, setEmail] = useState(props.usuario?.email ?? "")
    const [senha, setSenha] = useState(props.usuario?.senha ?? "")

    useEffect(() => {
        setId(props.usuario?.id)
        setNome(props.usuario?.nome ?? "")
        setEmail(props.usuario?.email ?? "")
        setSenha("") // por segurança, não pré-carrega senha em edição
    }, [props.usuario?.id, props.usuario?.nome, props.usuario?.email])

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const payload = { nome, email, senha }
        const resp = await fetch(id ? `/api/usuarios/${id}` : "/api/usuarios", {
            method: id ? "PATCH" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
        if (!resp.ok) {
            const data = await resp.json().catch(() => ({}))
            alert(data?.error ?? "Erro ao salvar usuário")
            return
        }
        const saved: Usuario = await resp.json()
        props.onSaved?.(saved)
        setId(undefined)
        setNome("")
        setEmail("")
        setSenha("")
    }

    return (
        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5" 
            onSubmit={onSubmit}
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                <InputTexto label="Nome" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.currentTarget.value)} required className="placeholder:text-zinc-500 placeholder:opacity-60" />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <InputTexto label="Email" type="email" placeholder="email@exemplo.com" value={email} onChange={e => setEmail(e.currentTarget.value)} required className="placeholder:text-zinc-500 placeholder:opacity-60" />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                <InputTexto label="Senha" type="password" placeholder="Sua senha" value={senha} onChange={e => setSenha(e.currentTarget.value)} required={!id} className="placeholder:text-zinc-500 placeholder:opacity-60" />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex gap-5"
            >
                <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200"
                >
                    Salvar
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="button" 
                    className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200" 
                    onClick={props.onCancel}
                >
                    Cancelar
                </motion.button>
            </motion.div>
        </motion.form>
    )
}
