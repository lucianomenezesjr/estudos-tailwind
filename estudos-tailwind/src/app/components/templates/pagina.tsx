import { ReactNode } from "react";
import Cabecalho from '@/app/components/templates/Cabecalho';
import Menu from '@/app/components/templates/Menu';
import Rodape from '@/app/components/templates/Rodape';

interface PaginaProps {
    children?: ReactNode
}

export default function Pagina(props: PaginaProps){
    return(
        <div className="flex flex-col min-h-screen">
            <Cabecalho className="h-20" />
            <div className='flex-1 flex'>
                <Menu className="w-80" />
                <main className="flex-1 bg-red-500">{props.children}</main>
            </div>
            <Rodape />
        </div>
    )
}