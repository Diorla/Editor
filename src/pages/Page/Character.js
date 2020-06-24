//@ts-check
import React, { useEffect } from "react";
import useStyles from "./useStyles";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import Accordion from "../../components/Accordion";
import saveConfig from "./saveConfig";
import { SimpleInput } from "../../components/Input";

/**
 * @param {{ state: object; setState: (arg0: object)=> void; itemDir: string }} props
 */
export default (props) => {
  const classes = useStyles();
  const { state, setState, itemDir } = props;
  useEffect(() => {
    saveConfig(state, itemDir);
    return () => {
      console.log("unmounting");
    };
  }, [state]);

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
            />
            <Button
              className={classes.dangerButton}
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
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Background</Typography>}
      >
        <TextField
          label="Family economic status"
          value={state.familyEconomicStatus}
          placeholder="Upper middle class"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              familyEconomicStatus: e.target.value,
            })
          }
        />
        <Typography className={classes.header}>Home town</Typography>
        <TextField
          label="Country"
          value={state.homeCountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeCountry: e.target.value,
            })
          }
        />
        <TextField
          label="Sub country"
          value={state.homeSubcountry}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeSubcountry: e.target.value,
            })
          }
        />
        <TextField
          label="City"
          value={state.homeCity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              homeCity: e.target.value,
            })
          }
        />
        <TextField
          label="Childhood"
          value={state.childhood}
          placeholder="Sheltered father and abusive mother"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              childhood: e.target.value,
            })
          }
        />
        <TextField
          label="Favourite activity"
          value={state.favouriteActivity}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouriteActivity: e.target.value,
            })
          }
        />
        <TextField
          label="Phobia"
          value={state.phobia}
          placeholder="Afraid of heights and spiders"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              phobia: e.target.value,
            })
          }
        />
        <TextField
          label="Education history"
          value={state.educationHistory}
          placeholder="Went to FGC Ilorin and Obafemi Awolowo University"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              educationHistory: e.target.value,
            })
          }
        />
        <TextField
          label="School club"
          value={state.schoolClub}
          placeholder="Mathematics club, JET club, AV club"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              schoolClub: e.target.value,
            })
          }
        />
        <TextField
          label="Job history"
          value={state.jobHistory}
          placeholder="Started as a waiter at MacDonalds and now he's the manager."
          multiline
          onChange={(e) =>
            setState({
              ...state,
              jobHistory: e.target.value,
            })
          }
        />
        <TextField
          label="Favourite place"
          value={state.favouritePlace}
          placeholder="He likes to go to museums, libraries and observatory"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouritePlace: e.target.value,
            })
          }
        />
        <Typography className={classes.header}>
          If they could change something in the past
        </Typography>
        <TextField
          label="What would they change"
          value={state.whatToChangeInThePast}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              whatToChangeInThePast: e.target.value,
            })
          }
        />
        <TextField
          label="Why would they change it"
          value={state.whyChangeThePast}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              whyChangeThePast: e.target.value,
            })
          }
        />
        <TextField
          label="Major turning point"
          value={state.turningPoint}
          placeholder="When he got admitted into college"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              turningPoint: e.target.value,
            })
          }
        />
        <TextField
          label="Earliest memory"
          value={state.earliestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              earliestMemory: e.target.value,
            })
          }
        />
        <TextField
          label="Happiest memory"
          value={state.happiestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              happiestMemory: e.target.value,
            })
          }
        />
        <TextField
          label="Saddest memory"
          value={state.saddestMemory}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              saddestMemory: e.target.value,
            })
          }
        />
        <TextField
          label="Clearest memory"
          value={state.clearestMemory}
          placeholder="He could remember it, just like it happened yesterday even 10 years after the event"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              clearestMemory: e.target.value,
            })
          }
        />
        <TextField
          label="Criminal record"
          value={state.criminalRecord}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              criminalRecord: e.target.value,
            })
          }
        />
        <TextField
          label="Dream job"
          value={state.dreamJob}
          placeholder="As a kid, all he ever wanted to be is a firefighter"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              dreamJob: e.target.value,
            })
          }
        />
        <TextField
          label="Favourite object"
          value={state.favouriteObject}
          placeholder="A locket with the photo of his deceased parent"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              favouriteObject: e.target.value,
            })
          }
        />
        <TextField
          label="Role model"
          value={state.roleModel}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              roleModel: e.target.value,
            })
          }
        />
        <TextField
          label="Regret"
          value={state.regret}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              regret: e.target.value,
            })
          }
        />
        <TextField
          label="Big secret"
          value={state.bigSecret}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              bigSecret: e.target.value,
            })
          }
        />
        <TextField
          label="More"
          value={state.background}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              background: e.target.value,
            })
          }
        />
      </Accordion>

      <Accordion
        header={<Typography className={classes.header}>Mannerisms</Typography>}
      >
        <SimpleInput
          state={state}
          setState={setState}
          label="Speech style"
          objectKey="speechStyle"
          placeholder=""
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Speech tempo"
          objectKey="speechTempo"
          placeholder=""
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Voice"
          objectKey="voice"
          placeholder="High pitched, croaking, low voice"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Body gestures"
          objectKey="nonVerbal"
          placeholder="Compulsive hand talker, eye twitches during public speeches"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Speech impediments"
          objectKey="speechImpediment"
          placeholder="stutter, can't pronounce 'r'"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Catch phrase"
          objectKey="catchPhrase"
          placeholder="I'm too old for this. Engage!"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Curse word"
          objectKey="curseWord"
          placeholder="Fuck! Damn! Never curses."
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Laughter"
          objectKey="laughter"
          placeholder="croaky, snorty"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Smile"
          objectKey="smile"
          placeholder="Crooked, toothy, gap toothed"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Resting face"
          objectKey="restingFace"
          placeholder="Angry, smirk, always with a smile"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Likes"
          objectKey="likes"
          placeholder=""
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Dislikes"
          objectKey="dislikes"
          placeholder=""
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="hobbies"
          placeholder=""
          label="Hobbies"
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="badHabit"
          placeholder=""
          label="Bad habits"
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="quirks"
          placeholder=""
          label="Quirks"
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="boringStuff"
          placeholder=""
          label="Things they find boring"
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="annoyingStuff"
          placeholder=""
          label="Things they find annoying"
        />
        <SimpleInput
          state={state}
          setState={setState}
          objectKey="habit"
          placeholder=""
          label="More"
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
          label=""
          value={state.self}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              self: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.immediateFamily}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              immediateFamily: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.extendedFamily}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              extendedFamily: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.friends}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              friends: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.acquaintances}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              acquaintances: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.colleagues}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              colleagues: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.subordinates}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              subordinates: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.authorityFigure}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              authorityFigure: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.confidant}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              confidant: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.oppositeSex}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              oppositeSex: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.adversary}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              adversary: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.stranger}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              stranger: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.groupDynamic}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              groupDynamic: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.dependable}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              dependable: e.target.value,
            })
          }
        />
        <TextField
          label=""
          value={state.perception}
          placeholder=""
          multiline
          onChange={(e) =>
            setState({
              ...state,
              perception: e.target.value,
            })
          }
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
