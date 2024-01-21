import { Buttons, Color, H } from '@/components';

import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';
import { RiNetflixFill } from 'react-icons/ri';
import Image from 'next/image';
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
          <H color={Color.Secondary} level={3}>
            Viteza de incarcare <span className="text-accent">Rapida</span>
          </H>
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
        <Image
          width={200}
          height={280}
          alt="imagine"
          src="/assets/decorations/Website Mockup.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <H color={Color.Secondary} level={3}>
            Nu Ne Oprim doar la Design
          </H>
          <p className="py-6">
            Facem si o strategie de <b>continut</b>, si gandim o{' '}
            <b>experienta a utilizatorului</b> pentru ca site-ul tau{' '}
            <span className="text-accent">
              <b>sa vanda</b>
            </span>
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
        <Image
          width={200}
          height={280}
          alt="imagine"
          src="/assets/decorations/Website Mockup.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <H color={Color.Secondary} level={3}>
            {' '}
            Ce inseamna asta pentru tine?
          </H>
          <p className="py-6">Vei Avea mai multe conversii</p>
          <b className="py-6">de ce?</b>
          <p className="py-6">
            Pentru ca Vom optimiza SIte-ul sa fie performant si facut dupa{' '}
            <b>avatarul tau de client</b>
          </p>
          <Buttons.Calendly />
        </div>
      </div>
    </div>
  );
};
const Variant5 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          width={200}
          height={280}
          alt="imagine"
          src="/assets/decorations/Website Mockup.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <H color={Color.Secondary} level={3}>
            Site-urile facute Custom Vor Ajunge mai rapid pe prima pagina in
            Google
          </H>
          <p className="py-6">
            Site-ul tau poate aparea printre primele rezultate in Google
          </p>
          <b className="py-6">de ce?</b>
          <p className="py-6">
            Pentru ca o implementare custom ofera utilizatorului o experienta
            mai placuta iar algoritmul Google favorizeaza site-urile rapide si
            relevante pentru utilizatori
          </p>
          <Buttons.Calendly />
        </div>
      </div>
    </div>
  );
};

const Variant6 = () => {
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
  6: <Variant6 />,
};

export default variants;
