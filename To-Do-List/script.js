// Assign a random ID to newly generated task as a property value.
// This value will act as an attribute for the actual HTML element.
// [data-id = *random-number*]

// Event listener will target DOM element based on assigned querySelector (pertaining to data-id)
// Remove child with respective data-id.

// To be used in object constructor property (id);
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

// Include somewhere in generate task
task = document.querySelector('task');
task.setAttribute("id", `${objectid}`);

// Event Listener for removing task from DOM.
// Unique to each task in DOM. Task generator will pass object's id as argument to
// deleteTask() and will trigger on click.
function deleteTask (id) {
let removedTask = document.getElementById(id);
tasks.removeChild(removedTask);
}