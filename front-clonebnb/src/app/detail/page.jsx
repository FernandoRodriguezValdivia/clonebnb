import { ImageContainer } from "@/components/detailcard/ImageContainer";
import { InfoCardDetail } from "@/components/detailcard/InfoCardDetail";

export default function Detail(){
  return (
    <section className="absolute pb-28 sm:pb-8 sm:relative top-0 flex justify-center flex-wrap md:flex-nowrap gap-14 md:gap-12 lg:justify-between max-w-screen-2xl mx-auto">
      <ImageContainer/>
      <InfoCardDetail/>
    </section>
  )
}