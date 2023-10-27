const btn = document.getElementById('btn')
const metn = document.getElementById('metn')

function mytext() {
    if (metn.innerText == "") {
        metn.innerText="sevinc"
    }else{
        metn.innerText = ""
    }
   
}
btn.addEventListener('click', mytext)
