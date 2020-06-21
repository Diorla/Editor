//@ts-check
import React from "react";
import { connect } from "react-redux";
import BlogNav from "../pages/BlogNav";
import ProjectNav from "../pages/ProjectNav";
import HomeNav from "../pages/HomeNav";

/**
 * @param {{ screen: string; }} props
 */
const SidebarRoutes = (props) => {
  const { screen } = props;
  if (screen === "Blog") return <BlogNav />;
  else if (["Page", "Folder", "Project"].includes(screen))
    return <ProjectNav />;
  else return <HomeNav />;
};

const mapStateToProps = (state) => ({
  screen: state.project.screen,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRoutes);
