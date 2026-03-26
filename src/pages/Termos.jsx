import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const Section = ({ title, children, delay }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.8)}
    initial="hidden"
    animate="show"
    className="mb-10"
  >
    <h3 className="text-white text-[22px] font-bold mb-3">{title}</h3>
    <div className="text-secondary text-[16px] leading-[28px] space-y-3">
      {children}
    </div>
  </motion.div>
);

const Termos = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.padding} max-w-4xl mx-auto relative z-0 pt-[120px] pb-20`}>

        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <p className={styles.sectionSubText}>Leia com atenção</p>
          <h2 className={styles.heroHeadText}>Termos de Uso</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-6 text-secondary text-[16px] leading-[28px]"
        >
          Última atualização: março de 2025. Ao contratar nossos serviços ou utilizar este site,
          você concorda com os termos descritos abaixo. Leia-os com atenção.
        </motion.p>

        <div className="mt-14 bg-tertiary rounded-[20px] p-8 md:p-12 space-y-0">

          <Section title="1. Serviços Oferecidos" delay={0.15}>
            <p>
              Oferecemos desenvolvimento de Landing Pages e Sites Institucionais personalizados.
              Cada projeto é desenvolvido sob demanda, conforme briefing acordado entre as partes
              antes do início do trabalho.
            </p>
            <p>
              O escopo de cada projeto (número de seções, páginas, funcionalidades e prazo) é
              definido em proposta formal enviada antes do pagamento.
            </p>
          </Section>

          <Section title="2. Contratação e Pagamento" delay={0.2}>
            <p>
              O início do desenvolvimento ocorre somente após a confirmação do pagamento
              parcial ou total, conforme acordado na proposta. Os meios de pagamento aceitos
              serão informados durante a negociação.
            </p>
            <p>
              Projetos com pagamento parcelado seguem cronograma definido na proposta.
              O atraso em parcelas pode resultar na suspensão temporária do trabalho.
            </p>
          </Section>

          <Section title="3. Prazo de Entrega" delay={0.25}>
            <p>
              Os prazos são estimados com base no escopo acordado e começam a contar a partir
              da confirmação do pagamento e do recebimento de todos os materiais necessários
              (textos, imagens, logotipo, informações da empresa).
            </p>
            <p>
              Atrasos no envio de materiais pelo cliente podem impactar diretamente o prazo de entrega.
            </p>
          </Section>

          <Section title="4. Revisões e Ajustes" delay={0.3}>
            <p>
              Estão incluídas no projeto até <strong className="text-white">2 rodadas de revisão</strong> após
              a entrega da versão inicial. Alterações fora do escopo original ou solicitadas após a
              entrega final serão cobradas separadamente.
            </p>
          </Section>

          <Section title="5. Propriedade Intelectual" delay={0.35}>
            <p>
              Após a quitação total do projeto, todos os direitos sobre o site desenvolvido são
              transferidos ao cliente. O desenvolvedor se reserva o direito de exibir o projeto
              em seu portfólio, salvo solicitação expressa de confidencialidade pelo cliente.
            </p>
          </Section>

          <Section title="6. Hospedagem e Domínio" delay={0.4}>
            <p>
              Salvo indicação contrária, os serviços de hospedagem e registro de domínio não
              estão incluídos no valor do projeto. O cliente é responsável pela contratação
              desses serviços. Podemos auxiliar na configuração mediante consulta.
            </p>
          </Section>

          <Section title="7. Limitação de Responsabilidade" delay={0.45}>
            <p>
              Não nos responsabilizamos por danos indiretos causados por falhas de hospedagem
              de terceiros, ataques externos (hacking), ou uso indevido do site pelo cliente.
              Após a entrega, a manutenção do ambiente é de responsabilidade do cliente.
            </p>
          </Section>

          <Section title="8. Cancelamento" delay={0.5}>
            <p>
              O cancelamento do projeto pelo cliente após o início do desenvolvimento não gera
              direito a reembolso das parcelas já pagas, pois o trabalho já terá sido executado
              parcialmente. O cliente receberá o que foi produzido até a data do cancelamento.
            </p>
          </Section>

          <Section title="9. Contato" delay={0.55}>
            <p>
              Para dúvidas sobre estes termos ou sobre qualquer aspecto dos serviços,{" "}
              <Link to="/contato" className="text-[#915EFF] hover:underline font-semibold">
                entre em contato
              </Link>.
              Respondemos em até 48 horas úteis.
            </p>
          </Section>

        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.8)}
          initial="hidden"
          animate="show"
          className="mt-10 text-center"
        >
          <Link
            to="/"
            className="inline-block bg-[#915EFF] text-white px-8 py-3 rounded-xl text-[16px] font-bold hover:bg-[#7a4ee0] transition-colors"
          >
            Voltar ao início
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Termos;
