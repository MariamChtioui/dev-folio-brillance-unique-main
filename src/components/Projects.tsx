import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "QualiGEDMaster – Plateforme GED / SAE",
      description: "Plateforme de gestion et d'archivage électronique en microservices : gestion documentaire, workflows BPM, OCR, recherche, audit et traçabilité.",
      technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "Docker", "Kafka", "MinIO"],
      tags: ["PFE", "GED", "Microservices"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SIGM – Patrimoine digital ONHYM",
      description: "Intégration d'Alfresco Enterprise au système métier via API REST et automatisation de l'extraction des fichiers documentaires. Architecture cible sécurisée avec SSO.",
      technologies: ["Alfresco", "API REST", "Keycloak", "Nginx"],
      tags: ["PFE", "ONHYM", "ECM"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AFRIQUA POOL – Modules Odoo et suivi d'activité",
      description: "Développement de modules Odoo pour le stock, les alertes et les commandes. API Spring Boot et interface React de suivi en temps réel.",
      technologies: ["Odoo", "Spring Boot", "React"],
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
      title: "Web Voyage – Réservation et paiement",
      description: "Application de réservation de voyages avec gestion des clients, des réservations et paiement en ligne.",
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
  ];

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto"></div>
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
                      className="px-3 py-1 text-xs bg-amber-600/20 text-amber-400 rounded-full border border-amber-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags && project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 text-xs bg-slate-700 text-gray-300 rounded-full border border-amber-500/10"
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
