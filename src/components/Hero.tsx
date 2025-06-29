import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte centré */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Bonjour, je suis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Étudiante Ingénieure en Informatique
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Passionnée par le développement d'applications web et mobiles modernes. 
                <br /><br />
                Forte d'expériences en gestion de stock IT, systèmes embarqués et conception UI/UX.
                <br /><br />
                Actuellement en 4e année à l'EMSI, je cherche à transformer les idées en solutions innovantes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a href="#projects">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Voir mes projets
                  </Button>
                </a>
                <a href="/Mariam_Chtioui_CV_.pdf" download className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center text-lg border-2">
                  Télécharger CV
                </a>
              </div>
              
              <div className="flex justify-center space-x-6 items-center mt-6">
                <a href="https://github.com/MariamChtioui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200 flex items-center">
                  <Github size={28} />
                  <span className="ml-2 hidden sm:inline">@MariamChtioui</span>
                </a>
                <a href="https://www.linkedin.com/in/mariam-chtioui-32b458241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200 flex items-center">
                  <Linkedin size={28} />
                  <span className="ml-2 hidden sm:inline">LinkedIn</span>
                </a>
                <a href="mailto:ch745ma@gmail.com" className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200 flex items-center">
                  <Mail size={28} />
                  <span className="ml-2 hidden sm:inline">ch745ma@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Photo dans un grand rectangle */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-96 h-[500px] rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 p-2">
                  <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden">
                    {/* 
                    POUR CHANGER LA PHOTO :
                    1. Placez votre image dans le dossier public/ (ex: public/mariam-photo.jpg)
                    2. Remplacez le src ci-dessous par le nom de votre fichier
                    */}
                    {!imageError ? (
                      <img 
                        src="/mariam-photo.jpg" 
                        alt="Mariam Chtioui" 
                        className="w-full h-full object-cover rounded-xl"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="text-8xl mb-6">📸</div>
                        <p className="text-lg mb-2">Ajoutez votre photo dans public/</p>
                        <p className="text-sm">Nom du fichier: mariam-photo.jpg</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
