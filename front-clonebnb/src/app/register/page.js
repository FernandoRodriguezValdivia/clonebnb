'use client'
import { SignupForm } from "@/components/signupForm/SignupForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <SignupForm/>
  );
}

export default SignUp