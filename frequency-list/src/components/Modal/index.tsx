import Image from "next/image";
import { Children } from "react";
Image

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

export default function Modal({isOpen, onClose, children}: ModalProps) {
    return (
    <div className={`fixed inset-0 flex items-center justify-center bg-[#ddddddc5] z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
        <div className={`bg-white w-300 h-140 rounded-md shadow-lg transform transition-transform duration-500 ${
          isOpen ? 'scale-100' : 'scale-50'}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex py-4 px-6 justify-between items-center border-b border-[#dbdbdb] shadow-xs">
                <div className="flex">
                    <Image src={'./vercel.svg'} alt="Logo da Santa Casa" width={30} height={30}></Image>
                    <h1 className="text-4xl font-semibold">Titulo do Evento</h1>
                </div>
                <button onClick={onClose} className="text-3xl cursor-pointer text-gray-500 hover:text-red-500 transition-all duration-300"> X </button>
            </div>
            {children}
        </div>
    </div>
  );
}