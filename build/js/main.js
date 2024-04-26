const initApp = () => {
    const sideBtn = document.getElementById('sidebar')
    const sideMenu = document.getElementById('sidemenu')

    const toggleMenu = () => {
        sideMenu.classList.toggle('hidden')
        sideMenu.classList.toggle('flex')
        sideBtn.classList.toggle('toggle-btn')
    }

    sideBtn.addEventListener('click', toggleMenu)
    sideMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)