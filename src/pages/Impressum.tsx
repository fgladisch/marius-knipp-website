import { LegalHeader } from "../components/layout/LegalHeader";
import { Footer } from "../components/layout/Footer";

export const Impressum = () => {
  return (
    <div className="min-h-screen">
      <LegalHeader />
      <main className="container pt-40 pb-20">
        <h1 className="text-h2 md:text-h1 mb-12">Impressum</h1>

        <div className="max-w-[800px] space-y-8 text-body leading-relaxed">
          <div>
            <p>Marius Lorenzo Knipp</p>
            <p>
              Designdienstleistungen im Bereich Messebau, Retail- und Interior
              sowie Grafikdesign und Brandentwicklung.
            </p>
            <p>Volksgartenstra&szlig;e 18</p>
            <p>40227 D&uuml;sseldorf</p>
          </div>

          <div>
            <h2 className="text-h4 md:text-h3 mb-4">Kontakt</h2>
            <p>E-Mail: info@mariusknipp.de</p>
          </div>

          <div>
            <h2 className="text-h4 md:text-h3 mb-4">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <p className="text-sm text-primary/60">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              e-recht24.de
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
