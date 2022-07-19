import React from "react";
import Project from "./Project";

import stpeterImg from "../../Images/Stpeter.png"
import what2banImg from "../../Images/What2ban.png"
import RecurringImg from "../../Images/RecurringTodoList.png"

const Projects = () => {
  return (
    <>
     <Project title="St Peter" img ={stpeterImg}/>
     <Project title="What 2 Ban" img ={what2banImg}/>
     <Project title="Recurring Todo List" img ={RecurringImg}/>
    </>
  );
};

export default Projects;
