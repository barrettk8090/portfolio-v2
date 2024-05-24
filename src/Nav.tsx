import resumeFile from "./assets/Barrett_Kowalsky_Resume.pdf";

const Nav = () => {
  return (
    <ul className="nav-container">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#tech">Tech</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href={resumeFile}>Resume ↓</a>
      </li>
    </ul>
  );
};

export default Nav;
