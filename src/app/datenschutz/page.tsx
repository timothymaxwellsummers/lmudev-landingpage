import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div 
      className="container mx-auto px-4 py-8 relative" 
      style={{
        minHeight: '100vh',
        background: 
         "linear-gradient(135deg, #ccffcc, #ffffff)",
        color: "gray-600",
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>

      <h2 className="text-2xl font-semibold mb-2">1. Name und Kontaktdaten des Verantwortlichen</h2>
      <p className="mb-4">
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        <br />
        Technikreferat der Universität [Name der Universität]
        <br />
        [Adresse]
        <br />
        [E-Mail-Adresse]
        <br />
        [Telefonnummer]
      </p>
      <p className="mb-4">
        Bei Fragen zum Datenschutz können Sie sich auch an unseren Datenschutzbeauftragten wenden:
        <br />
        [Name des Datenschutzbeauftragten]
        <br />
        [E-Mail-Adresse des Datenschutzbeauftragten]
      </p>

      <h2 className="text-2xl text-gray-950 font-semibold mb-2">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung</h2>
      <h3 className="text-xl font-semibold mb-2">a Beim Besuch der Webseite</h3>
      <p className="mb-4">
        Beim Aufrufen unserer Webseite werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        <br />
        - IP-Adresse des anfragenden Rechners,
        <br />
        - Datum und Uhrzeit des Zugriffs,
        <br />
        - Name und URL der abgerufenen Datei,
        <br />
        - Webseite, von der aus der Zugriff erfolgt (Referrer-URL),
        <br />
        - verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
        <br />
        Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
        <br />
        - Gewährleistung eines reibungslosen Verbindungsaufbaus der Webseite,
        <br />
        - Gewährleistung einer komfortablen Nutzung unserer Webseite,
        <br />
        - Auswertung der Systemsicherheit und -stabilität sowie
        <br />
        - zu weiteren administrativen Zwecken.
        <br />
        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
      </p>

      <h3 className="text-xl font-semibold mb-2">b Nutzung der Mensa-App</h3>
      <p className="mb-4">
        Für die Nutzung unserer Mensa-App, die Ihnen die Speisepläne der Universität zur Verfügung stellt, verarbeiten wir folgende personenbezogenen Daten:
        <br />
        - [Name, E-Mail-Adresse, IP-Adresse, falls zutreffend] Diese Daten werden zur Bereitstellung der App-Funktionalitäten benötigt und dienen ausschließlich der Verbesserung der Nutzererfahrung.
        <br />
        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Weitergabe von Daten</h2>
      <p className="mb-4">
        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        <br />
        - Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO),
        <br />
        - die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist (Art. 6 Abs. 1 lit. f DSGVO),
        <br />
        - für den Fall, dass für die Weitergabe eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO), sowie
        <br />
        - dies gesetzlich zulässig und für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO).
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
      <p className="mb-4">
        Unsere Webseite verwendet Cookies. Weitere Informationen dazu, welche Cookies wir verwenden und wie Sie diese deaktivieren können, finden Sie in unserer [Cookie-Richtlinie].
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Rechte der betroffenen Person</h2>
      <p className="mb-4">
        Sie haben das Recht:
        <br />
        - gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,
        <br />
        - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,
        <br />
        - gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,
        <br />
        - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
        <br />
        - gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen,
        <br />
        - gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen sowie
        <br />
        - gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Widerspruchsrecht</h2>
      <p className="mb-4">
        Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
      </p>
    </div>
  );
};

export default Datenschutz;
