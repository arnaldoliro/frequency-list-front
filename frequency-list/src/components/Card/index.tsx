"use client";

import { MdManageHistory } from "react-icons/md";
import { useState } from "react";
import Modal from "../Modal";
import Warning from "../Warning";
import FrequencyList from "../FrequencyList";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { RiUserCommunityFill } from "react-icons/ri";

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
    const [showWarning, setShowWarning] = useState(true);

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
                <div className="my-4 mx-6 p-2 rounded-lg shadow-lg bg-blue-50">
                    <h1 className="text-xl font-semibold">Informações sobre o evento</h1>
                    <ul className="flex gap-10 mt-4">
                        <li className="flex items-center gap-1">
                            <MdManageHistory/>
                            <h1 className="">Gerencia: STP</h1>
                        </li>
                        <li className="flex items-center gap-1">
                            <FaLocationDot />
                            <h1>Local: {local}</h1>
                        </li>
                        <li className="flex items-center gap-1">
                            <RiUserCommunityFill />
                            <h1>Setor: Unidades Assistenciais</h1>
                        </li>
                        <li className="flex items-center gap-1">
                            <FaCalendarAlt />
                            <h1>Data: {data}</h1>
                        </li>
                        <li className="flex items-center gap-1">
                            <IoIosTime />
                            <h1>Carga Horária: 3,0</h1>
                        </li>
                    </ul>
                </div>
                    {showWarning && <Warning onClose={() => setShowWarning(false)} />}
                <FrequencyList />
            </Modal>
        </>
    )
}