"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

function CarouselImage({image, imageAltText}: { image: string, imageAltText: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/images/carousel/${image}`} alt={imageAltText}
         className="embla__slide" />
  );
}

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

  return (
    <div className="embla hide-on-nav-open" ref={emblaRef}>
      <div className="embla__container h-60 lg:h-80">
        <CarouselImage image="alice-1.jpeg" imageAltText="An actor stood center stage, surrounded actors crouched down in a circle. Dim blue lighting with warm white spots. Alice By Heart @ The Loco Klub"/>
        <CarouselImage image="les-mis-crew.jpeg" imageAltText="STA Crew on the set of Les Mis 48 hour production set. Les Mis @ The Winston"/>
        <CarouselImage image="mic-world.jpeg" imageAltText="Microphone table backstage during a show."/>
        <CarouselImage image="symphonia.jpeg" imageAltText="Orchestra with christmas decorations sat around the stage. Symphonia @ The Winston"/>
        <CarouselImage image="immersion-therapy-1.jpg" imageAltText="Actor sat in a bath tub under a cool white spotlight center stage. Immersion Therapy @ The Winston"/>
        <CarouselImage image="english.jpeg" imageAltText="Living room set design at an alge to the audience with lots of Union Jack flags. Lovely English @ The Winston"/>
        <CarouselImage image="round.png" imageAltText="Theatre show in-the-round, actors walking around the central stage facing different sides of the audience. @ The Pegg" />
        <CarouselImage image="alice-2.jpg" imageAltText="Actors in pink and purple lighting. Alice by Heart @ The Loco Klub"/>
        <CarouselImage image="pegg-shaxcase.jpg" imageAltText="Actor talking to audience. Shaxcase @ The Pegg" />
        <CarouselImage image="9to5-violet.jpg" imageAltText="Actor stood on table in purple lighting. 9 to 5 @ The Winston" />
        <CarouselImage image="whodunnit.jpg" imageAltText="Cast stood at front of thrust stage singing towards the audience. Who Dunnit @ The Winston" />
        <CarouselImage image="oliver.jpg" imageAltText="Cast of Oliver 48 hour production. Oliver @ The Winston" />
        <CarouselImage image="immersion-therapy-2.png" imageAltText="Actor stood over another actor on a platform in green lighting. Immesrion Therapy @ The Winston" />
        <CarouselImage image="john-lennon.jpg" imageAltText="Pink and yellow set design with raised platform upstage and band. Why is John Lennon Wearing a Skirt? @ The Winston"/>
        <CarouselImage image="9to5-set.jpg" imageAltText="Office themed set design for 9 to 5 the musical. 9 to 5 @ The Winston" />
      </div>
    </div>
  )
}
