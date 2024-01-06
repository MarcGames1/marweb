'use client'
import React, {useRef, useState} from 'react'
import Navbar from './MockupContentComponents/Navbar'
import Buttons from '@/components/Buttons';
import { RiNetflixFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';
import { motion, useMotionValue, useScroll } from 'framer-motion';


interface Variants {
  [key: number]: JSX.Element;
}


const MockupContent = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'end start'],
    });
const x = useMotionValue(0);
const y = useMotionValue(0);
 

const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

    const [variant, setVariant] = useState<number>(1);

    const variants: Variants = {
      1: (
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
      ),
      2: (
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
      ),
      3: (
        <div className="hero min-h-[50vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h3 className="text-5xl font-bold">Hero Section </h3>
              <p className="py-6">
                Este o sectiune care indeamna utilizatorul la o actiune poate fi
                o programare pentru un apel de consultanta
              </p>
              <Buttons.Calendly />
            </div>
          </div>
        </div>
      ),
      4: (
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
                Pentru ca o implementare custom ofera utilizatorului o
                experienta mai placuta iar algoritmul Google favorizeaza
                site-urile rapide si relevante pentru utilizatori
              </p>
              <button className="btn btn-primary">Get started</button>
            </div>
          </div>
        </div>
      ),
      5: (
        <div className="hero min-h-[50vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold"></h1>
              <p className="py-6">
                Site-ul tau poate fi chiar o platforma complexa nu doar un
                simplu site de prezentare
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
      ),
      6: (
       <motion.div
       
      >
        <div
          className="hero-background"
          style={{
            width: '200%',
            height: '200%',
            backgroundImage: `radial-gradient(circle, rgba(var(--primary),0.5), black)`,
            position: 'absolute',
            top: `calc(${y.get()}px - 50%)`,
            left: `calc(${x.get()}px - 50%)`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div className=""></div>
        <div className=" text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </motion.div>
    ),
     
    };

const handleVariantChange = (newVariant: number) => {
  setVariant(newVariant);
};

  return (
    <motion.div ref={targetRef} className="w-full ">
      <Navbar />
      {variants[variant]}
      <div className="flex items-center justify-center w-full gap-10">
        {Object.keys(variants).map((key) => (
          <button
            key={key}
            className={`btn ${
              parseInt(key) === variant ? 'btn-outline' : 'btn-primary'
            }`}
            onClick={() => handleVariantChange(parseInt(key))}
          >
            {key}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default MockupContent