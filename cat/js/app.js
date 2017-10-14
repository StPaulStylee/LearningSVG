const buttons = document.querySelectorAll('.buttons button');
const cat = document.querySelector('.cat');

buttons.forEach(button => button.addEventListener('click', manageCatClasses));

function manageCatClasses() {
  if(this.getAttribute('data-add')) {
    cat.classList.add(this.getAttribute('data-add'));
  }

  if(this.getAttribute('data-remove')) {
    cat.classList.remove(this.getAttribute('data-remove'));
  }
}
