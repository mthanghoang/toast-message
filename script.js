function toast({
    title = '',
    message = '',
    type = 'info'
}
) {
    const toastContainer = document.getElementById('toast-container')
    const toast = document.createElement('div')
    const clearId = setTimeout(
        function() {
            toastContainer.removeChild(toast)
        },
        4000
    )

    toast.addEventListener('click', function(event) {
        console.log(event.target)
        if (event.target.closest('.toast__close')) {
            toastContainer.removeChild(toast)
            console.log("close")
            clearTimeout(clearId)
        }
    })

    toast.classList.add('toast', `toast--${type}`)
    toast.style.animation = 'SlideIn .5s ease forwards, FadeOut linear 1s 3s forwards'
    const icons = {
        success: 'fa-solid fa-circle-check',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-circle-exclamation'
    }
    const icon = icons[type]
    toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__message">${message}</p>
    </div>
    <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
    </div>
`
    toastContainer.appendChild(toast)
    
}

function successToast() {
    toast({
        title: 'Success',
        message: 'Anyone with access can view your invited visitors.',
        type: 'success'
    })
}
function infoToast() {
    toast({
        title: 'Info',
        message: 'Anyone with access can view your invited visitors.',
        type: 'info'
    })
}
function warningToast(){
    toast({
        title: 'Warning',
        message: 'Anyone with access can view your invited visitors.',
        type: 'warning'
    })
}