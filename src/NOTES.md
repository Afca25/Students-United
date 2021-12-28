26/12/21

- Can't load picture as a background image. It worked on the logo, but it won't let me set a background image on Home component

27/12/21

- Got to set the background image ONLY BECAUSE:
  1. I set it inline inside the component's JSX AND 
  
  2. because I imported the img file at the top of the JSX file

- Stopped using Live Sass Compiler because it's, apparently, not needed inside React. Instead I followed a couple of steps:
  1. npm uninstall node-Sass
  
  2. npm install --save-dev sass
