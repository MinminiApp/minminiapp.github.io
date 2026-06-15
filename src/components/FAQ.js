'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I search for names by Nakshatra?',
    answer:
      "You can find names by Nakshatra by navigating to the 'Browse' section and selecting the 'Nakshatra' category. From there, you can choose your baby's birth star to see a curated list of names.",
  },
  {
    question: 'Is the poll feature free to use?',
    answer:
      'Yes! The poll feature is completely free. You can create a poll with your favorite names and share the unique link with your family and friends via WhatsApp, SMS, or social media.',
  },
  {
    question: 'Do I need to create an account to vote in a poll?',
    answer:
      'No, we value your privacy. Your family and friends can vote in your polls without needing to sign up or provide any personal information.',
  },
  {
    question: 'How often is the name database updated?',
    answer:
      'We regularly update our database with new, modern, and traditional Tamil names to ensure you have the best selection for your little one.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => setOpenIndex(i)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq {
          background-color: var(--bg-light);
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: white;
          border-radius: 15px;
          margin-bottom: 12px;
          padding: 18px 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }
        .faq-item.open {
          border-color: var(--primary);
          box-shadow: 0 5px 15px rgba(255, 77, 141, 0.1);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--secondary);
        }
        .faq-answer {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #f8f8f8;
        }
        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .faq-item {
            padding: 15px 20px;
            margin-bottom: 12px;
          }
          .faq-question h3 {
            font-size: 0.95rem;
          }
          .faq-answer p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .faq-list {
            max-width: 100%;
          }
          .faq-item {
            padding: 12px 15px;
            border-radius: 12px;
          }
          .faq-question h3 {
            font-size: 0.85rem;
          }
          .faq-answer p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
