import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className='relative w-full min-h-screen mx-auto'>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-[120px]`}>

        {/* Header */}
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>Conheça o desenvolvedor</p>
          <h2 className={styles.heroHeadText}>Sobre Mim</h2>
        </motion.div>

        {/* Bio principal */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 1)}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-white text-[28px] font-bold mb-4">
              Olá, eu sou o <span className="text-[#915EFF]">Cairo</span>
            </h3>
            <p className="text-secondary text-[17px] leading-[30px] mb-6">
              Sou desenvolvedor web focado em criar soluções digitais que geram resultado real para negócios.
              Acredito que um site bem feito é muito mais do que design — é uma ferramenta de crescimento,
              credibilidade e conversão.
            </p>
            <p className="text-secondary text-[17px] leading-[30px] mb-6">
              Cada projeto que entrego é pensado para aumentar a presença digital, fortalecer a autoridade
              da marca e transformar visitantes em clientes. Trabalho com foco em performance, simplicidade
              e visual profissional.
            </p>
            <p className="text-secondary text-[17px] leading-[30px]">
              Minha missão é ajudar negócios a conquistarem sua virada de chave digital — transformando
              ideias em sites que vendem, conectam e inspiram confiança.
            </p>
          </motion.div>

          {/* Card de destaque */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="green-pink-gradient p-[1px] rounded-[20px]"
          >
            <div className="bg-tertiary rounded-[20px] p-8">
              <h4 className="text-white text-[22px] font-bold mb-6">O que me move</h4>
              <ul className="space-y-4">
                {[
                  { emoji: "🎯", text: "Foco em resultados reais, não apenas em sites bonitos" },
                  { emoji: "⚡", text: "Performance e velocidade em cada projeto" },
                  { emoji: "🤝", text: "Comunicação clara e entrega no prazo combinado" },
                  { emoji: "💡", text: "Soluções simples para problemas complexos" },
                  { emoji: "📈", text: "Sites que crescem junto com o seu negócio" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[20px]">{item.emoji}</span>
                    <span className="text-secondary text-[15px] leading-[24px]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* O que eu faço */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          initial="hidden"
          animate="show"
          className="mt-20"
        >
          <h3 className="text-white text-[30px] font-bold mb-10">O que eu entrego</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Landing Page",
                description: "Páginas de alta conversão criadas para transformar visitantes em clientes. Design focado, copywriting persuasivo e estrutura otimizada para resultados.",
                link: "/landing-page",
              },
              {
                title: "Site Institucional",
                description: "Presença digital profissional e completa para sua empresa. Transmita credibilidade, apresente seus serviços e conquiste novos clientes com autoridade.",
                link: "/site-institucional",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-tertiary rounded-[20px] p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <h4 className="text-white text-[22px] font-bold mb-3">{service.title}</h4>
                <p className="text-secondary text-[15px] leading-[26px] mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block bg-[#3a2176] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#915EFF] transition-colors"
                >
                  Ver exemplos
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          initial="hidden"
          animate="show"
          className="mt-20 text-center"
        >
          <div className="bg-tertiary rounded-[20px] p-10">
            <h3 className="text-white text-[28px] font-bold mb-4">
              Pronto para dar o próximo passo?
            </h3>
            <p className="text-secondary text-[17px] leading-[30px] mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos conversar sobre como posso ajudar o seu negócio a crescer na internet.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-[#915EFF] text-white px-8 py-3 rounded-xl text-[16px] font-bold hover:bg-[#7a4ee0] transition-colors"
            >
              Falar comigo
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Sobre;
