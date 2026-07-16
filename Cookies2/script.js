'use script'

const form = document.getElementById("taskForm");

const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const created = document.getElementById("created");

const tasksDiv = document.getElementById("tasks");
const themeBtn = document.getElementById("themeBtn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



function saveForm(){
    const formData={
        title:title.value,
        description:description.value,
        deadline:deadline.value,
        created:created.value
    };

    localStorage.setItem("formData",JSON.stringify(formData));

}



function loadForm(){
    const formData=JSON.parse(localStorage.getItem("formData"));
    if(!formData) return;
    title.value=formData.title;
    description.value=formData.description;
    deadline.value=formData.deadline;
    created.value=formData.created;
}



title.addEventListener("input",saveForm);
description.addEventListener("input",saveForm);
deadline.addEventListener("input",saveForm);
created.addEventListener("input",saveForm);



function renderTasks(){
    tasksDiv.innerHTML="";
    tasks.forEach((task,index)=>{

        const div=document.createElement("div");

        div.className="task";
        div.innerHTML=`
        <h2>${task.title}</h2>
        <p><b>Опис:</b> ${task.description}</p>
        <p><b>Дедлайн:</b> ${task.deadline}</p>
        <p><b>Дата створення:</b> ${task.created}</p>
        <button onclick="deleteTask(${index})">
        Видалити
        </button>
    `;

        tasksDiv.appendChild(div);

    });

}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const task={
        title:title.value,
        description:description.value,
        deadline:deadline.value,
        created:created.value

    };

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();
    form.reset();
    localStorage.removeItem("formData");

});



function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();

}



function loadTheme(){
    const theme=localStorage.getItem("theme");
    if(theme==="dark"){
        document.body.classList.add("dark");
        themeBtn.textContent=" Світла тема";
    }

}



themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent="Світла тема";
    }
    else{
        localStorage.setItem("theme","light");
        themeBtn.textContent=" Темна тема";
    }

});



loadForm();
renderTasks();
loadTheme();