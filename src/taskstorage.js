let mystorage = window.localStorage;

let tasks = [];

function idGenerator(){

    var timeStamp = new Date();

    var id = timeStamp.getHours().toString() + 
             timeStamp.getMinutes().toString() +
             timeStamp.getSeconds().toString() +
             timeStamp.getMilliseconds().toString();

    return id;

}

function createTask(taskDescr){ 

    var task = {
        id: idGenerator(),
        data: {
            description: taskDescr
        }
    };

    tasks.push(task);

    mystorage.setItem('tasks', JSON.stringify(tasks));

}

function deleteTask(id){
 
    tasks = tasks.filter(task => task.id != id);

    mystorage.setItem('tasks', JSON.stringify(tasks));

 
}

function loadTasks(){

    let task_str = mystorage.getItem('tasks');

    if(task_str){

        tasks = JSON.parse(task_str);

    }
}