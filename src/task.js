var tasks = [];

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

}

function deleteTask(id){
    //console.log(id);
    tasks = tasks.filter(task => task.id != id);

    updateSecreen();


}