'use client';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src="/assets/images/logo.png" alt="Minmini Logo" width={40} height={40} />
              <div className="logo-text">
                <span className="brand-name">Minmini</span>
                <span className="brand-sub">Tamil Baby Names</span>
              </div>
            </div>
            <p className="footer-desc">
              Minmini helps you find beautiful Tamil baby names with meanings, nakshatra, rashi and
              get opinions from your loved ones.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#screenshots">Screenshots</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon fb">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/minmini.app" className="social-icon ig">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Minmini. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 80px 0 30px;
          background-color: white;
          border-top: 1px solid #f0f0f0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1;
        }
        .brand-sub {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }
        .footer-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          max-width: 300px;
        }
        .footer-links h4,
        .footer-social h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 25px;
        }
        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: var(--primary);
        }
        .social-icons {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.3s;
        }
        .social-icon:hover {
          transform: translateY(-3px);
        }
        .fb {
          background: #3b5998;
        }
        .ig {
          background: #e1306c;
        }
        .yt {
          background: #ff0000;
        }
        .tw {
          background: #1da1f2;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid #f0f0f0;
        }
        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 20px;
          }
          .footer-grid {
            gap: 30px;
            margin-bottom: 40px;
          }
          .footer-links h4,
          .footer-social h4 {
            font-size: 0.95rem;
            margin-bottom: 15px;
          }
          .footer-links a,
          .footer-desc {
            font-size: 0.8rem;
          }
          .social-icons {
            gap: 8px;
          }
          .social-icon {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 40px 0 15px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .footer-desc {
            max-width: 100%;
          }
          .footer-links h4,
          .footer-social h4 {
            font-size: 0.85rem;
            margin-bottom: 10px;
          }
          .footer-links ul {
            gap: 8px;
          }
          .footer-bottom p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
