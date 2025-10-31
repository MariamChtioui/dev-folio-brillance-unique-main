import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'un stage de Projet de Fin d'Année (PFA) à partir de juillet 2025, afin de mettre en pratique ma formation en informatique, réseaux et développement full-stack.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">chtiouimariam745@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                    <p className="text-white font-semibold">+212 6 49 46 10 06</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localisation</p>
                    <p className="text-white font-semibold">Casablanca, Maroc</p>
                    <p className="text-gray-400 text-xs">Appartement n°09, Immeuble n°07, Résidence Mamoune, Quartier Hay Al Qods, Arrondissement Sidi Bernoussi</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Disponibilité</h3>
              <p className="text-gray-300 mb-4">
                Je suis actuellement à la recherche d'un stage de Projet de Fin d'Études (PFE) à partir de février 2026, afin de mettre en pratique ma formation en informatique, réseaux et développement full-stack.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Disponible pour stage PFE 2026</span>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Sujet
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </Button>
            </form>
          </Card>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio Développeur. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
