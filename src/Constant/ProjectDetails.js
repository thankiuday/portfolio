// projects.js
// import image from '../assets/projects/project-1.png'
const projects = [
    {
      title: "Real-Time Chat Application",
      image: "../src/assets/projects/project-1.png", // Replace with the actual path or URL of the image
      description: "A chat application that allows real-time communication between users. It features user authentication, and live messaging using Socket.io for seamless interactions.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Bootstrap"]
    },
    {
      title: "Weather App",
      image: "../src/assets/projects/project-2.png", // Replace with the actual path or URL of the image
      description: "A web application that provides weather updates based on user location or city input. It fetches real-time data from a weather API, displaying temperature, humidity, and weather conditions in a user-friendly interface.",
      technologies: ["React", "JavaScript", "CSS", "HTML5"]
    },
    {
      title: "Employee Management System",
      image: "../src/assets/projects/project-3.png", // Replace with the actual path or URL of the image
      description: "An employee management system that performs CRUD operations. It features employee data , updating, and deletion. The system includes login authentication and an intuitive dashboard for managing employee records.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"]
    },
    {
      title: "Search App",
      image: "../src/assets/projects/project-4.png", // Replace with the actual path or URL of the image
      description: "A search application that integrates results from YouTube, blogs, articles, and academic papers. It filters and ranks search results based on relevance, views, and likes to ensure users get the most pertinent content.",
      technologies: ["React", "JavaScript", "CSS", "API Integration", "HTML5"]
    },
    {
      title: "Recipe App",
      image: "../src/assets/projects/project-5.png", // Replace with the actual path or URL of the image
      description: "A recipe application that allows users to search for recipes,  and view detailed cooking instructions. This app uses an API to fetch a vast collection of recipes, making meal planning easy and enjoyable for users.",
      technologies: ["React", "Node.js", "API Integration", "CSS", "HTML5"]
    }
  ];
  
  // Export the projects array to use it in other parts of your application
  export default projects;
  