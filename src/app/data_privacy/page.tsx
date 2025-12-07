import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

export default function DataPrivacy() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative isolate px-3 pt-20 pb-32 md:pt-24">
        <div className="container mx-auto px-4 py-8 relative min-h-screen max-w-4xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Data Privacy</h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Introduction</h2>
          <p className="mb-8">
            This Data Privacy Declaration explains how we, LMU Developers, collect, process, and protect your data. It applies to both our website and mobile application.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contact</h2>
          <p className="mb-8">
            LMU Developers
            <br />
            Technikreferat der StuVe, Ludwig-Maximilians-Universität München
            <br />
            Leopoldstraße 15, 80802 München
            <br />
            +49-(0)89-2180 2071
            <br />
            contact(at)lmu-dev.org
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Data Collection and Processing</h2>

        <h3 className="text-lg sm:text-xl font-semibold mb-3">Website • LMU Developers</h3>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>No Data Collection:</strong> Our website does not collect any data or track activities.</li>
          <li><strong>Third-Party Links:</strong> The website may contain links to external websites. We are not responsible for the privacy practices or content of these external sites.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold mb-3">Mobile Application • LMU Students</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Data Collected:</strong> We collect anonymized usage data to analyze app performance and improve services.</li>
          <li><strong>Anonymization:</strong> All collected data is strictly anonymized and cannot be traced back to any individual.</li>
          <li><strong>Location Data:</strong> While location data may be used for certain app functionalities, it remains on your device and is not stored on our servers.</li>
          <li><strong>User Preferences:</strong> If you mark preferences within the app (e.g., favourites), this data is stored on our servers located in Germany.</li>
        </ul>
        <p className="mb-4">
          Our mobile application is designed with a privacy-first approach. We do not collect or store personally identifiable information. By downloading, installing, or using our application, users implicitly consent to our data processing practices stated above. The act of using the application constitutes acceptance of our data privacy terms, as no personal data is processed or stored that could identify individual users. All users are provided with the option to review the privacy policies at first app start before any data is collected and later in settings.
        </p>
        <p className="mb-4">
          Starting with app version 1.1.1, we use Firebase Analytics to collect usage data such as clicked elements or time spent on a page. This information helps us identify which features are used most and where users encounter issues. We do not give any identifiers to Firebase at all. We do collect information regarding your OS version, app version, language, and theme which all are not linked to any sort of account or user identifier. Firebase itself may collect device or session identifiers which we do not have control of and take care safely. Users have the option to opt-out of analytics in settings.
        </p>
        <p className="mb-8">
          For more information about Firebase Analytics lookup <a href="https://firebase.google.com/support/privacy" className="underline text-green-600">Firebase Privacy Policy</a>.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Legal Basis for Processing</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Contract (Art. 6(1)(b) GDPR):</strong> Data processing may be necessary to provide core app functionalities.</li>
          <li><strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> We have a legitimate interest in improving our services and conducting analytics, provided your rights do not override these interests.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Data Sharing</h2>
        <p className="mb-8">
          <p className="mb-4">
            We may share data with academic institutions and partner organizations for research and development purposes. Since the data is strictly anonymized, it cannot be linked to an individual. We do not sell or share personal data with third parties for commercial purposes.
          </p>
          <p>
            In cases where we work with third-party data processors, we ensure they comply with data protection obligations under Article 28 of the General Data Protection Regulation (GDPR). All data-sharing agreements include provisions to maintain the confidentiality, integrity, and security of the data.
          </p>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Data Retention</h2>
        <p className="mb-8">
          We retain anonymized data indefinitely for analytical purposes unless you request its deletion. You can request deletion of your data via the app settings.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">User Rights</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Access and Portability:</strong> Request a copy of your personal data.</li>
          <li><strong>Rectification and Deletion:</strong> Request corrections or deletion of your data.</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
          <li><strong>Restriction:</strong> Request temporary restriction of data processing.</li>
        </ul>
        <p className="mb-4">
          To exercise your rights, please contact us at <strong><a href="mailto:contact@lmu-dev.org">contact@lmu-dev.org</a></strong>.
        </p>
        <p className="mb-8">
          Since we only process anonymized data, we may not be able to identify your data anyway. Please use the available options inside the app settings to delete any user created information loaclly on your device as well as on our servers.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Security Measures</h2>
        <p className="mb-8">
          We implement appropriate technical and organizational measures to ensure the security of your data. This includes secure storage on servers located in Germany. We also update our systems regularly to protect against security vulnerabilities. However, no system is completely secure, and we cannot guarantee absolute protection against data breaches.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Disclaimer of Liability</h2>
        <p className="mb-8">
          <p className="mb-4">
            The information provided on our website and mobile application is for general informational purposes only. While we strive to ensure the accuracy and completeness of the information presented, we do not guarantee or warrant its correctness, reliability, or timeliness. Any reliance you place on such information is strictly at your own risk.
          </p>
          <p className="mb-4">
            We disclaim all liability for any loss or damage, whether direct, indirect, incidental, or consequential, arising from your use of or reliance on the information presented on our platforms. This includes, but is not limited to, damages resulting from inaccuracies, errors, omissions, or interruptions in the content provided.
          </p>
          <p className="mb-4">
            Users are solely responsible for evaluating the accuracy, completeness, and usefulness of any information available through our services. By using our website or mobile application, you acknowledge that you do so at your own discretion and risk.
          </p>
          <p>
          This disclaimer of liability applies to the maximum extent permitted by applicable law, including but not limited to Article 12 of the EUs E-Commerce Directive (2000/31/EC) and any relevant national laws governing online service providers.
          </p>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Responsibility for External Data</h2>
        <p className="mb-8">
          <p className="mb-4">
            Our mobile application may use data from external sources (e.g., web scraping). We are not responsible for the accuracy, legality, or privacy practices of external content providers. Additionally, we disclaim any liability for any damages or losses arising from the use of such external data. Users should verify the accuracy and reliability of external content before making decisions based on it. LMU Developers are not liable for any legal issues or disputes resulting from the use of external data.
          </p>
          <p className="mb-4">
            Furthermore, under Article 5(1)(d) of the GDPR, data controllers are required to ensure that personal data is accurate and kept up to date. However, as we do not control external data sources, we cannot guarantee the accuracy of such information. If any external data is found to be incorrect or outdated, users should directly refer to the original data provider.
          </p>
          <p className="mb-4">
            Per Article 82 of the GDPR, liability for data processing applies only to controllers or processors who directly handle personal data. Since external sources are independent entities, LMU Developers cannot be held liable for any legal issues, data inaccuracies, or privacy violations originating from third-party data providers.
          </p>
          <p>
            By using our services, users acknowledge that they do so at their own risk and accept that LMU Developers bear no responsibility for how external content is used or interpreted.
          </p>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Email Communication</h2>
        <p className="mb-8">
          If you send us an email, your email address will only be used for correspondence with you. Please note that data transmission over the internet can have security vulnerabilities. Complete protection of data from access by third parties is not possible.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Changes to This Declaration</h2>
        <p className="mb-8">
          We may update this Data Privacy Declaration from time to time. Please check our website or app for the latest version.
        </p>

        <p className="mt-12 mb-12">Effective Date: 26.06.2025</p>            
        </div>
      </div>
      <Footer />
    </div>
  );
}
