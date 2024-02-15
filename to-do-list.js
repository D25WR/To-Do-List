function addTask() {
    var input = document.getElementById("taskInput");
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var task = document.createTextNode(input.value);
    
    li.appendChild(task);
    ul.appendChild(li);
    
    var deleteBtn = document.createElement("span");
    var deleteIcon = document.createTextNode("\u00D7");
    
    deleteBtn.className = "delete";
    deleteBtn.appendChild(deleteIcon);
    
    deleteBtn.onclick = function() {
      ul.removeChild(li);
    };
    
    li.appendChild(deleteBtn);
    
    var updateBtn = document.createElement("span");
    var updateIcon = document.createTextNode("\u270D");
    
    updateBtn.className = "update";
    updateBtn.appendChild(updateIcon);
    
    updateBtn.onclick = function() {
      var newText = prompt("Enter updated task:", input.value);
      if (newText) {
        task.textContent = newText;
      }
    };
    
    li.appendChild(updateBtn);
    
    input.value = "";
  }
  