import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">
        Welcome to my Auth App!
      </h1>
      <p className="mb-4 text-slate-700">
        This web application is a comprehensive full-stack solution developed
        using the MERN (MongoDB, Express, React, Node.js) stack. Its
        functionality encompasses user authentication features, facilitating
        user sign-up, login, and logout actions, while ensuring access to
        protected routes exclusively for authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        On the front end, the application leverages React and employs React
        Router for seamless client-side routing. Meanwhile, the back end is
        constructed with Node.js and Express, utilizing MongoDB as the
        underlying database to store and manage data. The implementation of user
        authentication is accomplished through the integration of JSON Web
        Tokens (JWT).
      </p>
      <p className="mb-4 text-slate-700">
        Designed as a foundational resource, this application serves as an ideal
        starting point for constructing full-stack web applications with
        authentication, emphasizing the MERN stack. Whether you're a novice or
        an experienced developer, feel free to utilize it as a template for
        initiating and streamlining your own projects!
      </p>
    </div>
  );
}
