import Pagina from './components/templates/Pagina'
import { RiNextjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";

export default function Home() {
    return <Pagina>
        <div className='flex flex-col'>
            <h1 className='m-5'>Tela de Início</h1>
            <h2 className='m-5'>Aplicação FullStack com NextJS e Banco de dados SQLite</h2>
            <div className='flex ml-4'>
                <RiNextjsFill className='text-4xl'/> <h3 className='p-2 mr-5'>NextJS</h3>
                <SiSqlite className='text-4xl' /> <h3 className='p-2 mr-5'>SQLite</h3>
            </div>
        </div>
    </Pagina>
}
