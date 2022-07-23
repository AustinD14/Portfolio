import React from "react";
import Project from "./Project";

import stpeterImg from "../../Images/Stpeter.png";
import what2banImg from "../../Images/What2ban.png";
import RecurringImg from "../../Images/RecurringTodoList.png";
import _3dfilesystem from "../../Images/3dfilesystem.png";
import LAMP from "../../Images/LAMP.png";
import Mindhive from "../../Images/mindhive2.png";
import Portfolio from "../../Images/Portfolio.png";

const Projects = () => {
  return (
    <>
      <Project
        title="Portfolio"
        img={Portfolio}
        desc="This portfolio web app made with React. Made to be User friendly and responsive for all screen sizes. Makes use of MaterialUI for design and firebase for hosting."
        website="https://portfolio-e84e2.web.app/"
        code="https://github.com/AustinD14/Portfolio"
        stack={["React", "MaterialUI", "Firebase"]}
      />
      <Project
        title="St Peter's Hospice Care"
        img={stpeterImg}
        desc="Hospice agency website created using React and Tailwind CSS. Multiple pages developed using React Router and utilizing React Components for a more cohesive feel and easy updates. Responsive Design for all devices and Creative Animations with no sacrifice in performance. Hosted through firebase and utilizing Google Forms for ease of use and data collection."
        website="https://st-peter-website.web.app/"
        code="https://github.com/AustinD14/St-Peter-Website"
        stack={["React", "TailwindCSS", "Firebase"]}
      />
      <Project
        title="What to Ban"
        img={what2banImg}
        desc="React web app that fetches data of players of popular video game Dota 2. Utilizes REST API to fetch data of players from valve and display them using React hooks."
        website="https://what2ban.web.app/"
        code="https://github.com/AustinD14/what2ban"
        stack={["React", "REST", "Firebase", "OpenDota API", "Bootstrap"]}
      />
      <Project
        title="Recurring Todo List"
        img={RecurringImg}
        desc="Todo list app for recurring tasks. A responsive web app that works specially well with mobile phones created using ReactJS and Firebase. Utilizes firebase's firestore database and realtime storage as well as google authorization."
        website="https://recurring-todo-s.web.app/sign-in"
        code="https://github.com/AustinD14/recurring-todo-s"
        stack={["React", "Firestore", "Firebase"]}
      />

      <Project
        title="3D file system in Unity"
        img={_3dfilesystem}
        desc="3d file system using a concept derived from a fictional 3D “Unix” type operating system file manager featured in the Jurassic Park movie series. Created using Unity and C#, the project features intuitive UI, smooth camera movement, while being simple and lightweight."
        code="https://github.com/cshadd/gui-3d-file-system-navigation-unity"
        stack={["C#", "Unity", "OS"]}
      />
      <Project
        title="Kraken Student Profile"
        img={LAMP}
        desc="University group project web app created using LAMP stack. Hosted in a virtualbox, this app lets student create profile for professors to see. This project also made us work in a group consisting of 4 developers and one devops while using Agile/Scrum methodology."
        code="https://github.com/AustinD14/Kraken-Student-Profile"
        stack={["Linux", "Apache", "PHP", "MySQL", "Scrum/Agile"]}
      />
      <Project
        title="MentorBoard"
        img={Mindhive}
        desc="University group project web app created using MERN stack. Mentors and students looking for tutoring can find each other through the app. The project also let us practice software development using Agile/Scrum with 1 week sprints and Jira."
        code="https://github.com/AustinD14/mentor-board-team"
        stack={["React", "Express", "Node", "JIRA", "Scrum/Agile"]}
      />
    </>
  );
};

export default Projects;
