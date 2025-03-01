import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications, And I am a Proficient Linux user with hands-on experience in system administration I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Express.js, Node.js, DJango, Flask, MySQL, Oracle and MongoDB. And cloud technologies like Dockers, Jenkins, Kubernetes.  My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Jan 2025",
    role: "MERN Stack Developer",
    company: "EY Global Delivery Services | Intern | Remote.",
    description: `Worked on a real time project through MERN Stack Technology,Integrated Express.js and React.js frameworks into the project architecture, allowing efficient data management via MongoDB; optimized loading times to under two seconds per page view based on benchmarking results.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    year: "July 2024 - sep 2024",
    role: "Google Android developer",
    company: "AICTE Eduskills.",
    description: `Worked as an intern at Google Android development (10 weeks) offered by AICTE-Eduskills under Google Developers, Implemented and Developed Android app using kotlin and My SQL Data Base`,
    technologies: ["Kotlin", "mySQL"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication, developed with MERN Technology .",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    url: "https://github.com/deepakpatel45/E-Commerce-Website"
  },
  {
    title: "Personal Contact Form",
    image: project2,
    description:
      "Engineered a fully responsive web application for user data collection utilizing HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/deepakpatel45/Contact-form"
  },
  {
    title: "Online Chat Application",
    image: project4,
    description:
      "A digital platform enabling real-time text-based conversations over the internet, developed with Django for the backend and React for the frontend,",
    technologies: ["React.js","Python","Django","MongoDB"],
    url: "https://github.com/deepakpatel45/Online-Chat-Application"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, developed with React.js and TailwindCSS.",
    technologies: ["React.js", "TailwindCSS", "Bootstrap"],
    url: "https://github.com/deepakpatel45/Deepak-s-Portfolio"
  }
];

export const CONTACT = {
  address: "Hyderabad, Telangana, India 500039 ",
  phoneNo: "+91 6302 134 010 ",
  email: "deepakpatel2004ec@gmail.com",
};
