
let tasks = []

function del() {
    let elem = window.event.target.className
    let div = document.querySelector(`div.${elem}`)
    div.remove()
}

function addTask() {
    let newTask = document.querySelector("input#new-task").value
    let mainDiv = document.querySelector("div#out")
    // new elements
    //div
    let div = document.createElement('div')
    div.setAttribute('class', `task-${tasks.length}`)

    //label 
    let label = document.createElement('label')
    label.setAttribute('for', `task${tasks.length}`)
    label.innerText = `  ${newTask}  `

    //button
    let btn = document.createElement('input')
    btn.setAttribute('type', 'button')
    btn.setAttribute('value', '❌')
    btn.setAttribute('class', `task-${tasks.length}`)
    btn.setAttribute('onclick', `del()`)

    // adding to page
    div.appendChild(label)
    div.appendChild(btn)

    mainDiv.appendChild(div)
}