document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let myForm=document.querySelector(`form`);
  myForm.addEventListener(`submit`,(e)=>{
 e.preventDefault();
handleToDo(e.target.new_task_description.value);

 myForm.reset();

  }

  )
});


 function handleToDo(todo){
  let myList=document.createElement(`li`);
  let btn =document.createElement(`button`);
  btn.addEventListener(`click`,deleteButton)
  myList.textContent=`${todo} `;
  btn.textContent=` x`;

  myList.appendChild(btn);

  console.log(myList)
  document.querySelector(`#tasks`).appendChild(myList);

 }

 function deleteButton(e){

 e.target.parentNode.remove();

 }

