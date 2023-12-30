import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-6xl font-bold text-center m-6">
        Privacy Policy for Pixiol
      </h1>
      <div className="rounded px-6 py-4 mb-5">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            {`Welcome to Pixiol, a dynamic AI news platform. This privacy policy
            outlines our commitment to protecting your privacy. We adapt our
            practices as technology evolves, and this policy reflects our
            current practices and any future changes.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p>
            {`At Pixiol, we currently use Google Analytics and AdSense to gather
            information about how visitors use our site. As we grow and evolve,
            we may incorporate additional tools and services that assist us in
            understanding and enhancing user experience, always respecting your
            privacy.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">
            Use of Cookies and Other Technologies
          </h2>
          <p>
            {`We use cookies through our current services like Google Analytics
            and AdSense. As we expand our services, we may employ other
            technologies and methods for analytics and advertising purposes,
            while ensuring transparency and control for our users.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p>
            {`The information we collect is primarily used to enhance our website
            and understand our audience better. As we integrate new tools, we
            will continue to use data responsibly, focusing on improving user
            experience and maintaining your privacy.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">
            Data Protection & Security
          </h2>
          <p>
            {`Your data security is paramount. We implement robust measures to
            safeguard your information and will continue to update our security
            practices in line with technological advancements and new tools.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Your Privacy Rights</h2>
          <p>
            {`You have control over your personal information. If you have any
            requests or concerns, especially as we introduce new tools, please
            feel free to contact us.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Policy Updates</h2>
          <p>
            {`We will update this policy to reflect any new tools or changes in
            our data practices. We encourage you to review this policy
            periodically for the latest information on our privacy practices.`}
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p>
            {`For questions about this policy or our privacy practices, please
            contact us. We're committed to resolving any privacy concerns
            effectively.`}
          </p>
        </section>

        <section className="mt-5 mb-4">
          <h2 className="text-2xl font-semibold mb-3">
            Compliance and Cooperation
          </h2>
          <p>
            {`We adhere to relevant privacy laws and cooperate with regulatory
            authorities. As new tools are adopted, we will ensure compliance
            with all applicable regulations and standards.`}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
