const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience", 
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1.7, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png", // Often associated with visibility/optimization
    title: "Performance Optimization",
    desc: "Delivering high-quality, scalable code that ensures lightning-fast load times and seamless user experience (UX).",
  },
  {
    imgPath: "/images/chat.png", // Associated with clear dialogue
    title: "End-to-End Clarity",
    desc: "Providing reliable, transparent communication from concept planning to final deployment and maintenance.",
  },
  {
    imgPath: "/images/time.png", // Associated with efficiency/delivery
    title: "Agile & Predictable Delivery",
    desc: "Committing to modern Agile workflows for timely feature releases, rigorous testing, and on-schedule project completion.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React JS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/Docker.glb",
    scale: 44,
    rotation: [0, 0, 0],
  },
  {
    name: "Spring Boot",
    modelPath: "/models/Springboot-logo.glb",
    scale: 0.3,
    rotation: [1.2, 2.3, 0.],
  },
  {
    name: "Kubernetes",
    modelPath: "/models/Kubernetes.glb",
    scale: 44,
    rotation: [0, -0.2, 2],
  },
  {
    name: "AWS",
    modelPath: "/models/aws.glb",
    scale: 0.3,
    rotation: [0.2, 0.6, 0],
  },
];

const expCards = [
  {
    review:
      "Supraj was a key Full Stack contributor, providing both creativity and deep technical expertise. While his work significantly improved frontend performance and user experience, he was equally instrumental in implementing secure, scalable APIs and optimizing database interactions. His full-stack skill set was invaluable in delivering reliable and high-speed results.",
    imgPath: "/images/tcs-image.png",
    logoPath: "/images/tcs.png",
    title: "Full Stack Developer",
    date: "September 2024 - Present",
    responsibilities: [
      "Boosted request throughput by 40% across high-volume REST API traffic by designing scalable Spring Boot Microservices within a Kubernetes cluster, utilizing Eureka for service discovery and OpenFeign load balancing.",
      "Led the adoption of a self-hosted observability stack (Prometheus, Grafana, Loki, OpenTelemetry), delivering 60% faster issue diagnosis and saving $6K annually in commercial monitoring costs.",
      "Eliminated service restarts and deployment downtime across Dev/QA/Prod by managing centralized runtime configuration via Spring Cloud Config & Bus, enabling live config refresh without redeployment.",
    ],
  },
  {
    review:
      "Supraj's contributions to Docker's Java backend were outstanding. He tackled complex architectural challenges with a robust problem-solving mindset, proving invaluable in delivering high-performance services.",
    imgPath: "/images/tcs-image.png",
    logoPath: "/images/tcs.png",
    title: " Java Backend Developer",
    date: "April 2024 - September 2024",
    responsibilities: [
      "Engineered 5+ Spring Boot microservices with JPA and secure REST APIs, resulting in a 30% reduction in service response time.",
      "Secured 100% of API endpoints via Spring Security and implemented Docker for deployment, cutting environment setup time by 50%.",
      "Acquired foundational knowledge of AWS services (e.g., EC2, S3, RDS) relevant to cloud deployment and infrastructure management.",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Karthik Ganiga",
    mentions: "@karthikganiga",
    review:
      "Working with Supraj on our Spring Boot application was an incredible experience. He have a deep understanding of backend development, microservices, and API integration. The way he optimized our system performance and streamlined data handling was truly impressive. His professionalism and dedication made the entire development process smooth and efficient.",
    imgPath: "/images/karthik.jpg",
  },
  {
    name: "Dhananjay Patil",
    mentions: "@dhananjay",
    review:
      "Supraj played a key role in building our enterprise-level application using Spring Boot. His ability to design scalable architecture and ensure clean, maintainable code helped our project succeed ahead of schedule. Always proactive and detail-oriented, he consistently delivered high-quality work and innovative solutions.",
    imgPath: "/images/dhananjay.jpg",
  },
  {
    name: "Darshan Babaleshwar",
    mentions: "@darshan",
    review:
      "Collaborating with Supraj was an absolute pleasure. He is not just a skilled Spring Boot developer but also a great problem-solver. His expertise in RESTful APIs, database management, and integration testing brought tremendous value to our team. I would highly recommend him for any backend or full-stack development role.",
    imgPath: "/images/darshan.jpg",
  },
  {
    name: "Swastik Patil",
    mentions: "@swastik",
    review:
      "It was a delight working with Supraj. He developed a robust and well-structured Spring Boot application that exceeded our expectations. His attention to detail, testing discipline, and commitment to performance optimization were second to none. I’d gladly collaborate with him again on future projects!",
    imgPath: "/images/swastik.jpg",
  },
  {
    name: "Bharathi Mahesh",
    mentions: "@bharathimahesh",
    review:
      "Supraj has an exceptional talent for transforming complex business requirements into efficient, production-ready Spring Boot solutions. His strong grasp of Java, AWS cloud services, Docker containerization, and deployment pipelines made a huge difference in our project delivery. He also demonstrated impressive versatility by integrating frontend components using Next.js, ensuring a smooth end-to-end development flow. Always dependable and professional — a true asset to any development team.",
    imgPath: "/images/bharathi.jpg",
  },
  {
    name: "Manjunath GM",
    mentions: "@manjunath",
    review:
      "Supraj is a disciplined and solution-oriented professional with exceptional problem-solving and communication skills. His ability to handle clients with clarity and confidence made every collaboration smooth and productive. Truly a pleasure to work with!",
    imgPath: "/images/manjunath.jpg",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/suprajsv/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};