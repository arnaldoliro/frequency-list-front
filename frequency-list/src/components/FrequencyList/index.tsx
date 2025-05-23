const pessoas = [
    { nome: "João Silva", cargo: "Tecnico", setor: "Sistemas", matricula: "1234", status: "Presente" },
    { nome: "Maria Souza", cargo: "Gerente", setor: "Pediatria", matricula: "4567", status: "Ausente" },
    { nome: "Carlos Lima", cargo: "Diretor", setor: "Infra", matricula: "5555", status: "Presente" },
    { nome: "Luan Lima", cargo: "Estagiario", setor: "ServiceDesk", matricula: "6666", status: "Ausente" },
]

export default function FrequencyList() {
    return(
        <div className="bg-[#ddd] mx-6 h-auto shadow-md rounded-lg">
            <div className="font-semibold grid grid-cols-[2fr_1fr_1fr_0.5fr_0.5fr] gap-4 p-2 border-b border-[#ccc] shadow-sm">
                <h1 className="">Nome do Participante</h1>
                <h1 className="">Cargo</h1>
                <h1 className="">Unidade/Setor</h1>
                <h1 className="">Matricula</h1>
                <h1 className="">Status</h1>
            </div>
            {pessoas.map((pessoa, index) => (
                <div key={index} className={`text-sm grid grid-cols-[2fr_1fr_1fr_0.5fr_0.5fr] gap-4 p-2 border-b border-[#ccc] transition ${index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#eee]'}`}>
                    <h1 className="">{pessoa.nome}</h1>
                    <h1 className="">{pessoa.cargo}</h1>
                    <h1 className="">{pessoa.setor}</h1>
                    <h1 className="">{pessoa.matricula}</h1>
                    <h1 className={`rounded-lg w-max px-1 shadow-md ${(pessoa.status === 'Presente') ? 'bg-green-400' : 'bg-red-400'}`}>{pessoa.status}</h1>
                </div>
            ))}
        </div>
    )
}