import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        className="absolute inset-0 bg-cover h-full bg-center"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-[#192229] to-transparent" />

      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="relative z-10 grid gap-12 pt-30 p-5">
        <h1 className="text-4xl font-bold text-balance text-white">
          Reserva tu cancha Favorita de forma Facil y rápida con nuestra App
        </h1>
        <p className="mt-4 text-lg  text-white">
          Descubre canchas deportivas disponivles y realiza tu reserva en
          nuestra plataforma
        </p>
        <div className="flex justify-start gap-4">
          <Link href={"/canchas"}>
            <Button size={"lg"}>Explorar Canchas</Button>
          </Link>
          <Link href={"/auth/login"}>
            <Button className="text-white" variant={"link"} size={"lg"}>
              Inciar Sesion
            </Button>
          </Link>
        </div>
      </div>
    </div>
    // quiero colocarle un fondo de imagen
  );
}
