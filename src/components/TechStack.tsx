import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";

export default function TechStack() {
  // Dict for current tech stack knowledge for easy additions
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
  // Dict for teach I'm currently learning for easy swaps into current stack
  const learningDict: { [key: string]: string } = {
    Go: "TBD",
    Docker: "TBD",
    Kubernetes: "TBD",
    Solidity: "TBD",
    TypeScript: "TBD",
  };
  // Dict for storing other apps/services I'm familiar with
  const experienceDict: { [key: string]: string } = {
    Figma: "",
    Shopify: "",
    WordPress: "",
    Contentful: "",
    JIRA: "",
    Linear: "",
  };

  return (
    <>
      <div className="tech-container">
        <h2>Tech Stack</h2>

        <h4>Current Tech</h4>
        <div>
          {Object.keys(techDict).map((key) => (
            <div className="tech-box" key={key}>
              <img
                className="tech-img"
                src={techDict[key]}
                alt={key + " icon"}
              />
              <p>{key}</p>
            </div>
          ))}
        </div>

        <h4>Currently Learning</h4>
        <div>
          {Object.keys(learningDict).map((key) => (
            <div className="tech-box" key={key}>
              <img
                className="tech-img"
                src={learningDict[key]}
                alt={key + " icon"}
              />
              <p>{key}</p>
            </div>
          ))}
        </div>

        <h4>Experience With</h4>
        <div>
          {Object.keys(experienceDict).map((key) => (
            <div className="tech-box" key={key}>
              <img
                className="tech-img"
                src={experienceDict[key]}
                alt={key + " icon"}
              />
              <p>{key}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
