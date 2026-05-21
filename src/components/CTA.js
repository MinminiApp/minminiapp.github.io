'use client';
import React from 'react';

const CTA = () => {
  return (
    <section className="cta section-padding">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-logo-section">
              <img src="/assets/images/logo.png" alt="Minmini" className="cta-logo" />
              <div className="cta-text">
                <h3>Start Your Journey to Find the Perfect Name Today!</h3>
                <p>Download Minmini Tamil Baby Names App and make naming simple & joyful.</p>
              </div>
            </div>

            <div className="cta-actions">
              <div className="store-btns">
                <a href="#" className="store-link">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                  />
                </a>
                <a href="#" className="store-link">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                  />
                </a>
              </div>
              <div className="qr-code">
                {/* Placeholder for QR Code */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://minmini.app"
                  alt="QR Code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .cta-card {
          background: #fff8fa;
          border-radius: 30px;
          padding: 40px 60px;
          border: 1px solid #ffe4ed;
        }
        .cta-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        .cta-logo-section {
          display: flex;
          align-items: center;
          gap: 30px;
          flex: 1;
        }
        .cta-logo {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: white;
          padding: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        .cta-text h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .cta-text p {
          color: var(--text-muted);
          font-size: 1rem;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .store-btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .store-link img {
          height: 40px;
        }
        .qr-code img {
          width: 100px;
          height: 100px;
          background: white;
          padding: 8px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        @media (max-width: 992px) {
          .cta-content {
            flex-direction: column;
            text-align: center;
          }
          .cta-logo-section {
            flex-direction: column;
          }
          .cta-actions {
            flex-direction: column;
          }
          .store-btns {
            flex-direction: row;
          }
        }
        @media (max-width: 600px) {
          .cta-card {
            padding: 40px 20px;
          }
          .store-btns {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
