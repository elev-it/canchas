import { ICancha } from "@/interfaces/canchas";

export const canchasData: ICancha[] = [
  {
    uid: "1",
    name: "Cancha A - Piso Duro",
    description:
      "Cancha profesional de superficie dura, ideal para juego rápido. Cuenta con iluminación LED de última generación para partidos nocturnos y gradas para espectadores.",
    price: 50,
    image:
      "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "available",
    type: "tennis",
    location: "Sector Norte",
    capacity: 4,
  },
  {
    uid: "2",
    name: "Cancha B - Pasto Sintético",
    description:
      "Cancha de fútbol 7 con pasto sintético de tercera generación. Incluye chalecos y balón. Drenaje excelente para días lluviosos.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop",
    status: "occupied",
    type: "soccer",
    location: "Sector Central",
    capacity: 10,
  },
  {
    uid: "3",
    name: "Cancha C - Voleibol Pro",
    description:
      "Cancha oficial de voleibol con piso flotante de madera para reducir el impacto. Red ajustable profesional.",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000&auto=format&fit=crop",
    status: "maintenance",
    type: "volleyball",
    location: "Gimnasio Techado",
    capacity: 12,
  },
];
