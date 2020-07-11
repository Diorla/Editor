//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { openCompare } from "../../../redux/aside";
import klaw from "klaw";
import ErrorLog from "../../../components/ErrorLog";
import { FilterInput } from "../../../components/Input";
import basename from "../../../utils/basename";
import Item from "../../../components/Item";
import { IoMdGitCompare } from "react-icons/io";

/**
 * @param {{ aside: {dir: string}; openCompare: (payload: {file: string})=> void; }} props
 */
const Dir = (props) => {
  const { aside, openCompare } = props;
  const [dirList, setDirList] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const items = [];
    klaw(aside.dir)
      .on("data", (item) => {
        if (item.path.includes("scrb")) items.push(item.path);
      })
      .on("error", (err) => ErrorLog(err))
      .on("end", () => setDirList(items));
  }, []);
  return (
    <div>
      <h2>Compare</h2>
      <FilterInput value={filter} onChange={(text) => setFilter(text)} />
      {dirList
        .filter((item) =>
          item.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((item) => (
          <Item
            key={item}
            name={basename(item)}
            icon={<IoMdGitCompare />}
            onClick={() =>
              openCompare({
                file: item,
              })
            }
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  openCompare: (fullDir) => dispatch(openCompare(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
