'use client';
import { useRef, FormEvent, useState } from 'react';
import { ApiClientError } from '@/classes/ApiClient';
import { toast } from 'react-toastify';
import { AppSettings } from '@/classes/settings';
import { ImSpinner5 } from 'react-icons/im';

const RegisterForm = () => {
  // const settings = AppSettings.getInstance();
  const api = AppSettings.getInstance().getApiClient();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const preNumeInput = formData.get('preNume');
    const numeInput = formData.get('nume');
    const emailInput = formData.get('email');
    const passwordInput = formData.get('password');

    const fdata = JSON.stringify({
      preNume: preNumeInput,
      nume: numeInput,
      email: emailInput,
      password: passwordInput,
    });
   const parsedData = JSON.parse(fdata);
    try {
      const data = await api.post('/register', parsedData);
      if (data instanceof ApiClientError) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
    } catch (e) {
      toast.error(String(e));
    }
    formRef.current?.reset();
    setLoading(false);
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} id="contactForm" onSubmit={handleLogin}>
      {/*  single block */}
      <div className="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="text"
          name="nume"
          className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="nume"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Nume *
        </label>
      </div>
      {/* End single block */}
      {/*  single block */}
      <div className="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="text"
          name="preNume"
          className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="preNume"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Prenume *
        </label>
      </div>
      {/* End single block */}
      {/*  single block */}
      <div className="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="email"
          name="email"
          className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Email *
        </label>
      </div>
      {/* End single block */}

      {/*  single block */}
      <div className="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="password"
          name="password"
          className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Password *
        </label>
      </div>
      {/* End single block */}
      <div className="transition-all  duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
        {!loading && (
          <input
            type="submit"
            className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
            value="Submit"
          />
        )}
        {loading && (
          <div className=" transition-all cursor-wait ease-in duration-200 font-semibold  border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white ">
            <span className=" animate-spin  block ">
              <ImSpinner5 />
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
