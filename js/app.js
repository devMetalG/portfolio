const navOptions = document.querySelector('.nav-right')
const actionButton = document.querySelector('.action-button')
const openButton = document.querySelector('.visible')
const closeButton = document.querySelector('.hide')
document.addEventListener('DOMContentLoaded', () => {
  actionButton.addEventListener('click', toggleMenu)
})

function toggleMenu(){
  if (navOptions.classList.contains('show-options')) {
    navOptions.classList.remove('show-options')
    closeButton.style.display = 'none'
    openButton.style.display = 'inline-block'
  } else {
    navOptions.classList.add('show-options')
    closeButton.style.display = 'inline-block'
    closeButton.classList.remove('hide')
    openButton.style.display = 'none'
  }
}