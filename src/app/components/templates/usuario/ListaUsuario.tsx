import usuarios from '../../../data/constants/usuarios'
import LinhaUsuario from './LinhaUsuario'
import { Usuario } from '@/core/model/Usuario'

export default function ListaUsuario() {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-md">
            {usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id!} usuario={usuario} />
            })}

        </div>
    )
}