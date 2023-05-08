import { HomeContainer, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import camisa1 from '../assets/camisetas/camisa-1.png'
import camisa2 from '../assets/camisetas/camisa-2.png'
import camisa3 from '../assets/camisetas/camisa-3.png'
import camisa4 from '../assets/camisetas/camisa-4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} alt="" width={520} height={480} />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa2} alt="" width={520} height={480} />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} alt="" width={520} height={480} />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa4} alt="" width={520} height={480} />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
