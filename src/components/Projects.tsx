import fundOS from "../assets/fundOS.png";
import doomscroll from "../assets/doomscroll.png";
import magnet from "../assets/magnet.png";
import sweatspectrum from "../assets/sweatspectrum.png";
import gooderreads from "../assets/gooderreads.png";
import dimo from "../assets/dimo.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="project-container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-grid-item-text">
            <h3>DIMO Python SDK (Open Source)</h3>
            <p>
              The DIMO Python Software Development Kit enables builders to
              easily connect directly into the DIMO network, performing queries
              on the existing REST APIs or through GraphQL.
            </p>
            <p>
              Status: <span className="status-tag"> In Development </span>
            </p>
            <p>
              Tech: <span className="tech-tag">Python</span>{" "}
              <span className="tech-tag">Web3</span>{" "}
              <span className="tech-tag">graphQL</span>{" "}
              <span className="tech-tag">requests</span>{" "}
            </p>
            <a
              href="https://github.com/DIMO-Network/dimo-python-sdk"
              target="_blank"
            >
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={dimo} />
          </div>
          <div className="project-grid-item-text">
            <h3>fundOS</h3>
            <p>
              For my first venture into the world of building Ethereum smart
              contracts with Solidity, I developed a decentralized app (dApp)
              for a kickstarter-like crowdfunding website that actually posts
              projects to the blockchain.
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
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={fundOS} />
          </div>
          <div className="project-grid-item-text">
            <h3>Doomscroll</h3>
            <p>
              We all need more good news. That's why I'm building doomscroll, an
              app that scrapes the web to build custom feeds of some of the
              worst nightmare scenarios that might lead to the impending doom of
              planet Earth.
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
            <a
              href="https://github.com/barrettk8090/doomscroll"
              target="_blank"
            >
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={doomscroll} />
          </div>
          <div className="project-grid-item-text">
            <h3>Magnet</h3>
            <p>
              A place for creatives and small businesses to connect and help one
              another. An exploration into responsive frontend development, I
              channeled my creativity and created the foudation for a future app
              I'd like to build.
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
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={magnet} />
          </div>
          <div className="project-grid-item-text">
            <h3>GooderReads</h3>
            <p>
              A CLI tool for tracking books you've read, want to read, or are
              currently reading. Get interesting stats on your shelf such as the
              number of total pages you've read or get the completion percentage
              of the book you're reading. For those who want GoodReads without
              connecting to the internet!
            </p>
            <p>
              Status: <span className="status-tag"> Completed </span>
            </p>
            <a
              href="https://github.com/barrettk8090/book-tracker"
              target="_blank"
            >
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={gooderreads} />
          </div>
          <div className="project-grid-item-text">
            <h3>SweatSpectrum</h3>
            <p>
              Built in collaboration with a former classmate, SweatSpectrum
              allows you to track your workout progress and visually understand
              your gains with graphs. Focused on data architecture and building
              REST APIs in Python.
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
              View on Github ↗
            </a>
          </div>
          <div className="project-grid-item-image">
            <img src={sweatspectrum} />
          </div>
        </div>
      </div>
    </>
  );
}
