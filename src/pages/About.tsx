import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={profilePhoto} 
                    alt="Timar Tizazu Amha - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Me
              </h1>
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate UI/UX designer who enjoys turning ideas into interactive experiences. 
                Skilled in Figma and creating user-friendly designs that bridge the gap between 
                functionality and aesthetics.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a keen eye for detail and a deep understanding of user psychology, I craft 
                digital experiences that not only look beautiful but also solve real problems. 
                My approach combines creative thinking with data-driven insights to deliver 
                designs that users love.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not designing, you can find me exploring the latest design trends, 
                experimenting with new tools, or collaborating with teams to bring innovative 
                products to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            My Journey
          </h2>
          
          <div className="space-y-12">
            {/* Education */}
            <Card className="shadow-card hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-primary p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">
                      Addis Ababa Science and Technology University
                    </h4>
                    <p className="text-muted-foreground">
                      Pursued my academic foundation with a focus on technology and design principles, 
                      building the theoretical knowledge that supports my practical design work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="shadow-card hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-accent p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                    <h4 className="text-lg font-medium text-accent mb-2">
                      UI/UX Design Journey
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Currently building my portfolio and expanding my expertise in user interface 
                      and user experience design. Open to exciting opportunities and collaborations.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground italic">
                        "I'm actively seeking opportunities to contribute my design skills to 
                        meaningful projects. Please feel free to share your experiences or projects 
                        that I could potentially contribute to."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;