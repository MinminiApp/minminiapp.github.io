'use client';
import React from 'react';
import { Search, Users, Heart, TrendingUp, Group, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Search className="icon-search" />,
    title: 'Search & Explore',
    desc: 'Find names by letter, nakshatra, rashi & meaning',
  },
  {
    icon: <Users className="icon-polls" />,
    title: 'Polls & Opinions',
    desc: 'Get opinions from family & friends with polls',
  },
  {
    icon: <Heart className="icon-fav" />,
    title: 'Favourites',
    desc: 'Save your favorite names and access anytime',
  },
  {
    icon: <TrendingUp className="icon-trending" />,
    title: 'Trending Names',
    desc: 'Discover popular and modern Tamil baby names',
  },
  {
    icon: <Group className="icon-twin" />,
    title: 'Twin & Combo Names',
    desc: 'Find perfect names for twins & siblings',
  },
  {
    icon: <ShieldCheck className="icon-private" />,
    title: '100% Private',
    desc: 'Your privacy is our priority. No sign-up required to vote',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-subtitle">❤️ Everything You Need in One App ❤️</div>

        <div className="grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="icon-box">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          background-color: var(--white);
        }
        .feature-card {
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
          background: white;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--soft-pink);
        }
        .feature-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--secondary);
          font-weight: 700;
        }
        .feature-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        :global(.icon-search) {
          color: #e91e63;
        }
        :global(.icon-polls) {
          color: #9c27b0;
        }
        :global(.icon-fav) {
          color: #4caf50;
        }
        :global(.icon-trending) {
          color: #ff9800;
        }
        :global(.icon-twin) {
          color: #2196f3;
        }
        :global(.icon-private) {
          color: #ffc107;
        }

        @media (max-width: 768px) {
          .feature-card {
            padding: 20px;
          }
          .icon-box {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }
          .feature-card h3 {
            font-size: 1rem;
          }
          .feature-card p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .feature-card {
            padding: 15px;
          }
          .icon-box {
            width: 45px;
            height: 45px;
          }
          .feature-card h3 {
            font-size: 0.9rem;
          }
          .feature-card p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
