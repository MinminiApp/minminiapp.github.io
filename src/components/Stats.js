'use client';
import React from 'react';
import { Download, Star, Heart, LayoutGrid } from 'lucide-react';

const stats = [
  { icon: <Download size={24} />, value: '50,000+', label: 'Downloads', color: '#FF4D8D' },
  { icon: <Star size={24} />, value: '4.8', label: 'Average Rating', color: '#FFB800' },
  { icon: <Heart size={24} />, value: '10,000+', label: 'Happy Parents', color: '#A855F7' },
  {
    icon: <LayoutGrid size={24} />,
    value: '500+',
    label: 'Beautiful Categories',
    color: '#10B981',
  },
];

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div
                className="stat-icon-wrapper"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .stats-container {
          padding: 60px 0;
          background: #fff;
          border-top: 1px solid #f8f8f8;
          border-bottom: 1px solid #f8f8f8;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }
        .stat-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-info h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1;
        }
        .stat-info p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Stats;
