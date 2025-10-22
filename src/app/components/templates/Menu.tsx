"use client"
import { IconHome, IconUser, IconX } from '@tabler/icons-react'
import MenuItem from './MenuItem'

export interface MenuProps {
    open?: boolean
    onClose?: () => void
}

export default function Menu(props: MenuProps) {
    return (
        <>
            {/* Desktop */}
            <aside className="hidden md:block w-72 bg-zinc-900 md:h-screen md:sticky md:top-0">
                <nav className="flex flex-col gap-1 py-7">
                    <MenuItem icone={IconHome} texto="Início" url="/" />
                    <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/usuarios" />
                </nav>
            </aside>

            {/* Mobile overlay */}
            {props.open && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black/60" onClick={props.onClose} />
                    <aside className="absolute left-0 top-0 h-full w-72 bg-zinc-900 shadow-xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                            <span className="font-semibold">Menu</span>
                            <button aria-label="Fechar menu" onClick={props.onClose} className="p-2 rounded-md hover:bg-zinc-800">
                                <IconX size={20} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-1 py-4">
                            <MenuItem icone={IconHome} texto="Início" url="/" onClick={props.onClose} />
                            <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/usuarios" onClick={props.onClose} />
                        </nav>
                    </aside>
                </div>
            )}
        </>
    )
}
