'use client';
import React from 'react';
import { Apple, Play } from 'lucide-react';

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
              <img
                src="/assets/images/logo.png"
                alt=""
                width={20}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              Download for Android
            </button>
            <button className="btn-outline">
              <Apple size={20} />
              Download on App Store
            </button>
          </div>

          <div className="loved-by">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/40?img=1" alt="user" />
              <img src="https://i.pravatar.cc/40?img=2" alt="user" />
              <img src="https://i.pravatar.cc/40?img=3" alt="user" />
              <img src="https://i.pravatar.cc/40?img=4" alt="user" />
            </div>
            <p>Loved by 50,000+ parents ❤️</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="baby-bg">
            <img src="/assets/images/baby.png" alt="Baby" className="baby-img" />
          </div>
          <div className="phone-mockup">
            <img src="/assets/images/app_screen.jpg" alt="App Mockup" className="mockup-img" />
          </div>
          <div className="sparkle s1">✨</div>
          <div className="sparkle s2">✨</div>
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
          width: 400px;
          height: 400px;
          background: #fff0f5;
          border-radius: 50%;
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
          }
          .phone-mockup {
            left: 50%;
            transform: translateX(-50%);
            top: 100px;
          }
          h1 {
            font-size: 2.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
