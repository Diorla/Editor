//@ts-check
import { KeyBindingUtil, getDefaultKeyBinding } from "draft-js";

/**
 * This is for mapping each shortcut to different styles
 * @param {React.KeyboardEvent<{}>} e
 */
export default (e) => {
  const { hasCommandModifier } = KeyBindingUtil;
  if (e.keyCode === 49 && hasCommandModifier(e)) return "header-one";
  else if (e.keyCode === 50 && hasCommandModifier(e)) return "header-two";
  else if (e.keyCode === 51 && hasCommandModifier(e)) return "header-three";
  else if (e.keyCode === 222 && hasCommandModifier(e)) return "blockquote";
  else if (e.keyCode === 106 && hasCommandModifier(e))
    return "unordered-list-item";
  else if (e.keyCode === 96 && hasCommandModifier(e))
    return "ordered-list-item";
  else if (e.keyCode === 191 && hasCommandModifier(e)) return "STRIKETHROUGH";
  else if (e.keyCode === 192 && hasCommandModifier(e)) return "CODE";
  // Default value in case it doesn't match any of the above
  return getDefaultKeyBinding(e);
};
