import Image from 'next/image'
import { AboutSection, HomeSection, ServicesSection } from "../../components/sections/index";

export default function Home({ params }: { params: { locale: string } }) {

  return (
      <main>
        <HomeSection locale={params.locale}/>
        <AboutSection locale={params.locale}/>
        <ServicesSection locale={params.locale}/>
      </main>
  )
}
