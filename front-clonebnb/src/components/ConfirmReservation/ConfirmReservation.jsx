'use client'


const ConfirmReservation = () => {
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
  
      
    <div className="grid grid-cols-2 gap-5">
        
        <div>Fecha de inicio</div>
        <div><input type="date" name="" id="" /></div>

        

        
        <div>Fecha de salida </div>
        <div><input type="date" name="" id="" /></div>


    


        
        <div>Cant. Pesonas</div>
        <div ><input className=" p-2   rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="1" type="number" name="" id="" min={1} max={6} /></div>


           
        <div>Total (USD)</div>
        <div>$100</div>


    </div>

    <div className="text-center">

        <button className="mt-6 bg-green py-1 px-3 rounded-1xs text-white">
          Confirmar
        </button>
       
    </div>
  
    

    </section>  )
}

export default ConfirmReservation