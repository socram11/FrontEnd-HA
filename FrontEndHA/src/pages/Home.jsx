import React from "react";
import MovingText from "../components/animations/MovingText";

const Home = () => {
  return (
    <div>
      <div className="mt-5 container">
        <img src="/main-img.jpg" alt="main-img" className="w-100 h-100" />
      </div>
      <div>
        <div className="row container pt-3">
          <div className="col-4">
            <img src="lemon-tree.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            velit fugiat consequuntur commodi. Necessitatibus laboriosam
            mollitia, odit maiores natus quas obcaecati enim doloribus! Aperiam
            minus quis totam similique corrupti pariatur.
          </div>
        </div>
      </div>
      <div>
        <div className="row container pt-3">
          <div className="col-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            velit fugiat consequuntur commodi. Necessitatibus laboriosam
            mollitia, odit maiores natus quas obcaecati enim doloribus! Aperiam
            minus quis totam similique corrupti pariatur.
          </div>
          <div className="col-8">
            <img src="boniato.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
