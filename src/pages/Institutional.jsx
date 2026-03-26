import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import nexusImage from "../assets/examples/institutional-website/nexus.png";
import vitaeImage from "../assets/examples/institutional-website/vitae.png";
import ironcoreImage from "../assets/examples/institutional-website/ironcore.png";

const Institutional = () => {
  const examples = [
    {
      id: 1,
      title: "Nexus",
      description:
        "Exemplo de site institucional com foco em contato, apresentação da empresa e posicionamento profissional.",
      image: nexusImage,
      link: "https://nexus-livid-one-46.vercel.app",
    },
    {
      id: 2,
      title: "Vitae",
      description:
        "Exemplo de presença institucional moderna com comunicação clara, identidade forte e navegação objetiva.",
      image: vitaeImage,
      link: "https://vitae-one.vercel.app",
    },
    {
      id: 3,
      title: "Ironcore",
      description:
        "Exemplo de site institucional com proposta corporativa robusta, seção de contato e apresentação de serviços.",
      image: ironcoreImage,
      link: "https://ironcore-six.vercel.app/",
    },
  ];

  return (
    <div className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-[120px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.heroHeadText}>Site Institucional</h2>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Sua empresa na internet com <br className="sm:block hidden" />
            autoridade e profissionalismo
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Um site institucional é a presença digital oficial da sua empresa.
          Desenvolvemos sites profissionais que transmitem credibilidade e
          autoridade, apresentando sua empresa, produtos e serviços de forma
          organizada e atraente.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-8 text-secondary text-[17px] leading-[30px]"
        >
          <ul className="list-disc ml-5 space-y-2">
            <li>Apresentação profissional da empresa</li>
            <li>Portfólio de produtos e serviços</li>
            <li>História e valores da empresa</li>
            <li>Informações de contato e localização</li>
            <li>Blog e área de notícias</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.3, 1)} className="mt-16">
          <h3 className="text-white text-[30px] font-bold mb-10">
            Exemplos de Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={example.id}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="bg-tertiary rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <a href={example.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-[230px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<div class="text-white text-center p-4">Imagem em breve</div>';
                      }}
                    />
                  </div>
                </a>
                <div className="p-5">
                  <h4 className="text-white font-bold text-[18px] mb-2">
                    {example.title}
                  </h4>
                  <p className="text-secondary text-[14px] leading-[22px]">
                    {example.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Institutional;
