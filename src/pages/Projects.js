import React from 'react';
import "./project.css";
import Footer from './Footer';
import { FaReact } from "react-icons/fa";
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from "./Github";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
// import ProejctCard from './ProjectCard';
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
  SiTableau,
  SiPython,
  SiAzuredataexplorer,
  SiVisualbasic,
  SiMysql,
  SiGithub,
  SiGooglecolab,
  SiGit,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
//  const {tableau}=window;
const Projects = () => {
//   const ref=useRef(null);

// const initViz=()=>{
//   new tableau.Viz(ref.current);
// }
// useEffect(initViz,[]);

  return (

    <>
      <h1 className="project-heading" style={{ textAlign: 'center' }}>
        Professional <strong style={{ color: 'purple' }}>Skillset </strong>
      </h1>



      <Techstack />
      <h1 className="project-heading" style={{ textAlign: 'center', color: 'purple' }}>
        <strong style={{ color: 'purple' }}>Tool</strong> I Use
      </h1>



      <Toolstack />
      <h1 className="project-heading" style={{ textAlign: 'center' }}>
        Days <strong style={{ color: 'purple' }}>I Code </strong>
      </h1>
      <Github />


      {/* <ProejctCard/> */}
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
                    <SiReactrouter />
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
                        <CgWebsite className="github-icon" />
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
                        <  BsGithub
                          className="demo-icon" />

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
                      src="https://i.ibb.co/wWxfFfg/Screenshot-2024-01-28-00-57-44.png"
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
                    <SiReactrouter />
                    <SiReact />
                    <SiApifox />
                  </div>

                  <div>
                    <a
                      href='https://sightstream.vercel.app/'
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" class="btns1 green">
                        <CgWebsite
                          className="github-icon" />
                        See this Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/shivkant098/sightstream"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* &nbsp;&nbsp;&nbsp; */}
                      <button type="button" class="btns1 green">
                        <  BsGithub
                          className="demo-icon" />

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
                        <CgWebsite
                          className="github-icon" />
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
                        <  BsGithub
                          className="demo-icon" />

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
                        <CgWebsite
                          className="github-icon" />
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
                        <BsGithub
                          className="demo-icon" />

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
                      src="https://i.ibb.co/3CGCfSK/Screenshot-2024-01-10-21-45-27.png"
                      alt="organic store"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Organic Store</h2>
                  <p>
                    Developed a dynamic and user-friendly web application for an organic store, offering a diverse range of products including fresh vegetables, fruits, juices, and handmade crafts. Implemented features such as product categorization, user authentication, and an intuitive shopping cart system, enhancing the overall user experience. Employed modern web technologies to create a seamless and visually appealing platform for users to explore and purchase organic and artisanal items.
                  </p>
                  <div>
                    <SiHtml5 />
                    <DiCss3 />
                    <SiTailwindcss />
                    <SiReact />
                    <SiReactrouter />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href='https://organicstore-two.vercel.app/'
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" class="btns1 green">
                        <CgWebsite
                          className="github-icon" />
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
                        <  BsGithub
                          className="demo-icon" />

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
                    PulsePlus revolutionizes healthcare access through its E-commerce platform, facilitating the seamless purchase of medicines online. Beyond just a pharmaceutical hub, users can consult with healthcare professionals and conveniently book diagnostic tests at nearby laboratories. With a user-friendly interface and robust features, PulsePlus aims to enhance the accessibility and efficiency of healthcare services, bringing the pharmacy, doctor's consultation, and diagnostic testing all under one digital roof.                  </p>
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
                        <CgWebsite
                          className="github-icon" />
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
                        <  BsGithub
                          className="demo-icon" />

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
                      src='https://i.ibb.co/mDw7Fhw/image.png'
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>FinTech Dashboard -Data Analysts</h2>
                  <p>
                    The fintech dashboard built on Tableau offers a comprehensive view of key financial metrics including monthly sales, sales by category, sales by manager, total sales, discounts, monthly returns, and product inventory movements. Additionally, it provides insights into profitability by segment, multiple measures such as profit and shipping modes, allowing stakeholders to make data-driven decisions and optimize business strategies. The interactive nature of the dashboard facilitates in-depth analysis and quick identification of trends, enabling effective management
                    of resources and enhancement of overall performance in the competitive fintech market.</p>
                  <div>
                    <SiTableau />
                    <SiPython />
                    <SiVisualbasic />
                    <SiMysql />
                    <SiGit />
                    <SiGithub />
                    <SiGooglecolab />
                    <SiAzuredataexplorer />
                  </div>
                  <div>
                    <a
                      href='https://prod-apsoutheast-a.online.tableau.com/t/shivkant/views/Dashboard-Fintech/Dashboard1
                      '
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" class="btns1 green">
                        <CgWebsite
                          className="github-icon" />
                        See this Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/golu098/FinTech-Dashboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* &nbsp;&nbsp;&nbsp; */}
                      <button type="button" class="btns1 green">
                        <  BsGithub
                          className="demo-icon" />

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
                      src="https://i.ibb.co/phzrKrW/image.png"
                      alt="HR-HomePage"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Modern HR Dashboard</h2>
                  <p>The HR Dashboard will feature key metrics such as total employee and department counts, monthly income distribution, gender and marital status ratios, and distance from home visualized through charts like pie, bar, and scatter plots. Additionally, educational levels within each department will be represented, offering insights into 
                    workforce demographics and facilitating data-driven decision-making for HR management.
                  </p>
                  <div>
                  <SiTableau />
                    <SiPython />
                    <SiVisualbasic />
                    <SiMysql />
                    <SiGit />
                    <SiGithub />
                    <SiGooglecolab />
                    <SiAzuredataexplorer />
                  </div>
                  <div>
                    <a
                      href='https://prod-apsoutheast-a.online.tableau.com/t/shivkant/views/AdvancedHR/Home_Dashboard'
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" class="btns1 green">
                        <CgWebsite
                          className="github-icon" />
                        See this Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/golu098/Modern-HR-Dashboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* &nbsp;&nbsp;&nbsp; */}
                      <button type="button" class="btns1 green">
                        <  BsGithub
                          className="demo-icon" />

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
      <Footer />
    </>

  );
}


export default Projects;
