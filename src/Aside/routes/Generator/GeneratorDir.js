//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fs from "fs";
import Item from "../../../components/Item";
import { openGenerator } from "../../../redux/aside";
import ErrorLog from "../../../components/ErrorLog";
import basename from "../../../utils/basename";
import { GiInvertedDice3 } from "react-icons/gi";

/**
 * @param {{ aside: {dir: string}; openGenerator: (fullDir: string)=> void; }} props
 */
const Dir = (props) => {
  const { aside, openGenerator } = props;
  const [dirList, setDirList] = useState([]);
  useEffect(() => {
    fs.readdir(aside.dir, (err, data) => {
      if (err) ErrorLog(err);
      else setDirList(data);
    });
  }, []);
  return (
    <div>
      <h2>Generators</h2>
      {dirList.map(basename).map((item, idx) => (
        <Item
          key={idx}
          name={item}
          icon={<GiInvertedDice3 />}
          onClick={() => openGenerator(`${item}.json`)}
        />
      ))}
    </div>
  );
};

/**
 * @param {{ aside: {dir: string} }} state
 */
const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {string} fullDir
   */
  openGenerator: (fullDir) => dispatch(openGenerator(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
