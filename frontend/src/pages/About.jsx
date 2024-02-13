import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        <strong>About Me - The Developer of this project</strong>
      </h1>
      <img
        src="profile.jpeg" // Replace "your-photo-url.jpg" with the actual URL of your photo
        alt="Shwetas Dhake's Photo"
        className="rounded-md mb-4"
        style={{ width: "200px", height: "200px" }} // Adjust the size as needed
      />
      <p className="mb-4 text-slate-700">
        My name is <strong>Shwetas Dhake</strong>, and I am a 3rd-year Computer
        Engineering student in my 6th semester. I am writing to express my
        interest in any
        <strong> Full Stack Developer Intern</strong> position.
      </p>
      <p className="mb-4 text-slate-700">
        With 6 months as a MERN stack developer, I excel in{" "}
        <strong>
          ReactJS, NodeJS, MongoDB, and DevOps (Docker, Kubernetes)
        </strong>
        . I'm adept at designing, developing, debugging, and deploying
        responsive web and mobile applications, aiming to enhance user
        experiences. My proficiency spans frontend and backend technologies,
        ensuring a comprehensive foundation for full-stack development.
      </p>
      <p className="mb-4 text-slate-700">
        I am enthusiastic about the opportunity to contribute to your team and
        learn from the dynamic environment at{" "}
        <strong>Affworld Technologies</strong>. I am available at your earliest
        convenience for an interview. Thank you for considering my application.
        I look forward to the possibility of discussing how my skills align with
        your requirements.
      </p>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/shwetas-dhake/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mr-4"
        >
          <strong>LinkedIn</strong>
        </a>
        <a
          href="https://github.com/shwetd19"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mr-4"
        >
          <strong>Github</strong>
        </a>
        <a
          href="https://drive.google.com/file/d/1jldWv783htdfUuqMDBFlF3g1fNMTcc2e/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          <strong>My Resume</strong>
        </a>
      </div>
    </div>
  );
}
