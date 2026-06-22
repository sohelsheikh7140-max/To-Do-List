const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask(){

if(taskInput.value.trim() === ""){
return;
}

let li = document.createElement("li");

li.innerHTML = `

<input type="checkbox" class="check">

<span class="task-text">
${taskInput.value}
</span>

<div class="actions">

<button class="edit-btn"
onclick="editTask(this)">
✏
</button>

<button class="delete-btn"
onclick="deleteTask(this)">
🗑
</button>

</div>

`;

taskList.appendChild(li);

taskInput.value="";

saveTasks();

}


function editTask(button){

let li = button.parentElement.parentElement;

let task = li.querySelector(".task-text");

let newTask = prompt(

"Edit Task",

task.innerText

);

if(newTask!=null && newTask.trim()!=""){

task.innerText = newTask;

saveTasks();

}

}


function deleteTask(button){

button.parentElement.parentElement.remove();

saveTasks();

}



taskList.addEventListener(

"change",

function(e){

if(

e.target.classList.contains(

"check"

)

){

let li =

e.target.parentElement;

let text =

li.querySelector(

".task-text"

);

text.classList.toggle(

"completed"

);

saveTasks();

}

}

);



function saveTasks(){

localStorage.setItem(

"tasks",

taskList.innerHTML

);

}



function loadTasks(){

taskList.innerHTML =

localStorage.getItem(

"tasks"

)

|| "";

}



/* ================= Rainbow Effect ================= */

const heading = document.querySelector("h1");
const container = document.querySelector(".container");
const body = document.body;

const headingColors = [
"#ff0000",
"#ff7f00",
"#ffff00",
"#00ff00",
"#00ffff",
"#0000ff",
"#8b00ff"
];

const bgColors = [
"#ff0000",
"#00ff00",
"#0000ff",
"#ff00ff",
"#00ffff",
"#ffff00",
"#ff8800"
];

const boxColors = [
"#00ff00",
"#ff00ff",
"#00ffff",
"#ffff00",
"#ff8800",
"#ff0000",
"#0000ff"
];


let interval;
let stopped = false;



function rainbowEffect(){

if(stopped) return;

clearInterval(interval);

let i = 0;

interval = setInterval(()=>{

heading.style.color =
headingColors[i];

heading.style.textShadow =
`0 0 20px ${headingColors[i]}`;


container.style.border =
`2px solid ${boxColors[i]}`;

container.style.boxShadow =
`0 0 25px ${boxColors[i]}`;


body.style.background =
bgColors[i];


i++;

if(i >= headingColors.length){

clearInterval(interval);


heading.style.color =
"#2563eb";

heading.style.textShadow =
"0 0 20px #2563eb";


container.style.border =
"2px solid #2563eb";

container.style.boxShadow =
"0 0 25px #2563eb";


body.style.background =
"#000";

}

},1400);

}


rainbowEffect();



/* 3 minute baad animation dubara */

setInterval(()=>{

if(!stopped){

rainbowEffect();

}

},180000);




/* Enter dabane se Task Add */

taskInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

addTask();

}

});




/* S dabane se color stop */

document.addEventListener("keydown",function(e){

if(e.key==="s" || e.key==="S"){

clearInterval(interval);

stopped = true;

}

});



/* R dabane se animation fir start */

document.addEventListener("keydown",function(e){

if(e.key==="r" || e.key==="R"){

stopped = false;

rainbowEffect();

}

});