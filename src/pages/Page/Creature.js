//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";

/**
 * @param {{ state: any; setState: any; itemDir: any; }} props
 */
const Plot = (props) => {
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
      <TextField
        value={state.name}
        label="Title"
        placeholder=""
        onChange={(e) =>
          setState({
            ...state,
            name: e.target.value,
          })
        }
      />
      <TextField
        value={state.contrast}
        label="Contrast"
        placeholder="This creature is most similar to a dog"
        onChange={(e) =>
          setState({
            ...state,
            contrast: e.target.value,
          })
        }
      />
      <TextField
        value={state.physical}
        label="Physical appearance"
        placeholder="Shape, colour, size etc"
        onChange={(e) =>
          setState({
            ...state,
            physical: e.target.value,
          })
        }
      />
      <TextField
        value={state.habitat}
        label="Habitat"
        placeholder="Where they live ie. geographic distribution"
        onChange={(e) =>
          setState({
            ...state,
            habitat: e.target.value,
          })
        }
      />
      <TextField
        value={state.locomotion}
        label="Locomotion"
        placeholder="How many limbs, can fly (with or without wings)"
        onChange={(e) =>
          setState({
            ...state,
            locomotion: e.target.value,
          })
        }
      />
      <TextField
        value={state.basicNeed}
        label="Basic need"
        placeholder="Requires oxygen, water, food and sleep"
        onChange={(e) =>
          setState({
            ...state,
            basicNeed: e.target.value,
          })
        }
      />
      <TextField
        value={state.nutrition}
        label="Contrast"
        placeholder="Canivorous, prefers to eat rat"
        onChange={(e) =>
          setState({
            ...state,
            nutrition: e.target.value,
          })
        }
      />
      <TextField
        value={state.interaction}
        label="Interacts"
        placeholder="How they communicate with their environment ie. senses like sight and sound, camouflage, mimicry"
        onChange={(e) =>
          setState({
            ...state,
            interaction: e.target.value,
          })
        }
      />
      <TextField
        value={state.growth}
        label="Growth and development"
        placeholder="Rate of growh, maturity, developemental milestone"
        onChange={(e) =>
          setState({
            ...state,
            growth: e.target.value,
          })
        }
      />
      <TextField
        value={state.excretion}
        label="Excretion"
        placeholder="Types and frequency e.g. Faeces, sweat, carbon dioxide, urine, molting, shed fur"
        onChange={(e) =>
          setState({
            ...state,
            excretion: e.target.value,
          })
        }
      />
      <TextField
        value={state.reproduction}
        label="Reproduction"
        placeholder="Genders, types of mating, offsprings, internal or external fertilisation), infant care(e.g. lactation)"
        onChange={(e) =>
          setState({
            ...state,
            reproduction: e.target.value,
          })
        }
      />
      <TextField
        value={state.culture}
        label="Cultural significance"
        placeholder="How the creature are viewed in the society, dispicted in literature, films or even flags"
        onChange={(e) =>
          setState({
            ...state,
            culture: e.target.value,
          })
        }
      />
      <TextField
        value={state.death}
        label="Death"
        placeholder="Average life span, weakness and strengths, and predators"
        onChange={(e) =>
          setState({
            ...state,
            death: e.target.value,
          })
        }
      />
      <TextField
        value={state.more}
        label="More"
        placeholder="Any additional information"
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

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
