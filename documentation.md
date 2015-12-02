----
HADatAc Information Website Documentation  
Date: December 2nd, 2015  
Authors: Matt Hamlin  
----

# HADatAc Information Website Documentation

## Definitions:

  * Framework: [Paperkit](http://www.creative-tim.com/product/paper-kit) developed by Creative Tim (company) is a set of designs, styles, and scripts to stylize basic html components. 
  * Javascript Libraries: jQuery and AngularJS

## Project Structure:

```
|Assets...
|-- first-full-page-image-edit.png
|-- first-full-page-image.png

|bower_components...
|-- (Misc files)

|css...
|-- main.css (for custom css to overwrite the framework's css)

|js...
|-- aboutController.js (no longer in use)
|-- angular-ui-bundle.js 
|-- browserify-angular-ui.js
|-- installController.js (to animate the install instructions)

|node_modules...
|-- angular
|-- angular-bootstrap
|-- angular-bootstrap-npm
|-- (misc folders)

|paperkit...
|-- assets...
|-- -- css...
|-- -- -- ct-paper.css
|-- -- -- demo.css
|-- -- -- example.css
|-- -- js...
|-- -- -- bootstrap-datepicker.js
|-- -- -- bootstrap-select.js
|-- -- -- ct-paper-checkbox.js
|-- -- -- ct-paper-radio.js
|-- -- -- ct-paper.js
|-- -- -- jquery-1.10.2.js
|-- -- -- jquery-ui-1.10.4.custom.min.js
|-- -- paper_img...
|-- -- -- (misc files)
|-- bootstrap3...
|-- -- css...
|-- -- -- (default bootstrap css files)
|-- -- js...
|-- -- -- (default bootstrap js files)
|-- -- fonts...
|-- -- -- (default bootstrap fonts)
|-- examples...
|-- -- (misc example html files)
|-- (misc html files)

|about.html
|feature-guide.html
|index.html
|install-guide.html
|install-template.html

```

## Developers writeup

The project was built with the paperkit framework, using Bootstrap as a base. Every page is built using the default 12 column grid offered by bootstrap.

There were some customizations added to the sites to improve readability and user interface. These styles were added to the `main.css` file. The classes include:
  * `.vert` to vertically align an element
  * `.link` to offer an alternative link color
  * `.link2` to offer yet another alternative link color
  * `.above` to provide a simple above spacer using `margin-top`
  * `.section-easter` to provide another background color for `.section`s
  * `.out` to change the styles of example terminal output
  * `.text-lg` to change the default size of text within elements
  * `.white-text` to "clear" any text color formats
  * `.center-img` to center any images on the page
  * `special-section` to make sure any section has a min-height that isn't as large as the `.landing-section` class

Every piece of text should be located within an element to keep the document properly formatted as well as to make sure any html file is semantically correct. Every html file is using the latest html5 `DCOTYPE`.