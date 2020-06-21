//@ts-check
import React from "react";
import useStyles from "./useStyles";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import Accordion from "../../components/Accordion";

/**
 * @param {{ state: object; setState: (arg0: object)=> void; saveConfig: ()=>void; }} props
 */
export default (props) => {
  const { state, setState, saveConfig } = props;
  const classes = useStyles();
  return (
    <Box>
      <Accordion
        header={<Typography className={classes.header}>Basic</Typography>}
      >
        <TextField
          label="Name"
          value={state.name}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              name: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Age"
          value={state.age}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              age: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Gender"
          value={state.gender}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              gender: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Birthday"
          value={state.birthday}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              birthday: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Blood group"
          value={state.bloodGroup}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              bloodGroup: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <Typography className={classes.header}>Place of birth</Typography>
        <TextField
          label="Country"
          value={state.birthCountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              birthCountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Sub country"
          value={state.birthSubCountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              birthSubCountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="City"
          value={state.birthCity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              birthCity: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <Typography className={classes.header}>Residence</Typography>
        <TextField
          label="Country"
          value={state.residentCountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              residentCountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Sub country"
          value={state.residentSubcountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              residentSubcountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="City"
          value={state.residentCity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              residentCity: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Education level"
          value={state.education}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              education: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Occupation"
          value={state.occupation}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              occupation: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Social status"
          value={state.socialStatus}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              socialStatus: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="More"
          value={state.basic}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              basic: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Physical</Typography>}
      >
        <TextField
          label="Height"
          value={state.height}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              height: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Body build"
          value={state.build}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              build: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Skin tone"
          value={state.skinTone}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              skinTone: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Facial features"
          value={state.face}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              face: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Hair"
          value={state.hair}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              hair: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Eyes"
          value={state.eye}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              eye: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Distinguishing features"
          value={state.distinguishingFeatures}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              distinguishingFeatures: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Preferred outfit"
          value={state.preferredOutfit}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              preferredOutfit: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Accessories"
          value={state.accessories}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              accessories: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Grooming"
          value={state.grooming}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              grooming: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Health"
          value={state.health}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              health: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Gait"
          value={state.gait}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              gait: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Posture"
          value={state.posture}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              posture: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Handwriting"
          value={state.handwriting}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              handwriting: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="More"
          value={state.physical}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              physical: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Story</Typography>}
      >
        <TextField
          label="Role"
          value={state.role}
          placeholder="Protagonist, Antagonist, Mentor, Villain, Anti-hero"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              role: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.shortGoal}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              shortGoal: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Long term goal"
          value={state.goal}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              goal: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Motivation"
          value={state.motivation}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              motivation: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <Typography className={classes.header}>Story arc</Typography>
        {state.arcs.map((arc, idx) => (
          <Box key={idx} className={classes.row}>
            <TextField
              fullWidth
              className={classes.row}
              label={`Arc ${idx + 1}`}
              value={arc} //state.arcs[idx]
              placeholder=""
              multiline
              onChange={(e) =>
                setState({
                  ...state,
                  arcs: [
                    ...state.arcs.slice(0, idx),
                    e.target.value,
                    ...state.arcs.slice(idx + 1),
                  ],
                })
              }
              onBlur={saveConfig}
            />
            <Button
              onClick={() =>
                setState({
                  ...state,
                  arcs: [
                    ...state.arcs.slice(0, idx),
                    ...state.arcs.slice(idx + 1),
                  ],
                })
              }
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button
          onClick={() =>
            setState({
              ...state,
              arcs: [...state.arcs, ""],
            })
          }
        >
          Add
        </Button>
        <TextField
          label="Type of character"
          value={state.characterType}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              characterType: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Back story"
          value={state.backStory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              backStory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Describe in three words"
          value={state.threeWords}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              threeWords: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="The lie"
          value={state.lie}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              lie: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="The truth"
          value={state.truth}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              truth: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="External conflict"
          value={state.externalConflict}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              externalConflict: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Internal conflict"
          value={state.internalConflict}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              internalConflict: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Strengths"
          value={state.strength}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              strength: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Flaws"
          value={state.flaw}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              flaw: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="More"
          value={state.story}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              story: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Background</Typography>}
      >
        <TextField
          label="Short term goal"
          value={state.familyEconomicStatus}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              familyEconomicStatus: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.homeCountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeCountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.homeSubcountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeSubcountry: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.homeCity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeCity: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.childhood}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              childhood: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.favouriteActivity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouriteActivity: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.phobia}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              phobia: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.educationHistory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              educationHistory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.schoolClub}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              schoolClub: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.jobHistory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              jobHistory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.favouritePlace}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouritePlace: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.whatToChangeInThePast}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              whatToChangeInThePast: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.whyChangeThePast}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              whyChangeThePast: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.turningPoint}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              turningPoint: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.earliestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              earliestMemory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.happiestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              happiestMemory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.saddestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              saddestMemory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.clearestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              clearestMemory: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.criminalRecord}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              criminalRecord: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.dreamJob}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              dreamJob: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.favouriteObject}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouriteObject: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.roleModel}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              roleModel: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.regret}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              regret: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.bigSecret}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              bigSecret: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.background}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              background: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Mannerisms</Typography>}
      >
        <TextField
          label="Short term goal"
          value={state.speechStyle}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              speechStyle: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.speechTempo}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              speechTempo: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.voice}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              voice: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.nonVerbal}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              nonVerbal: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.speechImpediment}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              speechImpediment: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.catchPhrase}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              catchPhrase: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.curseWord}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              curseWord: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.laughter}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              laughter: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.smile}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              smile: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.restingFace}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              restingFace: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.likes}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              likes: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.dislikes}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              dislikes: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.hobbies}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              hobbies: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.badHabit}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              badHabit: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.quirks}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              quirks: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.boringStuff}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              boringStuff: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.annoyingStuff}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              annoyingStuff: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.habit}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              habit: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>

      <Accordion
        header={
          <Typography className={classes.header}>Relationship</Typography>
        }
      >
        <h1> This is relationship</h1>
      </Accordion>
      <Accordion
        header={<Typography className={classes.header}>Perception</Typography>}
      >
        <TextField
          label="Short term goal"
          value={state.self}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              self: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.immediateFamily}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              immediateFamily: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.extendedFamily}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              extendedFamily: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.friends}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              friends: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.acquaintances}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              acquaintances: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.colleagues}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              colleagues: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.subordinates}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              subordinates: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.authorityFigure}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              authorityFigure: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.confidant}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              confidant: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.oppositeSex}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              oppositeSex: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.adversary}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              adversary: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.stranger}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              stranger: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.groupDynamic}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              groupDynamic: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.dependable}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              dependable: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
        <TextField
          label="Short term goal"
          value={state.perception}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              perception: e.target.value,
            })
          }
          onBlur={saveConfig}
        />
      </Accordion>
      <Accordion
        header={<Typography className={classes.header}>Traits</Typography>}
      >
        <h1>This is trait</h1>
      </Accordion>
    </Box>
  );
};
