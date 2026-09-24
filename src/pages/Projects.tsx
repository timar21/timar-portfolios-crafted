import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";


const Projects = () => {
  return (
    <div className="px-4 py-10 md:px-12 lg:px-32 bg-background min-h-screen">
      <h2 className="text-4xl font-extrabold tracking-tight text-primary text-center mb-12 font-sans drop-shadow-lg">
        Here are my designs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="no-underline">
            <Card className="rounded-2xl shadow-xl border border-border bg-card transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover brightness-95"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1 bg-background/80 backdrop-blur text-xs font-semibold text-primary rounded-full border border-primary/30 shadow">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mt-6 mb-2 text-xl font-bold text-foreground font-sans">
                  {project.title}
                </CardTitle>
                <p className="mb-4 text-base text-muted-foreground font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/30 text-xs rounded-full font-medium text-accent-foreground border border-accent/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;