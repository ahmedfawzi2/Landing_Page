/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


//bulid the nav 
//declar the variables (sections , fragment , ul)

let sections = document.querySelectorAll('section');
const ul = document.querySelector('#navbar__list');
// creat fragment
var fragment = document.createDocumentFragment();
// make loop over each section and create a list Item (li) to navigate it
sections.forEach(section => {
   let text = section.getAttribute('data-nav');
   // create text node
   let node = document.createTextNode(text);
   // create new link
   let nLink = document.createElement('a');
   // append node (text node) to link
   nLink.appendChild(node);
   // create list item(li)
   let nListItem = document.createElement('li');
   //append list item (li) to fragment
   fragment.appendChild(nListItem);
//add class name to link to apply the css styling  
   nLink.className='menu__link';
// addEventListener on the link to scroll to the wanted section 
   nLink.addEventListener ('click', function(){
     section.scrollIntoView({behavior: "smooth"})
    });

// Determination the target position in the web page  
   nLink.href = '#'+ text;
  
//append link to list item (li)
   nListItem.appendChild(nLink);
});

//bulding the navigation List
// append ul to fragment
ul.appendChild(fragment);

//checking the active section 
//listening to the Scroll event to change the active section 
document.addEventListener('scroll', ()=>{

//do loop to detect whether the current section is active or not 
sections.forEach(section => {
   // to get position of section
   let rect = section.getBoundingClientRect();
   // add the vahue "360" to can apply active secrion and link on mobile screen
   let window_Hight = window.innerHeight + 360; 
   // check position 
   if(rect.top >= 0 &&  rect.bottom < window_Hight){     
      let sections = document.querySelectorAll('section');
      sections.forEach(section =>{
          //removing last active state
         section.classList.remove('your-active-class');
      })
       //add active class to active section      
      section.classList.add('your-active-class');

//checking the active link 
      let section_nav = section.getAttribute('data-nav');
      let Links = document.querySelectorAll('a');
      //do loop to detect whether the current link is active or not 
      Links.forEach(myLink => {
               if(myLink.textContent == section_nav){
                  Links.forEach(myLink => {
                     // remove last active link
                     myLink.classList.remove('your-active-link')
                  })
                  // add active class to the active link
                  myLink.classList.add('your-active-link');       
               }
            })
   }
});
 
});


 