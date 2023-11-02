'use client'

import Image from "next/image";
import "./style.css"

export default function FormHosting() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    formData.set('wifi', (formData.get('wifi') === 'on').toString());
    formData.set('estacionamiento', (formData.get('estacionamiento') === 'on').toString());

    fetch( 'http://localhost:8000', {
      method: 'POST',
      body: formData
    })
    .then( data => console.log(data))

  }

  return (
      <main className="relative m-auto mt-40 sm:mt-28 px-5 pb-5 md:px-8 md:pb-8 max-w-screen-2xl w-full">
        <div className="w-full outline outline-1 outline-opacity shadow-md rounded-1xs sm:outline-0 md:shadow-none px-5 sm:px-8 py-8">
          <form className="grid justify-center gap-2 w-full" onSubmit={handleSubmit}>
            <label>
              <span className="text-sm pl-5 font-bold w-full">Título de alojamiento</span>
              <input
                required
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                name="titulo"
                placeholder="Casa de Campo..."
              />
            </label>

            <label>
              <span className="text-sm pl-5 font-bold w-full">Descripción</span>
              <textarea
                rows={5}
                style={{ resize: 'none' }}
                maxLength={255}
                required
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                name="descripcion"
              />
            </label>

            <label>
              <span className="text-sm pl-5 font-bold mt-4">¿Dónde está tu espacio?</span>
              <input
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                name="avenida"
                placeholder="Calle, número de calle"
              />
            </label>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <label>
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                    name="pais"
                    placeholder="Pais"
                  />
                </label>
              </div>
              <div>
              <label>
                <input
                  type="text"
                  className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                  name="estado"
                  placeholder="estado"
                />
              </label>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <label>
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                    name="ciudad"
                    placeholder="Ciudad"
                  />
                </label>
              </div>
              <div>
              <label>
                <input
                  type="text"
                  className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full"
                  name="postal"
                  placeholder="Codigo Postal"
                />
              </label>
            </div>

            </div>
            <div className="relative mt-4">
                <label title="Click to upload" htmlFor="imagen1" className="image-form cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-solid before:border-rounded before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <div className="w-max relative">
                      <Image className="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512" />
                  </div>
                  <div className="relative">
                      <span className="text-image-form block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                        Seleccione una imagen
                      </span>
                  </div>
                </label>
                <input type="file" name="imagen1" id="imagen1" className="hidden"/>
            </div>
            <div className="mt-4">
              <label className="flex flex-col">
                <span className="text-sm pl-5 font-bold w-full">Tarifa por noche</span>
                <div>
                  <input
                    type="number"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full mt-2"
                    name="tarifa"
                    placeholder="0"
                    style={{maxWidth: 100}}
                  />
                  <span className="text-sm font-bold ml-2">USD / Noche</span>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col">
                <span className="text-sm pl-5 font-bold w-full">Número de habitaciones</span>
                <div>
                  <input
                    type="number"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full mt-2"
                    name="numeroHabitaciones"
                    placeholder="0"
                    style={{maxWidth: 100}}
                  />
                  <span className="text-sm font-bold ml-2">Habitaciones</span>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <label className="flex flex-col">
                <span className="text-sm pl-5 font-bold w-full">Número de Personas</span>
                <div>
                  <input
                    type="text"
                    className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg w-full mt-2"
                    name="capacidad"
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
                    name="wifi"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Wifi</span>
                </div>

                <div className="flex">
                  <input
                    type="checkbox"
                    className="text-sm pl-5 rounded-2lg"
                    name="estacionamiento"
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
                    name="privado"
                    value={true}
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Privado</span>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="privado"
                    value={false}
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
                    value={1}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Casa de Campo</span>
                </div>

                <div className="flex">
                  <input
                    value={6}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Habitación</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    value={2}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Cabaña</span>
                </div>

                <div className="flex">
                  <input
                    value={7}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Departamento</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    value={3}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">En la playa</span>
                </div>

                <div className="flex">
                  <input
                    value={8}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Campamento</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    value={4}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Frente al lago</span>
                </div>

                <div className="flex">
                  <input
                    value={9}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Casa rodante</span>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex">
                  <input
                    value={5}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Minicasa</span>
                </div>

                <div className="flex">
                  <input
                    value={10}
                    type="radio"
                    className="text-sm pl-5 rounded-2lg"
                    name="categoria"
                    style={{width: 20}}
                  />
                  <span className="text-sm font-bold ml-2">Con piscina</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="m-auto text-sm mt-7 px-4 py-2 rounded bg-green text-white rounded-2lg hover:bg-black focus:outline-none"
            >
              Guardar
            </button>

          </form>
        </div>
      </main>
  );
}
