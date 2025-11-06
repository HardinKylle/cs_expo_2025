import { projects } from "@/app/projects/data/ProjectsData";
import ProjectsCard from "@/components/projects/ProjectsCard";

export default function ProjectsGrid() {
  return (
    // Layout Project Cards in 3x3 and pass data 

    <section className="w-full max-w-[1200px] py-8 flex flex-row flex-wrap justify-center gap-6 mx-auto px-4">
      {projects.map(project => (
        <div
          key={project.slug}
          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]"
          style={{ maxWidth: "380px" }}
        >
          <ProjectsCard
            appTitle={project.appTitle}
            thesisTitle={project.thesisTitle}
            groupName={project.details.groupName}
            members={project.details.groupMembers}
            mentor={project.details.mentor}
            category={project.details.category}
            poster={project.poster}
            slug={project.slug}
          />
        </div>
      ))}
    </section>
  );
}