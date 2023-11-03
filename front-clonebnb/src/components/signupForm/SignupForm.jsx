'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export const SignupForm = () => {
  const router = useRouter();
  const initialValues = { email: '', password: '', confirmPassword: '' };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({
      ...formValues,
      [name]: value
    });
    // console.log(formValues)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_REGISTER_URL}/api/v1/user/createUser` ,
         {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formValues
        })
      }
    );

    const responseAPI = await res.json();

    if (!res.ok) {
      setFormErrors(responseAPI.message);
      return;
    }

    const responseNextAuth = await signIn('credentials', {
      email: formValues.email,
      password: formValues.password,
      redirect: false
    });

    if (responseNextAuth?.error) {
      setFormErrors(responseNextAuth.error.split(','));
      return;
    }

    router.push('/login');
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);

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
    } else if (values.password.length > 20) {
      errors.password = 'No debe exceder mas de 20 caracteres';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'La contraseña no coincide';
    }

    return errors;
  };

  return (
    <section className="flex justify-center mt-40 sm:mt-36">
      <div className="content flex justify-between items-center sm:gap-0 md:gap-8 md:rounded-1xs md:outline md:outline-1 md:outline-opacity md:shadow-md md:overflow-hidden">
        <picture className="md:w-[450px] max-w-lg hidden sm:block sm:h-[460px]">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </picture>
        <div className="flex flex-col items-center gap-2 w-full container max-w-sm outline outline-1 outline-opacity shadow-md rounded-1xs sm:outline-0 md:shadow-none px-5 sm:px-8 py-6">
          <h2 className="font-bold text-lg">Bienvenido a Clonebnb</h2>
          <p className="text-sm mb-3">Regístrate o inicia sesión</p>
          <form className="grid justify-center gap-5" onSubmit={handleSubmit}>
            <label className="relative" htmlFor="email">
              <p className="w-fit absolute -bottom-4 left-5 text-xs text-red">
                {formErrors.email}
              </p>
              <span className="block text-sm pl-5 font-bold">Email</span>
              <input
                id="email"
                type="text"
                className="text-sm outline outline-1 outline-gray py-2 px-4 rounded-2lg"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>
            <label className="relative" htmlFor="password">
              <p className="w-fit absolute -bottom-4 left-5 text-xs text-red">
                {formErrors.password}
              </p>
              <span className="block text-sm pl-5 font-bold">Contraseña</span>
              <input
                id="password"
                type="password"
                className="text-sm outline outline-1 outline-gray py-2 px-4 rounded-2lg"
                name="password"
                placeholder="Contraseña"
                value={formValues.password}
                onChange={handleChange}
              />
            </label>
            <label className="relative" htmlFor="password-2">
              <p className="w-fit absolute -bottom-4 left-5 text-xs text-red">
                {formErrors.confirmPassword}
              </p>
              <span className="block text-sm pl-5 font-bold">
                Confirmar Contraseña
              </span>
              <input
                id="password-2"
                type="password"
                className="text-sm outline outline-1 outline-gray py-2 px-4 rounded-2lg"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="m-auto text-sm mt-2 px-4 py-2 rounded bg-green text-white rounded-2lg hover:bg-black transition duration-200 ease-linear"
            >
              Registrar
            </button>
          </form>
          <span className="mt-4 text-sm">
            o 
            <Link href="/login" className="font-bold underline ml-2">
              Inicia sesión
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};
