document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));

  // Navbar links
  const loginItem = document.getElementById("loginItem");
  const profileItem = document.getElementById("profileItem");
  const logoutItem = document.getElementById("logoutItem");

  if (isLoggedIn && user) {
    // Hide login, show profile + logout
    if (loginItem) loginItem.style.display = "none";
    if (profileItem) profileItem.style.display = "inline-block";
    if (logoutItem) logoutItem.style.display = "inline-block";

    const profileLink = document.getElementById("profileLink");
    if (profileLink) profileLink.textContent = Profile;
  } else {
    // Show login, hide profile + logout
    if (loginItem) loginItem.style.display = "inline-block";
    if (profileItem) profileItem.style.display = "none";
    if (logoutItem) logoutItem.style.display = "none";
  }
});

// ✅ Global logout function
function logoutUser() {
  localStorage.removeItem("loggedIn");
  alert("You’ve been logged out!");
  window.location.href = "login.html";
}
