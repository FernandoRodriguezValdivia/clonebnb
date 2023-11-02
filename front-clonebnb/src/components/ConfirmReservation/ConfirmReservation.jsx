'use client'

import { useState } from 'react';

const ConfirmReservation = () => {


  const [formData, setFormData] = useState({ startDate: '', endDate: '', quantityVisitors: '', totalPrice: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    console.log(formData)
  };
 
  const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch('/', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });
    console.log(response)
     if (response.ok) {
       alert('Booking successfully created!');
     } else {
       alert('Error')
     }
    }
  return (

    <section className="max-w-sm rounded p-8 overflow-hidden shadow-lg">
        <img className="w-full" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="home"/>

      <div className="mb-9 mt-9  text-center ">
        

        <h1 className="font-bold ">Accommodation title</h1>
           

    
        <h4>State, City, Country</h4>
        

        <div className="mb-4">
</div>

      </div>
      <div>
      
     
      </div>
  
      
    <div >
      <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>


      
        <div>Fecha de inicio</div>
        <div><input  onChange={handleChange}
  value={formData.startDate} type="date" name="" id="" /></div>

        

        
        <div>Fecha de salida </div>
        <div><input                 onChange={handleChange}
 value={formData.endDate} type="date" name="" id="" /></div>


    


        
        <div>Cant. Pesonas</div>
        <div ><input                 onChange={handleChange}
value={formData.quantityVisitors} className=" p-2   rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="1" type="number" name="" id="" min={1} max={6} /></div>


           
        <div>Total {formData.totalPrice}</div>
        <div>$100</div>


  </form>
    <div className="text-center">

        <button className="mt-6 bg-green py-1 px-3 rounded-1xs text-white">
          Confirmar
        </button>
       
    </div>

    </div>
        
    </section>  
    
  )
}

export default ConfirmReservation