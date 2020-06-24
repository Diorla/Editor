//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";
import { SimpleInput, ObjectInput, ArrayInput } from "../../components/Input";

/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const World = (props) => {
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
        state={state}
        objectKey="type"
        setState={setState}
        placeholder="Geopolitical regions(city, subcountry, country), planet, star system(e.g. solar system), galaxy or the universe"
        label="Type"
      />
      <SimpleInput
        state={state}
        objectKey="description"
        setState={setState}
        placeholder="Intro to this world"
        label="Description"
      />
      <SimpleInput
        state={state}
        objectKey="association"
        setState={setState}
        placeholder="e.g. Nigeria is a west African country, a member of ECOWAS, African Union and United Nation"
        label="Association"
      />
      <SimpleInput
        state={state}
        objectKey="size"
        setState={setState}
        placeholder="Africa is the second largest continent on earth(30.24 sq km), Almost as big as North America(23.70 sq km) and Europe(10.36 sq km) combined"
        label="Size"
      />
      <ObjectInput
        state={state}
        label="Notable region"
        setState={setState}
        objectKey="notableRegion"
        obj={{ description: "" }}
        mainSubKey="name"
        mainLabel="Name"
        mainPlaceholder="Important regions in your world, perhaps key to your story"
      />
      <SimpleInput
        state={state}
        objectKey="climate"
        setState={setState}
        placeholder="Atmospheric conditions"
        label="Climate"
      />
      <SimpleInput
        state={state}
        objectKey="naturalWonders"
        setState={setState}
        placeholder="Notable natural wonders"
        label="Natural wonders"
      />
      <SimpleInput
        state={state}
        objectKey="naturalResources"
        setState={setState}
        placeholder="Crude oil, gold etc"
        label="Natural resources"
      />
      <SimpleInput
        state={state}
        objectKey="naturalSites"
        setState={setState}
        placeholder="Notable sites like rivers, beaches, mountains etc"
        label="Natural sites"
      />
      <SimpleInput
        state={state}
        objectKey="topograhpy"
        setState={setState}
        placeholder="mountainous, sea level, under the sea"
        label="Topograhpy"
      />
      <SimpleInput
        state={state}
        objectKey="created"
        setState={setState}
        placeholder="Especially important for artificial world like countries, civilisation"
        label="Created"
      />
      <ObjectInput
        state={state}
        label="Timeline"
        setState={setState}
        objectKey="timeline"
        obj={{
          event:
            "This period marked the discovery of iron or the rule of John the Jobless",
        }}
        mainSubKey="name"
        mainLabel="Name"
        mainPlaceholder="Dark ages, medieval, renaissance"
      />
      <SimpleInput
        state={state}
        objectKey="education"
        setState={setState}
        placeholder="The length, goal and importance of education."
        label="Education"
      />
      <SimpleInput
        state={state}
        objectKey="technology"
        setState={setState}
        placeholder="Iron age, computer age or space-faring species"
        label="Technology"
      />
      <SimpleInput
        state={state}
        objectKey="urbanisation"
        setState={setState}
        placeholder="95% of the population lives in urban areas, close to big factories where they work"
        label="Urbanisation"
      />
      <SimpleInput
        state={state}
        objectKey="art"
        setState={setState}
        placeholder="There are several monuments and museums that pays homage to the 'great leader'. Music is banned but drawing of the 'great leader' is encouraged."
        label="Art and culture"
      />
      <SimpleInput
        state={state}
        objectKey="business"
        setState={setState}
        placeholder="Runs a open capitalistic market, with a thriving manufacturing sector. The primary import of the country is beer and major exports includes crude oil, biochemicals, automobiles, tech services etc."
        label="Business"
      />
      <SimpleInput
        state={state}
        objectKey="economy"
        setState={setState}
        placeholder="GDP, Living indices, national debt, currency"
        label="Economy"
      />
      <SimpleInput
        state={state}
        objectKey="infrastructures"
        setState={setState}
        placeholder="A social welfare state with free health care. Good roads, lots of parks etc"
        label="Infrastructures"
      />
      <SimpleInput
        state={state}
        objectKey="magic"
        setState={setState}
        placeholder="Few members of the society have the ability to talk to the dead."
        label="Magic"
      />
      <SimpleInput
        state={state}
        objectKey="government"
        setState={setState}
        placeholder="Runs a democratic government with the president as the head of the executive branch."
        label="Government"
      />
      <ArrayInput
        label="Laws"
        state={state}
        objectKey="laws"
        setState={setState}
        placeholder="Highlight important laws that are unique or differs from norm e.g. Marriage is forbidden for anyone born in the month of June"
      />
      <SimpleInput
        state={state}
        objectKey="governmentHistory"
        setState={setState}
        placeholder=""
        label="Government history"
      />
      <SimpleInput
        state={state}
        objectKey="opposition"
        setState={setState}
        placeholder="These are acknowledge, possibly respeced members of the society who disagrees with the government."
        label="Opposition"
      />
      <SimpleInput
        state={state}
        objectKey="antiGovernment"
        setState={setState}
        placeholder="Labelled by the government as deviants and rebels."
        label="Anti government"
      />
      <SimpleInput
        state={state}
        objectKey="perception"
        setState={setState}
        placeholder="What does the public think of the government"
        label="Public perception"
      />
      <SimpleInput
        state={state}
        objectKey="foreignRelationship"
        setState={setState}
        placeholder="Allies and enemies, partners and competitor"
        label="Foreign relationship"
      />
      <SimpleInput
        state={state}
        objectKey="beliefs"
        setState={setState}
        placeholder="Religious or politcal affiliations"
        label="Beliefs"
      />
      <SimpleInput
        state={state}
        objectKey="culture"
        setState={setState}
        placeholder="Culture and traditions, including superstitions or things they find offensive"
        label="Culture"
      />
      <SimpleInput
        state={state}
        objectKey="ethics"
        setState={setState}
        placeholder="Ethics and values they place in high regard like human life or lying."
        label="Ethics"
      />
      <SimpleInput
        state={state}
        objectKey="class"
        setState={setState}
        placeholder="Sociocultural system, rich vs poor, royal blood vs general public, intellectuals, certain race or occupation"
        label="Class"
      />
      <SimpleInput
        state={state}
        objectKey="communication"
        setState={setState}
        placeholder="Languages and communication systems or technology"
        label="Communication"
      />
      <ObjectInput
        state={state}
        label="Race"
        setState={setState}
        objectKey="race"
        obj={{
          description:
            "How are they different from other race/species. Physical, biological, political, sociological or religious etc",
        }}
        mainSubKey="name"
        mainLabel="Name"
        mainPlaceholder="Identification of different races or species that inhabit this world"
      />
      <ObjectInput
        state={state}
        label="Creatures"
        setState={setState}
        objectKey="creatures"
        obj={{ description: "" }}
        mainSubKey="name"
        mainLabel="Name"
        mainPlaceholder="Popular fauna or flora in this world"
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

export default connect(mapStateToProps, mapDispatchToProps)(World);
