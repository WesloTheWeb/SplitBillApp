# Development Notes of Split Bill App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To learn React, check out the [React documentation](https://reactjs.org/).

**NOTE:** 
This will strictly be a web app and is not intended to be mobile responsive. Maybe in the future I can design the schematics to adapt on a mobile screen but this project is mainly to feature the Drag-n-Drop API and that is not an ideal UX for mobile users in the current iteration design I have.


## Technology Used
- Create React App
- Redux
- SASS
- SCSS Modules

## Reasoning:
### `Redux`
I compared the pros and cons of redux vs. context. This app will use a lot
of dynamic data in state. Context is great for static data, but redux is
better for debugging and dealing with dynamic data.

SInce most of the app is going to be sharing the state *and* affecting the state data, redux seems appropriate.


## Upcoming Features
- **Drag n Drop of names to affect the total cost of expense (Main Feature)**
- Menu and modals to create, read and delete data.
  
## To Do:
- <s>Craft the UI</s>
- State Management system, set up redux.
- Drag-n-drop API
- Install form library (React Hook Forms)
- Unit Testing