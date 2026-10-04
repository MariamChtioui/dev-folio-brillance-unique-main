import { Card } from "@/components/ui/card";

const About = () => (
  <section id="about" className="py-20 px-4 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
    <div className="max-w-6xl mx-auto">
      <div className="text-left md:text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de moi</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mr-auto md:mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">Ingénieure d'État en Génie Informatique diplômée de l'EMSI en 2026, option MIAGE. J'ai réalisé quatre stages en développement web et Full Stack, dont un stage PFE de six mois consacré à deux plateformes de gestion électronique de documents.</p>
          <p className="text-lg text-gray-300 leading-relaxed">J'aime transformer des besoins métiers en solutions fiables : architectures microservices, API REST, sécurité, workflows documentaires et interfaces accessibles. Je suis actuellement disponible pour un poste de développeuse Full Stack.</p>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="text-left sm:text-center"><div className="text-3xl font-bold text-amber-400">4</div><div className="text-gray-400">stages professionnels</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-amber-400">2</div><div className="text-gray-400">projets GED au PFE</div></div>
          </div>
        </div>
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-6">Domaines clés</h3>
          <ul className="space-y-3 text-gray-300 text-base list-disc list-inside">
            <li><b>Back-end :</b> Java 17, Spring Boot, Spring Security, API REST, Kafka</li>
            <li><b>Front-end :</b> Angular, React, TypeScript et JavaScript</li>
            <li><b>GED / ECM :</b> Alfresco, workflows BPM, OCR et archivage électronique</li>
            <li><b>Architecture :</b> microservices, API Gateway, Docker et MinIO</li>
            <li><b>Sécurité :</b> Keycloak, SSO et JWT</li>
            <li><b>Langues :</b> Arabe (maternelle), français (courant), anglais (B2 technique)</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default About;
