import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-card">
      {/* <div> */}
      <div className="flex h-16 items-center gap-8 justify-between px-4 sm:px-8 lg:px-16">
        {/* nombre de la app */}
        <Link href="/" className="text-xl font-bold text-primary">
          Reserva de Canchas
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/auth/login">
            <Button variant={"outline"} size={"sm"}>
              Iniciar Sesion
            </Button>
          </Link>
          {/* <Link href="/auth/login/admin">
            <Button variant={"outline"} size={"sm"}>
              Iniciar Adminitrador
            </Button>
          </Link> */}
        </div>
      </div>

      {/* </div> */}
    </nav>
  );
};

export default Navbar;
