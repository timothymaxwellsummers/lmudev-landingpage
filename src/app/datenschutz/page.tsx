import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>

      <p className="mb-4">
        DUMMY DATA SECURITY - TODO: WE STILL HAVE TO GET A REAL ONE
        Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
        Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
        ausführlich über den Umgang mit Ihren Daten.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
      <p className="mb-4">
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        LMU Developer's
        <br />
        Your Address
        <br />
        Email: your-email@example.com
        <br />
        Telefon: 
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p className="mb-4">
        Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer
        Bestellung oder bei einer Kontaktaufnahme (z. B. per Kontaktformular oder
        E-Mail) freiwillig mitteilen. Welche Daten erhoben werden, ist aus den
        jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von ihnen
        mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer
        Anfragen. Nach vollständiger Abwicklung des Vertrages werden Ihre Daten
        für die weitere Verwendung gesperrt und nach Ablauf der steuer- und
        handelsrechtlichen Aufbewahrungsfristen gelöscht.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
      <p className="mb-4">
        Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
        bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen
        Seiten sogenannte Cookies. Dabei handelt es sich um kleine Textdateien,
        die auf Ihrem Endgerät gespeichert werden. Einige der von uns
        verwendeten Cookies werden nach Ende der Browser-Sitzung, also nach
        Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies).
        Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen uns oder
        unseren Partnerunternehmen, Ihren Browser beim nächsten Besuch
        wiederzuerkennen (persistente Cookies).
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Ihre Rechte</h2>
      <p className="mb-4">
        Sie haben das Recht, Auskunft über die bei uns zu Ihrer Person
        gespeicherten Daten zu verlangen, sowie das Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Bei Fragen zur Erhebung,
        Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
        Berichtigungen, Sperrung oder Löschung von Daten sowie Widerruf
        erteilter Einwilligungen wenden Sie sich bitte an:
        <br />
        Your Company Name
        <br />
        Your Email: your-email@example.com
      </p>
    </div>
  );
};

export default Datenschutz;
