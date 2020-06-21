# Introduction

This is meant to show the timeline of a story, what happens, in as much details as possible.

# Template

```jsonc
{
  "template": "Plot",
  "events": [
    {
      "date": "5 years ago",
      "content": "His parent died",
      "colour": "red"
    },
    {
      "date": "Today",
      "content": "Kehinde work up and left for school",
      "colour": "green"
    }
  ]
}
```

# UI/UX

```jsx
events.map((event) => (
  <div style={{ border: `1px solid ${event.color}` }}>
    <input value={event.date} />
    <input value={event.content} />
    <div>
      <button>red</button>
      <button>green</button>
      <button>blue</button>
    </div>
    <div>
      <button>Add</button>
      <button>Remove</button>
    </div>
  </div>
));
```

- So the button will be used to change the colour of the borders. This would provide some contextual meaning for example
  - red: backstory
  - green: events in the book
  - blue: events in the background or implied
- Add button will add a new event to `events`, just below that event.
  - At the top, there will be a button too, in case you want to add something to the top
- Remove button will of course remove the current event
