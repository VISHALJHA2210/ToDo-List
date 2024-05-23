const inputBox=document.getElementById('ip');
const list=document.getElementById('list-items');

function addtask(){
    if(inputBox.value==''){
        alert('You must enter a task');
    }
    else{
        let task=document.createElement('li');   
        task.innerHTML=inputBox.value;
    
        let cross=document.createElement('span');
        cross.innerHTML='\u00d7';
        task.appendChild(cross);

        list.appendChild(task);
    }
    inputBox.value='';
    saveData();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML= localStorage.getItem("data");
}

showData();