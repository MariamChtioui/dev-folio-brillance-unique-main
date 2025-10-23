import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Stage – SEWS CABIND MAROC (Projet SEWSTIT)",
      company: "SEWS CABIND MAROC",
      location: "Casablanca, Maroc",
      period: "2025",
      description: [
        "Conception et développement d'une application de gestion de stock IT",
        "Mise en place d'alertes email/SMS et génération de rapports PDF",
        "Technologies : Symfony, MySQL, Twig, xhtml2pdf, SwiftMailer, Twilio",
        "Objectif : Automatiser la gestion et les alertes de stock critiques"
      ]
    },
    {
      title: "Stage – Développement Web – COSUMAR",
      company: "COSUMAR",
      location: "Casablanca, Maroc",
      period: "Durée : 1 mois",
      description: [
        "Analyse des besoins client",
        "Conception UI/UX et développement du site avec HTML/CSS/JS",
        "Intégration base de données, rédaction de contenu",
        "Tests utilisateurs & promotion via réseaux sociaux",
        "Résultat : Site attractif et visibilité renforcée des produits"
      ]
    }
  ];

  const education = [
    {
      degree: "Diplôme d'ingénieur en Informatique & Réseaux – EMSI",
      school: "EMSI, Casablanca, Maroc",
      period: "2021 – 2026",
      location: "Casablanca, Maroc",
      details: [
        "Spécialité : Informatique & Réseaux",
        "Option : MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)"
      ]
    },
    {
      degree: "Baccalauréat – Sciences Mathématiques",
      school: "Lycée Abdallah Genoun, Boujaad",
      period: "2020 – 2021",
      location: "Boujaad, Maroc"
    }
  ];

  const certifications = [
    { date: "Mai 2024", items: [
      "People and Soft Skills for Professional and Personal Success",
      "HTML, CSS, and Javascript for Web Developers",
      "Software Engineering: Software Design and Project Management",
      "La recherche documentaire",
      "Impact Measurement & Management for the SDGs",
      "Villes africaines : Environnement et enjeux de développement durable"
    ]},
    { date: "23 mai 2024", items: [
      "The Unix Workbench",
      "Programming for Everybody (Getting Started with Python)"
    ]},
    { date: "26 janvier 2024", items: [
      "Introduction à la programmation orientée objet (en C++)"
    ]},
    { date: "25 novembre 2024", items: [
      "Java and Object Oriented Programming"
    ]},
    { date: "26 mars 2023", items: [
      "L'Arduino et C programmation",
      "The Structured Query Language (SQL)"
    ]},
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience & Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
              Expérience Professionnelle
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3"></div>
              Formation
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 hover:border-purple-500/50 transition-all duration-300">
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-purple-400 font-semibold mb-3">{edu.school}</p>
                  <div className="flex flex-col text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                    {edu.details && edu.details.map((d, i) => (
                      <div key={i} className="ml-5">{d}</div>
                    ))}
                  </div>
                </Card>
              ))}
              {/* Certifications */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
                <h4 className="text-lg font-bold text-white mb-4">Certifications Coursera</h4>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i}>
                      <div className="text-purple-400 font-semibold mb-1">✅ {cert.date}</div>
                      <ul className="list-disc list-inside space-y-1">
                        {cert.items.map((item, j) => (
                          <li key={j} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
