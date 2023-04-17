document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submitButton = document.querySelector("#submit-button")
  const taskInput = document.querySelector("#new-task-description")
  const toDoListUlElement = document.querySelector("#tasks")
  


  submitButton.addEventListener("click", function(e){
    e.preventDefault()
  })
  
  let taskInputValue = "" ;

  taskInput.addEventListener("input", function(e){
    taskInputValue = taskInput.value
  })

  submitButton.addEventListener("click", function(e){
    if(taskInputValue !== ""){
      const newLiElement = document.createElement("li")
      const newTextNode = document.createTextNode(taskInputValue )
      const buttonElement = document.createElement("button")

      buttonElement.textContent = "X"
    
      newLiElement.appendChild(newTextNode)
      newLiElement.appendChild(buttonElement)

      toDoListUlElement.appendChild(newLiElement)


      buttonElement.addEventListener("click", function(){
        const parentLiNode = buttonElement.parentNode
        const parentUlNode = parentLiNode.parentNode
        parentUlNode.removeChild(parentLiNode)
      })
        
      

      taskInputValue = ""
      taskInput.value = ""


    }
    
  })

  const deleteButtons = document.querySelectorAll(".delete-button")

  
  




});
