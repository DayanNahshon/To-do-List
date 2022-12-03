document.querySelector('#push').addEventListener("click", ()=> {
    // Adding validation for empty input field
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task!")
    }
    else{
        // Adding a new task
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Deleting a task
        let current_tasks = document.querySelectorAll(".delete");
        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].addEventListener("click", ()=>{
                current_tasks[i].parentNode.remove(); // Remove the parent node of the delete button = div .task
            })
        }

        // Crossing out a completed task
        let tasks = document.querySelectorAll(".task");
        for(let i = 0; i < tasks.length; i++){
            tasks[i].addEventListener("click", ()=>{
                tasks[i].classList.toggle("completed") // The toggle method allows to add or remove a class name based on the current class attribute value.
            })
        }

        // Clearing input field after each entry
        document.querySelector("#newtask input").value = "";
    }
})