"use client";

import { useState } from "react";
import Modal from "../Modal";

type CardProps = {
  nome: string;
  data: string;
  hora: string;
  organizado: string;
  status: string;
  local: string;
};

export default function Card({ nome, data, hora, organizado, status, local }: CardProps) {
    const [isOpen, setIsOpen] = useState(false);
    

    return(
        <>
            <div className="bg-[#fff] w-90 h-auto mt-3 rounded-md p-2 hover:shadow-lg transition-all duration-300 hover:scale-107" onClick={() => setIsOpen(true)}>
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold mr-10">{nome}</h1>
                    <h1 className={`px-1 rounded-lg w-max h-max text-xs flex items-center font-normal
                        ${status === "Finalizado" ? "bg-green-300" : "bg-black-100"}
                        ${status === "Cancelado" ? "bg-red-300" : "bg-black-100"}
                        ${status === "Não iniciado" ? "bg-[#ddd]" : "bg-black-100"}
                        ${status === "Agendado" ? "bg-orange-300" : "bg-black-100"}
                        ${status === "Em andamento" ? "bg-blue-200" : "bg-black-100"}`}>{status}</h1>
                </div>
                <h1>{local}</h1>
                <h1 className="text-sm font-semibold text-[#494949]"> Dia {data} às {hora}</h1>
                <button className="mt-3 bg-blue-300 cursor-pointer rounded-md px-1 text-sm hover:shadow-md hover:bg-blue-400 transition-all duration-300 hover:scale-107">Acessar</button>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="py-4 px-6">
                    <h1>{nome}</h1>
                    <p>Mais detalhes do evento...</p>
                </div>
            </Modal>
        </>
    )
}