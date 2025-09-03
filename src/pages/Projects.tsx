import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A modern mobile shopping experience with intuitive navigation, seamless checkout, and personalized recommendations.",
      category: "Mobile UI/UX",
      tags: ["Figma", "Prototyping", "User Research"],
      image: "/placeholder.svg",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      description: "Clean and accessible dashboard design for healthcare professionals to manage patient data and appointments.",
      category: "Web Design",
      tags: ["Dashboard", "Healthcare", "Accessibility"],
      image: "/placeholder.svg",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Restaurant Booking App",
      description: "User-friendly restaurant discovery and booking platform with real-time availability and reviews.",
      category: "Mobile App",
      tags: ["Mobile Design", "Booking System", "Reviews"],
      image: "/placeholder.svg",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Educational platform design focused on student engagement and intuitive course navigation.",
      category: "Web Platform",
      tags: ["Education", "LMS", "Student Portal"],
      image: "/placeholder.svg",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore my design work showcasing user-centered solutions, creative problem-solving, 
            and attention to detail across various digital platforms.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 shadow-soft"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-medium">{project.status}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full border">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      disabled
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-hero border-0 shadow-soft">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  More Projects Coming Soon!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm actively working on exciting new projects that showcase innovative design solutions. 
                  Stay tuned for updates, or get in touch if you'd like to collaborate!
                </p>
                <Button className="bg-gradient-primary hover:shadow-button transition-all duration-300">
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;