import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Layers, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience"
    },
    {
      icon: Figma,
      title: "Figma",
      description: "Expert in collaborative design, prototyping, and design system creation"
    },
    {
      icon: Layers,
      title: "Wireframing",
      description: "Crafting detailed wireframes and user flows to map out optimal user journeys"
    },
    {
      icon: Code,
      title: "Design Systems",
      description: "Building scalable design systems that maintain consistency across products"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="UI/UX Design Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Timar Tizazu Amha
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
              UI/UX Designer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about turning ideas into interactive experiences. 
              I create user-friendly designs that bridge the gap between functionality and aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-accent rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-gradient-primary rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              My Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized in creating meaningful digital experiences through thoughtful design and user research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 shadow-soft animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero border-0 shadow-card">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and creative collaborations. 
                Let's create something amazing together!
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-button transition-all duration-300"
                >
                  Start a Conversation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
