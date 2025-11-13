import { NextPage } from 'next';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This is our privacy policy. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
      </p>
      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information from you such as your name, email address, and phone number when you contact us through our contact form. We also collect non-personal information such as your IP address and browsing behavior through the use of cookies.
      </p>
      <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect is used to provide and improve our services, to communicate with you, and to personalize your experience. We may use your personal information to respond to your inquiries and to send you marketing communications.
      </p>
      <h2 className="text-2xl font-bold mb-2">Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance the user experience. You can choose to accept or decline cookies. If you decline cookies, you may not be able to experience the full functionality of our website.
      </p>
      <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information. You also have the right to object to the processing of your personal information and to withdraw your consent at any time.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p>
        If you have any questions about our privacy policy, please contact us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
