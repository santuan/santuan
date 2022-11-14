import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"

Autoplay.globalOptions = { delay: 10000 }

const EmblaCarouselDalleTokenThree = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [
    Autoplay(),
  ])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])
  return (
    <>
      <div className="overflow-hidden bg-gray-900 shadow-2xl rounded-2xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.14.30_to64th.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.14.58_bvkptt.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060102/santuan/tokens/4/DALL_E_2022-05-27_22.15.46_dtsxky.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060117/santuan/tokens/4/DALL_E_2022-05-27_22.14.46_zo2jvn.png"
              />
            </div>
            <div className="embla__slide ">
              <img
                as="div"
                placeholder="blurred"
                layout="constrained"
                loading="lazy"
                width={500}
                height={500}
                quality="90"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.15.34_zf8vgl.png"
              />
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EmblaCarouselDalleTokenThree