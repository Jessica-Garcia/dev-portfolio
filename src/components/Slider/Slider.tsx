import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "./Slider.css";
interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
