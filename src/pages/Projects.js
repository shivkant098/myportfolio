import React from 'react';
import "./project.css";
import { FaReact } from "react-icons/fa";
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
      <div class="skill-section">
        <h1 class="heading">skills</h1>
        <div class="skills-container">
          <div class="skill-card">
            <img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" class="skill-img" alt=""/>
              <div class="skill-level">98%</div>
              <h1 class="skill-name">HTML</h1>
              <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          </div>
          <div class="skills-container">
          <div class="skill-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-uWDsU66uequfmgmpsZZ6P8Bk3NNIyOJcTg1tpFnMg&s" class="skill-img" alt=""/>
              <div class="skill-level">98%</div>
              <h1 class="skill-name">CSS</h1>
              <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          </div>
          <div class="skills-container">
          <div class="skill-card">
            <img src="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-thumbnail.png"alt="js_logo"/>
              <div class="skill-level">88%</div>
              <h1 class="skill-name">Javascript</h1>
              <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          </div>
          <div class="skills-container">
          <div class="skill-card">
            <img src='https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' alt='logo'/>
              <div class="skill-level">90%</div>
              <h1 class="skill-name">ReactJs</h1>
              <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          </div>
          <div class="skills-container">
          <div class="skill-card">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXXptBqOar_BEgi-MqyLYrsfaoVlXfpFzPqAR62UeGg&s' alt='logo'/>
              <div class="skill-level">78%</div>
              <h1 class="skill-name">NodeJS</h1>
              <p class="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
          </div>
          </div>
          hi

        </div>
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
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/StudyNotionMERN"
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
                      <span type="button" className="btns onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="#as"
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
                      <span type="button" className="btns onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/Modern_weather_app"
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
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/vidyarthi-khata"
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
                      href="#a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/test-1"
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
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/pulseplus"
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
            </div>
          </div>
        </div>

      </div>

    </>

  );
}


export default Projects;
