
import React from 'react';
import './privacy.css';

const Privacy = () => {
  return (
    <section className="privacy-policy">
      <div className="policy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: May 12, 2025</p>
      </div>

      <div className="policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to WebFeed's privacy policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your personal data when you visit our website.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
          <ul>
            <li><strong>Identity Data:</strong> name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> Email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and location.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use your personal data to provide and improve our services, communicate with you, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
        </section>

        <section>
          <h2>5. Your Legal Rights</h2>
          <p>
            You have rights under data protection laws in relation to your personal data, including the right to access, correct, or delete your personal data.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at privacy@WebFeed.com.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Privacy;
