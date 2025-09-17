const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')

let index = 0 // vị trí hiện tại
const total = commentItem.length
let translateY = 0

next.addEventListener('click', function(event) {
    event.preventDefault()
    if (index < total - 1) {
        index++
        translateY -= 400
        comment.style.transform = `translateY(${translateY}px)`
    }
})

prev.addEventListener('click', function(event) {
    event.preventDefault()
    if (index > 0) {
        index--
        translateY += 400
        comment.style.transform = `translateY(${translateY}px)`
    }
})
