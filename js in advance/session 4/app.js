// [
//     "id1" => 'element',
//     "id2" => 'element',
//     "id3" => 'element',
//     "id4" => 'element',
// ]

// ************* querying ************ //
// 1: getElementById
// const pElement = document.getElementById('main')
// console.log(pElement)

// 2: querySelector
// const pElement = document.querySelector('div.final')
// console.log(pElement)
// 3: querySelectorAll
// const pElements = document.querySelectorAll('p.main') 
// console.log(pElements)

// ***** Create & render Elements **** //
// 1: create element
const element = document.createElement('h1')
// 2: control attributes

// setAttribute
element.setAttribute('id', 'header')
element.setAttribute('data', 'bla bla bla')
// element.setAttribute('class', 'main header primary')
// getAttribute

// console.log(element.getAttribute('data'))
// removeAttribute
element.removeAttribute('data')

// 3: control classes

// add
element.classList.add('main', 'header', 'primary')
// remove
element.classList.remove('main')
// toggle
element.classList.toggle('header')
// contains
// console.log(element.classList.contains('primary'))


// 4: control content
// => textContent
// => innerText
// => innerHTML

element.textContent = 'Hello '


// 5: child control
const spanElement = document.createElement('span')
spanElement.textContent = 'World'

element.appendChild(spanElement)


console.log(element)


// 6: append element to document or Other Element in Document
// document.body.appendChild(div)

document.body.appendChild(element)
// document.body.prepend(element)

// 7: Event Control

element.addEventListener('mouseenter', () => {
    console.log('Header Hovered')
})

element.addEventListener('mouseleave', () => {
    console.log('Header Un Hovered')
})
