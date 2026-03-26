import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Cairo.Dev",
          from_email: form.email,
          to_email: "cairowork.dev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado pela mensagem, vou entrar em contato assim que possível!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Algo deu errado. Por favor, tente novamente.");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className={`mt-12 bg-black-100 rounded-[20px]`}
    >
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex justify-center items-center`}
      >
        <div className='flex-1 w-full'>
          <p className={styles.sectionSubText}>Entre em contato</p>
          <h3 className={styles.sectionHeadText}>Contato</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8 w-full'
          >
            <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Seu nome</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Qual seu nome?"
                className='bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-600 font-medium w-full'
              />
            </label>
            <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Seu e-mail</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Qual seu e-mail?"
                className='bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-600 font-medium w-full'
              />
            </label>
            <label className='flex flex-col w-full'>
              <span className='text-white font-medium mb-4'>Sua mensagem</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='O que você deseja dizer?'
                className='bg-tertiary py-4 px-8 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-600 font-medium w-full'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
