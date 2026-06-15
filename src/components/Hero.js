'use client';
import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container grid-2">
        <div className="hero-content">
          <h1>
            Find the Perfect Tamil <span className="highlight">Baby Name</span> with{' '}
            <span className="secondary-text">Minmini</span>
          </h1>
          <p className="description">
            Thousands of beautiful Tamil baby names for your little one. Simple, Smart & Meaningful.
          </p>

          <div className="hero-btns">
            <button className="btn-primary">  
              Download for Android
            </button>
          </div>

          <div className="loved-by">
            <div className="avatar-group">
              <img src="/assets/images/avatars/avatar_1.png" alt="avatar" />
              <img src="/assets/images/avatars/avatar_2.png" alt="avatar" />
              <img src="/assets/images/avatars/avatar_3.png" alt="avatar" />
              <img src="/assets/images/avatars/avatar_4.png" alt="avatar" />
            </div>
            <p>Loved by 50,000+ parents ❤️</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="baby-bg">
            <img src="/assets/images/baby.png" alt="Baby" className="baby-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 60px 0 100px;
          background-color: var(--white);
          position: relative;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 20px;
        }
        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--secondary);
          margin-bottom: 24px;
        }
        .description {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 35px;
          max-width: 480px;
          line-height: 1.6;
        }
        .hero-btns {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }
        .loved-by {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .avatar-group {
          display: flex;
        }
        .avatar-group img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -10px;
        }
        .avatar-group img:first-child {
          margin-left: 0;
        }
        .loved-by p {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-dark);
        }
        .hero-visual {
          position: relative;
          height: 550px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .baby-bg {
          width: 450px;
          height: 450px;
          background: #fff0f5;
          border-radius: 0;
          position: absolute;
          top: 20px;
          right: 0;
          overflow: hidden;
          z-index: 1;
        }
        .baby-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .phone-mockup {
          position: absolute;
          z-index: 2;
          width: 260px;
          height: 520px;
          background: #333;
          border-radius: 35px;
          padding: 8px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          left: 50px;
          top: 40px;
        }
        .mockup-img {
          width: 100%;
          height: 100%;
          border-radius: 28px;
          object-fit: cover;
        }
        .sparkle {
          position: absolute;
          font-size: 1.5rem;
          z-index: 3;
        }
        .s1 {
          top: 10%;
          right: 40%;
          color: #ffd700;
        }
        .s2 {
          bottom: 20%;
          left: 0%;
          color: #ffd700;
        }

        @media (max-width: 992px) {
          .grid-2 {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-visual {
            height: 600px;
            margin-top: 40px;
          }
          .baby-bg {
            position: relative;
            margin: 0 auto;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
          }
          .phone-mockup {
            left: 50%;
            transform: translateX(-50%);
            top: 100px;
            width: 220px;
            height: 440px;
          }
          h1 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 40px 0 60px;
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 16px;
          }
          .description {
            font-size: 0.95rem;
            margin-bottom: 25px;
          }
          .hero-btns {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 30px;
          }
          .btn-primary {
            width: 100%;
            justify-content: center;
          }
          .loved-by {
            flex-direction: column;
            gap: 10px;
            justify-content: center;
          }
          .loved-by p {
            font-size: 0.8rem;
          }
          .avatar-group img {
            width: 28px;
            height: 28px;
            margin-left: -8px;
          }
          .hero-visual {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 30px 0 40px;
          }
          h1 {
            font-size: 1.6rem;
            line-height: 1.2;
          }
          .description {
            font-size: 0.85rem;
            max-width: 100%;
          }
          .hero-visual {
            display: none;
          }
          .sparkle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
