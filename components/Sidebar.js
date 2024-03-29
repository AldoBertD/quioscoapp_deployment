import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {

  const { categorias } = useQuiosco()
  return (
    <>
        <Image className="mt-10 ml-20" width={200} height={100} src="/assets/img/logo.svg" alt="imagen logotipo"/>
        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}
        </nav>
    </>
  )
}
