import React from "react";
import educam from "../../assets/edu-cam.png";
import toy from "../../assets/toy-bazar.png";
import chef from "../../assets/chef-recipes.png";

const Project = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-blue-700 ">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={educam} className=" h-64" alt="project" />
          </figure>
          <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Educam</h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Live</div>
              <div className="badge badge-outline">Server</div>
              <div className="badge badge-outline">Client</div>
            </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={toy} className=" h-64"  alt="project" />
          </figure>
          <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Toy Bazar</h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Live</div>
              <div className="badge badge-outline">Server</div>
              <div className="badge badge-outline">Client</div>
            </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={chef} className=" h-64"  alt="project" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
            <h2 className="card-title">Steam Restaurant </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Live</div>
              <div className="badge badge-outline">Server</div>
              <div className="badge badge-outline">Client</div>
            </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
