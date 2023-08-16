import React, { useState } from "react";
import Item from "./Item";
import  "./Networking.css"

const Networking = () => {
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
        <span className="navbar-brand mb-0 m-auto h1 text-center">
          NETWORKING
        </span>
      </nav>
      <br />
      <div className="container">
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("cisco")}
            >
              CISCO
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("yeaster")}
            >
              YEASTER
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("fanvil")}
            >
              FANVIL
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("yealink")}
            >
              YEALINK
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
      <div className="container"> <br/>
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("switch")}
            >
              SWITCHES
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("router")}
            >
             ROUTER
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("hub")}
            >
              HUB
            </button>
          </li>
          <li className="nav-item">
            <button
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("circuit")}
            >
              CIRCUIT TESTERS
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
            const { id, name, image, price,description,} = elem;

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
                          <button type="button" className="btn btn-success p-1">
                            Details
                          </button>
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

export default Networking;
