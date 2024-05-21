import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";

export default function TechStack() {
  const techDict: { [key: string]: string } = {
    JavaScript: jsIcon,
    TypeScript: tsIcon,
    React: "TBD",
    Python: "TBD",
    Flask: "TBD",
    SQLAlchemy: "TBD",
    Postgres: "TBD",
    Solidity: "TBD",
    Hardhat: "TBD",
    Supabase: "TBD",
    Vite: "TBD",
    HTML: "TBD",
    CSS: "TBD",
    Tailwind: "TBD",
    Bootstrap: "TBD",
    Auth0: "TBD",
  };

  return (
    <>
      <div className="tech-container">
        <h2>Tech Stack</h2>

        <h4>Current Tech</h4>
        <div>
          {Object.keys(techDict).map((key) => (
            <div className="tech-box" key={key}>
              <img src={techDict[key]} alt={key + " icon"} />
              <p>{key}</p>
            </div>
          ))}
        </div>

        <h4>Currently Learning</h4>
        <div className="tech-box">
          <img src="tbd" />
          <p>TypeScript</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Go</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Solidity</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Docker</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Kubernetes</p>
        </div>
        <h4>Experience With</h4>
        <div className="tech-box">
          <img src="tbd" />
          <p>Figma</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Shopify</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>WordPress</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Contentful</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>JIRA</p>
        </div>
        <div className="tech-box">
          <img src="tbd" />
          <p>Linear</p>
        </div>
      </div>
    </>
  );
}
