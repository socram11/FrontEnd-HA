import React from "react";
import "./AboutThisProyect.css";

const AboutThisProject = () => {
  return (
    <div className="w-100">
      <div className="mt-5 pt-5 text-center w-100">
        <div className="d-flex justify-content-center">
          <img
            src="./teamoffice.webp"
            alt="About This Project"
            className="img-fluid rounded mb-4 shadow"
            style={{ maxWidth: "800px", width: "100%" }}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 m-2 border rounded p-3 info-box">
            <div className="info-default">
              <strong>Duration</strong>
            </div>
            <div className="info-hover">xxx xxx xxx</div>
          </div>
          <div className="col-md-3 m-2 border rounded p-3 info-box">
            <div className="info-default">
              <strong>Technologies</strong>
            </div>
            <div className="info-hover"> xxx xxx xxx</div>
          </div>
          <div className="col-md-3 m-2 border rounded p-3 info-box">
            <div className="info-default">
              <strong>Organization</strong>
            </div>
            <div className="info-hover">xxx xxx xxx</div>
          </div>
        </div>

        <h3 className="mt-5 mb-4">Team</h3>

        <div className="row justify-content-center">
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 1" className="img-fluid rounded mb-2" />
            <p>Federico Petrone</p>
          </div>
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 2" className="img-fluid rounded mb-2" />
            <p>Tomas Felisberto</p>
          </div>
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 3" className="img-fluid rounded mb-2" />
            <p>Wendy Piriz</p>
          </div>
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 4" className="img-fluid rounded mb-2" />
            <p>Marcos Lopez</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 5" className="img-fluid rounded mb-2" />
            <p>Erwin Caballero</p>
          </div>
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="" alt="Miembro 6" className="img-fluid rounded mb-2" />
            <p>Pablo Mendez</p>
          </div>
          <div className="col-md-2 m-2 border rounded p-3">
            <img src="  " alt="Member 7" className="img-fluid rounded mb-2" />
            <p>Tatiana Gonzalez</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThisProject;
