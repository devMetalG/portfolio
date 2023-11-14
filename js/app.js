const openButton = document.querySelector('.open-button')
const closeButton = document.querySelector('.close-button')
document.addEventListener('DOMContentLoaded', () => {
  openButton.addEventListener('click', addX)
  closeButton.addEventListener('click', removeX)
})

function addX(e){
  equalSpan = document.querySelector('.add')
  console.log(equalSpan)
  console.log(e.target.textContent)
  if (e.target.textContent == 'equal') {
    openButton.classList.add('hide')
    openButton.classList.remove('visible')
    closeButton.classList.add('visible')
    closeButton.classList.remove('hide')
    e.target.textContent = 'close'
    console.log(e.target.textContent)
    
  }
}

function removeX(e){
  removeSpan = document.querySelector('.remove')
  console.log(removeSpan)
  console.log(e.target.textContent)
  if (e.target.textContent == 'close') {
    openButton.classList.add('visible')
    openButton.classList.remove('hide')
    closeButton.classList.add('hide')
    closeButton.classList.remove('visible')
    removeSpan.classList.add('hide')
    removeSpan.classList.remove('visible')
    e.target.textContent = 'equal'
    console.log(e.target.textContent)
  }
}