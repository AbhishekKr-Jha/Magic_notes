show()
console.log('ok lets do it')
let addBtn=document.getElementById('addBtn')
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById('addTxt')
    let inputtitle=document.getElementById('inputtitle')
let getnotes=JSON.parse(localStorage.getItem('notes'))
let obj={
    note:addTxt.value,
    title:inputtitle.value,
}
if(getnotes==null){
    storenotes=[]
}
else{
    storenotes=getnotes  
}
storenotes.push(obj)
let setItem=localStorage.setItem('notes',JSON.stringify(storenotes))
    addTxt.value=" "
    inputtitle.value=" "
if(storenotes.length!=0){
show()
}

})
function show(){
    getnotes=JSON.parse(localStorage.getItem('notes'))
let divnotes=document.getElementById('notes')
let html=""

    if(getnotes==null){
        storenotes=[]
    }
    else{
        storenotes=getnotes  
    }
    let i=0
    storenotes.forEach(element => {

        html+=`<div id=" " class="card noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}
            </h5>
            <p class="card-text">${element.note}</p>
            <button id="${i}" onclick=deletenote(this.id)  class=" btn btn-primary">Delete note</button>

            </div>
    </div>`
    i++ 
    });  
divnotes.innerHTML=html

}

//deleting a note.................
function deletenote(id){
    // console.log(id)
    getnotes=JSON.parse(localStorage.getItem('notes'))
    if(getnotes==null){
        storenotes=[]
    }
    else{
        storenotes=getnotes  
    }
    storenotes.splice(id,1)
    localStorage.setItem('notes',JSON.stringify(storenotes))
// console.log(storenotes)
    show()
}

//search bar..................


// function searchtext(){
//     e.preventDefault()
//     let searchinput=document.getElementById('searchinput')
// console.log(searchinput.value)


// }

let searchbtn=document.getElementById('searchbtn')
searchbtn.addEventListener("click",function(e){
    let searchinput=document.getElementById('searchinput')
 console.log(searchinput.value)
 searchinput.value=searchinput.value
})








