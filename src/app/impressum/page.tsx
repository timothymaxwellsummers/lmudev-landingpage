import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-screen max-w-4xl"
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Impressum</h1>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Angaben gemäß X TMG</h2>
      <p className="mb-4">
        LMU Developer's
        <br />
        Ludwig-Maximilians-Universität (LMU) München
        <br />
        Leopoldstraße 15 
        <br />
         80802 München
        <br />
        Telefon: +49 (0) 123 456789
        <br />
        E-Mail: your-email@example.com
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Vertreten durch</h2>
      <p className="mb-4">
        Max Mustermann
        <br />
        Musterfirma GmbH
      </p>

      <h2 className="text-2xl font-semibold mb-2">Umsatzsteuer-ID</h2>
      <p className="mb-4">
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        <br />
        DE123456789
      </p>

      <h2 className="text-2xl font-semibold mb-2">Haftung für Inhalte</h2>
      <p className="mb-4">
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Haftung für Links</h2>
      <p className="mb-4">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Streitschlichtung</h2>
      <p className="mb-4">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          className="text-blue-500 hover:underline"
        >
          https://ec.europa.eu/consumers/odr
        </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </div>
  );
};

export default Impressum;
