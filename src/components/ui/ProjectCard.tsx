import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        className="text-sm underline"
      >
        Ver en GitHub
      </a>
    </div>
  );
}