function newTask(){

    var taskDescr  = document.getElementById("name").value;
    
    createTask(taskDescr);

    updateSecreen();
}
function updateSecreen(){
    var list = "<div class='item-container'>"
    tasks.forEach(task => {
        list += "<div class='item' id-data= " + task.id  + "><span class='descr'>"+task.data.description + "</span>";
        list += "<i class='fas fa-trash-alt fa-3x apagar' onclick = removeTask(this) id-data ="+ task.id +"></i> </div>"
        });
        
        list += "</div>";
        

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