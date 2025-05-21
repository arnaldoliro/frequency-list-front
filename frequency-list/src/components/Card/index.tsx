type CardProps = {
  nome: string;
  data: string;
  hora: string;
  organizado: string;
};

export default async function Card({ nome, data, hora, organizado }: CardProps) {
    return(
        <div className="bg-[#fff] w-75 h-auto mt-5 rounded-md p-2 hover:shadow-lg transition-all duration-300 hover:scale-107">
            <h1 className="text-lg font-semibold">{nome}</h1>
            <h1>Data: {data}</h1>
            <h1>Horário: {hora}</h1>
            <h1>Organizado por: {organizado}</h1>
            <button className="bg-blue-300 cursor-pointer rounded-md px-1 text-sm hover:shadow-md hover:bg-blue-400 transition-all duration-300 hover:scale-107">Acessar</button>
        </div>
    )
}