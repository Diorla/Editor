//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";
import { SimpleInput, ArrayInput, ObjectInput } from "../../components/Input";

/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const Organisation = (props) => {
  const { state, setState, itemDir } = props;
  const classes = useStyles();
  useEffect(() => {
    saveConfig(state, itemDir);
    return () => {
      console.log("unmounting");
    };
  }, [state]);
  return (
    <main className={classes.content}>
      <SimpleInput
        objectKey="name"
        label="Name"
        placeholder="The name of the organisation"
        setState={setState}
        state={state}
      />
      <SimpleInput
        objectKey="type"
        label="Type"
        placeholder="Military, covert, criminal, governmental, religious"
        state={state}
        setState={setState}
      />
      <SimpleInput
        objectKey="created"
        label="Founded"
        placeholder="The date it was created"
        state={state}
        setState={setState}
      />
      <SimpleInput
        objectKey="history"
        label="History"
        placeholder="The story from when it was created to current day"
        state={state}
        setState={setState}
      />
      <SimpleInput
        objectKey="purpose"
        label="Purpose"
        placeholder="Why was the organisation created"
        state={state}
        setState={setState}
      />
      <SimpleInput
        objectKey="goal"
        label="Goal"
        placeholder="Current target or aims"
        state={state}
        setState={setState}
      />
      <ArrayInput
        label="Founders"
        state={state}
        objectKey="founders"
        setState={setState}
        placeholder="Jhon Deo came up with the idea, while Jaen Doe financed it."
      />
      <SimpleInput
        objectKey="headquarter"
        label="Headquarter"
        placeholder="The primary base of operation"
        state={state}
        setState={setState}
      />
      {state.leaders.map((leader, idx) => (
        <Box className={classes.group} key={idx}>
          <Typography className={classes.header}>Leaders</Typography>
          <TextField
            value={leader.name}
            label="Leaders name"
            placeholder=""
            multiline
            onChange={(e) =>
              setState({
                ...state,
                leaders: [
                  ...state.leaders.slice(0, idx),
                  {
                    ...leader,
                    name: e.target.value,
                  },
                  ...state.leaders.slice(idx + 1),
                ],
              })
            }
          />
          <TextField
            value={leader.role}
            label="Role"
            placeholder="Their position in the ranks"
            multiline
            onChange={(e) =>
              setState({
                ...state,
                leaders: [
                  ...state.leaders.slice(0, idx),
                  {
                    ...leader,
                    role: e.target.value,
                  },
                  ...state.leaders.slice(idx + 1),
                ],
              })
            }
          />
        </Box>
      ))}
      <ObjectInput
        state={state}
        label="Important member"
        setState={setState}
        objectKey="importantMember"
        obj={{ role: "" }}
        mainSubKey="name"
        mainLabel="Name"
        mainPlaceholder="The name of the member"
      />
      {state.notableMember.map((member, idx) => (
        <Box className={classes.group} key={idx}>
          <Typography className={classes.header}>Notable members</Typography>
          <TextField
            value={member.name}
            label="Name"
            placeholder="Members who plays significant role in story."
            multiline
            onChange={(e) =>
              setState({
                ...state,
                notableMember: [
                  ...state.notableMember.slice(0, idx),
                  {
                    ...member,
                    name: e.target.value,
                  },
                  ...state.notableMember.slice(idx + 1),
                ],
              })
            }
          />
          <TextField
            value={member.role}
            label="Role"
            placeholder="The role they play in the story"
            multiline
            onChange={(e) =>
              setState({
                ...state,
                notableMember: [
                  ...state.notableMember.slice(0, idx),
                  {
                    ...member,
                    role: e.target.value,
                  },
                  ...state.notableMember.slice(idx + 1),
                ],
              })
            }
          />
        </Box>
      ))}
      {state.oppositions.map((opposition, idx) => (
        <Box className={classes.group} key={idx}>
          <TextField
            value={opposition.name}
            label="Name"
            placeholder="Rivals or enemies"
            multiline
            onChange={(e) =>
              setState({
                ...state,
                opposition: [
                  ...state.opposition.slice(0, idx),
                  {
                    ...opposition,
                    name: e.target.value,
                  },
                  ...state.opposition.slice(idx + 1),
                ],
              })
            }
          />
          <TextField
            value={opposition.why}
            label="Why"
            placeholder="Competitive spirit, political, religious or intellectual disagreement."
            multiline
            onChange={(e) =>
              setState({
                ...state,
                opposition: [
                  ...state.opposition.slice(0, idx),
                  {
                    ...opposition,
                    why: e.target.value,
                  },
                  ...state.opposition.slice(idx + 1),
                ],
              })
            }
          />
        </Box>
      ))}
      <ArrayInput
        label="Arcs"
        state={state}
        objectKey="arc"
        setState={setState}
        placeholder="Their role in the story"
      />
      <TextField
        value={state.requirement}
        label="Requirement"
        placeholder="Recruitment process, conditions requires to join"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            requirement: e.target.value,
          })
        }
      />
      <TextField
        value={state.promotion}
        label="Promotion"
        placeholder="How to move up the ladder"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            promotion: e.target.value,
          })
        }
      />
      <TextField
        value={state.financing}
        label="Finance"
        placeholder="Source of money or funding"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            financing: e.target.value,
          })
        }
      />
      <TextField
        value={state.more}
        label="More"
        placeholder="Any additional information"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            more: e.target.value,
          })
        }
      />
    </main>
  );
};

/**
 * @param {{ screen: any; }} state
 */
const mapStateToProps = (state) => ({
  screen: state.screen,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Organisation);
