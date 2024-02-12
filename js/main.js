window.onload = ()=>{
    // Mobile Nav Code
    const navToggler = document.querySelector('#nav-toggler-btn');
    const navTogglerIcon = navToggler.querySelector('i');
    const navbar = document.querySelector('#navbar');

    if(navToggler){
        navToggler.addEventListener('click', (event)=>{
            event.preventDefault();

            navbar.classList.toggle('active');
            navTogglerIcon.classList.toggle('fa-bars');
            navTogglerIcon.classList.toggle('fa-times');
        });
    }
}