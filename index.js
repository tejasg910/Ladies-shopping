const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const close  = document.getElementById('closebutton');

menu.addEventListener('click', ()=>{
    console.log('clicked');
    navbar.classList.toggle('none');

    if(navbar.classList.contains('none')){

    }
    else{
        navbar.classList.add('show')
        menu.style.display = 'none';

    }

})

close.addEventListener('click', ()=>{
    navbar.classList.toggle('none');


        // navbar.classList.add('show')
        setTimeout(() => {
            
            menu.style.display = 'block';
        }, 500);
    
})



