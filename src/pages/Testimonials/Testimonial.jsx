import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace these with your own images
import person1 from "../../assets/photo1.jpeg";
import person2 from "../../assets/photo2.jpeg";
import person3 from "../../assets/photo3.jpeg";
import person4 from "../../assets/photo1.jpeg";

const testimonials = [
  {
    text: "We found Mirscon to be the best technology partner, capable of building a team of developers that can tackle technological challenges and deliver innovative solutions.",
    image: person1,
    name: "Pauline Hicks",
    role: "Founder @AT",
  },
  {
    text: "I really enjoyed working with Mirscon. I found the team to be professional and talented during the development process. I would highly recommend them.",
    image: person2,
    name: "Cheyalee Tompkins",
    role: "Co-founder @PAT",
  },
  {
    text: "The project development work is exceptional and the team is professional. I appreciate the detailed planning, weekly updates and adherence to process.",
    image: person3,
    name: "Rick Toovey",
    role: "CEO @BBS",
  },
  {
    text: "Working with Mirscon has been an amazing experience. Their technical expertise and communication exceeded our expectations.",
    image: person4,
    name: "Sarah Johnson",
    role: "CTO @ABC",
  },
    {
    text: "Working with Mirscon has been an amazing experience. Their technical expertise and communication exceeded our expectations.",
    image: person4,
    name: "Sarah Johnson",
    role: "CTO @ABC",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section">

      <h2 className="testimonial-heading">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h3>{item.name}</h3>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Testimonial;