import React from "react";

import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiLaravel,
  DiPython,
  DiCodeigniter,
  DiNodejs,
  DiBootstrap,
  DiWordpress,
  DiPhp,
  DiSass,
  DiMysql,
  DiMongodb,
  DiPostgresql,
  DiJavascript1,
  DiDjango,
  DiDrupal,
  DiJqueryLogo,
  DiGit,
  DiAws,
} from "react-icons/di";

const Skills = () => {
  return (
    <div
      id="skills"
      className="transition ease-in-out w-full max-h-fit md:pt-10 md:h-screen mx-auto bg-[#898F9C]  text-center  "
    >
      <h3 className="text-white text-7xl pt-10 ">Skillset</h3>
      <p className="text-xl">Technologies I use in my development:</p>
      <div className=" max-w-[1020px] md:pl-8 pt-10 mx-auto grid grid-cols-5 gap-4 place-content-around">
        <DiHtml5
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help  hover:text-blue-600"
          title="HTML5"
        />
        <DiCss3
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="CSS3"
        />
        <DiJavascript1
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Javascript"
        />
        <DiReact
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="ReactJS"
        />
        <DiNodejs
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="NodeJS"
        />
        <DiPython
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Python"
        />
        <DiDjango
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Django"
        />
        <DiMysql
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="MySQL"
        />
        <DiMongodb
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="MongoDB"
        />
        <DiPostgresql
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="PostgreSQL"
        />
        <DiPhp
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="PHP"
        />
        <DiDrupal
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Drupal"
        />
        <DiLaravel
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Laravel"
        />
        <DiWordpress
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Wordpress"
        />
        <DiCodeigniter
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Codeigniter"
        />
        <DiSass
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Sass"
        />
        <DiBootstrap
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Bootstrap"
        />
        <DiJqueryLogo
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Jquery"
        />
        <DiGit
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="Git"
        />
        <DiAws
          size={80}
          className="text-white hover:animate-[wobble_1s_ease-in-out] hover:cursor-help hover:text-blue-600"
          title="AWS"
        />
      </div>
    </div>
  );
};

export default Skills;
