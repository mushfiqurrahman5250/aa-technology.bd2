import React, { useState } from "react";

import Item from "./Item";
import "./Camera.css";
import { Link } from "react-router-dom";

const Camera = () => {
  const [items, setItems] = useState(Item);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Item.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <span className="navbar-brand mb-0 m-auto h1 text-center">CAMERA</span>
      </nav>
      <br />
      <div className="container">
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lilin")}
            >
              LILIN
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("cantonk")}
            >
              CANTONK
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("axis")}
            >
              AXIS
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dahua")}
            >
              DAHUA
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("samsung")}
            >
              SAMSUNG
            </button>
          </li>

          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Item)}
            >
              All
            </button>
          </li>
        </ul>
      </div>

      {/* --------------------category------------------------- */}
      <div className="container">
        {" "}
        <br />
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("ircamera")}
            >
              IR-CAMERA
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("ipcamera")}
            >
              IP-CAMERA
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("domecamera")}
            >
              DOME-CAMERA
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("ahdcamera")}
            >
              AHD-CAMERA
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Item)}
            >
              All
            </button>
          </li>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, price, description } = elem;

            return (
              <div className="col-sm-4" id={id}>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-5">
                      <img class="img-fluid" src={image} alt={name} />
                    </div>

                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title mb-0">{name}</h5>
                        <p class="card-text">{description}</p>
                        <div class="d-flex justify-content-between">
                          <div class="p-1">Price: {price}</div>
                          <Link to={`/camera/${id}`}>
                            <button
                              type="button"
                              className="btn btn-success p-1"
                            >
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Camera;
