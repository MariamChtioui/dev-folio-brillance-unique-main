import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 sm:pt-40 md:pt-48 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="relative z-10 text-left md:text-center px-4 max-w-6xl mx-auto animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:text-center">
            <p className="text-amber-300 font-semibold mb-3">Mariam Chtioui · Casablanca, Maroc</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ingénieure d'État en Génie Informatique
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Développeuse Full Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl md:mx-auto mb-8">
              Diplômée de l'EMSI (option MIAGE), je conçois des applications web et des plateformes de gestion documentaire, des microservices Java/Spring aux interfaces Angular et React.
            </p>
            <p className="text-lg text-amber-200 mb-8">Quatre stages · Expérience GED, microservices et développement Full Stack · Disponible immédiatement</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-start md:items-center mb-10">
              <a href="#projects"><Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">Voir mes projets</Button></a>
              <a href="/CV_Mariam_Chtioui_ATS.pdf" download className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center text-lg border-2">Télécharger mon CV</a>
            </div>
            <div className="flex justify-start md:justify-center flex-wrap gap-4 items-center mt-6">
              <a href="https://github.com/MariamChtioui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 flex items-center"><Github size={24} /><span className="ml-2">GitHub</span></a>
              <a href="https://www.linkedin.com/in/mariam-chtioui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 flex items-center"><Linkedin size={24} /><span className="ml-2">LinkedIn</span></a>
              <a href="mailto:chtiouimariam745@gmail.com" className="text-gray-400 hover:text-amber-400 flex items-center"><Mail size={24} /><span className="ml-2">Email</span></a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 p-2">
              <div className="w-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                {!imageError ? <img src="/PHOTO PRF.jpg" alt="Mariam Chtioui" className="w-full h-full object-cover rounded-xl" onError={() => setImageError(true)} /> : <img src="/mariam-photo.jpg" alt="Mariam Chtioui" className="w-full h-full object-cover rounded-xl" />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><ArrowDown className="text-amber-400" size={32} /></div>
    </section>
  );
};

export default Hero;
