import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae cum numquam nihil dolorem, consequuntur velit ipsam similique alias dolor laudantium quis et doloremque soluta aspernatur tempora harum est molestiae!",
  },
  {
    avatar: AVTR2,
    name: "Mina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae cum numquam nihil dolorem, consequuntur velit ipsam similique alias dolor laudantium quis et doloremque soluta aspernatur tempora harum est molestiae!",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae cum numquam nihil dolorem, consequuntur velit ipsam similique alias dolor laudantium quis et doloremque soluta aspernatur tempora harum est molestiae!",
  },
  {
    avatar: AVTR4,
    name: "Mina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae cum numquam nihil dolorem, consequuntur velit ipsam similique alias dolor laudantium quis et doloremque soluta aspernatur tempora harum est molestiae!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={item.avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
