'use client';
import React from 'react';

const screenshots = [
  {
    img: '/assets/images/app_screen.jpg',
    title: 'Home Dashboard',
    desc: 'All features at your fingertips',
  },
  {
    img: '/assets/images/app_screen.jpg',
    title: 'Browse by Letter',
    desc: 'Explore names from A to Z',
  },
  {
    img: '/assets/images/app_screen.jpg',
    title: 'By Nakshatra',
    desc: "Find names based on your baby's nakshatra",
  },
  {
    img: '/assets/images/app_screen.jpg',
    title: 'Name Details',
    desc: 'Meaning, Rashi, Gender & more',
  },
  {
    img: '/assets/images/app_screen.jpg',
    title: 'Create Polls',
    desc: 'Create polls and get opinions from loved ones',
  },
];

const Screenshots = () => {
  return (
    <section id="screenshots" className="screenshots section-padding">
      <div className="container">
        <h2 className="section-title">Beautiful App. Simple to Use.</h2>
        <div className="title-underline"></div>

        <div className="screens-container">
          <div className="screens-wrapper">
            {screenshots.map((s, i) => (
              <div key={i} className="screen-item">
                <div className="screen-mockup">
                  <img src={s.img} alt={s.title} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="nav-arrow left">‹</div>
          <div className="nav-arrow right">›</div>
        </div>
      </div>

      <style jsx>{`
        .screenshots {
          background-color: var(--white);
          text-align: center;
          position: relative;
        }
        .title-underline {
          width: 40px;
          height: 3px;
          background: var(--primary);
          margin: -35px auto 60px;
          border-radius: 2px;
        }
        .screens-container {
          position: relative;
          max-width: 100%;
        }
        .screens-wrapper {
          display: flex;
          justify-content: center;
          gap: 25px;
          overflow-x: auto;
          padding: 20px 10px;
          scrollbar-width: none;
        }
        .screens-wrapper::-webkit-scrollbar {
          display: none;
        }
        .screen-item {
          min-width: 200px;
          flex: 1;
          max-width: 220px;
        }
        .screen-mockup {
          background: white;
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
          margin-bottom: 25px;
          border: 1px solid #f0f0f0;
          transition: transform 0.3s ease;
        }
        .screen-mockup:hover {
          transform: translateY(-10px);
        }
        .screen-mockup img {
          width: 100%;
          border-radius: 20px;
          display: block;
          height: 400px;
          object-fit: cover;
        }
        .screen-item h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 8px;
        }
        .screen-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .nav-arrow {
          position: absolute;
          top: 40%;
          width: 40px;
          height: 40px;
          background: #ffe4ed;
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
        }
        .nav-arrow:hover {
          background: var(--primary);
          color: white;
        }
        .left {
          left: -20px;
        }
        .right {
          right: -20px;
        }

        @media (max-width: 1200px) {
          .nav-arrow {
            display: none;
          }
          .screens-wrapper {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Screenshots;
