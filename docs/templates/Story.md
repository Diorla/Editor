# Story

> Story will contain chapters each chapter will have the following

- title: the name of the chapter e.g. `Prologue`, `chapter 1` or `Harry is born`, it's determined when creating the chapter
- summary: A short description of what happens in the chapter.
- premise: These are the information the reader should have prior to reading this chapter e.g. `And Luke Skywalker drew out his lightsaber and struck down Emperor Palpatine, thus ending the reign of Sith and establishing the new Jedi Order`
  - Your readers should know what `Luke Skywalker`, `lightsaber`, `Emperor Palpatine`, `Sith` and `Jedi Order` means. It's up to you whether/how to reveal this information in case your reader is not aware of them.
  - Always watch out for the character's names and made up words.
- goal: What do you want to achieve with this chapter e.g further the plot, plot device, backstory, a big reveal or fillers.
- content: The content of each chapter, it's used by `react-quill`
- wordLength: The number of words in the content
- charLength: The number of characters in the content

```js
const storyId = {
  id: ID,
  title: "Prologue",
  summary: "",
  premise: "",
  goal: "",
  content: "",
  wordLength: "",
  charLength: "",
};
```
