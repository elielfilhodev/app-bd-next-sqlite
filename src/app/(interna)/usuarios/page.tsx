"use client"
import Pagina from "@/app/components/templates/Pagina";
import Titulo from "@/app/components/templates/Titulo";
import { IconUser } from '@tabler/icons-react';
import FormularioUsuario from "@/app/components/templates/usuario/FormularioUsuario";
import { useEffect, useState } from "react";
import { Usuario } from "@/core/model/Usuario";

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
            <Titulo icone={IconUser} principal='Usuários' secundario='Cadastro de Usuário' />

            <FormularioUsuario
                usuario={selecionado}
                onSaved={() => {
                    setSelecionado(undefined)
                    carregar()
                }}
                onCancel={() => setSelecionado(undefined)}
            />

            <div className="flex flex-col gap-4 p-4 rounded-md">
                {carregando && <span>Carregando...</span>}
                {!carregando && lista.length === 0 && (
                    <span className="text-zinc-400">Nenhum usuário cadastrado.</span>
                )}
                {!carregando && lista.map((u) => (
                    <div key={u.id} className="flex items-center justify-between p-4 bg-zinc-900 rounded-md">
                        <div className="flex flex-col">
                            <span className="text-xl font-black">{u.nome}</span>
                            <span className="text-sm text-zinc-400">{u.email}</span>
                            <span className={`text-xs ${u.ativo ? 'text-green-400' : 'text-red-400'}`}>
                                {u.ativo ? 'Ativo' : 'Inativo'}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-zinc-700 px-3 py-1 rounded-md cursor-pointer" onClick={() => setSelecionado(u)}>Editar</button>
                            <button className="bg-red-600 px-3 py-1 rounded-md cursor-pointer" onClick={() => excluir(u.id)}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Pagina>
    )
}
