// HOMEWORK ASSIGNMENT
// YOU can use any online/personal server to create this, ie. Codepen.io, jsfiddle, jsbin etc.. or
// Spin up your own server. If you would rather do that, but not sure. I'll show you how.
// IF you use online tools (codepin, jsfiddle etc..), You will need to make sure you set up 
// Your template for babel/react/reactdom etc..
/*

Create a house: Parent Component
Create 4 Rooms: Child Components

In the main Component:
1. Create a dropdown with 4 options
  a. Each option represents a room
2. Create a dropdown of colors (whatever you want) 
3. Create a button that:
   a. Updates parent state based on selection (onClick handler)
   b. Color & room selected
4. Pass this updated state and updat the children. How? Props.
   
X-TRA: The process would be the same: a dropdown and button
-----------------
5. We will be expanding to add furniture to the rooms
   a. A few types: chair, desk, tv, couch, bed, refrigerator

Note: Right now, our data is flowing one way. Parent to children
Note: Remember, each child owns itself and knows WHAT data comes thru: componentWillReceiveProps
Note: What to consider
 A. How are you gonna pass this selection(s) down to the children via props?
    1. Once you paint a room, it should stay painted until you override it with a new color.
       a. SO, the child needs to be aware of its own state, right?
       b. SO, we take the props that flow thru, and perhaps update an internal state?
 
EXAMPLE: VERY BASE TO START YOU OUT.
1. Use the ReactDOM.render to render into the page (see online examples)
2. Parent component (name accordingly)

class Parent extends React.Component {
   constructor() {
     // set init state
   }
  
   render() {
     return (
       <div>
         <div>
            {Your selects, and button ?}
         </div>
       <Room1 />
       <Room2 />
       <Room3 />
       <Room4 />
      </div>
     )
   }
}

// Example Room1
class Room1 extends React.Component {
   constructor() {
     // set init state
   }
  
   render() {
     return (
       // In react, we use "className" to add classes
       // You can also add "style" attribute.
       // How are you gonna add a background color?
       // Create classes that denote possible colors?
       // Dynamically add the color?
       // classeName or style or ?
       <div>
         My Room 1
      </div>
     )
   }
}
*/