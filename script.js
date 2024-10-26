// Get the cookie consent container
const cookieConsent = document.getElementById('cookie-consent');

// Check if cookies are already accepted
if (!getCookie('cookie-consent')) {
  // Display the cookie consent container
  cookieConsent.style.display = 'block';
} else {
  // Hide the cookie consent container
  cookieConsent.style.display = 'none';
}

// Agree button
document.getElementById('agree-btn').addEventListener('click', () => {
  // Set cookie consent cookie
  setCookie('cookie-consent', 'accepted', 365);
  // Hide the cookie consent container
  cookieConsent.style.display = 'none';
});

// Close button
document.getElementById('close-btn').addEventListener('click', () => {
  // Hide the cookie consent container
  cookieConsent.style.display = 'none';
});

// Helper functions
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 86400 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
