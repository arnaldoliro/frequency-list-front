export default async function MainHeader() {
    return(
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Eventos</h1>
            <form className="text-center flex items-center">
                <label className="mr-2" htmlFor="">Pesquisar</label>
                <input className="w-30 h-5 px-1 text-xs border rounded-lg outline-[0px]" type="text" />
            </form>
      </div>
    )
}