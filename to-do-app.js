function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let button = document.createElement('input');

    button.type = 'button'
    button.value = 'trash'
    button.addEventListener('click', function(event){
      event.target.parentElement.remove();
    })

    checkbox.type = 'checkbox';
    newLi.textContent = title;


    newLi.appendChild(checkbox);
    newLi.appendChild(button);
    toDoList.appendChild(newLi);

    newToDoText.value = ''
  });
}

window.onload = function () {
  onReady();
}
