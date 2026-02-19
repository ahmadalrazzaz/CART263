window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */

/*

CODE:
console.log(document.getElementsByTagName("p"));
 
OUTPUT: 
HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]

*/


/*************************************** */
/* 2: only the first paragraph element */
/*

CODE:
console.log(document.getElementsByTagName("p")[0]);

OUTPUT: 
<p id="1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus officiis non quasi officia sit veniam!
</p>

*/


/*************************************** */
/* 3: all elements with the class inner-container */
/*

CODE:
console.log(document.getElementsByClassName("inner-container"));

OUTPUT: 
HTMLCollection(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]

*/


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/*

CODE:
console.log(document.querySelector(".img-container img:last-child"));

OUTPUT: 
<img class="img-image" src="task-2-images/sixteen.png">

*/


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/*

CODE:
5A: console.log(document.getElementsByTagName("h2"));
5B: console.log(document.getElementsByTagName("h2").length);
5C: console.log(document.getElementsByTagName("h2")[0].textContent);

OUTPUT: 
5A: HTMLCollection [h2]
5B: 1
5C:  The header of this fancy page

*/


/*************************************** */
/* 6: the element with id name parent */
/*

CODE:
console.log(document.getElementById("parent"));


OUTPUT: 
<section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>

*/

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
/* 1: Select the first paragraph and replace the text within the paragraph... */
/*

CODE:
document.getElementsByTagName("p")[0].textContent = "text changed by Ahmad AlRazzaz on the following date: 16/2/2026";

*/

/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/*

CODE:
document.getElementsByClassName("content-container")[0].style.backgroundColor = "orange";
document.getElementsByClassName("content-container")[1].style.backgroundColor = "purple";


*/

/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/*

CODE:
document.getElementsByTagName("img")[0].src = "task-2-images/seven.png";


*/

/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/*

CODE:
document.getElementsByTagName("p")[2].innerHTML = "<h2>TEST 123</h2>";


*/

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/*

CODE:
document.getElementsByTagName("p")[3].innerHTML += "<h2>TEST 123</h2>";


*/

/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/*

CODE:
document.getElementsByTagName("p")[4].innerHTML += "<img src='task-2-images/one.png'>";
document.getElementsByTagName("p")[4].classList.add("newStyle");


*/


/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/*

CODE:
let colors = ['red','blue','green','orange'];
let innerContainers = document.getElementsByClassName("inner-container");
for(let i = 0; i < innerContainers.length; i++){
    innerContainers[i].style.backgroundColor = colors[i%colors.length];
}


*/

/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS

1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree
1B: Create a function:function customCreateElement(parent){ //body }
1C:  In the body of customCreateElement create a new parargraph element
1D:  Set the text of this element to be : `using create Element`
1E:  Set the background of this paragraph element to be green 
1F:  Set the color of the text in this paragraph element to be white 
1G: Append this new element to the parent variable within the function. 
1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.

*/

/*

CODE:
let allPTagsThree = document.querySelectorAll("p");         // 1A
function customCreateElement(parent){                       // 1B
    let newP = document.createElement("p");                 // 1C
    newP.textContent = "using create Element";              // 1D
    newP.style.background = "green";                        // 1E
    newP.style.color = "white";                             // 1F
    parent.appendChild(newP);                               // 1G
}
for(let i = 0; i < allPTagsThree.length; i++){              // 1H
    customCreateElement(allPTagsThree[i]);
}


EXPLANATION:


*/

/*************************************** */
/* 2: GRID OF BOXES

2A: Create another new function: function customNewBoxCreate(parent){ //body }
2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
2C:Then append this new element to the parent variable within the function. 
2D:Finally, return </code> this new element
2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`
2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.

/*

CODE:
function customNewBoxCreate(parent){                        // 2A
    let newDiv = document.createElement("div");             // 2B
    newDiv.classList.add("testDiv");
    parent.appendChild(newDiv);                             // 2C
    return newDiv;                                          // 2D
}

for (let row = 0; row < 10; row++){                         // 2E
    for(let col = 0; col < 10; col++){
        let returnedDiv = customNewBoxCreate(document.getElementById("new-grid"));
        returnedDiv.style.left = col * 50 + "px";          
        returnedDiv.style.top = row * 50 + "px";            // 2F
        
        if(row % 2 === 0){                                  // 2G and 2H
            returnedDiv.style.backgroundColor = "cornflowerblue";
            returnedDiv.textContent = "ODD";
        } else {
            returnedDiv.style.backgroundColor = "white";
            returnedDiv.textContent = "EVEN";
        }
    }
}

console.log(document.getElementsByClassName("testDiv"));


EXPLANATION::
Result is alternating rows of white and cornflower blue boxes with text identifying if its in an even or odd row.

The result of the console log is 100 divs with the class testDiv, which is expected since we created a 10 by 10 grid.

*/

/*************************************** */
/* 3: GRID OF BOXES II

3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. 
3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. 
3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. 
3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three.

/*

CODE:

function customNewBoxCreate(parent){                        
    let newDiv = document.createElement("div");             
    newDiv.classList.add("testDiv");
    parent.appendChild(newDiv);                             
    return newDiv;                                          
}

for (let row = 0; row < 10; row++){                         // 3A
    for(let col = 0; col < 10; col++){
        let returnedDiv = customNewBoxCreate(document.getElementById("new-grid-three"));
    
        if(col % 3 === 0){                                  // 3B - 3C - 3D
            returnedDiv.style.backgroundColor = "red";
            returnedDiv.textContent = "0";                   
        } else if(col % 3 === 1){
            returnedDiv.style.backgroundColor = "orange";
            returnedDiv.textContent = "1";                   
        } else {
            returnedDiv.style.backgroundColor = "yellow";
            returnedDiv.textContent = "2";                   
        }
        returnedDiv.style.left = col * 50 + "px";          
        returnedDiv.style.top = row * 50 + "px";
    }
}


EXPLANATION:
Result is alternating rows of red, orange, and yellow boxes with text identifying the remainder when dividing by three.

*/

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    


}