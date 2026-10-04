import { Card } from "@/components/ui/card";

const Skills = () => {
  const groups = [
    { title: "Back-end & architecture", skills: ["Java 17", "Spring Boot", "Spring Security", "JWT", "API REST", "Microservices", "API Gateway", "Kafka"] },
    { title: "Front-end & mobile", skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5 / CSS3", "Bootstrap", "Flutter", "Java Android"] },
    { title: "GED / ECM & IA", skills: ["Alfresco Enterprise", "API REST Alfresco", "Workflow / BPM", "OCR", "Archivage électronique", "Ollama", "Python"] },
    { title: "Données, DevOps & outils", skills: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MinIO", "Docker", "Git / GitHub", "Keycloak", "Nginx", "Jira", "Agile / Scrum", "UML / Merise"] },
  ];
  return <section id="skills" className="py-20 px-4 bg-slate-800/30 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48"><div className="max-w-6xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Compétences</h2><div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto" /></div><div className="grid md:grid-cols-2 gap-8">{groups.map((group) => <Card key={group.title} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8"><h3 className="text-2xl font-bold text-white mb-6">{group.title}</h3><div className="flex flex-wrap gap-3">{group.skills.map((skill) => <span key={skill} className="px-4 py-2 bg-slate-700/70 rounded-lg text-gray-300 hover:text-amber-300 transition-colors">{skill}</span>)}</div></Card>)}</div><p className="text-gray-400 text-center mt-8">Autres technologies : Python / Django, PHP / Symfony, C# / .NET et Odoo.</p></div></section>;
};

export default Skills;
