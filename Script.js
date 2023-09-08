const header=document.querySelector('header')
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY>20)
});



const hamburger=document.querySelector('.hamburger')
const ul=document.querySelector('ul')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    ul.classList.toggle('active')
})
document.querySelectorAll('#navLink').forEach(obj=>{
    obj.addEventListener('click',()=>{
        hamburger.classList.remove('active')
        ul.classList.remove('active')
    })
})