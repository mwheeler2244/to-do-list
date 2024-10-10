const userInput = document.getElementById('input-task');
const addTask = document.getElementById('btn');
const userList = document.getElementById('task-list');


addTask.addEventListener('click', ()=>{
    let task = userInput.value.trim()
    if(task){ 
    const list = document.createElement('li');
    list.textContent = task
    list.className = 'user-list'
    userInput.value = ''


    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    deleteBtn.className = 'delete-btn'
    deleteBtn.onclick = function(){
        userList.removeChild(list)
    }



    userList.appendChild(list) 
    list.appendChild(deleteBtn)
}



});

userInput.addEventListener('keydown', (e) =>{
    if(e.key ==='Enter'){
        addTask.click()
    }
})