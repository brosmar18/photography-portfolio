import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__text">
        <h2>Latest Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          fermentum augue, sit amet convallis augue. Integer eu iaculis sem.
        </p>
      </div>
      <div className="projects__grid">
        <div className="box-1">Box 1</div>
        <div className="box-2">Box 2</div>
        <div className="box-3">Box 3</div>
        <div className="box-4">Box 4</div>
        <div className="box-5">Box 5</div>
        <div className="box-6">Box 6</div>
        <div className="box-7">Box 7</div>
      </div>
    </div>
  );
};

export default Projects;
