import NavBarList from "../NavBarList"
import Image from "next/image"

export default async function NavBar() {
  return (
    <div className="bg-white h-16 shadow-md w-full">
      <div className="flex justify-between items-center max-w-[85vw] mx-auto h-full">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">Título</h1>
          <Image src="/next.svg" width={30} height={30} alt="Logo" />
        </div>
        <NavBarList />
      </div>
    </div>
  )
}
