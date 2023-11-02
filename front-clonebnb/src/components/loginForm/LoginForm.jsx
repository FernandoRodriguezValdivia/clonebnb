'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export const LoginForm = () => {
  const router = useRouter();
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    // console.log(formValues)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if(Object.keys(validate(formValues)).length > 0) return

    // Assuming you have a valid 'validate' function
    const responseNextAuth = await signIn('credentials', {
      email: formValues.email,
      password: formValues.password,
      redirect: true,
      callbackUrl: "/",
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(','));
      return;
    }
    // router.push('/');
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'El email es necesario!';
    } else if (!regex.test(values.email)) {
      errors.email = 'El formato es invalido';
    }

    if (!values.password) {
      errors.password = 'Introduce una contraseña';
    } else if (values.password.length < 4) {
      errors.password = 'Debe de ser de mas de 4 caracteres';
    } else if (values.password.length > 15) {
      errors.password = 'No debe exceder mas de 15 caracteres';
    }

    return errors;
  };

  return (
    <section className="flex justify-center mt-40 sm:mt-36">
      <div className="content flex justify-between items-center sm:gap-0 md:gap-8 md:rounded-1xs md:outline md:outline-1 md:outline-opacity md:shadow-md md:overflow-hidden">
        <picture className="md:w-[450px] max-w-lg hidden sm:block sm:h-[440px] md:h-[450px]">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center gap-5 w-full container max-w-sm outline outline-1 outline-opacity shadow-md rounded-1xs sm:outline-0 md:shadow-none px-5 sm:px-8 py-8">
          <h2 className="font-bold text-lg">Bienvenido a Clonebnb</h2>
          <p className="text-sm">Inicia sesión o regístrate</p>
          <form className="grid justify-center gap-2" onSubmit={handleSubmit}>
            <p className=" text-center text-red-400 mb-3">
              {' '}
              {formErrors.email}
            </p>
            <label htmlFor="email">
              <span className="block text-sm pl-5 font-bold">Email</span>
              <input
                id="email"
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>

            <p className=" text-center text-red-400 mb-3">
              {' '}
              {formErrors.password}
            </p>
            <label htmlFor="password">
              <span className="block text-sm pl-5 font-bold">Contraseña</span>
              <input
                id="password"
                type="password"
                className="text-sm outline outline-1 outline-gray py-2 pl-5 rounded-2lg"
                name="password"
                placeholder="Contraseña"
                value={formValues.password}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="m-auto text-sm mt-7 px-4 py-2 rounded bg-green text-white rounded-2lg hover:bg-black focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </form>
          <span className="text-sm">
            o{' '}
            <Link href="/register" className="font-bold underline ml-2">
              Regístrate
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};
