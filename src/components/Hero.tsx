import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 sm:pt-40 md:pt-48 scroll-mt-36 sm:scroll-mt-40 md:scroll-mt-48">
      <div className="absolute inset-0">
      </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:text-center">
            </h1>
            </p>
            </div>
            <div className="flex justify-start md:justify-center flex-wrap gap-4 items-center mt-6">
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
