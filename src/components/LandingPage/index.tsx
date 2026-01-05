import { 
  GlobalStyle,
  TopBar,
  HeroSection,
  HeroContent,
  HeroText,
  HeroImage,
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
  // Placeholder texts - você pode substituir depois
  const features = [
    "Planejamento estratégico para os próximos 90 dias",
    "Metodologia prática para líderes e donos de empresas",
    "Metas claras e vendas previsíveis",
    "Controle total do seu negócio",
    "Templates e ferramentas prontas para usar",
    "Bônus exclusivos para implementação imediata",
  ];

  const targetAudience = [
    {
      icon: <Target />,
      title: "Empreendedores",
      description: "Que querem dominar 2026 com um plano de ação claro e eficiente"
    },
    {
      icon: <TrendingUp />,
      title: "Líderes de Equipe",
      description: "Que desejam criar metas previsíveis e escalar seus resultados"
    },
    {
      icon: <Users />,
      title: "Donos de Empresas",
      description: "Que buscam controle total e crescimento sustentável do negócio"
    },
  ];

  const benefits = [
    "Clareza total sobre suas metas e objetivos",
    "Vendas previsíveis mês a mês",
    "Controle absoluto do seu negócio",
    "Plano de ação para os próximos 90 dias",
    "Ferramentas práticas de gestão",
    "Metodologia testada e validada",
  ];

  return (
    <>
      <GlobalStyle />
      
      {/* Top Bar */}
      <TopBar>
        📘 Exclusivo para Líderes que desejam <span>dominar 2026</span> com metas claras e vendas previsíveis!
      </TopBar>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <Badge>🔥 Método Comprovado</Badge>
              <Title>
                <span>90 Dias</span> Para Dominar 2026
              </Title>
              <Subtitle>
                O método prático para <strong>líderes e donos de empresas de serviços</strong> criarem metas claras, vendas previsíveis e controle total — mesmo em um ano desafiador.
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
            Este ebook é <span>exclusivo</span> para você que:
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
            Com este ebook você <span>nunca mais</span> vai:
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
