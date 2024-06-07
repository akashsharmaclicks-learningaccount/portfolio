import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/profile_img.png";
import my_profile from "../../assets/my_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="themepattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={my_profile} alt="profile image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced MERN Stack Developer with over a decade of
              expertise. Throughout my career, I&apos;ve had the privilege of
              working with prestigious organizations, aiding in their success
              and growth.
            </p>
            <p>
              My passion for web application development is evident in my
              extensive experience, and I bring enthusiasm and dedication to
              each project.{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MS SQL</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>AWS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Node RED</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>OOPS</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>Postman</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>DOCKER</p>
              <hr style={{ width: "25%" }} />
            </div>
            <div className="about-skill">
              <p>Testcafe</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
