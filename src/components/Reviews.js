'use client';
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Minmini helped us find the perfect name for our baby girl. The app is easy to use and has so many beautiful names!',
    author: 'Priya S.',
    location: 'Chennai',
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
  },
  {
    text: 'Love the poll feature! We got opinions from our entire family and chose the best name together.',
    author: 'Karthik R.',
    location: 'Coimbatore',
    image: 'https://i.pravatar.cc/100?img=6',
    rating: 5,
  },
  {
    text: 'Very good collection of Tamil names with meanings. Highly recommended for all new parents!',
    author: 'Meena L.',
    location: 'Madurai',
    image: 'https://i.pravatar.cc/100?img=7',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews section-padding">
      <div className="container">
        <h2 className="section-subtitle">What Parents Are Saying 💖</h2>

        <div className="grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="quote-mark">“</div>
              <div className="stars">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="author-info">
                <img src={r.image} alt={r.author} className="author-img" />
                <div className="author-meta">
                  <h4>{r.author}</h4>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <style jsx>{`
        .reviews {
          background-color: var(--white);
        }
        .review-card {
          padding: 40px;
          background: white;
          border-radius: 20px;
          border: 1px solid #f0f0f0;
          position: relative;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02);
        }
        .quote-mark {
          font-family: serif;
          font-size: 5rem;
          color: #fff0f5;
          position: absolute;
          top: 10px;
          left: 20px;
          line-height: 1;
          z-index: 0;
        }
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .review-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .author-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-meta h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 2px;
        }
        .author-meta span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #eee;
        }
        .dot.active {
          background: var(--primary);
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
