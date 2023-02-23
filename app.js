var searchBtn = document.querySelector('.search-box__btn')

searchBtn.addEventListener('click', function () {
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling)
    this.previousElementSibling.focus()
})
