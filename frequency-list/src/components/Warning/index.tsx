'use client'

interface WarningProps {
    onClose: () => void;
}

export default function Warning({onClose}: WarningProps) {
    
    return(
        <div className="flex bg-red-100 rounded-lg px-1 shadow-md relative mb-4 mx-7">
            <h1 className="text-center text-sm my-1">
                ⚠️ Aviso: Os participantes de eventos estão cientes e concordam que fotografias
                e filmagens realizadas neste local poderão ser utilizadas pelos
                organizadores para promoção e divulgação do evento e da instituição,
                em veículos de comunicação diversos.
            </h1>
            <button onClick={onClose} className="text-md mr-1 flex items-top cursor-pointer hover:text-red-500 duration-400">x</button>
        </div>
    )
}