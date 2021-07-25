'use strict';


let formEl=document.getElementById('myform');
let divEl=document.getElementById('mytable');
let tableEl=document.createElement('table');
divEl.appendChild(tableEl);


function saveToLocalStorage(){
    let objectasstring=JSON.stringify(objectarray);
    localStorage.setItem('objectstring',objectasstring)
}
function readFromLocalStorage(){
    let objectread=localStorage.getItem('objectstring');
    let objectasarray=JSON.parse(objectread);
    if(objectasarray!=null){
        objectarray=objectasarray;
    }
}

let selectEl=document.getElementById('Bookprice');
let prices_array=['100', '500', '1000'];
for(let i=0;i<prices_array.length;i++){
    let optionEl=document.createElement('option');
    optionEl.textContent=prices_array[i];
    optionEl.value=prices_array[i];
    selectEl.appendChild(optionEl);
}

function tableHeader(){
    let trEl=document.createElement('tr');
    let thEl1=document.createElement('th');
    thEl1.textContent='  Book name  ';
    trEl.appendChild(thEl1);
    let thEl2=document.createElement('th');
    thEl2.textContent='  Book pages  ';
    trEl.appendChild(thEl2);
    let thEl3=document.createElement('th');
    thEl3.textContent='  price  ';
    trEl.appendChild(thEl3);
    tableEl.appendChild(trEl);

}

tableHeader();

let objectarray=[];

function bookShop(bookname,price){
this.bookname=bookname;
this.price=price;
objectarray.push(this);

}
function randomBookPages(){
    return Math.floor(Math.random()*500)
}
// console.log(randomBookPages());

formEl.addEventListener('submit',renderrow);

function renderrow(event){
    
    event.preventDefault();
    let name=event.target.Bookname.value;
    let price=Number(event.target.Bookprice.value);
    new bookShop(name,price);
    let index=objectarray.length-1;

    let trEl=document.createElement('tr');

    let tdEl1=document.createElement('td');
    tdEl1.textContent=objectarray[index].bookname;
    trEl.appendChild(tdEl1);
    let tdEl2=document.createElement('td');
    tdEl2.textContent=randomBookPages();
    trEl.appendChild(tdEl2);
    let tdEl3=document.createElement('td');
    tdEl3.textContent=objectarray[index].price;
    trEl.appendChild(tdEl3);
    tableEl.appendChild(trEl);


    


    saveToLocalStorage();
}
function renederSavedData(){
    if(objectarray!=null){
        for(let i=0;i<objectarray.length;i++){
            let trEl=document.createElement('tr');
            let tdEl1=document.createElement('td');
            tdEl1.textContent=objectarray[i].bookname;
            trEl.appendChild(tdEl1);
            let tdEl2=document.createElement('td');
            tdEl2.textContent=randomBookPages();
            trEl.appendChild(tdEl2);
            let tdEl3=document.createElement('td');
            tdEl3.textContent=objectarray[i].price;
            trEl.appendChild(tdEl3);
            tableEl.appendChild(trEl);

        }
    }
}

readFromLocalStorage();
renederSavedData();