# Development Notes of Split Bill App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To learn React, check out the [React documentation](https://reactjs.org/).

**NOTE:** 
This will strictly be a web app and is not intended to be mobile responsive. Maybe in the future I can design the schematics to adapt on a mobile screen but this project is mainly to feature <s>the Drag-n-Drop API and that is not an ideal UX for mobile users in the current iteration design I have.</s> a snapshot of my skills so far. This uses a redux state with the Redux ToolKit

Update: Drag-n-Drop would be tedious and bad UX for large amount of data. Decided to keep it simple.

## Technology Used
- Create React App
- Redux 
- RTK (Redux Tool Kit)
- SASS
- SCSS Modules

## Reasoning:
### `Redux`
I compared the pros and cons of redux vs. context. This app will use a lot
of dynamic data in state. Context is great for static data, but redux is
better for debugging and dealing with dynamic data.

Since most of the app is going to be sharing the state *and* affecting the state data, redux seems appropriate.
Update: Looking back I could have done it without Redux but I needed to practice Redux with the Redux Toolkit.

## To Do:
- <s>Craft the UI</s>
- <s>State Management system, set up redux.</s>
- <s>Menu and modals to create, read and delete data.</s>
- <s>Drag-n-drop API (Not viable or good UX anymore)</s>
- <s>Install form library (React Hook Forms)</s>
- Unit Testing
- Feature: Bill Roulette
- Edit features