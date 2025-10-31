import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Confort Brand – E-commerce React",
      description: "Plateforme e-commerce moderne développée avec React pour la vente de produits de confort.",
      technologies: ["React", "Vite"],
      tags: ["React", "E-commerce", "Web"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AFRIQUA POOL TECHNOLOGIE – ERP ODOO APT INVEST",
      description: "Implémentation des ERP ODOO et développement ODOO APT INVEST. Optimisation ODOO existant et développement de modules ERP personnalisés.",
      technologies: ["Odoo", "Spring Boot", "MySQL"],
      tags: ["Odoo", "ERP", "APT INVEST"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "EMSISmartPresence – App Mobile Android",
      description: "Application Android pour les professeurs de l'EMSI.",
      technologies: ["Java", "Android Studio"],
      tags: ["Java", "Mobile", "Android"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80"
    },
    {
      title: "Application de gestion de voyages",
      description: "Gestion de voyages et réservations.",
      technologies: ["Spring Boot", "Angular", "Bootswatch"],
      tags: ["Java", "Angular", "Web"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SEWSTIT – Gestion de Stock IT (Stage SEWS CABIND)",
      description: "Application web avec alertes et rapports PDF.",
      technologies: ["Symfony", "MySQL", "SwiftMailer", "Twilio"],
      tags: ["Symfony", "Alertes", "PDF", "IT"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Gestion des employés & départements",
      description: "Application RH pour gérer employés et services.",
      technologies: ["C#", ".NET", "SQL Server"],
      tags: ["C#", ".NET", "RH"],
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&w=600&q=80"
    },
    {
      title: "Gestion de projet & tâches (hiérarchie)",
      description: "Application avec gestion de tâches hiérarchiques.",
      technologies: ["Java", "JavaFX"],
      tags: ["Java", "JavaFX", "Projet"],
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "WManager – Gestion de contenu numérique",
      description: "Application web avec intégration d'APIs.",
      technologies: ["Django", "Python"],
      tags: ["Django", "API"],
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: 'Application Shell "Mes-Cde" (Unix)',
      description: "Interface shell en ligne de commande.",
      technologies: ["Shell Unix"],
      tags: ["Unix", "CLI"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Gestion de stock (POO)",
      description: "Logiciel de gestion de stock en C++.",
      technologies: ["C++"],
      tags: ["C++", "Stock"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Livraison de Pizza",
      description: "Application de commande/livraison.",
      technologies: ["Django", "Python"],
      tags: ["Django", "Python"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Le Coin Coworking WM",
      description: "Business model d'un café coworking.",
      technologies: ["Excel", "Présentation"],
      tags: ["Business", "Gestion"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Arduino – Système de comptage",
      description: "Comptage de personnes par capteur infrarouge.",
      technologies: ["Arduino", "C"],
      tags: ["Arduino", "Embarqué"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "RevProc – Rencontre Prof",
      description: "Site web de prise de contact enseignant.",
      technologies: ["HTML", "CSS", "JS"],
      tags: ["Web", "JS"],
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "COSUMAR – Site Recettes & Produits (Stage)",
      description: "Développement et lancement du site culinaire COSUMAR.",
      technologies: ["HTML", "CSS", "JS", "BD"],
      tags: ["Web", "UX", "Contenu"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags && project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 text-xs bg-slate-700 text-gray-300 rounded-full border border-purple-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
