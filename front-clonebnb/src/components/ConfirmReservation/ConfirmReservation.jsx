'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ConfirmReservation = ({ detail, closeModal }) => {

  const { data: session } = useSession()
  const token = session?.user?.data?.token
  const [formData, setFormData] = useState({ startDate: "", endDate: "", quantityVisitors: "", totalPrice: 0});
  const [ error, setError ] = useState({ startDate: ['Seleccione una fecha de inicio'], endDate: ['Seleccione una fecha de salida'], quantityVisitors: ['Debe escribir una cantidad'] })
  const [ isSend, setIsSend] = useState(false)
  const [ isReservated, setIsReservated ] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if( name === 'endDate'){
      if( value === ""){
        setError(prev => ({
          ...prev,
          endDate: prev.endDate.concat( "Seleccione una fecha de salida" )
        }))
      } else {
        setError(prev => ({
          ...prev,
          endDate: prev.endDate.filter( err => err !== "Seleccione una fecha de salida" )
        }))
      }
    }

    if( name === 'startDate'){
      if( value === ""){
        setError(prev => ({
          ...prev,
          startDate: prev.startDate.concat( "Seleccione una fecha de inicio" )
        }))
      } else {
        setError(prev => ({
          ...prev,
          startDate: prev.startDate.filter( err => err !== "Seleccione una fecha de inicio" )
        }))
      }
    }

    if( name === 'quantityVisitors'){
      if(value === ""){
        setError(prev => ({
          ...prev,
          quantityVisitors: prev.quantityVisitors.concat( "Debe escribir una cantidad" )
        }))
      } else {
        setError(prev => ({
          ...prev,
          quantityVisitors: prev.quantityVisitors.filter( err => err !== "Debe escribir una cantidad" )
        }))
      }
    }

    if( name === 'endDate' && formData.startDate !== ""){
      const fechaInicio = new Date(formData.startDate)
      const fechaFin = new Date(value)
      if( fechaInicio >= fechaFin ){
        setError(prev => ({
          ...prev,
          startDate: prev.startDate.filter( err => err !== "Fecha de inicio debe ser anterior a la Fecha de salida"),
          endDate: prev.endDate.concat("Fecha de salida debe ser posterior a la Fecha de inicio")
        }))
      } else {
        setError(prev => ({
          ...prev,
          endDate: prev.endDate.filter( err => err !== "Fecha de salida debe ser posterior a la Fecha de inicio")
        }))
      }
    }

    if( name === 'startDate' && formData.endDate !== ""){
      const fechaInicio = new Date(value)
      const fechaFin = new Date(formData.endDate)
      if( fechaInicio >= fechaFin ){
        setError(prev => ({
          ...prev,
          endDate: prev.endDate.filter( err => err !== "Fecha de salida debe ser posterior a la Fecha de inicio"),
          startDate: prev.startDate.concat("Fecha de inicio debe ser anterior a la Fecha de salida")
        }))
      } else {
        setError(prev => ({
          ...prev,
          startDate: prev.startDate.filter( err => err !== "Fecha de inicio debe ser anterior a la Fecha de salida")
        }))
      }
    }

    if( name === 'quantityVisitors' && value !== ""){
      if(  Number(value) <= 0){
        setError(prev => ({
          ...prev,
          quantityVisitors: prev.quantityVisitors.concat( "La cantidad debe ser mayor que cero" )
        }))
      }else {
        setError(prev => ({
          ...prev,
          quantityVisitors: prev.quantityVisitors.filter( err => err !== "La cantidad debe ser mayor que cero" )
        }))
      }
    } 

    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if( error.endDate.length > 0 || error.startDate.length > 0 || error.quantityVisitors.length > 0){
      setIsSend(true)
      return
    }

    if(!token) {
      alert('Debe iniciar sesión para reservar')
      return;
    }

    const send = {
      stayId: Number(detail.id),
      startDate: formData.startDate,
      endDate: formData.endDate,
      quantityVisitors: Number(formData.quantityVisitors),
      totalPrice: Number(formData.totalPrice)
    }

    const response = await fetch( 'https://c14-04-m-node-react-production.up.railway.app/api/v1/reservation/createReservation', {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      method: 'POST',
      body: JSON.stringify(send)
    })

    const responseJson = await response.json();
    if(responseJson.status === 0){
      setIsReservated(true)
    }
    
    //  if( error.endDate || error.startDate)
    //  const response = await fetch('/', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify(formData),
    //  });
    // console.log(response)
    //  if (response.ok) {
    //    alert('Booking successfully created!');
    //  } else {
    //    alert('Error')
    //  }
    }
  
  useEffect(() => {

    if(formData.startDate !== "" && formData.endDate !== ""){
      const fechaInicio = new Date(formData.startDate)
      const fechaFin = new Date(formData.endDate)
      const unDia = 24 * 60 * 60 * 1000
      const diferenciaEnDias = Math.round(Math.abs((fechaFin - fechaInicio) / unDia));
      setFormData(prev => ({
        ...prev,
        totalPrice: diferenciaEnDias * detail?.tarifa
      }))
    }

  },[formData.startDate, formData.endDate])

  return (

    <section className="max-w-sm rounded p-8 overflow-hidden shadow-lg">
      <div className='pt-20 flex justify-center' style={{height: 200}}>
        <Image
          width={200}
          height={200}
          src={detail?.images[0].url}
          alt={detail?.titulo}
          className="w-full h-auto"  
        />
      </div>

      <div className="mb-9 mt-9  text-center ">
        {
          isReservated && <p className="bg-green" style={{color: 'white'}}>Alojamiento reservado con éxito</p>
        }

        <h1 className="font-bold ">{detail?.titulo}</h1>
           

    
        <h4>{detail?.estado}, {detail?.ciudad}, {detail?.pais}</h4>
        

        <div className="mb-4">
</div>

      </div>
      <div>
      
     
      </div>
  
      
    <div >
      <form className="grid grid-cols-2 gap-x-5" onSubmit={handleSubmit}>


      
        <div className='text-sm'>Fecha de inicio</div>
        <div className='text-sm'> <input  onChange={handleChange}
  value={formData.startDate} type="date" name="startDate" id="" /></div>
      {
      (error.startDate.length > 0 && isSend) &&
      error.startDate.map( err => (
        <p className='text-xs col-span-2' style={{color: 'red'}} key={err}>{err}</p>
      ) )
    }

        

        
        <div className='text-sm mt-3'>Fecha de salida </div>
        <div className='text-sm mt-3'><input onChange={handleChange} required value={formData.endDate} type="date" name="endDate" id="" /></div>
        {
          (error.endDate.length > 0 && isSend) &&
          error.endDate.map( err => (
            <p className='text-xs col-span-2' style={{color: 'red'}} key={err}>{err}</p>
          ) )
        }
    


        
        <div className='text-sm mt-3'>Cant. Pesonas</div>
        <div className='text-sm mt-3'>
          <input name="quantityVisitors" onChange={handleChange} value={formData.quantityVisitors} className="text-sm rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="1" type="number" id="" min={1}/>
        </div>
        {
          (error.quantityVisitors.length > 0 && isSend) &&
          error.quantityVisitors.map( err => (
            <p className='text-xs col-span-2' style={{color: 'red'}} key={err}>{err}</p>
          ) )
        }


           
        <div className='text-sm mt-3'>Total</div>
        <div className='text-sm mt-3'>${formData.totalPrice}</div>


  </form>
    {
      isReservated ?
      <div className="flex justify-center">
      <button type='button' className="mt-6 bg-gray py-1 px-3 rounded-1xs text-white" onClick={closeModal}>
        Cerrar
      </button>

      </div>
      :
      <div className="flex justify-between">

        <button className="mt-6 bg-green py-1 px-3 rounded-1xs text-white" onClick={handleSubmit}>
          Confirmar
        </button>

        <button type='button' className="mt-6 bg-gray py-1 px-3 rounded-1xs text-white" onClick={closeModal}>
          Cancelar
        </button>
       
    </div>
    }
    </div>
        
    </section>  
    
  )
}

export default ConfirmReservation