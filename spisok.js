const button = document.getElementById("button")
let color = 1;
button.addEventListener("click", function () {
    const val = document.getElementById("input").value;
    const liLast = document.createElement('li')
    liLast.innerHTML = val;
    document.getElementById("input").value = ""
    ul.append(liLast)
    color++
    if (color % 2 === 0) {
        document.body.style.cssText = 'color: red '
    } else {
        document.body.style.cssText = 'color: green'
    }
})
