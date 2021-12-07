function newTask(){

    var taskDescr  = document.getElementById("name").value;
    
    createTask(taskDescr);

    updateSecreen();
}
function updateSecreen(){
    var list = "<ul>"
    tasks.forEach(task => {
        list += "<li id-data= " + task.id  + ">"+task.data.description + "</li>";
        list += "<button onclick = removeTask(this) id-data ="+ task.id +">Apagar </button>"
        });
        
        list += "</ul>";
        

        document.getElementById("list").innerHTML = list;

        taskDescr  = document.getElementById("name").value = "";
}
function removeTask(element){
    //console.log(element);

    var id = element.getAttribute("id-data");

    deleteTask(id);

    updateSecreen();


}

loadTasks();
updateSecreen();