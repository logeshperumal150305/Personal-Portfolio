import { ExternalLink, Github, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CybHacks",
    subtitle: "Cyber Security Educational Game",
    description:
      "Interactive educational game built in Unity to teach fundamental cybersecurity concepts through gamified challenges. Features responsive HUD, seamless menus, and engaging gameplay mechanics.",
    tags: ["Unity", "C#", "Game Design", "UI/UX"],
    type: "Capstone Project",
    gradient: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "Aquaworld",
    subtitle: "Underwater Survival Game",
    description:
      "An immersive underwater crafting and survival game built with Unity 6.0. Designed the hotbar system for inventory management and implemented character animations.",
    tags: ["Unity 6.0", "C#", "Inventory System", "Animation"],
    type: "Professional Work",
    gradient: "from-neon-purple/20 to-neon-pink/20",
  },
  {
    title: "Village Runner",
    subtitle: "Chase Game",
    description:
      "Exciting chase game built with Unreal Engine 5. Player collects gold coins while being chased by villagers. Features Blueprint-designed mechanics and real-time score tracking UI.",
    tags: ["Unreal Engine 5", "Blueprints", "Game Design"],
    type: "Personal Project",
    gradient: "from-neon-pink/20 to-neon-cyan/20",
  },
  {
    title: "AR Tennis Game",
    subtitle: "Augmented Reality Sports",
    description:
      "Innovative AR tennis game where the player's bat is controlled by tracking blue objects via device camera. Implemented realistic ball physics and bat mechanics with OpenCV.",
    tags: ["Unity", "OpenCV", "AR", "Physics"],
    type: "University Project",
    gradient: "from-neon-cyan/20 to-neon-purple/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-card/50 backdrop-blur-sm">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-body">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient">
            Game Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A showcase of games and interactive experiences I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden animate-fade-in hover-rgb-border"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
              <div className="absolute inset-0 bg-gradient-card" />

              {/* Content */}
              <div className="relative p-8 border-glow rounded-2xl h-full flex flex-col">
                {/* Project Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-display uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.type}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3 flex-grow">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-all duration-3000">
                    {project.title}
                  </h3>
                  <p className="text-sm font-display text-primary/80">{project.subtitle}</p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-body rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
