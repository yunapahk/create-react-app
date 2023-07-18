## React Mini-Portfolio
This exercise is for getting used to creating/working with React components 

## Screenshots

## Step One - Setup

- Create a new react project `npx create-react-app yourfoldername`
- cd into the new folder
- run npm start (you should see the React spinning logo)

## Step Two - Create our components

- Create a folder called components in their create the following components using the following boilerplate.

- Header.js
- Main.js
- Footer.js
- Projects.js

boiler plate for a new component
```js
// the component function
const ComponentName = (props) => {

    //The Components Returned JSX
    return <div className="ComponentName"> This is ComponentName</div>
}

// export the component
export default ComponentName
```

## App.js

Head over to app.js and empty the contents of it's main div which should make the page blank in the browser.

- import the Header, Main and Footer components
- They should be used in your app component in order (you should now see the text of the three components on the screen)

Using React Chrome dev tools, examine that you see all the components in the dev tools. You should see something like this:

```
App
----Header
----Main
----Footer
```

## Header.js

Create a basic horizontal navigation bar using your existing CSS Knowledge, it should have links to you github and linkedIn. Write your css in the index.css.

## Main.js

- This should just show the Projects component, import Projects and put it in the JSX for the main component.

```js
import Projects from './projects'

// the component function
const Main = (props) => {

    //The Components Returned JSX
    return <div className="Main"> <Projects/></div>
}

// export the component
export default Main
```

You should now see the text from the projects component on the screen. Use React dev tools to confirm the component structure looks like so:

```
App
----Header
----Main
--------Projects
----Footer
```
*optional: Download React Developer from Chrome extensions for better readability in your dev tools

## Projects.js

Make it display the basic info of projects (name, github link, link to deployed site).

Style it.

Set up a card style layout. 

Resources:
[CSS Guru, Kevin Powell, with some tips on building responsive cards](https://www.youtube.com/watch?v=51DbAwcmqD8)

## Footer

Footer resources: [refer to this image from behance.](https://www.behance.net/gallery/129545589/website-footer-customize-with-elementor-pro?tracking_source=search_projects_recommended%7Cweb%20footer)

Flexbox resources: [Flexbox, here is another video from Kevin Powell on Flexbox](https://www.youtube.com/watch?v=vQAvjof1oe4&t=438s).

## Extra Practice

- Make a project component that handles displaying one project, and learn about [React props](https://www.youtube.com/watch?v=fVjb18ms7vI) to find out how to use it to display both your projects.

- Look up Styled Components, Emotion or JSS and see how you can use them for styling in your app.

- Try using Grid to style all the components into a perfect responsive layout

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
