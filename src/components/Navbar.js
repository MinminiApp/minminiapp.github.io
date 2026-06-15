'use client';
import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex-between">
        <Link href="/">
          <div className="logo flex-center">
            <img src="/assets/images/logo.png" alt="Minmini Logo" width={40} height={40} />
            <div className="logo-text">
              <span className="brand-name">Minmini</span>
              <span className="brand-sub">Tamil Baby Names</span>
            </div>
          </div>
        </Link>

        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
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

        <button className="btn-primary">
          <Download size={18} />
          Download App
        </button>
      </div>

      <style jsx>{`
        .navbar {
          padding: 20px 0;
          position: sticky;
          top: 0;
          background: white;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1;
        }
        .brand-sub {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 600;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-weight: 500;
          color: var(--text-dark);
          transition: color 0.3s;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .navbar {
            padding: 15px 0;
          }
          .brand-name {
            font-size: 1.2rem;
          }
          .brand-sub {
            font-size: 0.7rem;
          }
          .nav-links {
            display: none;
          }
          .btn-primary {
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 12px 0;
          }
          .logo img {
            width: 32px;
            height: 32px;
          }
          .brand-name {
            font-size: 1rem;
          }
          .btn-primary {
            padding: 6px 12px;
            font-size: 0.75rem;
            gap: 4px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
