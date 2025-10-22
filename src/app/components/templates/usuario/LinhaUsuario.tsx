import { Usuario } from "@/core/model/Usuario"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex p-4 bg-zinc-900 rounded-md">

            <div className="flex flex-col">

                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>

            </div>

        </div>
    )
}
