var myNodeList = document.getElementsByTagName("li")
var index
for (index = 0; index < myNodeList.length; index++) {
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myNodeList[index].appendChild(span)
}

// Öğeleri tamamen kapatma

var close = document.getElementsByClassName("close")
var index
for (index = 0; index < close.length; index++) {
    close[index].onclick = function () {
        var div = this.parentElement
        div.style.display = "none"
    }
}

// Checked ekleme

var list = document.querySelector('ul');
list.addEventListener('click', function (element) {
    if (element.target.tagName === 'LI') {
        element.target.classList.toggle('checked');
    }
}, false);

// Ekle butonuna basınca yeni elemanı listeye ekleme

function newElement() {
    var liDOM = document.createElement("li")
    var inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    liDOM.appendChild(t)
    if (inputValue === "") {
        alert("Listeye bos ekleme yapamazsiniz!")
    } else {
        document.getElementById("list").appendChild(liDOM)
        alert("Listeye eklendi.")
    }
    document.getElementById("task").value = ""

    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    liDOM.appendChild(span)

    for (index = 0; index < close.length; index++) {
        close[index].onclick = function () {
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}