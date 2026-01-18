import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
              style={{ background: 'none', WebkitTextFillColor: 'white' }}
            >
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Looking for a passionate game developer for your next project? Let's connect!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <a
              href="mailto:logeshperumal150305@gmail.com"
              className="p-6 rounded-xl bg-gradient-card border-glow hover:shadow-neon transition-all duration-300 group hover-rgb-border"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-display text-foreground">Email</p>
              <p className="text-xs text-muted-foreground font-body mt-1 break-all">
                logeshperumal150305@gmail.com
              </p>
            </a>

            <a
              href="tel:+919650803402"
              className="p-6 rounded-xl bg-gradient-card border-glow hover:shadow-neon transition-all duration-300 group hover-rgb-border"
            >
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-display text-foreground">Phone</p>
              <p className="text-xs text-muted-foreground font-body mt-1">+91-9650803402</p>
            </a>

            <div className="p-6 rounded-xl bg-gradient-card border-glow hover-rgb-border">
              <MapPin className="w-8 h-8 text-neon-pink mx-auto mb-3" />
              <p className="text-sm font-display text-foreground">Location</p>
              <p className="text-xs text-muted-foreground font-body mt-1">Tamil Nadu, India</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:logeshperumal150305@gmail.com" className="inline-flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send a Message
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/Logesh Perumal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border-glow bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:shadow-neon transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/t-logesh-perumal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border-glow bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:shadow-neon transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
