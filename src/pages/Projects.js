import React from 'react';
import "./project.css";
import Footer from './Footer';
import { FaReact } from "react-icons/fa";
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from "./Github";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";

import {
  SiHtml5,
  SiTailwindcss,
  // SiMaterialui,
  SiExpress,
  SiReactrouter,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiApifox,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

const Projects = () => {

  
      


  return (

    <>
     <h1 className="project-heading" style={{ textAlign: 'center' }}>
  Professional <strong style={{ color: 'purple' }}>Skillset </strong>
</h1>



<Techstack/>
<h1 className="project-heading" style={{ textAlign: 'center', color: 'purple' }}>
  <strong style={{ color: 'purple' }}>Tool</strong> I Use
</h1>


       
<Toolstack/>
<h1 className="project-heading" style={{ textAlign: 'center' }}>
  Days <strong style={{ color: 'purple' }}>I Code </strong>
</h1>
<Github/>


      {/* </div> */}
      <div className='work-container'>

        <div className="section">
          <h1 style={{ textAlign: 'center', fontWeight: 800 }} className="a2">
            Projects
          </h1>
          <div className="allProjects">
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/c3C6FvF/Screenshot-2023-11-17-17-25-59.png"
                      alt="Study Notion"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Study Notion</h2>
                  <p>
                    StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content.
                    StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.


                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    <FaReact />
                    <SiReactrouter/>
                    <SiTailwindcss />
                    {/* <SiMaterialui /> */}
                  </div>

                  <div>
  <a
    href="https://study-notion-2.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/StudyNotionMERN"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>

                  
                </div>
              </div>
            </div>


            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/0KCTSNK/Screenshot-2023-11-17-17-35-54.png"
                      alt="Sight Stream"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Sight Stream App</h2>

                  <p>I've developed a comprehensive video calling chat app that seamlessly integrates features such as real-time messaging, high-quality video calls, and screen sharing. With a user-friendly interface and robust functionality, users can engage in dynamic conversations, making it a versatile platform for both personal and professional communication. Experience a smooth and immersive communication experience with our app's innovative features and reliable performance.                  </p>
                  <div>
                  <SiHtml5 />

                    <DiCss3 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                    <SiReactrouter/>
                    <SiReact/>
                    <SiApifox/>
                  </div>

                  <div>
  <a
                      href='https://sightstream.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/StudyNotionMERN"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>

            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/0KCTSNK/Screenshot-2023-11-17-17-35-54.png"
                      alt="Modern-Weather-App"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Modern Weather App</h2>
                  <p>Developed a weather application by integrating an open API, showcasing real-time humidity data and a comprehensive 10-day weather forecast.
                    Created a distinctive visual representation of weather data by integrating color variations while ensuring accurate data integration.
                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                  </div>
                  <div>
  <a
                      href='https://modern-weather-app.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/Modern_weather_app"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>


            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                {/* <div className="project_videocontainer"> */}
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/fF8pMXn/Screenshot-2024-01-10-21-58-43.png"
                      alt="organic store"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Vidyarthi Khata</h2>
                  <p>
                    Developed a web application enabling users to efficiently monitor and track their expenses. Implemented intuitive features for easy expense management, providing users with a seamless platform to oversee and analyze their financial activities in real-time.
                    Empowering financial control with a comprehensive expense monitoring web application.


                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                  </div>
                  <div>
  <a
                      href="https://vidyarthi-khata.vercel.app/"
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/vidyarthi-khata"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>

            {/* <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>DropBox Clone -Backend</h2>
                  <p>
                    Backend API for a google drive like app built using NodeJS,
                    Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                    operations for users, files and folders.
                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href="https://drive-system.herokuapp.com/user/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        URL for the API
                      </span>
                    </a>
                    <a
                      href="https://github.com/imbickydutta/file-system-backend"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/3CGCfSK/Screenshot-2024-01-10-21-45-27.png"
                      alt="organic store"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Organic Store</h2>
                  <p>

                  </p>
                  <div>
                  <SiHtml5 />
                    <DiCss3 />
                    <SiTailwindcss />
                 <SiReact/>
                 <SiReactrouter/>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                     </div>
                     <div>
  <a
                      href='https://sightstream.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/test-1"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                      alt="PulsePlus-Clone"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>PulsePlus Clone</h2>
                  <p>
                    PulsePlus is an E-commerce web application for online Buying
                    Medicines and Consult to Doctor and Book a near Testlab.
                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                  </div>
                  <div>
  <a
                      href="https://pulseplus.vercel.app/"
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <BsGithub className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/pulseplus"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        < CgWebsite className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
<Footer/>
    </>

  );
}


export default Projects;
