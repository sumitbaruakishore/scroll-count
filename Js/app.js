const backToTop = document.querySelector('.backToTop')
const body = document.querySelector('body')
const progressBar = () => {
    const totalHeight = body.clientHeight - window.innerHeight
    const scrollPosition = window.scrollY
    const percentage = (100 / totalHeight) * scrollPosition
     
    if(percentage > 10){
        backToTop.classList.add('active')
    }
    else
    {
        backToTop.classList.remove('active')
    }

    backToTop.style.backgroundImage = `conic-gradient(dodgerblue 0% ${percentage}%, #ccc 0% 100%)`
}

window.addEventListener('scroll', progressBar)


backToTop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})