import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export type ExperienceSection = "experience" | "education" | "certifications" | "all";

const experiences = [
  { title: "Ingénieure GED / Full Stack Java · Stage PFE", company: "ALEXSYS SOLUTIONS pour l'ONHYM", location: "Casablanca, Maroc", period: "Février – Août 2026", description: ["Projet SIGM : intégration d'Alfresco Enterprise au SI métier via API REST (nodeRef) et automatisation de l'extraction documentaire.", "Définition de l'architecture cible : Keycloak (SSO), Nginx, stockage NAS et virtualisation.", "Projet QualiGEDMaster : plateforme GED/SAE en microservices Spring Boot et Angular avec gestion documentaire, BPM, OCR, recherche, archivage, audit et traçabilité.", "Mise en place d'une API Gateway, du stockage MinIO et de Kafka. Technologies : Java, Spring Boot, Angular, MySQL, JWT, Docker."] },
  { title: "Développeuse Full Stack · Stage", company: "AFRIQUA POOL", location: "Casablanca, Maroc", period: "Juillet – Août 2025", description: ["Développement de modules Odoo pour le stock, les alertes et les commandes, avec automatisation de workflows métiers.", "Conception d'une API Spring Boot et d'une interface React pour le suivi en temps réel de l'activité."] },
  { title: "Développeuse Web · Stage", company: "SEWS CABIND MAROC", location: "Casablanca, Maroc", period: "Août 2024", description: ["Développement d'une application de gestion du stock IT : suivi des entrées et sorties, rapports PDF et notifications e-mail.", "Technologies : Symfony, MySQL et Twig."] },
  { title: "Développeuse Web · Stage", company: "COSUMAR", location: "Casablanca, Maroc", period: "Juillet 2023", description: ["Réalisation d'un site vitrine responsive et intégration de la maquette front-end avec HTML, CSS et JavaScript."] },
];

const certifications = ["Oracle Certified Java Developer (2025)", "OCI 2025 Certified DevOps Professional – Oracle", "DevOps, Cloud & Agile – Containers (IBM, 2025)", "React Basics (Meta, 2025)", "Oracle APEX Cloud Developer, Fusion Cloud ERP et Fusion AI Agent Studio"];

const Experience = ({ section = "all" }: { section?: ExperienceSection }) => {
  if (section === "all") {
    return <><Experience section="experience" /><Experience section="education" /><Experience section="certifications" /></>;
  }

  const page = {
    experience: { title: "Expérience professionnelle", intro: "Quatre stages en développement web, Full Stack et gestion électronique de documents." },
    education: { title: "Formation", intro: "Mon parcours académique en génie informatique et gestion des systèmes d'information." },
    certifications: { title: "Certifications", intro: "Certifications professionnelles en développement logiciel, cloud, DevOps et Agile." },
  }[section];

  return (
    <section id={section === "education" ? "formation" : section} className="min-h-[75vh] py-24 px-4 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <p className="uppercase tracking-[.24em] text-amber-700 text-sm font-semibold mb-4">Mariam Chtioui · Parcours</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">{page.title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-300 mx-auto mb-5 rounded-full" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{page.intro}</p>
        </header>

        {section === "experience" && <div className="space-y-6">{experiences.map((exp) => <Card key={exp.company} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 md:p-8"><div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5"><div><h2 className="text-xl md:text-2xl font-bold text-gray-900">{exp.title}</h2><p className="text-amber-700 font-semibold mt-1">{exp.company}</p></div><div className="flex flex-col gap-1 text-sm text-gray-500 shrink-0"><span className="flex items-center"><Calendar size={15} className="mr-2 text-amber-700" />{exp.period}</span><span className="flex items-center"><MapPin size={15} className="mr-2 text-amber-700" />{exp.location}</span></div></div><ul className="space-y-3">{exp.description.map((item) => <li key={item} className="text-gray-700 flex items-start leading-relaxed"><span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 shrink-0" />{item}</li>)}</ul></Card>)}</div>}

        {section === "education" && <div className="grid md:grid-cols-2 gap-6"><Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 md:col-span-2"><p className="text-amber-700 text-sm uppercase tracking-widest font-semibold mb-3">2021 – 2026</p><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Diplôme d'Ingénieur d'État en Génie Informatique</h2><p className="text-gray-700 text-lg">EMSI · Casablanca</p><p className="text-gray-600 mt-2">Option MIAGE — Méthodes Informatiques Appliquées à la Gestion des Entreprises</p></Card><Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8"><p className="text-amber-700 text-sm uppercase tracking-widest font-semibold mb-3">2020 – 2021</p><h2 className="text-2xl font-bold text-gray-900 mb-3">Baccalauréat</h2><p className="text-gray-700">Sciences Mathématiques</p></Card></div>}

        {section === "certifications" && <div className="grid md:grid-cols-2 gap-5">{certifications.map((cert, index) => <Card key={cert} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 flex items-start gap-4"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold shrink-0">0{index + 1}</span><div><p className="text-gray-900 font-semibold leading-relaxed">{cert}</p><p className="text-gray-500 text-sm mt-2">Certification professionnelle · 2025</p></div></Card>)}</div>}
      </div>
    </section>
  );
};

export default Experience;
