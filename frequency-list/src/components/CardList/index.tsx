"use client"

import Card from "../Card";

const eventos = [
  {
    nome: "Evento de Tecnologia",
    data: "17/03/2025",
    hora: "15:00 - 16:00",
    status: "Em andamento",
    organizado: "João Silva",
    local: "Auditorio "
  },
  {
    nome: "Oficina de Design",
    data: "22/03/2025",
    hora: "14:00 - 15:30",
    status: "Finalizado",
    organizado: "Maria Costa",
    local: "Auditorio"
  },
  {
    nome: "Palestra de Inovação",
    data: "30/03/2025",
    hora: "10:00 - 11:00",
    status: "Cancelado",
    organizado: "Lucas Martins",
    local: "Microsoft Teams"
  },
  {
    nome: "Workshop de React",
    data: "05/04/2025",
    hora: "09:00 - 12:00",
    status: "Não iniciado",
    organizado: "Ana Oliveira",
    local: "Microsoft Teams"
  },
  {
    nome: "Seminário de UX/UI",
    data: "12/04/2025",
    hora: "13:00 - 15:00",
    status: "Agendado",
    organizado: "Carlos Mendes",
    local: "Microsoft Teams"
  },
  {
    nome: "Treinamento de Liderança",
    data: "18/04/2025",
    hora: "08:00 - 10:30",
    status: "Finalizado",
    organizado: "Fernanda Souza",
    local: "Auditorio"
  },
];


export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {eventos.map((evento, index) => (
        <Card key={index} {...evento} />
      ))}
    </div>
  );
}
