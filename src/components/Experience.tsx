import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Game Programmer Intern",
    company: "Karma Play Academy",
    period: "September 2025",
    description:
      "Worked on 'Aquaworld', an underwater crafting and survival game using Unity 6.0. Designed the hotbar system for inventory management and implemented character animations.",
    skills: ["Unity 6.0", "C#", "Inventory Systems", "Animation"],
  },
  {
    type: "work",
    title: "Salesforce Intern",
    company: "Clovetrix Technologies",
    period: "March 2025 - April 2025",
    description:
      "Learned Salesforce fundamentals and Apex language. Worked on modifying Visualforce pages, adding new fields, and optimizing page layouts for clients.",
    skills: ["Salesforce", "Apex", "Visualforce"],
  },
];

const education = {
  degree: "B.Tech - Computer Science & Engineering",
  specialization: "Specialization in Gaming Technology",
  university: "VIT Bhopal University",
  period: "Expected June 2026",
  cgpa: "8.31/10",
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-black/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient">
                Experience
              </h2>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-8 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-glow" />

                  <div className="p-6 rounded-xl bg-gradient-card border-glow hover:shadow-neon transition-all duration-300 hover-rgb-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-primary font-body">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body mb-3">{exp.company}</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-body rounded bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient">
                Education
              </h2>
            </div>

            <div className="animate-slide-in-right">
              <div className="p-8 rounded-xl bg-gradient-card border-glow hover:shadow-neon transition-all duration-300 hover-rgb-border">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {education.degree}
                      </h3>
                      <p className="text-primary font-body">{education.specialization}</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-display rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                      CGPA: {education.cgpa}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-lg font-body text-foreground">{education.university}</p>
                    <p className="text-sm text-muted-foreground font-body">{education.period}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-xl bg-gradient-card border-glow hover-rgb-border">
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {["English", "Tamil", "Hindi"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 font-body rounded-lg bg-muted/30 text-foreground border border-border/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
