import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import akash_profile from "../../assets/akash_profile.png";
import profile_akash from "../../assets/profile_akash.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_akash} alt="profile image" />
      <h1>
        <span>I&apos;m Akash Sharma,</span> MERN stack developer based in INDIA.
      </h1>
      <p>
        {" "}
        I am a Full Stack Developer with 2 years of experience at CG Infinity in
        Noida. I create smooth and efficient digital solutions, working closely
        with teams to ensure every project meets and exceeds expectations. I
        consistently deliver high-quality work on time and help improve our
        development processes.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
