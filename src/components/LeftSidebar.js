import React, { useState } from "react";
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";

const tags = [
  "react",
  "graphql",
  "nodejs",
  "sass",
  "javascript",
  "html",
  "css",
  "webdev",
  "opensource",
  "beginners",
  "python",
  "git",
  "vscode",
  "npm",
  "sql",
  "ubuntu",
  "aws",
];

const LeftSidebar = (props) => {
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            <li>
              <a href="/home">
                <i>
                  <FcHome />
                </i>
                Home
              </a>
            </li>
            <li>
                <a href="mailto:ahmzabruce@gmail.com">
                  <i>
                    <FcBusinessContact />
                  </i>
                  Contact
                </a>
              </li>
        


            
          </ul>
        </nav>

        <div className={more ? "leftBar__social" : "leftBar__social hidden"}>
          <a href="/twitter">
            <i>
              <IoLogoTwitter />
            </i>
          </a>
          <a href="/facebook">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="/github">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="/instagram">
            <i>
              <RiInstagramFill />
            </i>
          </a>
          <a href="/twitch">
            <i>
              <RiTwitchLine />
            </i>
          </a>
        </div>
        <nav className="leftBar__taglist">
          <header>
            <h3>Software key concepts</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((tag, id) => {
              return (
                <li key={id}>
                  <a href="/#">#{tag}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

    
    </>
  );
};

export default LeftSidebar;
