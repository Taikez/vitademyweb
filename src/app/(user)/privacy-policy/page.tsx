import React from "react";

function PrivacyPolicy() {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-15">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-5xl">Privacy Policy of Vitademy</h1>
          <h3 className="text-center text-2xl text-gray-400">
            Effective Date: June 2025
          </h3>
        </div>
        <div className="text-xl text-justify leading-relaxed flex flex-col gap-10">
          <p>
            At Vitademy, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you access our
            decentralised learning platform.
          </p>
          <div className="flex flex-col gap-5">
            <p className="font-bold">1. Information We Collect</p>
            <p>
              We may collect the following information when you use Vitademy:
            </p>
            <ul className="mb-6 ms-6 list-disc">
              <li>
                Personal details (e.g., name, email address, profile
                information)
              </li>
              <li>Account credentials (username, password)</li>
              <li>Communication records (messages, forum posts)</li>
              <li>
                Usage data (pages visited, learning progress, session duration)
              </li>
              <li>Payment information (for premium services)</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">2. How We Use Your Information</p>
            <p>We use your information to:</p>
            <ul className="mb-6 ms-6 list-disc">
              <li>Provide and maintain our services</li>
              <li>Personalise your learning experience</li>
              <li>Facilitate community interactions and forums</li>
              <li>Communicate important updates and promotions</li>
              <li>Process payments and manage subscriptions</li>
              <li>Improve the functionality and security of our platform</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">3. Data Sharing and Disclosure</p>
            <p>
              We do not sell or rent your personal information. We may share
              data with:
            </p>
            <ul className="mb-6 ms-6 list-disc">
              <li>
                Trusted third-party service providers for platform operations
              </li>
              <li>
                Legal authorities if required by law or to protect our rights
              </li>
              <li>
                Other users, when you voluntarily engage in public forums or
                events
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">
              4. Decentralisation and Data Responsibility
            </p>
            <p>
              Vitademy operates on a decentralised model. While we strive to
              protect your data, user-contributed content in forums and public
              spaces is visible to others. You are responsible for the
              information you choose to share publicly.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">5. Data Security</p>
            <p>
              We implement industry-standard security measures to protect your
              information. However, no system is 100% secure, and we cannot
              guarantee absolute protection.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">6. Cookies and Tracking Technologies</p>
            <p>
              Vitademy may use cookies or similar technologies to enhance your
              browsing experience, analyse usage patterns, and deliver relevant
              content.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">7. Your Rights</p>
            <p>You have the right to:</p>
            <ul className="mb-6 ms-6 list-disc">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of promotional communications</li>
              <li>Request clarification about how your data is handled</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">8. Third-Party Links</p>
            <p>
              Our platform may contain links to external websites. We are not
              responsible for their privacy practices. Please review their
              policies separately.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">9. Children's Privacy</p>
            <p>
              Vitademy is intended for users aged 13 and above. We do not
              knowingly collect personal information from children under 13.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">10. Changes to This Policy</p>
            <p>
              We may update this Privacy Policy as needed. Significant changes
              will be communicated, and continued use of Vitademy constitutes
              acceptance of the updated policy.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold">11. Contact Us</p>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact: info.vitademy@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
