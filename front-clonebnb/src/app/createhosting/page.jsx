import Image from "next/image";
import "./style.css"

export default function Home() {

  return (
      <main className="relative m-auto mt-40 sm:mt-28 px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl w-full">
        <div className="w-full outline outline-1 outline-opacity shadow-md rounded-1xs sm:outline-0 md:shadow-none px-5 sm:px-8 py-8">
          <form className="grid justify-center gap-2 w-full">
            <label htmlFor="email">
              <span className="text-sm pl-5 font-bold w-full">Título de alojamiento</span>
              <input
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                name="email"
                placeholder="Casa de Campo..."
              />
            </label>
            <label htmlFor="email">
              <span className="text-sm pl-5 font-bold mt-4">¿Dónde está tu espacio?</span>
              <input
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                name="email"
                placeholder="Calle, número de calle"
              />
            </label>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <label htmlFor="email">
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                    name="email"
                    placeholder="Pais"
                  />
                </label>
              </div>
              <div>
              <label htmlFor="email">
                <input
                  type="text"
                  className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                  name="email"
                  placeholder="Estado"
                />
              </label>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <label htmlFor="email">
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                    name="email"
                    placeholder="Ciudad"
                  />
                </label>
              </div>
              <div>
              <label htmlFor="email">
                <input
                  type="text"
                  className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                  name="email"
                  placeholder="Codigo Postal"
                />
              </label>
            </div>

            </div>
            <div className="relative mt-4">
                <label title="Click to upload" htmlFor="button2" className="image-form cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-solid before:border-rounded before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <div className="w-max relative">
                      <Image className="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512" />
                  </div>
                  <div className="relative">
                      <span className="text-image-form block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                        Seleccione una imagen
                      </span>
                  </div>
                </label>
                <input type="file" name="button2" id="button2" className="hidden"/>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="flex flex-col">
                <span className="text-sm pl-5 font-bold w-full">Tarifa por noche</span>
                <div>
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full mt-2"
                    name="email"
                    placeholder="0"
                    style={{maxWidth: 100}}
                  />
                  <span className="text-sm font-bold ml-2">USD / Noche</span>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="flex flex-col">
                <span className="text-sm pl-5 font-bold w-full">Número de habitaciones</span>
                <div>
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full mt-2"
                    name="email"
                    placeholder="0"
                    style={{maxWidth: 100}}
                  />
                  <span className="text-sm font-bold ml-2">Personas</span>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <span className="text-sm pl-5 font-bold w-full">Servicios de tu espacio</span>
              <div className="flex justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="text-sm pl-5 rounded-2lg"
                    name="email"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Wifi</span>
                </div>

                <div className="flex">
                  <input
                    type="checkbox"
                    className="text-sm pl-5 rounded-2lg"
                    name="email"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Estacionamiento</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-sm pl-5 font-bold w-full">Tu espacio es</span>
              <div className="flex justify-between">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="private"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Privado</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="private"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Compartido</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-sm pl-5 font-bold w-full">Que tipo de espacio es</span>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Casa de Campo</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Habitación</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Cabaña</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Departamento</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">En la playa</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Campamento</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Frente al lago</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Casa rodante</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Minicasa</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="type"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Con piscina</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="m-auto text-sm mt-7 px-4 py-2 rounded bg-green text-white rounded-2lg hover:bg-black focus:outline-none"
            >
              Guardar
            </button>

          </form>
        </div>
      </main>
  );
}
