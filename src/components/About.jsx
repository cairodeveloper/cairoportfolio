import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, path }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <Link
          to={path || "/"}
          className="mt-4 bg-[#3a2176] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#915EFF] transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
                Sou desenvolvedor web focado em criar soluções digitais que geram resultado real.
        Acredito que um site bem feito é muito mais do que design, é uma ferramenta de crescimento.
        Cada projeto que entrego é pensado para aumentar a presença, credibilidade e conversão dos meus clientes, sempre com performance, simplicidade e visual profissional.

        Minha missão é ajudar negócios a conquistarem sua virada de chave digital, transformando ideias em sites que vendem, conectam e inspiram confiança.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
