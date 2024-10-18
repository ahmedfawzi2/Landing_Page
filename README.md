# Landing Page Project " udacity" 

# The Project properties #

 -1- dermine which section is active and apply the corresponding style dynamically
 -2- Add Style to the active links on the navegation 
 -3- Navigation is built dynamically
 -4- Scrolling to the anchors smoothly
 -5- project contain 5 sections in html 
 

#  The Project folder #
 -1- index.html
 -2- css                                                       
      styles.css                                               
 -3- js                     
      app.js
 -4- README.md


# The Added Items to the given starter code  #

 -1- Create javascript codes in javascript file (app.js) 
 -2- Add some modifications to the HTML file:
        -1- linking the (app.js) file with it
        -2- Two new sections to make sure the code works properly
 -3- change some of styles in css file (styles.css)

#  The Project Steps #

   -1-  linke the "app.js" file to my html index file
   -2-  bulid the navigation bar
        -1- Define all sections using the "querySelectorAll" method.
        -2- Looping throught the returning node list using forEach loop.
        -3- getting the section text nav and creat a list item element,text content is the same as the sections next nav attribute content.
        -4- creat an anchor point and add it to the created list item and adding (href) attribute to specify the location that it will scroll to later.
        -5- adding the event listener that is used to scroll to the wanted section.
        -6- adding all list items to the fragment to lowering the number of reflow and repaint in order to increase the code perfprmance.
        -7- append the fragment to the unorderd list (ul) to represent our navigation list.

   -3- specify  active section
        -1-   it'a all depending on the user, when the user start to scroll, the active section will be cahange so we need to programatically make it change, so the whole code will be the listener to the scroll event.
        -2-  we'll get all sections and looping through them then applying the "getBoundingClientRect" method to check whether the section with in the view port or not.
        -3-  if the section is in the view port we'll add the active class to it after we removing the active class from any other section.
        -4-  now the in view section will be the only section with the active class.
        
   -4- specify active link corresponds to the active section.
        -1-  after selecting the active section, we'll use it's value to get the active link.
        -2-  we'll get all the anchors and looping the returned node list by using the forEach loop.
        -3-  we'll check if the anchor text content is equal to the data nav attribute of the active section.
        -4-  if both were the same then this will be the active link, and at this point we'll add the active link class to it and will remove this active class from any other link.
        -5-  we'll add a style to the active link class to apply to the navigation menue when the corresponding section within the view port. 


# Thanks # 

