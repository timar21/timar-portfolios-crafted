import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectById } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = id ? parseInt(id, 10) : NaN;
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="px-4 py-10 md:px-12 lg:px-32 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="underline text-primary">Back to projects</Link>
      </div>
    );
  }

  const [active, setActive] = useState(0);

  return (
    <div className="px-4 py-10 md:px-12 lg:px-32 min-h-screen">
      <Button onClick={() => navigate(-1)} className="mb-6">Back</Button>
      <Card className="rounded-2xl shadow-lg">
        <CardHeader className="p-0">
          {project.images && project.images.length > 0 ? (
            <div className="w-full max-h-[80vh] flex items-center justify-center bg-muted/5 rounded-t-2xl overflow-hidden">
              <img
                src={project.images[active].src}
                alt={project.images[active].alt ?? project.title}
                className="w-full h-auto max-h-[80vh] object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          ) : (
            <div className="w-full max-h-[80vh] flex items-center justify-center bg-muted/5 rounded-t-2xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-3xl font-extrabold mb-2">{project.title}</CardTitle>
          <p className="text-muted-foreground mb-4">{project.details ?? project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/30 text-xs rounded-full font-medium text-accent-foreground border border-accent/40">{tag}</span>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">Category: <strong className="text-foreground">{project.category}</strong></div>
          {project.images && project.images.length > 0 && (
            <div className="mt-4 flex gap-3">
              {project.images.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setActive(idx)}
                  className={`w-20 h-12 overflow-hidden rounded-md border ${active === idx ? 'ring-2 ring-primary' : 'border-border'}`}
                >
                  <img src={img.src} alt={img.alt ?? `thumb-${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetail;
