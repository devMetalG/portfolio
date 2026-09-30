// Loaded before CSS so a saved preference is applied before the first paint.
(() => {
  const storageKey = 'portfolio.theme';
  const modes = ['system', 'light', 'dark'];
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let mode = 'system';

  function normalize(value) {
    return modes.includes(value) ? value : 'system';
  }

  try {
    mode = normalize(localStorage.getItem(storageKey));
  } catch {
    // Storage may be unavailable; the current visit can still change themes.
  }

  function applyTheme() {
    const theme = mode === 'system' ? (systemTheme.matches ? 'dark' : 'light') : mode;
    root.dataset.theme = theme;
    root.dataset.themeMode = mode;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#151916' : '#fcfcfa';
    document.querySelectorAll('input[name="theme"]').forEach(input => {
      input.checked = input.value === mode;
    });
  }

  applyTheme();
  systemTheme.addEventListener('change', () => {
    if (mode === 'system') applyTheme();
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    mode = normalize(event.newValue);
    applyTheme();
  });

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    const picker = document.querySelector('.theme-picker');
    const trigger = picker.querySelector('summary');

    picker.addEventListener('change', event => {
      if (!event.target.matches('input[name="theme"]')) return;
      mode = normalize(event.target.value);
      applyTheme();
      try {
        localStorage.setItem(storageKey, mode);
      } catch {
        // Preserve the chosen theme for this visit when persistence is blocked.
      }
    });
    document.addEventListener('click', event => {
      if (!event.composedPath().includes(picker)) picker.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && picker.open) {
        picker.open = false;
        trigger.focus();
      }
    });
    picker.addEventListener('focusout', event => {
      if (!picker.contains(event.relatedTarget)) picker.open = false;
    });
  });
})();
