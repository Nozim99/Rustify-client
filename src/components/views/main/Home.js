import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css"
import Signin from "../extra/Signin";
import Signup from "../extra/Signup";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home_menu_box">
        <div className="home_menu">

          <div>
            <div onClick={() => navigate("/door-lock-raid")} className="home_menu_items home_menu_door">
              <h2> DOOR LOCK RAID </h2>
            </div>
          </div>

          <div>
            <div className="home_menu_items home_menu_calculator">
              <h2> RAID CALCULATOR </h2>
            </div>
          </div>

          <div>
            <div className="home_menu_items home_menu_farming">
              <h2> FARMING </h2>
            </div>
          </div>

        </div>
      </div>
      <Signin />
      {/* <Signup /> */}
    </div>
  );
}
