// Add Function
inputs = (id) => {
  document.getElementById(`addTask${id}`).style.display = "block"
  document.getElementById(`addCardId${id}`).style.display = "none"
}

addtask = (id) => {
  const myULCount = document.getElementById(`myUL${id}`).lastElementChild.id;
  console.log(myULCount,"skfusufi");
  var valueInput = document.getElementById(`tsk${id}`).value;
  var li = document.createElement("li");
  var i = document.createElement("i");
  i.setAttribute("class",`fa fa-edit iconEdit`);
  li.setAttribute("onclick", `modalFunction(${id},${myULCount})`);
  li.setAttribute("id", `myLI${myULCount + 1}`);
  li.innerHTML = valueInput;
  if (valueInput == "") {
    alert("You must write in box");
  } else {
    document.getElementById(`myUL${id}`).appendChild(li);
    document.getElementById(`myUL${id}`).appendChild(i);
    document.getElementById(`tsk${id}`).value = "";
    document.getElementById(`addTask${id}`).style.display = "none";
    document.getElementById(`addCardId${id}`).style.display = "block";
  }

}
// Modal
modalFunction = (listId, taskId) => {
  var modal = document.getElementById("myModal").style.display = "block";
  var getData = document.getElementById(`myLI${taskId}`).innerText;
  console.log(getData, 'data');
  document.getElementById("taskName").innerHTML = getData;

}
btnCancle = () => {
  var modalForm = document.getElementById("myModal");
  modalForm.style.display = "none";
}
// Edit Function