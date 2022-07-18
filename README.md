# React Portfolio Website

## Installation
Make sure all the following dependencies are installed:
* react
* gh-pages (for deployment)
* fort-awesome (for icons: [see Font Awesome documentation for more](https://fontawesome.com/v5/docs/web/use-with/react "Using Font Awesome icons with React framework" ))
* emailjs (for sending emails without backend, [check more info here](https://fontawesome.com/v5/docs/web/use-with/react "Sending emails without backend with Email.js in React"))

## Preview
![React Portfolio Preview](/public/react-portfolio-preview.png "React Portfolio Preview")

## Deployment
Deploying a React project to GitHub Pages can be tricky. Most of the tutorials and documentation involve Create-react-app and npm, although there isn't a lot of differences.
Still, latest Vite documentation still leaves a lot to wonder. So make sure to follow all these steps.

### Install gh-pages
~~~~
yarn add gh-pages
npm install gh-pages
~~~~

### Configure your deploy scripts at package.json
~~~~
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "yarn run build", // add this line
    "deploy": "gh-pages -d dist" //add this line
  },
  ~~~~
  
  ### Create a build to create a “dist” folder and forcibly commit it to a branch called gh-pages. Then, you're ready to deploy.
  ~~~~
  yarn run build
yarn run preview //if you want to preview the production mode in your machine

git add dist -f //forcibly commit dist folder, bc it's usually on gitignore
git commit -m "Adding dist folder"
git subtree push --prefix dist origin gh-pages // push to a gh-pages branch

yarn run deploy
~~~~
  
  Before deploying to GitHub Pages, make sure that:
- you configured your GH Page to run from the gh-pages branch;
- your index.html has a script path that starts with a /.

If you make any changes, repeat the process again.

To avoid blank page, you also need to configure your BrowserRouter:

~~~~
// Create React App
<BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
</BrowserRouter>

// Vite
<BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <App />
</BrowserRouter>
~~~~
