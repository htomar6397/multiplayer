const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    about: {
      name: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: String,
    },
    skills: [
      {
        name: { type: String, required: true },
        level: { type: Number, min: 1, max: 5 },
      },
    ],
    hobbies: [String],
    passions: [String],
    education: [
      {
        institution: { type: String, required: true },
        degree: String,
        field: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    experience: [
      {
        company: { type: String, required: true },
        position: { type: String, required: true },
        description: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    certifications: [
      {
        name: { type: String, required: true },
        issuer: String,
        date: Date,
        url: String,
      },
    ]
    
  }
);

module.exports = mongoose.model("Section", sectionSchema);
