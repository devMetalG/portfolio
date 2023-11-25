// toggleMenu
const navOptions = document.querySelector('.nav-right')
const actionButton = document.querySelector('.action-button')
const openButton = document.querySelector('.visible')
const closeButton = document.querySelector('.hide')
const navMobile = document.querySelector('.nav-mobile')

// toggleMore
const projectsCont = document.querySelector('.main-projects')
const projects = document.querySelectorAll('.view-more-p')
const moreButton = document.querySelector('#more')
const spanMore = document.querySelector('.view-more')
const spanLess = document.querySelector('.hide-p')

// navButtons
const btnAbout = document.querySelector('.b-about')
const btnProjects = document.querySelector('.b-projects')
const btnContact = document.querySelector('.b-contact')

// BackToTop
const btnBTT = document.querySelector('.btn-btt')

// navButtons mobile
const btnAboutM = document.querySelector('.m-about')
const btnProjectsM = document.querySelector('.m-projects')
const btnContactM = document.querySelector('.m-contact')

// copytoclip
const btnCopy = document.querySelector('.copy-btn')
const toast = document.querySelector('.toast')

document.addEventListener('DOMContentLoaded', () => {
  actionButton.addEventListener('click', toggleMenu)
  
  moreButton.addEventListener('click', toggleMore)
  
  btnAbout.addEventListener('click', goSection)
  btnProjects.addEventListener('click', goSection)
  btnContact.addEventListener('click', goSection)
  
  btnBTT.addEventListener('click', backToTop)

  btnAboutM.addEventListener('click', goSection)
  btnProjectsM.addEventListener('click', goSection)
  btnContactM.addEventListener('click', goSection)

  btnCopy.addEventListener('click', copyToClipboard)
})

function copyToClipboard(){
  const text = 'devmetalg@hotmail.com'

  navigator.clipboard.writeText(text)
  toastAlert('Copied!!')
}

function toastAlert(message) {
  toast.textContent = message
  toast.classList.add('show-t')
  setTimeout(() => {
    toast.classList.remove('show-t')
  }, 3000);
}

window.addEventListener('scroll', function(){
  if (window.scrollY > 500) {
    btnBTT.classList.add('show')
  } else {
    btnBTT.classList.remove('show')
  }
})

function backToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function goSection (e) {
  closeNav()
  e.preventDefault()
  const section = e.target.textContent.toLowerCase()
  const view = document.querySelector(`.${section}`)
  view.scrollIntoView({ behavior: 'smooth' })
}

function closeNav () {
  navMobile.style.right = '-80vw'
  navOptions.classList.remove('show-options')
  closeButton.style.display = 'none'
  openButton.style.display = 'inline-block'
}

function toggleMenu(){
  if (navOptions.classList.contains('show-options')) {
    navOptions.classList.remove('show-options')
    closeButton.style.display = 'none'
    openButton.style.display = 'inline-block'
    navMobile.style.right = '-80vw'
  } else {
    navOptions.classList.add('show-options')
    closeButton.style.display = 'inline-block'
    closeButton.classList.remove('hide')
    openButton.style.display = 'none'
    navMobile.style.right = '0'
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