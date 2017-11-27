function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.eventListener('submit', event {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
  });
}

window.onload = function () {
  onReady();
}
