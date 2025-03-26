import React from 'react';
import Header from "../components/header";

export default function LegalNotice() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative isolate px-3 pt-20 pb-32 md:pt-24">
        <div className="container mx-auto px-4 py-8 relative min-h-screen max-w-4xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Legal Notice</h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3">LMU Developers</h2>
          <p className="mb-8">
            Official student organization of the LMU Munich. We build software solutions that
            improve student life at LMU.
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

          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Scope of Application</h2>
          <p className="mb-8">
            This legal notice applies to all products and services provided by us, 
            including but not limited to our website, mobile applications, social media 
            channels, and any other digital or physical offerings.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Liability Disclaimer</h2>
          <p className="mb-8">
            <p className="mb-4">
              As a service provider, we are responsible for our own content on these pages in accordance with Section 8 of the
              German Digital Services Act (DDG). However, we are not obligated to monitor transmitted or stored third-party
              information or to investigate circumstances that indicate illegal activity. Upon notification of concrete legal violations,
              we will remove the content immediately. Links to external third-party websites are also subject to this liability disclaimer.
            </p>
            <p className="mb-4">
              All information provided on this website has been prepared and reviewed to the best of our knowledge and belief.
              However, we cannot guarantee the continual accuracy, completeness, or availability of the provided information.
              No contractual relationship is established with users of this website.
            </p>
            <p className="mb-4">
              We are not liable for any damages resulting from the use of this website. This disclaimer does not apply if the provisions
              of § 839 BGB (liability in case of a breach of official duties) are relevant. We also do not accept liability for any damages
              that may occur when accessing or downloading data, or for damages caused by malware or the installation or use of software.
            </p>
            <p>
              If applicable, this disclaimer does not apply to information that falls under the scope of the European Services Directive
              (Directive 2006/123/EC – DSRL). The accuracy and timeliness of such information is guaranteed.
            </p>
          </p>

          <p className="mt-12 mb-12">Information under § 5 DDG</p>
        </div>
      </div>
    </div>
  );
}
