'use client'


import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { signIn } from "next-auth/react"

const SignUp = () => {
const router = useRouter()
const initialValues = {email: '', password: '', confirmPassword: '' }
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
    setisSubmit(true)

        const res = await fetch(`${process.env.NEXT_PUBLIC_REGISTER_URL}/api/v1/user/createUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              ...formValues
            }),

        })

        const responseAPI = await res.json();

        if (!res.ok) {
          setFormErrors(responseAPI.message);
          return;
        }
    
        const responseNextAuth = await signIn("credentials", {
          email: formValues.email,
          password: formValues.password,
          redirect: false,
        });
    
        if (responseNextAuth?.error) {
          setFormErrors(responseNextAuth.error.split(","));
          return;
        }
    
        router.push("/login");

}



useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

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
    }else if(values.password.length > 20){
        errors.password = 'No debe exceder mas de 20 caracteres'
    }


    if(values.password !== values.confirmPassword){
        errors.confirmPassword = 'La contraseña no coincide'
    }

    return errors
}


  return (
    <>
  
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">CloneBnB</h1>

                  
                
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
                        <p className="text-red-400 mt-3"> {formErrors.confirmPassword}</p>
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        />



                    <button
                        type="submit"
                        className="w-full text-center mt-8 py-3 rounded bg-green-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

            

                    </form>
                
                
                </div>

          
            </div>
        </div>
    </>
  )
}

export default SignUp