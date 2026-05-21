'use client';

import React, { useState, useEffect } from 'react';
import {
  Download,
  BarChart2,
  Heart,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  X,
} from 'lucide-react';

const PollClient = ({ slug: initialSlug }) => {
  const [slug, setSlug] = useState(initialSlug);
  const [loading, setLoading] = useState(true);
  const [pollData, setPollData] = useState(null);
  const [voterToken, setVoterToken] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVoting, setIsVoting] = useState(false);
  const [voterName, setVoterName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  // Extract the real slug from the URL if we are on the placeholder 'voter' page
  useEffect(() => {
    if (initialSlug === 'voter' && typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const pollIndex = pathParts.indexOf('poll');
      // If URL is .../poll/actual-slug/
      if (pollIndex !== -1 && pathParts[pollIndex + 1]) {
        setSlug(pathParts[pollIndex + 1]);
      }
    } else {
      setSlug(initialSlug);
    }
  }, [initialSlug]);

  useEffect(() => {
    // Only proceed if we have a real slug (not the build-time placeholder)
    if (!slug || slug === 'voter') return;

    // Deep link redirection attempt for mobile devices
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `minmini://vote?slug=${slug}`;
    }

    // Handle voter token
    let token = localStorage.getItem('poll_voter_token');
    if (!token) {
      token = crypto.randomUUID();
      localStorage.setItem('poll_voter_token', token);
    }
    setVoterToken(token);

    fetchPollData(token, slug);
  }, [slug]);

  const fetchPollData = async (token, currentSlug) => {
    try {
      const response = await fetch(
        `https://dxuncmzjsywqjkgpcrtt.supabase.co/functions/v1/poll?slug=${currentSlug}`,
        {
          headers: {
            'x-voter-token': token,
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setPollData(data);
        setVoterName(data.voter_name || '');
        // Pre-select if already voted
        const alreadySelected = data.options.find((o) => o.selected);
        if (alreadySelected) {
          setSelectedOption(alreadySelected.option_id);
        }
      } else {
        setErrorMsg(data.message || 'Unable to load poll data.');
      }
    } catch (error) {
      console.error('Error fetching poll:', error);
      setErrorMsg('Failed to load poll. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async () => {
    if (!selectedOption || isVoting || pollData?.has_voted) return;

    setIsVoting(true);
    try {
      const response = await fetch(
        `https://dxuncmzjsywqjkgpcrtt.supabase.co/functions/v1/poll?slug=${slug}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-voter-token': voterToken,
          },
          body: JSON.stringify({
            option_ids: [selectedOption],
            voter_name: voterName,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setPollData(data);
      } else {
        setErrorMsg(data.message || 'Voting failed. Please try again.');
      }
    } catch (error) {
      console.error('Error voting:', error);
      setErrorMsg('Something went wrong while casting your vote.');
    } finally {
      setIsVoting(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <style jsx>{`
          .loading-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .loader {
            width: 40px;
            height: 40px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #ff4d8d;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (!pollData) {
    return (
      <div className="error-container">
        <h2>Poll not found</h2>
        <p>The poll you are looking for does not exist or has expired.</p>
        <style jsx>{`
          .error-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #003d4d;
            text-align: center;
            padding: 20px;
          }
        `}</style>
      </div>
    );
  }

  const { poll, options, has_voted, voter_name, created_by } = pollData;

  const getOptionIcon = (index) => {
    const icons = ['🌸', '⭐', '🍀', '🌟', '💎', '🎨'];
    return icons[index % icons.length];
  };

  const getOptionColor = (index) => {
    const colors = ['#FF4D8D', '#9C27B0', '#4CAF50', '#FFB800', '#2196F3', '#FF5722'];
    return colors[index % colors.length];
  };

  return (
    <div className="poll-page">
      <header className="poll-header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/assets/images/logo.png" alt="Minmini" width={44} height={44} />
            <div className="logo-text">
              <span className="brand-name">Minmini</span>
              <span className="brand-sub">Tamil Baby Names</span>
            </div>
          </div>
          <div className="header-right">
            <span className="explore-text">
              Explore more beautiful
              <br />
              Tamil baby names
            </span>
            <button className="btn-download-app">
              <Download size={16} /> Download App
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="poll-card">
          <div className="poll-header-info">
            <div className="poll-icon-wrapper">
              <BarChart2 size={24} color="#FF4D8D" />
            </div>
            <div className="poll-title-meta">
              <h1>{poll.title}</h1>
              <div className="meta-row">
                <span>Ends in 2d</span>
                <span className="separator">•</span>
                <span>Created by {created_by}</span>
              </div>
            </div>
            <div className="active-badge">
              <span className="badge-dot"></span> Active
            </div>
          </div>

          <p className="help-text">Help us choose the perfect name for our little one! ❤️</p>

          <div className="form-group">
            <label className="input-label">Your Name</label>
            <input
              type="text"
              className="name-input"
              placeholder="Enter your name"
              value={voterName}
              onChange={(e) => setVoterName(e.target.value)}
              disabled={has_voted}
            />
          </div>

          <p className="instruction-text">Tap to vote for your favorite name ✨</p>

          <div className="options-container">
            {options.map((option, index) => (
              <div
                key={option.option_id}
                className={`option-card ${selectedOption === option.option_id ? 'active' : ''} ${has_voted ? 'disabled' : ''}`}
                onClick={() => !has_voted && setSelectedOption(option.option_id)}
              >
                <div className="option-content">
                  <div
                    className="option-icon"
                    style={{
                      backgroundColor: `${getOptionColor(index)}10`,
                      color: getOptionColor(index),
                    }}
                  >
                    {getOptionIcon(index)}
                  </div>
                  <div className="option-names">
                    <span className="tamil-name">{option.data.name_ta}</span>
                    <span className="english-name">{option.data.name_en}</span>
                  </div>
                </div>

                {has_voted ? (
                  <div className="vote-stats">
                    <div className="progress-bg">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${option.percentage}%`,
                          backgroundColor: getOptionColor(index),
                        }}
                      ></div>
                    </div>
                    <span className="percentage-text">{option.percentage}%</span>
                  </div>
                ) : (
                  <div className="radio-outer">
                    {selectedOption === option.option_id && <div className="radio-inner"></div>}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className={`btn-cast-vote ${!selectedOption || has_voted || isVoting ? 'btn-disabled' : ''}`}
            onClick={handleVote}
          >
            {isVoting ? (
              <div className="vote-loader"></div>
            ) : (
              <>
                <Heart size={20} fill={has_voted ? 'white' : 'none'} stroke="white" />
                <span>{has_voted ? 'Voted' : 'Cast Your Vote'}</span>
              </>
            )}
          </button>
        </div>

        <div className="app-promo-banner">
          <div className="promo-left">
            <img src="/assets/images/app_screen.jpg" alt="App Preview" className="preview-img" />
            <div className="promo-info">
              <h3>Discover thousands of beautiful Tamil baby names</h3>
              <div className="feature-badges">
                <span className="f-badge">
                  <CheckCircle2 size={12} /> Easy to use
                </span>
                <span className="f-dot">•</span>
                <span className="f-badge">Trusted by parents</span>
                <span className="f-dot">•</span>
                <span className="f-badge">100% Free</span>
              </div>
            </div>
          </div>
          <button className="btn-download-app-outline">
            <Download size={14} /> Download App
          </button>
        </div>

        <div className="poll-page-footer">
          <div className="trust-badges">
            <span className="trust-item">
              <ShieldCheck size={16} /> 100% Private & Secure
            </span>
            <span className="trust-sep">•</span>
            <span className="trust-item">No sign-up required to vote</span>
          </div>
          <p className="copy-text">© 2026 Minmini. All rights reserved. ❤️</p>
        </div>
      </main>

      {/* Error Modal */}
      {errorMsg && (
        <div className="modal-overlay" onClick={() => setErrorMsg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setErrorMsg(null)}>
              <X size={20} />
            </button>
            <div className="modal-icon-wrapper error">
              <span className="error-icon">⚠️</span>
            </div>
            <h3>Something went wrong</h3>
            <p className="error-text">{errorMsg}</p>
            <button className="btn-modal-action" onClick={() => setErrorMsg(null)}>
              Got it
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .poll-page {
          background-color: #fcfcfc;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          color: #2d3436;
        }
        .poll-header {
          background: white;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #003d4d;
          line-height: 1;
        }
        .brand-sub {
          font-size: 0.8rem;
          color: #ff4d8d;
          font-weight: 600;
          margin-top: 2px;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .explore-text {
          font-size: 0.75rem;
          color: #636e72;
          text-align: right;
          line-height: 1.3;
          font-weight: 500;
        }
        .btn-download-app {
          background: #fff0f5;
          color: #ff4d8d;
          border: 1px solid #ffe4ed;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .main-content {
          max-width: 650px;
          margin: 40px auto;
          padding: 0 20px 60px;
        }
        .poll-card {
          background: white;
          border-radius: 30px;
          padding: 35px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border: 1px solid #f0f0f0;
          margin-bottom: 25px;
        }
        .poll-header-info {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 25px;
        }
        .poll-icon-wrapper {
          width: 50px;
          height: 50px;
          background: #fff0f5;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .poll-title-meta {
          flex-grow: 1;
        }
        .poll-title-meta h1 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #003d4d;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #999;
          font-weight: 500;
        }
        .separator {
          color: #ddd;
        }
        .active-badge {
          background: #f0fff4;
          color: #38a169;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .badge-dot {
          width: 7px;
          height: 7px;
          background: #38a169;
          border-radius: 50%;
        }

        .help-text {
          font-size: 1rem;
          color: #444;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 30px;
        }
        .input-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ff4d8d;
          margin-bottom: 12px;
        }
        .name-input {
          width: 100%;
          padding: 14px 20px;
          border: 1px solid #f0f0f0;
          border-radius: 15px;
          font-size: 1rem;
          font-family: inherit;
          color: #2d3436;
          background: #fafafa;
          transition: all 0.3s;
        }
        .name-input:focus {
          outline: none;
          border-color: #ff4d8d;
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 77, 141, 0.05);
        }

        .instruction-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ff4d8d;
          margin-bottom: 15px;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 35px;
        }
        .option-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border: 1px solid #f5f5f5;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .option-card:hover:not(.disabled) {
          border-color: #ff4d8d;
          background: #fff8fa;
        }
        .option-card.active {
          border-color: #ff4d8d;
          background: #fff8fa;
        }
        .option-content {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .option-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .option-names {
          display: flex;
          flex-direction: column;
        }
        .tamil-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #2d3436;
        }
        .english-name {
          font-size: 0.85rem;
          color: #999;
          font-weight: 500;
          margin-top: 1px;
        }

        .radio-outer {
          width: 24px;
          height: 24px;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .option-card.active .radio-outer {
          border-color: #ff4d8d;
        }
        .radio-inner {
          width: 12px;
          height: 12px;
          background: #ff4d8d;
          border-radius: 50%;
        }

        .vote-stats {
          flex: 1;
          margin-left: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .progress-bg {
          flex: 1;
          height: 10px;
          background: #f0f0f0;
          border-radius: 5px;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          border-radius: 5px;
          transition: width 0.8s ease;
        }
        .percentage-text {
          font-size: 0.95rem;
          font-weight: 800;
          color: #2d3436;
          min-width: 45px;
          text-align: right;
        }

        .btn-cast-vote {
          width: 100%;
          background: #ff4d8d;
          color: white;
          padding: 18px;
          border-radius: 20px;
          border: none;
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(255, 77, 141, 0.2);
          min-height: 60px;
        }
        .btn-cast-vote:hover:not(.btn-disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 77, 141, 0.3);
          background: #e63d7a;
        }
        .btn-disabled {
          background: #ffb8d1;
          cursor: not-allowed;
          box-shadow: none;
        }

        .vote-loader {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        .app-promo-banner {
          background: #f8f9fa;
          border-radius: 25px;
          padding: 20px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #f0f0f0;
        }
        .promo-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .preview-img {
          width: 50px;
          height: 80px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid #eee;
        }
        .promo-info h3 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #003d4d;
          margin-bottom: 8px;
          line-height: 1.4;
          max-width: 250px;
        }
        .feature-badges {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .f-badge {
          font-size: 0.75rem;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
        }
        .f-dot {
          color: #ddd;
        }
        .btn-download-app-outline {
          background: white;
          color: #ff4d8d;
          border: 1px solid #ffe4ed;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .poll-page-footer {
          margin-top: 40px;
          text-align: center;
        }
        .trust-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 15px;
        }
        .trust-item {
          font-size: 0.85rem;
          color: #38a169;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .trust-sep {
          color: #ddd;
        }
        .copy-text {
          font-size: 0.8rem;
          color: #999;
          font-weight: 500;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: white;
          width: 100%;
          max-width: 400px;
          border-radius: 25px;
          padding: 40px 30px 30px;
          text-align: center;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: slideUp 0.3s ease;
        }
        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #f5f5f5;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close-btn:hover {
          background: #eee;
          color: #000;
        }
        .modal-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }
        .modal-icon-wrapper.error {
          background: #fff0f0;
          color: #ff4d4d;
        }
        .modal-content h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #003d4d;
          margin-bottom: 12px;
        }
        .error-text {
          color: #636e72;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        .btn-modal-action {
          width: 100%;
          background: #003d4d;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 15px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-modal-action:hover {
          background: #002a35;
          transform: translateY(-1px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 600px) {
          .header-inner {
            padding: 0 15px;
          }
          .brand-name {
            font-size: 1.3rem;
          }
          .explore-text {
            display: none;
          }
          .main-content {
            margin: 20px auto;
          }
          .poll-card {
            padding: 25px 20px;
          }
          .poll-header-info {
            gap: 15px;
          }
          .poll-title-meta h1 {
            font-size: 1.3rem;
          }
          .app-promo-banner {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .promo-left {
            flex-direction: column;
          }
          .promo-info h3 {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PollClient;
