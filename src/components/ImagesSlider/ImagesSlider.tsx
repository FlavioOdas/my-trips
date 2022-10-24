import React from 'react'
import Slider, { Settings } from 'react-slick'

const ImagesSlider = (props: Settings) => {
  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const settings = { ...defaultSettings, props }

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://i.redd.it/421tpw4mtnu91.png"
          width="100%"
          height={350}
          alt="Hunting trip"
        />
      </div>
      <div>
        <img
          src="https://i.redd.it/8xm7w23xymv91.jpg"
          width="100%"
          height={350}
          alt="Yesterday's sunset on I-84 in CT"
        />
      </div>
      <div>
        <img
          src="https://i.redd.it/864sx9p4x3v91.png"
          width="100%"
          height={350}
          alt="Orange Cars"
        />
      </div>
    </Slider>
  )
}

export default ImagesSlider
