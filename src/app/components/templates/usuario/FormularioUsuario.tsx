"use client"
import { Usuario } from "@/core/model/Usuario"
import InputTexto from "../../shared/InputTexto"
import { useEffect, useState } from "react"

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

    async function onSubmit(e: React.FormEvent) {
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
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <InputTexto label="Nome" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.currentTarget.value)} required className="placeholder:text-zinc-500 placeholder:opacity-60" />
            <InputTexto label="Email" type="email" placeholder="email@exemplo.com" value={email} onChange={e => setEmail(e.currentTarget.value)} required className="placeholder:text-zinc-500 placeholder:opacity-60" />
            <InputTexto label="Senha" type="password" placeholder="Sua senha" value={senha} onChange={e => setSenha(e.currentTarget.value)} required={!id} className="placeholder:text-zinc-500 placeholder:opacity-60" />
            <div className="flex gap-5">
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer">
                    Salvar
                </button>
                <button type="button" className="bg-zinc-700 px-4 py-2 rounded-md cursor-pointer" onClick={props.onCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    )
}
