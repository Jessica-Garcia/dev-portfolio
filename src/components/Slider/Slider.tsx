import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Pagination, Navigation, A11y /*  EffectCoverflow */ } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/a11y";
// import "swiper/css/effect-coverflow";
import "./Slider.css";
interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[/* Navigation,  */ Pagination, A11y /* , EffectCoverflow */]}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
