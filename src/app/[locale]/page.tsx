import Image from 'next/image'
import { HomeSection } from "../../components/sections/index";

export default function Home({ params }: { params: { locale: string } }) {

  return (
      <main>
        <HomeSection locale={params.locale}/>
      </main>
  )
}
