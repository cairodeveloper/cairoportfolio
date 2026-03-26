import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { gymbr, foodlover, dentale } from "../assets";

const LandingPage = () => {
  const examples = [
    {
      id: 1,
      title: "GymBR - Academia Fitness",
      description: "Landing page moderna para academia com foco em conversão de membros. Design impactante com programas, planos e depoimentos.",
      image: gymbr,
      link: "https://cairo74.github.io/gymbr/"
    },
    {
      id: 2,
      title: "FoodLover - Delivery de Comida",
      description: "Página otimizada para delivery de alimentos, com menu atrativo e sistema de pedidos intuitivo para conversão rápida.",
      image: foodlover,
      link: "https://cairo74.github.io/foodlover/"
    },
    {
      id: 3,
      title: "Dentale - Clínica Odontológica",
      description: "Landing page profissional para clínica dental com agendamento online, serviços detalhados e apresentação da equipe médica.",
      image: dentale,
      link: "https://cairo74.github.io/dentale/"
    }
  ];

  return (
    <div className='relative w-full min-h-screen mx-auto'>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-[120px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.heroHeadText}>Landing Page</h2>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Uma página única e impactante para <br className='sm:block hidden' />
            converter visitantes em clientes
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A Landing Page é uma página web estrategicamente desenhada para converter visitantes em leads ou clientes. 
          Com um design focado e persuasivo, apresentamos sua oferta de forma clara e direta, 
          maximizando as chances de conversão. Ideal para:
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className='mt-8 text-secondary text-[17px] leading-[30px]'
        >
          <ul className='list-disc ml-5 space-y-2'>
            <li>Lançamento de produtos ou serviços</li>
            <li>Captura de leads qualificados</li>
            <li>Promoções especiais</li>
            <li>Eventos e webinars</li>
            <li>Campanhas de marketing digital</li>
          </ul>
        </motion.div>

        {/* Seção de Exemplos */}
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className='mt-16'
        >
          <h3 className='text-white text-[30px] font-bold mb-10'>Exemplos de Projetos</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {examples.map((example, index) => (
              <motion.div
                key={example.id}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className='bg-tertiary rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300'
              >
                <a href={example.link} target="_blank" rel="noopener noreferrer">
                  <div className='relative w-full h-[230px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center overflow-hidden'>
                    <img
                      src={example.image}
                      alt={example.title}
                      className='w-full h-full object-cover hover:scale-110 transition-all duration-300'
                    />
                  </div>
                </a>
                <div className='p-5'>
                  <h4 className='text-white font-bold text-[18px] mb-2'>{example.title}</h4>
                  <p className='text-secondary text-[14px] leading-[22px]'>{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;