const sidenavbar = document.querySelector('.navbarside');

function opennavbar() {
    console.log("Opening sidebar");
    sidenavbar.style.display = 'block'; // Show the sidebar
}

function closenavbar() {
    console.log("Closing sidebar");
    sidenavbar.style.display = 'none'; // Hide the sidebar
}
