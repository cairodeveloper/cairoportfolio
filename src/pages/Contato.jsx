import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-tertiary rounded-[16px] p-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
  >
    <div className="w-12 h-12 bg-[#915EFF]/20 rounded-full flex items-center justify-center text-[24px] shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-secondary text-[13px] mb-1">{title}</p>
      <p className="text-white font-semibold text-[16px]">{value}</p>
    </div>
  </a>
);

const Contato = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.padding} max-w-4xl mx-auto relative z-0 pt-[120px] pb-20`}>
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>Vamos conversar</p>
          <h2 className={styles.heroHeadText}>Contato</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-6 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          Tem um projeto em mente ou quer entender melhor como posso ajudar o seu
          negócio? Fala comigo pelo canal que preferir, respondo rápido.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.9)}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <ContactCard
            icon="💬"
            title="WhatsApp"
            value="+55 (31) 97501-1696"
            href="https://wa.me/5531975011696"
          />
          <ContactCard
            icon="📧"
            title="E-mail"
            value="cairowork.dev@gmail.com"
            href="mailto:cairowork.dev@gmail.com"
          />
          <ContactCard
            icon="📸"
            title="Instagram"
            value="@cairo_dev"
            href="https://instagram.com/cairo_dev"
          />
          <ContactCard
            icon="💼"
            title="LinkedIn"
            value="linkedin.com/in/cairo-rezende-791a51293/"
            href="https://www.linkedin.com/in/cairo-rezende-791a51293/"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.9)}
          initial="hidden"
          animate="show"
          className="mt-10 bg-tertiary rounded-[20px] p-8"
        >
          <h3 className="text-white text-[22px] font-bold mb-4">Horário de atendimento</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-[#915EFF] font-semibold text-[14px] mb-1">Segunda a Sexta</p>
              <p className="text-white text-[16px]">10:00 - 18:00</p>
            </div>
            <div>
              <p className="text-[#915EFF] font-semibold text-[14px] mb-1">Sábado</p>
              <p className="text-white text-[16px]">08:00 - 12:00</p>
            </div>
          </div>
          <p className="text-secondary text-[14px] mt-5 leading-[22px]">
            Fora do horário comercial? Manda mensagem assim mesmo, respondo assim
            que possível.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.9)}
          initial="hidden"
          animate="show"
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/5531975011696"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-xl text-[17px] font-bold hover:bg-[#1ebe5a] transition-colors"
          >
            💬 Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contato;
