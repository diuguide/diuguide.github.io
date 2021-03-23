import { stackData } from "../JSONdata/projectData";

const Skills = () => {
  return (
    <>
      <div className="skill-container">
        <div className="language-tiles">
          {Object.entries(stackData.stack).map(([key, tile], i) => {
            return <img id="skill-tile" key={i} src={tile} alt="tile"></img>;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
