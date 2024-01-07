import { Buttons } from '@/components';

import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';
import { RiNetflixFill } from 'react-icons/ri';

interface Variants {
  [key: number]: React.JSX.Element;
}

const Variant1 = () => {
  return (
    <>
      <div className=" relative hero min-h-[50vh] bg-base-200">
        <div className=" my-10 self-center m-auto flex flex-col gap-4 w-52 relative">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>

          <p className="text-center alert-info block text-secondary my-2">
            Apasa pe butoanele de mai jos si vezi ce inseamna cu adevarat site{' '}
            <b>custom</b>
          </p>
        </div>
      </div>
    </>
  );
};

const Variant2 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h3 className="text-5xl font-bold">
            Viteza de incarcare <span className="text-accent">Rapida</span>
          </h3>
          <p className="py-6">
            In momentul in care interactionezi cu site-ul sau treci de la o
            pagina la alta, timpul de incarcare este <b>insesizabil</b>
          </p>
        </div>
      </div>
    </div>
  );
};

const Variant3 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h3 className="text-5xl font-bold">Hero Section </h3>
          <p className="py-6">
            Este o sectiune care indeamna utilizatorul la o actiune poate fi o
            programare pentru un apel de consultanta
          </p>
          <Buttons.Calendly />
        </div>
      </div>
    </div>
  );
};

const Variant4 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold"> La fel de interesant</h1>
          <p className="py-6">
            Site-ul tau poate aparea printre primele rezultate in Google
          </p>
          <b className="py-6">de ce?</b>
          <p className="py-6">
            Pentru ca o implementare custom ofera utilizatorului o experienta
            mai placuta iar algoritmul Google favorizeaza site-urile rapide si
            relevante pentru utilizatori
          </p>
          <button className="btn btn-primary">Get started</button>
        </div>
      </div>
    </div>
  );
};

const Variant5 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"></h1>
          <p className="py-6">
            Site-ul tau poate fi chiar o platforma complexa nu doar un simplu
            site de prezentare
          </p>
          <div className="w-full flex justify-around">
            <RiNetflixFill size={'3em'} />
            <FaFacebook size={'3em'} />
            <HiAcademicCap size={'3em'} />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const variants: Variants = {
  1: <Variant1 />,
  2: <Variant2 />,
  3: <Variant3 />,
  4: <Variant4 />,
  5: <Variant5 />,
};

export default variants;
