import React from "react";

export default function TestimonialCard({ id, author, date, comment }) {
  return (
    <div className="testimonial__card" key={id}>
      <div className="testimonial__author">
        <p>{author}</p>
      </div>
      <div className="testimonial__date">
        <p>{date}</p>
      </div>
      <div className="testimonial__comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}
