const navOptions = document.querySelector('.nav-right')
const actionButton = document.querySelector('.action-button')
const openButton = document.querySelector('.visible')
const closeButton = document.querySelector('.hide')

const projectsCont = document.querySelector('.main-projects')
const projects = document.querySelectorAll('.view-more-p')
const moreButton = document.querySelector('#more')
const spanMore = document.querySelector('.view-more')
const spanLess = document.querySelector('.hide-p')
document.addEventListener('DOMContentLoaded', () => {
  actionButton.addEventListener('click', toggleMenu)
  moreButton.addEventListener('click', toggleMore)
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

function toggleMore(){
  if (projectsCont.classList.contains('show-options')) {
    projectsCont.classList.remove('show-options')
    spanMore.style.display = 'flex'
    spanMore.classList.add('view-more')
    spanLess.style.display = 'none'
    
    projects.forEach(project => {
      project.classList.add('hide-d')
    })
  } else {
    projectsCont.classList.add('show-options')
    spanLess.style.display = 'flex'
    spanLess.classList.add('view-more')
    spanLess.classList.remove('view-less')
    spanMore.style.display = 'none'
    
    projects.forEach(project => {
      project.classList.remove('hide-d')
    })
  }
}