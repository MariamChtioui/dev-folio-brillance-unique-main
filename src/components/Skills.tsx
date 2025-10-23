import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Spring Boot / Java" },
    { name: "Django / Python" },
    { name: "C / C++" },
    { name: "JavaScript / HTML / CSS" },
    { name: "SQL / MySQL / Oracle" },
    { name: "C# / .NET" },
    { name: "Symfony / PHP" },
    { name: "Angular" },
    { name: "Bootstrap / Bootswatch" },
    { name: "JEE" },
    { name: "Thymeleaf" },
  ];

  const tools = [
    "Visual Studio / VS Code",
    "Git & GitHub",
    "Android Studio / IntelliJ",
    "PowerAMC / StarUML",
    "Oracle SQL Developer / SQL Server",
    "Arduino IDE / Tinkercad",
    "VMware / Isis / Quartus",
    "Canva",
  ];

  const expertises = [
    "Développement Web Full-stack",
    "Développement Mobile (Android)",
    "Applications embarquées (Arduino)",
    "Systèmes de gestion (stock, RH, livraison)",
    "Bases de données relationnelles",
    "Génération de rapports PDF",
    "Applications Shell sous Unix",
    "Intégration d'APIs",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">🧠 Compétences Techniques</h3>
            <div className="grid grid-cols-1 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg p-3 text-center text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 cursor-pointer font-medium text-base"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">🛠️ Outils & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-700/50 rounded-lg p-3 text-center text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 cursor-pointer"
                >
                  {tool}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">🧭 Domaines d'expertise</h4>
              <div className="flex flex-wrap gap-3">
                {expertises.map((domain, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
