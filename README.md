# Travel Destinations
https://khaledkhalil94.github.io/fe-task/

---

## Design Decisions:
The design decisions can always be variant depending on the nature and size of the project, for this application I went with a single global store to maintain data across the app and components are fully stateful to access the store data and actions.
This allows the source code to remain very clean and minimum, while being open for scaling.
I chose the state-management library `zustand` just because I prefer using it, but the same requirements could be achieved with `redux` for example or just a global `context`.


## Tech stack:
* React
* TypeScript
* Material-UI
* Zustand
* Vite

---

## Run development server

### All dependencies must be installed
Run `yarn` before starting.


### Start dev server
Run `yarn dev`.


---

* I made a change in the data object since there was a small mistake for the Lisbon coordinates.
* Please let me know if you have any questions, I would be happy explain any point.
