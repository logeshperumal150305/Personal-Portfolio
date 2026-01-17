import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-red) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-red) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-red/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-red/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-card/50 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow-green" />
            <span className="text-sm text-muted-foreground font-body">Available for opportunities</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Logesh Perumal</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-display text-muted-foreground">
              Game Developer & Software Engineer
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground font-body leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Crafting immersive gaming experiences with <span className="text-primary">Unity</span> & <span className="text-secondary" style={{ color: "blue" }}>Unreal Engine</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.6s" }}>
            <Button variant="default" size="xl" onClick={scrollToProjects} className="bg-siren-red">
              View My Work
            </Button>
            <Button variant="default" size="xl" asChild className="bg-siren-blue">
              <a href="mailto:logeshperumal150305@gmail.com">Get in Touch</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
