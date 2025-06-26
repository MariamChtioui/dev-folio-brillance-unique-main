import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              👩‍💻 Étudiante Ingénieure Développeuse en 4e année à l'EMSI, option MIAGE, avec plusieurs projets académiques et stages réussis dans le développement d'applications web, mobiles et embarquées.<br/>
              Passionnée par les technologies modernes et motivée par l'impact que peut avoir une solution bien pensée.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              💡 Mon expertise couvre le développement full-stack avec des technologies comme Symfony, Django, Spring Boot, Angular et C++, ainsi que la programmation embarquée avec Arduino.<br/>
              J'aime relever des défis techniques et créer des applications utiles, fiables et évolutives.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">projets académiques concrets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2</div>
                <div className="text-gray-400">stages professionnels en entreprise</div>
              </div>
              <div className="text-center col-span-2">
                <div className="text-3xl font-bold text-purple-400">8+</div>
                <div className="text-gray-400">technologies maîtrisées</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 h-full min-h-full flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">🔑 Mes valeurs & compétences</h3>
                <ul className="space-y-3 text-gray-300 text-base list-disc list-inside">
                  <li><b>Code propre et structuré</b> avec Visual Studio, VS Code, IntelliJ, Android Studio</li>
                  <li><b>Performance et optimisation</b> avec Java, C++, Shell, Arduino et SQL</li>
                  <li><b>Polyvalence technologique</b> : Symfony, Django, Spring Boot, Angular, PHP, Python, C#, .NET</li>
                  <li><b>Modélisation et conception</b> avec UML, PowerAMC, StarUML</li>
                  <li><b>Maîtrise des bases de données</b> : Oracle, MySQL, SQL Server</li>
                  <li>Travail d'équipe, rigueur et organisation</li>
                  <li>Veille technologique et apprentissage continu</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
