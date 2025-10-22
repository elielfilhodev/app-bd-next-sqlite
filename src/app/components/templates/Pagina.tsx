"use client"
import Menu from './Menu'
import { ReactNode, useState } from 'react'
import { IconMenu2 } from '@tabler/icons-react'

export interface PaginaProps {
    children: ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <div className="flex min-h-screen md:flex-row flex-col">
            {/* Header mobile */}
            <header className="md:hidden sticky top-0 z-30 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
                <div className="flex items-center gap-3 p-4">
                    <button
                        aria-label="Abrir menu"
                        onClick={() => setMenuAberto(true)}
                        className="p-2 rounded-md hover:bg-zinc-900"
                    >
                        <IconMenu2 size={24} />
                    </button>
                    <span className="font-semibold">Menu</span>
                </div>
            </header>

            <Menu open={menuAberto} onClose={() => setMenuAberto(false)} />
            <main className={`flex-1 p-4 md:p-7 ${props.className ?? ''}`}>{props.children}</main>
        </div>
    )
}
