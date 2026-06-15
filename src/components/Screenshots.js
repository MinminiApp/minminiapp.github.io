'use client';
import React, { useState, useEffect, useRef } from 'react';

const screenshots = [
  {
    img: '/assets/images/app_screen.jpg',
    title: 'Home Dashboard',
    desc: 'All features at your fingertips',
  },
  {
    img: '/assets/images/app_screens/by_starting_letter.jpg',
    title: 'Browse by Letter',
    desc: 'Explore names from A to Z',
  },
  {
    img: '/assets/images/app_screens/by_nakshatra.jpg',
    title: 'By Nakshatra',
    desc: "Find names based on your baby's nakshatra",
  },
  {
    img: '/assets/images/app_screens/name_details.jpg',
    title: 'Name Details',
    desc: 'Meaning, Numerology score, Popularity, and more',
  },
  {
    img: '/assets/images/app_screens/polls.jpg',
    title: 'Create Polls',
    desc: 'Create polls and get opinions from loved ones',
  },
  {
    img: '/assets/images/app_screens/trending_now.jpg',
    title: 'Trending Now',
    desc: 'Discover popular names in your area and across Tamil Nadu',
  },
  {
    img: '/assets/images/app_screens/name_card.jpg',
    title: 'Name Card',
    desc: 'Share a beautiful name card with family and friends',
  },
  {
    img: '/assets/images/app_screens/deity_names.jpg',
    title: 'Deity Names',
    desc: 'Explore names associated with different deities',
  },
  {
    img: '/assets/images/app_screens/smart_filters.jpg',
    title: 'Smart Filters',
    desc: 'Find the perfect name with our intelligent filtering options',
  },
];

const Screenshots = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollWidth = container.scrollWidth - container.clientWidth;

        // Only auto-scroll if there's overflow (slides don't all fit)
        if (scrollWidth > 0) {
          const slideWidth = 220 + 25; // max-width + gap
          const newPosition = (scrollPosition + slideWidth) % (scrollWidth + slideWidth);
          container.scrollLeft = newPosition;
          setScrollPosition(newPosition);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <section id="screenshots" className="screenshots section-padding">
      <div className="container">
        <h2 className="section-title">Beautiful App. Simple to Use.</h2>
        <div className="title-underline"></div>

        <div className="screens-container">
          <div className="screens-wrapper" ref={scrollContainerRef}>
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
          margin: -35px auto 45px;
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
          min-width: 280px;
          flex: 1;
          max-width: 300px;
        }
        .screen-mockup {
          background: black;
          border-radius: 25px;
          padding: 4px;
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
          height: 580px;
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

        @media (max-width: 768px) {
          .screen-item {
            min-width: 200px;
            max-width: 220px;
          }
          .screen-mockup img {
            height: 420px;
          }
          .screen-item h3 {
            font-size: 0.95rem;
          }
          .screen-item p {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .screen-item {
            min-width: 200px;
            max-width: 220px;
          }
          .screen-mockup img {
            height: 420px;
          }
          .screen-item h3 {
            font-size: 0.85rem;
          }
          .screen-item p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Screenshots;
