//gotop btn

window.onscroll=function(){
    if(document.documentElement.scrollTop > 500){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

//nav

document.querySelector('.contenedor .menu  #acercade')
.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({
        top:400,
        behavior:'smooth'
    })
})
document.querySelector('.contenedor .menu  #experiencia')
.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({
        top:920,
        behavior:'smooth'
    })
})
document.querySelector('.contenedor .menu  #contacto')
.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({
        top:1800,
        behavior:'smooth'
    })
})