const boxes = document.querySelectorAll('.box');
const fill = document.querySelector('.fill');

function dragStart() {
  this.classList.add('hold');
}

function dragEnd() {
  this.classList.remove('hold');
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}
function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.classList.remove('hold', 'hovered');
  //   this.className = 'box' // reminder to className method
  this.append(fill);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

boxes.forEach(box => {
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});
