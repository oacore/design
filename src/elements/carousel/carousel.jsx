/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, memo } from 'react'
import Slider from 'react-slick'

import style from './carousel.css'

import { classNames } from 'utils'

const CustomArrow = memo(({ className, onClick, iconClass, arrowClass }) => (
  <div className={classNames.use(className, iconClass)} onClick={onClick}>
    <div className={classNames.use(arrowClass)} />
  </div>
))

const Carousel = memo(
  ({
    children,
    className,
    slidesToShow = 2,
    slidesToScroll = 1,
    dots = true,
    infinite = true,
    ...passProps
  }) => {
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
      dots,
      infinite,
      slidesToShow,
      slidesToScroll,
      centerMode: true,
      centerPadding: '-90px',
      dotsClass: style.carouselIndicators,
      prevArrow: (
        <CustomArrow iconClass={style.iconPrev} arrowClass={style.arrowPrev} />
      ),
      nextArrow: (
        <CustomArrow iconClass={style.iconNext} arrowClass={style.arrowNext} />
      ),
      customPaging: (index) => (
        <span
          className={classNames.use(style.carouselIndicator, {
            [style.carouselIndicatorActive]: index === activeSlide,
          })}
        />
      ),
      beforeChange: (_, next) => {
        setActiveSlide(next)
      },
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <div>
        <Slider {...settings} {...passProps}>
          {children}
        </Slider>
      </div>
    )
  }
)

export default Carousel
