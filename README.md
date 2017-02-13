BUILD PROCESS
This application uses npm scripts to build and run.

1. Once the folder has been unzipped, open this project within a terminal and run 'npm install'. This will download all the necessary node_modules and then also run bower install internally to download bower_components.

2. Once the node_modules and bower_components have been created, run 'npm start'.
 This will compile the SCSS files into a single CSS file and also run a http-server to serve the files.

3. Now open the application on 'localhost:8000' in your browser. (Chrome Preferred)

APPLICATION INTERACTION
Right now the only interactive components within the application are
1. 'Add Account' button which adds a new account to the table.
2. Table sorting - Clicking on either one of 'Name', 'Market Value', or 'Cash' headers will the sort the table accordingly.

THINGS LEFT TO DO
 1. Added tasks for minification of CSS and JS files.
 2. Add a live chart instead of the chart image placeholder.
 3. Create test cases.

PITFALLS OF ORIGINAL CODE

1. All code (HTML, JS, CSS, Images) was put into a single folder. When the code base grows it'll makes it difficult to find files.

CHANGES MADE -
I divided the folder into subfolders based on file type
'src' contains all the client source files including HTML, styles (in SASS format), JavaScript and images.
'tests' - contains all the client tests. Right now there are no tests within it.
'src' folder structure
/src
    /components
    /core
    /framework
    /images
    /styles
    /app.module.js
    /app.scss
    /index.html
framework - Container for reusable services such as logging, exception handling etc.
core - Contains functionality that is shared across the application. This includes directives, filters, and services.
compopnents - Contains all the components of the application.
images - Contains all the images
styles - Contains all scss files.
app.css - The final compiled CSS which will be imported into the html file
app.module.js - The module that

2. In the original code the vendor specific file was also clubbed together with custom code.
CHANGE MADE -
All vendor specific files are downloaded using npm and bower. They are placed within mode_modules and bower_components.

3. All script tags were placed within the head tag. The drawback of this is that the browser is blocked from loading anything else when it loads a script.
CHANGE MADE -
I added all the script tags at the bottom of the page, just before the closing body tag. This won't block the browser from loading other assets and the scripts will be the last files to load.

4. The scripts were being loaded synchronously within the head tag. This forces us to specify the right order when loading scripts.
CHANGES MADE -
I made use of script.js which asynchronously loads all scripts. We don't have to worry about placing scripts in the correct order. Once the scripts are loaded they can be used from any file. Angular dependency management takes care of this.

5. There was no dependency management
CHANGES MADE -
I added $inject manually within components to identify the list of dependencies. This method emulates the /* @ngInject */ annotation  technique.
Also added the /* @ngInject */ annotation to safeguard the dependencies from being vulnerable during minification.

6. Lack of Modularity
The code was not modular. All angular specific code was placed within a single controller file. There was no separation of concerns between the data and the business logic.
CHANGES MADE -
 - One component per file. This makes it easy to test later on. Also it's easier to maintain and read.
 - Wrapped all angular functions within IIFEs. This removes variables from global scope and avoids global scope pollution which inturn protects against variable collision during minification.

7. In the original code, the angular controller had an anonymous function. This could lead to having many nested callbacks once the code base increases.
CHANGES MADE -
I used named functions instead of anonymous functions. This makes it easier to read and maintain and also reduces the amount of callback nesting.

8. Direct use of $scope within controllers.
CHANGE MADE -
Used a contollerAs syntax to bind a variable for this . 'vm' which stands for viewmodel was used.
This helps avoid cases where the context of this changes when directly used within a function inside a controller.

9. No CSS naming specification
CHANGE MADE -
 Used the BEM pattern to create better class names

10. All CSS was clubbed into a single css file. This made it difficult to identify css for components.
CHANGE MADE -
Used the SMACSS approach to divide css code into base and layout files.
base contains all default styles for high level elements such as tables, buttons etc.
layout contains style specifc to components such as the header, and dashboard.

This makes it easier to read and maintain css code.

In the end all these partials are being imported within a single app.scss file which gets compiled to a app.css file.


