import Pagina from './components/templates/Pagina'
import { RiNextjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";

export default function Home() {
    return <Pagina>
        <div className='flex flex-col'>
            <h1 className='m-5 text-3xl font-black'>Tela de Início</h1>
            <h2 className='m-5 text-lg'>Aplicação FullStack com NextJS e Banco de dados SQLite</h2>

            <div className="ml-5 mb-5 text-sm text-zinc-400">
                <p>
                    Projeto feito com NextJS e react como frontend e banco de dados SQLite, utilizando CRUD Usuario, Podendo adicionar, alterar e excluir, ao excluir o banco de dadados NÃO irá excluir definitivamente, irá ficar salvo no banco de dados interno, utilizando de flag ativo, booleano true ou false, para dar uma impressão que o dado foi excluido de verdade.
                </p>
            </div>
            <div className='flex ml-4'>
                <RiNextjsFill className='text-4xl'/> <h3 className='p-2 mr-5'>NextJS</h3>
                <SiSqlite className='text-4xl' /> <h3 className='p-2 mr-5'>SQLite</h3>
            </div>
        </div>
    </Pagina>
}
