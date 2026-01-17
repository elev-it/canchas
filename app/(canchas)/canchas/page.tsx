"use client";
import { useCanchas } from "@/hooks/use-canchas";
import { canchasData } from "@/lib/mock/canchas-mock";

const page = () => {
  const { canchas } = useCanchas();
  // console.log({canchas});
  // canchasData.map((cancha) => {
  //     console.log(cancha.name);
  // })

  return (
    <>
      <div>Pagina de Listado de Canchas</div>

      {canchas.map((cancha)=>(
        <div key={cancha.uid} className="p-4 border-b">
          <h2 className="text-2xl font-bold mb-2">{cancha.name}</h2>
          <p className="mb-1">Ubicación: {cancha.location}</p>
          <p className="mb-1">Tipo: {cancha.type}</p>
          <p className="mb-1">Capacidad: {cancha.capacity} personas</p>
          <p className="mb-1">Precio por hora: ${cancha.price}</p>
        </div>))}
        
    
    </>
  );
};

export default page;
