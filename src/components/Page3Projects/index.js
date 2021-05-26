import { Pane, Text, Heading } from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import ProjectCard from "./ProjectCard";
import Proj1Icon from "../../assets/proj1-white.svg";
import Proj2Icon from "../../assets/proj2-white.svg";
import Proj3Icon from "../../assets/proj3-white.svg";
import Proj4Icon from "../../assets/proj4-white.svg";
import Proj5Icon from "../../assets/proj5-white.svg";

const Page3Projects = () => {
  const { width } = useWindowDimensions();
  const getHeight = (w) => {
    if (w > 768) return "750px";
    else if (w > 420) return "120vw";
    else return "180vw";
  };
  return (
    <Pane
      width="100vw"
      padding={width > 768 ? 64 : 16}
      backgroundColor="#e86f52"
    >
      <Pane
        width={width > 768 ? "50%" : "100%"}
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Pane
          display="grid"
          gridTemplateColumns="50% auto"
          gridTemplateRows="33.3% auto 33.3%"
          width={width > 768 ? "500px" : "90vw"}
          height={getHeight(width)}
        >
          <Pane display="flex" alignItems="center">
            <Heading
              size={900}
              color="white"
              fontSize={width > 768 ? "3em" : "2em"}
            >
              Projects
            </Heading>
          </Pane>
          <Pane backgroundColor="#274653">
            <ProjectCard
              title="Trifinger"
              desc="a sentence or two to describe the project entirely and/or my role in the project"
              footnotes="Arduino, C, Inverse Kinematics"
              icon={Proj1Icon}
            />
          </Pane>
          <Pane backgroundColor="#eac36b">
            <ProjectCard
              title="AssaultMIP"
              desc="a sentence or two to describe the project entirely and/or my role in the project"
              footnotes="Solidworks, Arduino, C, Bluetooth, MATLAB"
              icon={Proj2Icon}
            />
          </Pane>
          <Pane backgroundColor="#2b9d8e">
            <ProjectCard
              title="QRnTeam"
              desc="a sentence or two to describe the project entirely and/or my role in the project"
              footnotes="Jetson Nano, ROS, Python, OpenCV, ArUco Marker"
              icon={Proj3Icon}
            />
          </Pane>
          <Pane backgroundColor="#f4a262">
            <ProjectCard
              title="TeamJack"
              desc="a sentence or two to describe the project entirely and/or my role in the project"
              footnotes="Autodesk Inventor, 3D Printer, Laser Cutter"
              icon={Proj4Icon}
            />
          </Pane>
          <Pane backgroundColor="#242424">
            <ProjectCard
              title="Triton-AI"
              desc="a sentence or two to describe the project entirely and/or my role in the project"
              footnotes="Solidworks, Python, Machine Learning, OpenCV"
              icon={Proj5Icon}
            />
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Page3Projects;
