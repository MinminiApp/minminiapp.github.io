'use client';
import React from 'react';
import { ChevronRight, Download, Share2, BarChart2 } from 'lucide-react';

const Polls = () => {
  return (
    <section className="polls section-padding">
      <div className="container">
        <div className="polls-card">
          <div className="polls-content">
            <div className="polls-illustration">
              <div className="illustration-wrapper">
                <img
                  src="/assets/images/friends_family.png"
                  alt="Polls Feature"
                  className="feature-img"
                />
                <div className="overlay-badge">
                  <div className="avatar-stack">
                    <img src="/assets/images/avatars/avatar_3.png" alt="avatar" />
                    <img src="/assets/images/avatars/avatar_4.png" alt="avatar" />
                    <div className="more-count">+5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="polls-text">
              <div className="badge-pill">
                <span className="badge-icon">👥</span>
                <span>Social Voting</span>
              </div>
              <h2 className="section-title-left">Get Opinions You Can Trust</h2>
              <p className="subtitle">
                Create a poll, share with your family & friends, and choose the perfect name
                together.
              </p>

              <div className="workflow">
                <div className="workflow-step">
                  <div className="step-icon pink-bg">
                    <Download size={20} />
                  </div>
                  <div className="step-info">
                    <h4>Create</h4>
                    <p>Add name options</p>
                  </div>
                </div>

                <div className="arrow-divider">
                  <ChevronRight size={18} />
                </div>

                <div className="workflow-step">
                  <div className="step-icon pink-bg">
                    <Share2 size={20} />
                  </div>
                  <div className="step-info">
                    <h4>Share</h4>
                    <p>With family & friends</p>
                  </div>
                </div>

                <div className="arrow-divider">
                  <ChevronRight size={18} />
                </div>

                <div className="workflow-step">
                  <div className="step-icon pink-bg">
                    <BarChart2 size={20} />
                  </div>
                  <div className="step-info">
                    <h4>Get Results</h4>
                    <p>Choose the best one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .polls {
          background-color: var(--white);
        }
        .polls-card {
          background: #fff8fa;
          border-radius: 40px;
          padding: 50px;
          border: 1px dashed var(--primary);
        }
        .polls-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .illustration-wrapper {
          position: relative;
          background: white;
          padding: 15px;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(255, 77, 141, 0.1);
        }
        .feature-img {
          width: 100%;
          border-radius: 20px;
          display: block;
        }
        .overlay-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          padding: 12px 20px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .avatar-stack img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -10px;
        }
        .avatar-stack img:first-child {
          margin-left: 0;
        }
        .more-count {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--soft-pink);
          color: var(--primary);
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -10px;
          border: 2px solid white;
        }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--soft-pink);
          color: var(--primary);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .section-title-left {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 15px;
          line-height: 1.2;
        }
        .pink-heart {
          color: var(--primary);
        }
        .subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .workflow {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
        }
        .workflow-step {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .step-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .pink-bg {
          background: rgba(255, 77, 141, 0.1);
        }
        .step-info h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--secondary);
        }
        .step-info p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .arrow-divider {
          color: #ddd;
        }

        @media (max-width: 992px) {
          .polls-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .badge-pill {
            margin: 0 auto 20px;
          }
          .workflow {
            flex-direction: column;
            gap: 20px;
          }
          .arrow-divider {
            transform: rotate(90deg);
          }
          .polls-card {
            padding: 40px 20px;
          }
        }

        @media (max-width: 768px) {
          .polls-card {
            padding: 35px 15px;
            border-radius: 25px;
          }
          .section-title-left {
            font-size: 1.8rem;
          }
          .subtitle {
            font-size: 0.95rem;
            margin-bottom: 30px;
          }
          .workflow {
            margin-bottom: 30px;
          }
          .step-info h4 {
            font-size: 0.85rem;
          }
          .step-info p {
            font-size: 0.7rem;
          }
          .overlay-badge {
            bottom: -15px;
            right: -15px;
            padding: 8px 15px;
          }
        }

        @media (max-width: 480px) {
          .polls-card {
            padding: 20px 10px;
            border-radius: 20px;
          }
          .section-title-left {
            font-size: 1.4rem;
          }
          .subtitle {
            font-size: 0.85rem;
          }
          .badge-pill {
            font-size: 0.75rem;
            padding: 4px 12px;
          }
          .step-icon {
            width: 36px;
            height: 36px;
          }
          .overlay-badge {
            bottom: -10px;
            right: -10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Polls;
