// src/components/CardList.tsx
import Card from "../Card";

const eventos = [
  {
    nome: "Evento de Tecnologia",
    data: "17/03/2025",
    hora: "15:00 - 16:00",
    organizado: "João Silva",
  },
  {
    nome: "Oficina de Design",
    data: "22/03/2025",
    hora: "14:00 - 15:30",
    organizado: "Maria Costa",
  },
  {
    nome: "Palestra de Inovação",
    data: "30/03/2025",
    hora: "10:00 - 11:00",
    organizado: "Lucas Martins",
  },
  {
    nome: "Workshop de React",
    data: "05/04/2025",
    hora: "09:00 - 12:00",
    organizado: "Ana Oliveira",
  },
  {
    nome: "Seminário de UX/UI",
    data: "12/04/2025",
    hora: "13:00 - 15:00",
    organizado: "Carlos Mendes",
  },
  {
    nome: "Treinamento de Liderança",
    data: "18/04/2025",
    hora: "08:00 - 10:30",
    organizado: "Fernanda Souza",
  },
];


export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {eventos.map((evento, index) => (
        <Card
          key={index}
          nome={evento.nome}
          data={evento.data}
          hora={evento.hora}
          organizado={evento.organizado}
        />
      ))}
    </div>
  );
}
