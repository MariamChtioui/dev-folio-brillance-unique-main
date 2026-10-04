import { Download, Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20 items-stretch">
        <div className="flex flex-col items-start justify-center py-8 lg:py-16">
          <p className="text-xs uppercase tracking-[.18em] text-gray-400 mb-6">Disponible pour une opportunité Full Stack</p>
          <h2 className="contact-headline text-5xl md:text-7xl font-normal text-white leading-[1.05] mb-10">
            Parlons de votre prochain défi technique.
          </h2>
          <a
            href="mailto:chtiouimariam745@gmail.com?subject=Prise%20de%20contact%20-%20Portfolio"
            className="contact-email-link inline-flex items-center gap-3 text-lg text-white border-b border-gray-500 pb-2 hover:border-white transition-colors"
          >
            Écrivez-moi <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="contact-details flex flex-col justify-center lg:border-l lg:border-neutral-600 lg:pl-8">
          <h3 className="text-2xl text-white mb-8">Coordonnées</h3>
          <a href="mailto:chtiouimariam745@gmail.com" className="contact-row">
            <Mail size={18} aria-hidden="true" />
            <span><small>E-mail</small><strong>chtiouimariam745@gmail.com</strong></span>
          </a>
          <a href="tel:+212660492808" className="contact-row">
            <Phone size={18} aria-hidden="true" />
            <span><small>Téléphone</small><strong>+212 660 492 808</strong><small>+212 774 149 954</small></span>
          </a>
          <div className="contact-row">
            <MapPin size={18} aria-hidden="true" />
            <span><small>Localisation</small><strong>Casablanca, Maroc</strong></span>
          </div>

          <div className="flex gap-3 mt-8">
            <a href="https://github.com/MariamChtioui" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-icon-link"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/mariam-chtioui" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-icon-link"><Linkedin size={18} /></a>
            <a href="/CV_Mariam_Chtioui_ATS.pdf" download aria-label="Télécharger le CV" className="contact-icon-link"><Download size={18} /></a>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-6 border-t border-neutral-600 text-sm text-gray-400">
        © 2026 Mariam Chtioui. Tous droits réservés.
      </footer>
    </div>
  </section>
);

export default Contact;
