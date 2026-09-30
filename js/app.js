document.documentElement.classList.add('js');
const svgNamespace = 'http://www.w3.org/2000/svg';

// Render the locally bundled Lucide icon nodes without a network dependency.
function renderIcon(placeholder, name) {
  const nodes = window.PORTFOLIO_ICONS?.[name];
  if (!nodes) return;
  const svg = document.createElementNS(svgNamespace, 'svg');
  const attributes = {
    viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
    'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    'aria-hidden': 'true', focusable: 'false',
    class: `icon ${placeholder.getAttribute('class') || ''}`.trim(),
  };
  Object.entries(attributes).forEach(([key, value]) => svg.setAttribute(key, value));
  nodes.forEach(([tag, attrs]) => {
    const node = document.createElementNS(svgNamespace, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    svg.append(node);
  });
  placeholder.replaceWith(svg);
  return svg;
}

document.querySelectorAll('[data-icon]').forEach(node => renderIcon(node, node.dataset.icon));
document.querySelector('#year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const themePicker = document.querySelector('.theme-picker');
const mobileViewport = window.matchMedia('(max-width: 720px)');

function setMenu(open) {
  if (open) themePicker.open = false;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.hidden = mobileViewport.matches && !open;
  renderIcon(menuButton.querySelector('.icon'), open ? 'X' : 'Menu');
}

setMenu(false);
themePicker.addEventListener('toggle', () => {
  if (themePicker.open) setMenu(false);
});
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileViewport.addEventListener('change', () => setMenu(false));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.composedPath().includes(document.querySelector('.site-header'))) setMenu(false);
});

const navigationLinks = [...navigation.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

const copyButton = document.querySelector('.copy-email');
const toast = document.querySelector('.toast');
let toastTimeout;

function notify(message) {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

copyButton.addEventListener('click', async () => {
  const email = document.querySelector('.contact-email > a').getAttribute('href').slice(7);
  try {
    await navigator.clipboard.writeText(email);
    notify('Email address copied.');
  } catch {
    notify('Could not copy. Email me at ' + email);
  }
});
