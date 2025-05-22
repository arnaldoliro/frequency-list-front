interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ddddddc5] z-50">
        <div className="bg-white w-300 h-140 p-6 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
                <h1>Teste</h1>
                <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-red-500"> X </button>
            </div>

        </div>
    </div>
  );
}