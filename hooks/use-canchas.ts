// todos los hooks son Use Client
"use client";

import { ICancha } from "@/interfaces/canchas";
import { canchasData } from "@/lib/mock/canchas-mock";
import { useEffect, useState } from "react";

export function useCanchas() {
  const [canchas, setCanchas] = useState<ICancha[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  //useState: es para conservar el estado de las canchas, la pagina actual y si esta cargando o no
  //useEffect: se ejecuta cuando el componente se monta o cuando la pagina algun elemento (dependencia)
  const listadoCanchas = async () => {
    setLoading(true);
    // logica para obtener las canchas desde una API o fuente de datos
    // const response = await fetch(`api/canchas?page=${page}`); //Ejemplo
    setCanchas(canchasData);
    setLoading(false);
  };
  useEffect(() => {
    listadoCanchas();
  }, []);
  return { canchas, loading };
}
