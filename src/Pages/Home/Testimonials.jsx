import React from "react";
import TestimonialCard from "../../Cart/TestimonialCard";
import TestimonialData from "../../Data/TestimonialData";
import TestimonialPicture from "../../Images/Main/testimonial.png";

export default function Testimonials() {
  const testimonialElement = TestimonialData.map((item) => {
    return (
      <TestimonialCard
        id = {item.id}
        key = {item.id}
        author={item.author}
        date={item.date}
        comment={item.comment}
      />
    );
  });
  return (
    <section className="testimonials__section">
      <div className="testimonials__picture">
        <img src={TestimonialPicture} alt="" />
      </div>
      <div className="testimonials__content">
        <div className="testimonials__header">
          <p>Отзывы</p>
        </div>
        <div className="testimonials__text-content">
          {testimonialElement}
        </div>
      </div>
    </section>
  );
}
