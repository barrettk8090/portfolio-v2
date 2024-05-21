export default function Projects() {
  return (
    <>
      <div className="project-container">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>fundOS</h3>
          <p>
            For my first foray into the world of building Ethereum smart
            contracts with Solidity, I developed a decentralized app (dApp) for
            a kickstarter-like crowdfunding website.
          </p>
          <p>
            Status: <span className="status-tag"> In Development </span>
          </p>
          <p>
            Tech: <span className="tech-tag">Solidity</span>{" "}
            <span className="tech-tag">Hardhat</span>{" "}
            <span className="tech-tag">JavaScript</span>{" "}
            <span className="tech-tag">React</span>{" "}
            <span className="tech-tag">Solidity</span>{" "}
            <span className="tech-tag">Python</span>{" "}
            <span className="tech-tag">Flask</span>{" "}
            <span className="tech-tag">Tailwind</span>{" "}
          </p>
          <a href="https://github.com/barrettk8090/fundOS" target="_blank">
            View on Github
          </a>
        </div>

        <div className="project-card">
          <h3>doomscroll</h3>
          <p>
            We all need more good news. That's why I'm building doomscroll, an
            app that scrapes the web to build custom feeds of some of the worst
            nightmare scenarios that might lead to the impending doom of planet
            Earth.
          </p>
          <p>
            Status: <span className="status-tag"> In Development </span>
          </p>
          <p>
            Tech: <span className="tech-tag">React</span>{" "}
            <span className="tech-tag">JavaScript</span>{" "}
            <span className="tech-tag">Python</span>{" "}
            <span className="tech-tag">BeautifulSoup</span>{" "}
            <span className="tech-tag">Flask</span>{" "}
            <span className="tech-tag">Postgres</span>{" "}
          </p>
          <a href="https://github.com/barrettk8090/doomscroll" target="_blank">
            View on Github
          </a>
        </div>

        <div className="project-card">
          <h3>MagNet</h3>
          <p>
            A place for creatives and small businesses to connect and help one
            another.
          </p>
          <p>
            Status: <span className="status-tag"> Completed </span>
          </p>
          <p>
            Tech: <span className="tech-tag">React</span>{" "}
            <span className="tech-tag">JavaScript</span>{" "}
            <span className="tech-tag">Tailwind</span>{" "}
          </p>
          <a href="https://github.com/barrettk8090/magNet" target="_blank">
            View on Github
          </a>
        </div>

        <div className="project-card">
          <h3>GooderReads</h3>
          <p>Track book progress.</p>
          <p>
            Status: <span className="status-tag"> Completed </span>
          </p>
          <a
            href="https://github.com/barrettk8090/book-tracker"
            target="_blank"
          >
            View on Github
          </a>
        </div>

        <div className="project-card">
          <h3>SweatSpectrum</h3>
          <p>
            Built in collaboration with a former classmate, SweatSpectrum allows
            you to track your workout progress and visually understand your
            gains with graphs.
          </p>
          <p>
            Status: <span className="status-tag"> Completed </span>
          </p>
          <p>
            Tech: <span className="tech-tag">React</span>{" "}
            <span className="tech-tag">JavaScript</span>{" "}
            <span className="tech-tag">Python</span>{" "}
            <span className="tech-tag">Flask</span>{" "}
            <span className="tech-tag">SQLAlchemy</span>{" "}
          </p>
          <a
            href="https://github.com/barrettk8090/Sweat-Spectrum-FullStack-Project"
            target="_blank"
          >
            View on Github
          </a>
        </div>
      </div>
    </>
  );
}
