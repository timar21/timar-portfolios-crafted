export const projects = [
  {
    id: 1,
    title: "Ethiopian Recipe Chatbot",
    description:
      "An intelligent chatbot that helps users discover and cook traditional Ethiopian dishes with step-by-step guidance and cultural insights.",
    category: "Mobile App design",
    tags: ["Chatbot Design", "Cultural Heritage", "Interface"],
    image: "/images/Screenshot 2026-01-30 010427.png",
    images: [
      { src: "/images/Screenshot 2026-01-30 010427.png", alt: "Chatbot conversation flow", caption: "Conversation flow" },
      { src: "/images/Screenshot 2026-01-30 010524.png", alt: "Chatbot UI mockup", caption: "UI mockup" },
      { src: "/images/Screenshot 2026-01-30 010605.png", alt: "Recipe steps screen", caption: "Step-by-step guide" },
      { src: "/images/Screenshot 2026-01-30 010652.png", alt: "Ingredients list", caption: "Ingredients" },
      { src: "/images/Screenshot 2026-01-30 010807.png", alt: "Cultural notes", caption: "Cultural insights" },
      { src: "/images/Screenshot 2026-01-30 010901.png", alt: "Mobile chat view", caption: "Mobile chat" },
    ],
    details:
      "A conversational assistant that guides users through traditional Ethiopian recipes, provides ingredient substitutes, and explains cultural context.",
  },
  {
    id: 2,
    title: "Coffee shop landing page",
    description: "Visually appealing landing page for a coffee shop using Figma.",
    category: "Web Design",
    tags: ["Landing Page", "Coffee Shop", "Figma"],
    image: "/images/up1.png",
    images: [
      { src: "/images/up1.png", alt: "Coffee shop landing - hero", caption: "Hero landing" },
      { src: "/images/coffepage2.png", alt: "Coffee shop layout - menu", caption: "Menu layout" },
      { src: "/images/coffepage3.png", alt: "Coffee shop mobile", caption: "Mobile view" },
    ],
    details: "Figma-first landing page concept focused on typography, color and conversion.",
  },
  {
    id: 3,
    title: "Dashboard design",
    description: "User-friendly dashboard design.",
    category: "Dashboard design",
    tags: ["Dashboard Design"],
    image: "/images/dashboard2.png",
    images: [
      { src: "/images/dashboard2.png", alt: "Dashboard overview", caption: "Overview" },
    ],
    details: "A clean dashboard layout with charts, filters and responsive breakpoints.",
  },
  {
    id: 4,
    title: "EcoSync – AI-Driven Smart Home Dashboard",
    description: " A SaaS-style management platform for a sustainable smart home. The project focuses on data visualization, AI-driven recommendations, and clean component-based architecture.",
    category: "web design",
    tags: [ "Prototyping", ],
    image: "/images/ecosync1.png",
    images: [
      { src: "/images/ecosync1.png", alt: "EcoSync smart home dashboard", caption: "Smart home dashboard" },
    ],
    details: "High-fidelity prototype demonstrating product discovery, quick add, and a streamlined checkout experience.",
  },
];

export const getProjectById = (id: number) => projects.find((p) => p.id === id);
