let uz = document.querySelector('.uzb')
let en = document.querySelector('.en')
let ru = document.querySelector('.ru')
let title = document.querySelector('h1')

uz.addEventListener('click',function(){
title.innerHTML = 'Salom dunyo (:'
})
en.addEventListener('click',function(){
title.innerHTML = 'Hello world (:'
})
ru.addEventListener('click',function(){
title.innerHTML = 'Привет мира (:'
})