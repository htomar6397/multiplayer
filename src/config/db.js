const mongoose = require("mongoose");
const sections = require("../models/Section");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const arr = {
    about: {
      name: "Mayank Tomar",
      title: "Full Stack Developer | MERN Specialist",
      description:
        "Passionate software developer specializing in web development, MERN stack, and innovative API solutions. Eager to leverage technology for impactful solutions.",
      image: "https://your-portfolio-image-url.com/profile.jpg",
    },
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
    hobbies: ["Reading Tech Blogs", "Coding Challenges", "Traveling"],
    passions: ["Open Source Contributions", "AI for Social Impact"],
    education: [
      {
        institution: "IERT Prayagraj",
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering",
        startDate: "2021-07-01",
        endDate: "2025-06-30",
      },
    ],
    experience: [
      {
        company: "GeeksforGeeks (GFG)",
        position: "Freelance Article Writer",
        description:
          "Authored technical content on web development, cybersecurity, and data structures.",
        startDate: "2024-06-01",
        endDate: "2025-01-30",
      },
    ],
    certifications: [
      {
        name: "GATE CSE 2024",
        issuer: "NTA",
        date: "2024-03-15",
        url: "https://official-gate-link.com",
      },
      {
        name: "LeetCode Knight Badge",
        issuer: "LeetCode",
        date: "2024-12-01",
        url: "https://leetcode.com/mayank_tomar",
      },
    ],
  };

    // await sections.insertMany(arr);
//   sections.insertMany()
};

module.exports = connectDB;
