
//Função que adiciona tarefa
function addTask() {

    //titulo da tarefa
    const input = document.querySelector("#tasks");
    const taskTitle = input.value;

    if(taskTitle) {
        //clona o templante
        const templante = document.querySelector(".templante");
        const newTask = templante.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes desnecessarias
        newTask.classList.remove("templante");
        newTask.classList.remove("hide");

        //adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //adicionar evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        //adicionar evento para completar
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        });

        //limpa o texto
        document.querySelector("#tasks").value = ""
    };
};

//função para remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(task) {
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
    /*O toggle faz com que o done seja adicionado
    cas não tenha e seja removido caso tenha, ou seja,
    faz o serviço contrario*/
}


//evento de adicionar tarefa
const addBtn = document.querySelector("#add-button");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    //Cancela o evento se for cancelável, sem parar a propagação do mesmo.

    addTask()
});