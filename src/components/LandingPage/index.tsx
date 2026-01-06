import { 
  GlobalStyle,
  TopBar,
  HeroSection,
  HeroContent,
  HeroText,
  HeroImage,
  HeroImageMobile,
  Badge,
  Title,
  Subtitle,
  CTAButton,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Container,
  TargetSection,
  SectionTitle,
  TargetGrid,
  TargetCard,
  TargetIcon,
  TargetTitle,
  TargetDescription,
  BenefitsSection,
  BenefitsList,
  BenefitItem,
  BenefitIcon,
  BenefitText,
  PriceSection,
  PriceCard,
  PriceLabel,
  OldPrice,
  CurrentPrice,
  DiscountBadge,
  GuaranteeSection,
  GuaranteeCard,
  GuaranteeIcon,
  GuaranteeText,
  Footer,
  FooterText,
} from './styles';
import { Check, Target, TrendingUp, Clock, Users, BookOpen, Shield, ArrowRight, Award, Zap, Calendar } from 'lucide-react';
import ebookCover from '@/assets/ebook-cover.png';

const LandingPage = () => {
  const features = [
    "Metodologia de ciclos trimestrais: Organização, Ajuste e Consolidação",
    "Ferramenta de decomposição de metas financeiras, comerciais e operacionais",
    "Sistema de Triplos Planos A: Ideal, Realista e Defensivo",
    "5 indicadores estratégicos para evitar a montanha-russa de vendas",
    "Checklists para transformar metas em rotina diária inegociável",
    "Blindagem contra imprevistos de 2026: ano político, Copa e feriados",
  ];

  const targetAudience = [
    {
      icon: <Target />,
      title: "Líderes que querem domínio trimestral",
      description: "Controle o ano dominando os primeiros 90 dias em três fases: Organização, Ajuste e Consolidação"
    },
    {
      icon: <TrendingUp />,
      title: "Gestores que querem metas matemáticas",
      description: "Transforme desejos em números reais com metas financeiras, comerciais e operacionais"
    },
    {
      icon: <Users />,
      title: "Empresários preparados para imprevistos",
      description: "Tenha 3 cenários prontos: Plano Ideal, Realista e Defensivo para 2026"
    },
  ];

  const benefits = [
    "Perder o foco tentando controlar o ano inteiro de uma vez",
    "Criar metas baseadas apenas em esperança sem dados reais",
    "Sofrer com a montanha-russa de vendas sem indicadores",
    "Ficar refém de imprevistos sem planos de contingência",
    "Ter um planejamento no papel que nunca é executado",
    "Começar 2026 sem uma rotina diária estruturada",
  ];

  return (
    <>
      <GlobalStyle />
      
      {/* Top Bar */}
      <TopBar>
        📘 O método prático para líderes criarem <span>metas claras, vendas previsíveis e controle total</span> — mesmo em um ano desafiador!
      </TopBar>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <Badge>🔥 Metodologia de Ciclos Trimestrais</Badge>
              
              <HeroImageMobile>
                <img src={ebookCover} alt="Ebook 90 Dias Para Dominar 2026 - Branding7" />
              </HeroImageMobile>
              
              <Title>
                <span>90 Dias</span> Para Dominar 2026
              </Title>
              <Subtitle>
                Domine o ano dominando os primeiros 90 dias. O método para <strong>líderes e donos de empresas de serviços</strong> transformarem desejo em matemática com metas financeiras, comerciais e operacionais — blindados contra os imprevistos de 2026.
              </Subtitle>
              
              <FeaturesList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FeatureIcon>
                      <Check />
                    </FeatureIcon>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </FeaturesList>

              <CTAButton href="#oferta">
                Quero Meu Ebook Agora <ArrowRight />
              </CTAButton>
            </HeroText>

            <HeroImage>
              <img src={ebookCover} alt="Ebook 90 Dias Para Dominar 2026 - Branding7" />
            </HeroImage>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Target Audience Section */}
      <TargetSection>
        <Container>
          <SectionTitle>
            Para quem é o <span>90 Dias Para Dominar 2026</span>?
          </SectionTitle>
          
          <TargetGrid>
            {targetAudience.map((item, index) => (
              <TargetCard key={index}>
                <TargetIcon>{item.icon}</TargetIcon>
                <TargetTitle>{item.title}</TargetTitle>
                <TargetDescription>{item.description}</TargetDescription>
              </TargetCard>
            ))}
          </TargetGrid>
        </Container>
      </TargetSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <Container>
          <SectionTitle>
            Com este eBook você <span>nunca mais</span> vai:
          </SectionTitle>
          
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>
                  <Zap />
                </BenefitIcon>
                <BenefitText>{benefit}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitsList>
        </Container>
      </BenefitsSection>

      {/* Price Section */}
      <PriceSection id="oferta">
        <Container>
          <SectionTitle>
            Garanta seu <span>acesso agora</span>
          </SectionTitle>
          
          <PriceCard>
            <PriceLabel>De</PriceLabel>
            <OldPrice>R$ 97,00</OldPrice>
            <DiscountBadge>Oferta Especial</DiscountBadge>
            <CurrentPrice>
              R$ 47<span>,00</span>
            </CurrentPrice>
            <CTAButton href="#" style={{ animation: 'none' }}>
              Quero Dominar 2026 <ArrowRight />
            </CTAButton>
          </PriceCard>
        </Container>
      </PriceSection>

      {/* Guarantee Section */}
      <GuaranteeSection>
        <Container>
          <GuaranteeCard>
            <GuaranteeIcon>
              <Shield />
            </GuaranteeIcon>
            <GuaranteeText>
              <h3>Garantia Incondicional de 7 Dias</h3>
              <p>
                Se dentro de 7 dias você não ficar 100% satisfeito com o conteúdo do ebook, 
                basta nos enviar um e-mail e devolveremos 100% do seu investimento. 
                Sem perguntas, sem burocracia.
              </p>
            </GuaranteeText>
          </GuaranteeCard>
        </Container>
      </GuaranteeSection>

      {/* Footer */}
      <Footer>
        <FooterText>
          © 2026 Branding7. Todos os direitos reservados.
        </FooterText>
        <FooterText>
          <a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a>
        </FooterText>
      </Footer>
    </>
  );
};

export default LandingPage;
