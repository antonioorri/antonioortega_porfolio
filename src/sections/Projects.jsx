import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}