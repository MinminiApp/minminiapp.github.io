import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Minmini',
  description: 'Learn how Minmini handles Google Sign-In, Firebase Analytics, and notification permissions for the Tamil baby names app.',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <section className="section-padding privacy-page">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Privacy Policy</p>
            <h1 className="section-title">How we protect your privacy</h1>
            <p className="section-description">
              Minmini is an Android app on Google Play Store for Tamil baby names, meaning, and
              nakshatra guidance. This policy explains how we use Google Sign-In, Firebase Analytics,
              Google AdMob ads, notifications, and birth details in the app.
            </p>
          </div>

          <div className="policy-section">
            <h2>Information we collect</h2>
            <p>
              We only collect the information needed to provide the app features and improve the
              experience. Your personal data is handled carefully and is not sold to third parties.
            </p>
            <ul className="policy-list">
              <li>
                <strong>Google Sign-In:</strong> your basic profile information such as name and email
                address to authenticate your account and sync preferences.
              </li>
              <li>
                <strong>Firebase Analytics:</strong> anonymous usage data such as screen views,
                feature usage, and app performance to make Minmini better.
              </li>
              <li>
                <strong>Google AdMob:</strong> ad identifiers and interactions to show relevant
                ads. Ads are managed through Google AdMob and are used only to support the app.
              </li>
              <li>
                <strong>Notification permission:</strong> optional permission for reminders,
                updates, and baby name suggestions.
              </li>
              <li>
                <strong>Baby birth details:</strong> date, time, and birthplace are used only to
                calculate nakshatra and rashi. This information is not stored anywhere.
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>Why this information is used</h2>
            <div className="policy-card">
              <div className="policy-block">
                <h3>Secure sign-in</h3>
                <p>
                  Google Sign-In allows you to log in without a password and keeps your account
                  secure. We use it only for authentication and profile setup.
                </p>
              </div>
              <div className="policy-block">
                <h3>Better app experience</h3>
                <p>
                  Firebase Analytics provides anonymous data about how the app is used so we can
                  improve name discovery, navigation, and overall performance.
                </p>
              </div>
            </div>
          </div>

          <div className="policy-section">
            <h2>Google AdMob and ads</h2>
            <p>
              Minmini displays ads through Google AdMob to help keep the app free. AdMob may use
              device identifiers and ad interaction data to deliver relevant ads, but we do not use
              this information to create a personal profile for sale.
            </p>
            <p>
              You may see personalized ads based on your app activity, and you can manage ad settings
              through Google’s privacy controls.
            </p>
          </div>

          <div className="policy-section">
            <h2>Baby birth information and astrology</h2>
            <p>
              When you enter your baby’s birth date, time, and place, Minmini uses that information
              only to calculate nakshatra, rashi, and related Tamil naming guidance.
            </p>
            <p className="policy-note">
              This birth information is not saved anywhere in the app or on our servers.
            </p>
          </div>

          <div className="policy-section">
            <h2>Notification permission</h2>
            <p>
              Notification permission is optional. If granted, we may send reminders about popular
              name updates, festival naming ideas, and special Tamil naming traditions.
            </p>
            <p>
              If you deny notifications, the app will still work normally and all core features will
              remain available.
            </p>
          </div>

          <div className="policy-section">
            <h2>Data protection and support</h2>
            <p>
              We use Firebase and Google Cloud infrastructure to protect the data used by Minmini.
              Any personal information from Google Sign-In is used only for authentication and
              personalization.
            </p>
            <p>
              For questions or concerns, please contact us through the Google Play Store listing or
              the support channel in the app.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
