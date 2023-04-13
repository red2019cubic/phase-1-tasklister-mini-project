document.addEventListener("DOMContentLoaded", (e) => {
  // your code here

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.new_task_description.value);
    addToTaskList(e.target.new_task_description.value);
    form.reset();
  });
});

function addToTaskList(newTask) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.style.backgroundColor = "red";
  btn.addEventListener("click", deleteTask);
  p.textContent = `${newTask} `;
  p.appendChild(btn);
  console.log(p);
  document.querySelector("#list").appendChild(p);
}

function deleteTask(task) {
  document.querySelector("p").remove();
}
