import resume from "../assets/Barrett_Kowalsky_Resume.pdf";

export default function Hero() {
  return (
    <div id="home" className="hero-container">
      <h1>Barrett Kowalsky</h1>
      <h2>Software Engineer</h2>
      <h3>Building some stuff ✨</h3>
      <div className="hero-btn-container">
        <a href="mailto:barrettkowalsky@gmail.com">
          <button className="hero-btn">barrettkowalsky@gmail.com ↗</button>
        </a>
        <a href={resume} target="_blank">
          <button className="hero-btn">Resume ↓</button>
        </a>
      </div>
    </div>
  );
}
