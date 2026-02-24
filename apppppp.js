// let input = document.querySelector("input");
// let button= document.querySelector("button");
// let ul=document.querySelector("ul");   

// let arr=[];
// button.addEventListener('click',function(){
//     let obj = {
//         task:"",
//         isCompleted:false
//     };
//     let value=input.value;
//     if(value.trim()==""){
//         alert("please enter a valid task first");
//     }else{
//     console.log(value);
//     let li = document.createElement("li");
//     li.innerText=value;
//     ul.appendChild(li);
//     input.value="";
//     //inserting into array obj
//     obj.task = value;
//     arr.push(obj);
//     console.log(arr);
//     }
    
// });
let input = document.querySelector("input");
let button= document.querySelector("button");
let ul=document.querySelector("ul");   

let arr=[];

// Load saved tasks
let storeTasks = localStorage.getItem("task");
if (storeTasks) {
    arr = JSON.parse(storeTasks);
    render();
}

button.addEventListener('click',function(){
    let obj = {
        task:"",
        isCompleted:false
    };
    let value=input.value;

    if(value.trim()==""){
        alert("please enter a valid task first");
    }else{
        obj.task = value;
        arr.push(obj);
        console.log(obj); //print
        // save tasks
        localStorage.setItem("task", JSON.stringify(arr));

        input.value="";
        render();
    }
});

function render(){
    ul.innerHTML="";

    arr.forEach(function(obj,index){
        let li = document.createElement("li");
        li.innerText = obj.task + " ";

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        li.appendChild(editBtn);
        li.appendChild(delBtn);
        ul.appendChild(li);

        // edit
        editBtn.addEventListener("click",function(){
            let updatedTask = prompt("Edit your task", arr[index].task);
            if(!updatedTask || updatedTask.trim()=="") return;

            arr[index].task = updatedTask;
            localStorage.setItem("task", JSON.stringify(arr));
            render();
        });

        // delete
        delBtn.addEventListener("click",function(){
            arr.splice(index,1);
            localStorage.setItem("task", JSON.stringify(arr));
            render();
        });
    });
}