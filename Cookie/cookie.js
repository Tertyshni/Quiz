'use strict'
const defaultColors = [
    {
    name:"YELLOWGREEN",
    type:"RGB",
    code:"154,205,50"
    },
    {
    name:"DARKCYAN",
    type:"RGBA",
    code:"0,139,139,1"
    },
    {
    name:"ORANGERED",
    type:"HEX",
    code:"#FF4500"
    }
];

let colors=[];

loadColors();

document.getElementById("colorForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("nameError").textContent="";
document.getElementById("codeError").textContent="";

const name=document.getElementById("name").value.trim();
const type=document.getElementById("type").value;
const code=document.getElementById("code").value.trim();

let valid=true;


if(name===""){
    document.getElementById("nameError").textContent="Required";
    valid=false;
}

if(!/^[A-Za-z]+$/.test(name)){
    document.getElementById("nameError").textContent="Color can only contain letters";
    valid=false;
}

if(colors.some(c=>c.name.toLowerCase()==name.toLowerCase())){
    document.getElementById("nameError").textContent="Name already exists";
    valid=false;
}


if(type==="RGB"){

const rgb=/^(25[0-5]|2[0-4]\d|1?\d?\d),\s*(25[0-5]|2[0-4]\d|1?\d?\d),\s*(25[0-5]|2[0-4]\d|1?\d?\d)$/;

if(!rgb.test(code)){
    document.getElementById("codeError").textContent="RGB format: 0-255,0-255,0-255";
    valid=false;
    }

}

if(type==="RGBA"){

const rgba=/^(25[0-5]|2[0-4]\d|1?\d?\d),\s*(25[0-5]|2[0-4]\d|1?\d?\d),\s*(25[0-5]|2[0-4]\d|1?\d?\d),\s*(0|0?\.\d+|1)$/;

if(!rgba.test(code)){
    document.getElementById("codeError").textContent="RGBA format";
    valid=false;
    }
}

if(type==="HEX"){

const hex=/^#[0-9A-Fa-f]{6}$/;

if(!hex.test(code)){
    document.getElementById("codeError").textContent="HEX format #AABBCC";
    valid=false;
    }
}

if(!valid) return;

colors.push({
name:name.toUpperCase(),
type,
code
});

saveCookie();

render();

this.reset();

});

function render(){

const box=document.getElementById("colors");

box.innerHTML="";

colors.forEach(c=>{

const div=document.createElement("div");

div.className="card";

if(c.type==="HEX")
div.style.background=c.code;

if(c.type==="RGB")
div.style.background=`rgb(${c.code})`;

if(c.type==="RGBA")
div.style.background=`rgba(${c.code})`;

div.innerHTML=`
<div class="info">
<h3>${c.name}</h3>
<p>${c.type}</p>
<b>${c.code}</b>
</div>
`;

box.appendChild(div);

});

}

function saveCookie(){

const date=new Date();

date.setHours(date.getHours()+3);

document.cookie="colors="+encodeURIComponent(JSON.stringify(colors))
+";expires="+date.toUTCString()
+";path=/";

}

function loadColors(){
    const cookie=document.cookie.split("; ").find(row=>row.startsWith("colors="));

    if(cookie){
        colors=JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    }
    else{
        colors=[...defaultColors];
        saveCookie();
        }
        render();
}