import {
    AboutSection,
    ContactsSection,
    HomeSection,
    MissionSection,
    ServicesSection, GallerySection
} from "../../components/sections/index";

export default function Home({ params }: { params: { locale: string } }) {

  return (
      <main>
        <HomeSection locale={params.locale}/>
        <AboutSection locale={params.locale}/>
        <ServicesSection locale={params.locale}/>
        <MissionSection locale={params.locale}/>
        <GallerySection locale={params.locale}/>
        <ContactsSection locale={params.locale}/>
      </main>
  )
}
