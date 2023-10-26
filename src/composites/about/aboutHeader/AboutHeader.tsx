import React from "react";
import images from "../../../assets/images/imageData/ImageData";
import { Link } from "react-router-dom";
import navbar from "./HeaderData";
function AboutHeader() {
  return (
    <div className="container max-w-7xl mx-auto ">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={images.logo}
            alt="website-logo"
            className="h-[50px] bg-purple-500"
          />
        </div>
        <div>
          <ul>
            <ul className="flex gap-4">
              {navbar.map((link, index) => (
                <li key={index} className="">
                  <Link to={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
