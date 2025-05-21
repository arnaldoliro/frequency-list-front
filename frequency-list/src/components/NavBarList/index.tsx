import Image from "next/image"

export default async function NavBarList () {
    return(
            <ul className="flex gap-5">
                <li>Eventos</li>
                <li>Configurações</li>
                <li>Perfil</li>
            </ul>
    )
}