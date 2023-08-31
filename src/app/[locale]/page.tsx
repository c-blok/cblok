import {
    AboutSection,
    ContactsSection,
    HomeSection, PartnersSection,
    PortfolioSection,
    ServicesSection
} from "../../components/sections/index";

export default function Home({ params }: { params: { locale: string } }) {

  return (
      <main>
        <HomeSection locale={params.locale}/>
        <AboutSection locale={params.locale}/>
        <ServicesSection locale={params.locale}/>
        <PortfolioSection locale={params.locale}/>
        <ContactsSection locale={params.locale}/>
        <PartnersSection locale={params.locale}/>
      </main>
  )
}
