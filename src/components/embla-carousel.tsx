"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


function CarouselImage({image, imageAltText}: { image: string, imageAltText: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/images/${image}`} alt={imageAltText}
         className="embla__slide"/>
  );
}

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-60 lg:h-80">
        <CarouselImage image="alice-1.jpeg" imageAltText="alice"/>
        <CarouselImage image="bosw-mewp.jpeg" imageAltText="n"/>
        <CarouselImage image="les-mis-crew.jpeg" imageAltText="n"/>
        <CarouselImage image="mic-world.jpeg" imageAltText="a"/>
        <CarouselImage image="symphonia.jpeg" imageAltText="b"/>
        <CarouselImage image="immersion-therapy-1.jpg" imageAltText="n"/>
        <CarouselImage image="english.jpeg" imageAltText="n"/>
      </div>
    </div>
  )
}
