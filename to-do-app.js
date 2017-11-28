function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')

    function createNewToDo() {
      if(!newToDoText.value){ return; }

      toDos.push({
        title: newToDoText.value,
        complete: false
      });

      toDoList.textContent = '';

      function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDos.forEach(function(toDo){
          const newToDo = document.createElement('li');

          const checkbox = document.createElement('input');
          checkbox.type = "checkbox";

          const button = document.createElement('input');
          button.value = 'Remove';

          const title = document.createElement('span');
          title.textContent = toDo.title;

          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);
          newLi.appendChild(button);
        });
    }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      console.log('ran')
    });

    }

}

window.onload = function () {
  onReady();
}
