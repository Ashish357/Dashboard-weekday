# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- clone the repository
- run npm install
- run npm run start

# Information about the project
- The website fetches the data from weekday api using fetch method using Redux Thunk.
- Based on the above result the data is stored in redux store RTK jobsSlice.
- The saved data is then run through a fliterSlice which is used to show the jobs in the dashboard page.
- In the search filter I have used debounce function for performance optimization.
- I have used a shimmer UI which will be shown when data is loading.
- Added various aria-labels for screen-readers also for seo purpose I have added various meta tags in the index.html file.
