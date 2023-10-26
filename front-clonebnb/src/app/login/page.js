'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"
const Login = () => {
const router = useRouter()
    const initialValues = {email: '', password: '' }
    const [formValues, setformValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)
    
    
    const handleChange = (e) =>{
        const {name, value } = e.target
        setformValues({
            ...formValues, [name]: value
        })
        console.log(formValues)
    }
    
    

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        
        
        // Assuming you have a valid 'validate' function
        
        

        const responseNextAuth = await signIn("credentials", {
            email: formValues.email,
            password: formValues.password,
            redirect: false,
          });
      
          if (responseNextAuth?.error) {
            setErrors(responseNextAuth.error.split(","));
            return;
          }
      
          router.push("/");
    
    }
    

    


 
    const validate = (values) =>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    
   


        if(!values.email){
            errors.email = 'El email es necesario!'
        }else if(!regex.test(values.email)){
    errors.email = 'El formato es invalido'
        }
            
    
        if(!values.password){
            errors.password = 'Introduce una contraseña'
    
        }else if(values.password.length < 4){
            errors.password = 'Debe de ser de mas de 4 caracteres'
        }else if(values.password.length > 15){
            errors.password = 'No debe exceder mas de 15 caracteres'
        }
    

     
      
        return errors
    }
    



  return (
    <>


<div className="bg-grey-lighterflex flex-col">
            <div className="container max-w-sm  flex-1 flex flex-col items-center justify-center px-">
                <div className="bg-white rounded shadow-md text-black w-full">

        
      
                
                    <form onSubmit={handleSubmit}>


               

<p className=" text-center text-red-400 mb-3"> {formErrors.email}</p>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        value={formValues.email}
                        onChange={handleChange}
                        
                        />

<p className=" text-center text-red-400 mb-3"> {formErrors.password}</p>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                        
                        
                        />
                 
                    <button
                        type="submit"
                        className="w-full text-center mt-8 py-3 rounded bg-green-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Sign In</button>


    
                    </form>
                
                
                </div>

          
            </div>
        </div>
    
    
    </>
  )
}

export default Login