import { Gamepad2, Code, Database, Cpu, Palette, Boxes } from "lucide-react";

const skills = [
  {
    category: "Game Engines",
    icon: Gamepad2,
    items: ["Unity", "Unreal Engine 5"],
    color: "neon-cyan",
  },
  {
    category: "Programming",
    icon: Code,
    items: ["C#", "Python", "Java", "Blueprints"],
    color: "neon-purple",
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL"],
    color: "neon-pink",
  },
  {
    category: "Game Dev",
    icon: Boxes,
    items: ["Physics Systems", "UI/UX", "Animation", "AR/VR"],
    color: "neon-cyan",
  },
  {
    category: "Tools",
    icon: Cpu,
    items: ["OpenCV", "Salesforce", "Git"],
    color: "neon-purple",
  },
  {
    category: "Soft Skills",
    icon: Palette,
    items: ["Fast Learner", "Team Player", "Communication"],
    color: "neon-pink",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            The tools and technologies I use to bring games and software to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group relative p-6 rounded-xl bg-gradient-card border-glow backdrop-blur-sm hover:shadow-neon transition-all duration-500 animate-fade-in hover-rgb-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-xl bg-${skill.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${skill.color}/10 border border-${skill.color}/20`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {skill.category}
                  </h3>
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm font-body rounded-full bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
