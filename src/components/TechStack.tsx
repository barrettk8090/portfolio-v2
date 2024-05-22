import jsIcon from "../assets/javascript.svg";
import tsIcon from "../assets/typescript.svg";
import auth0Icon from "../assets/auth0.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import contentfulIcon from "../assets/contentful.svg";
import cssIcon from "../assets/css3.svg";
import dockerIcon from "../assets/docker.svg";
import figmaIcon from "../assets/figma.svg";
import flaskIcon from "../assets/flask.svg";
import goIcon from "../assets/go.svg";
import hardhatIcon from "../assets/hardhat.svg";
import htmlIcon from "../assets/html5.svg";
import jiraIcon from "../assets/jira.svg";
import kubernetesIcon from "../assets/kubernets.svg";
import linearIcon from "../assets/Linear_idQv1SQmdm_8.svg";
import postgresIcon from "../assets/postgresql.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import shopifyIcon from "../assets/shopify.svg";
import solidityIcon from "../assets/solidity.svg";
import sqlIcon from "../assets/sqla.svg";
import supabaseIcon from "../assets/supabase-logo-icon.svg";
import tailwindIcon from "../assets/tailwind.svg";
import viteIcon from "../assets/vitejs.svg";
import wordpressIconm from "../assets/wordpress.svg";

export default function TechStack() {
  // Dict for current tech stack knowledge for easy additions
  const techDict: { [key: string]: string } = {
    JavaScript: jsIcon,
    TypeScript: tsIcon,
    React: reactIcon,
    Python: pythonIcon,
    Flask: flaskIcon,
    SQLAlchemy: sqlIcon,
    Postgres: postgresIcon,
    Solidity: solidityIcon,
    Hardhat: hardhatIcon,
    Supabase: supabaseIcon,
    Vite: viteIcon,
    HTML: htmlIcon,
    CSS: cssIcon,
    Tailwind: tailwindIcon,
    Bootstrap: bootstrapIcon,
    Auth0: auth0Icon,
  };
  // Dict for teach I'm currently learning for easy swaps into current stack
  const learningDict: { [key: string]: string } = {
    Go: goIcon,
    Docker: dockerIcon,
    Kubernetes: kubernetesIcon,
    Solidity: solidityIcon,
    TypeScript: tsIcon,
  };
  // Dict for storing other apps/services I'm familiar with
  const experienceDict: { [key: string]: string } = {
    Figma: figmaIcon,
    Shopify: shopifyIcon,
    WordPress: wordpressIconm,
    Contentful: contentfulIcon,
    JIRA: jiraIcon,
    Linear: linearIcon,
  };

  return (
    <>
      <div className="tech-container">
        <h2>Tech Stack</h2>

        <h4>Current Tech</h4>
        <div className="tech-spread">
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
        <div className="tech-spread">
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
        <div className="tech-spread">
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
