var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
itemList.addEventListener('click', editItem);
//var i=localStorage.length;
var i=Math.floor(Math.random()*(1000-1))+1
console.log(i)
function addItem(e){
    e.preventDefault();
   // console.log('hi')
     i+=1; 
     //console.log(i)
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
    var newItem2 = document.getElementById('item2').value;
    let form = {};
	form.expense = newItem;
	form.description = newItem1;
    form.category=newItem2;
    let f = JSON.stringify(form);
	window.localStorage.setItem(i, f);
    // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  li.id=i;
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
 // li.appendChild(document.createTextNode(' '));
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newItem2));
  var spanBtn=document.createElement('span');
  spanBtn.className = 'pull-right';
  li.appendChild(spanBtn);
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-warning btn-sm float-right delete';
  editBtn.appendChild(document.createTextNode('Edit Expense'));
  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete Expense'));
  // Append button to li
  spanBtn.appendChild(deleteBtn);
  spanBtn.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
  
}

const showExpenses1=()=>{
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            var f=JSON.parse(localStorage.getItem(key))
            console.log(f.expense,f.description,f.category)
            // Create new li element
           // j++;
      var li = document.createElement('li');
      // Add class
      li.className = 'list-group-item';
      li.id=key;
      // Add text node with input value
      li.appendChild(document.createTextNode(f.expense));
      li.appendChild(document.createTextNode(" "));
     // li.appendChild(document.createTextNode(' '));
      li.appendChild(document.createTextNode(f.description));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(f.category));
      var spanBtn=document.createElement('span');
      spanBtn.className = 'pull-right';
      li.appendChild(spanBtn);
      var editBtn = document.createElement('button');
      editBtn.className = 'btn btn-warning btn-sm float-right warning';
      editBtn.appendChild(document.createTextNode('Edit Expense'));
      // Create del button element
      var deleteBtn = document.createElement('button');
      // Add classes to del button
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      // Append text node
      deleteBtn.appendChild(document.createTextNode('Delete Expense'));
      // Append button to li
      spanBtn.appendChild(deleteBtn);
      spanBtn.appendChild(editBtn);
      // Append li to list
      itemList.appendChild(li);
          }
      }
    }
    showExpenses1();
    function removeItem(e){
        if(e.target.classList.contains('delete')){
          if(confirm('Are You Sure?')){
            var li = e.target.parentElement.parentElement;
            var idz=li.id;
            console.log(li)
            itemList.removeChild(li);
            let f1 = window.localStorage.getItem(idz);
            window.localStorage.removeItem(idz)
            //console.log(JSON.parse(f1));
          }
        }
      }
 function editItem(e){
    if(e.target.classList.contains('warning')){
        var li=e.target.parentElement.parentElement;
        console.log(li)
        var idz=li.id;
        console.log(idz)
        var name1=document.getElementById(idz);
        console.log(name1.firstChild.textContent)
        document.getElementById('item').value=name1.firstChild.textContent;
        document.getElementById('item1').value=name1.firstChild.nextSibling.nextSibling.textContent;
        document.getElementById('item2').value=name1.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
        itemList.removeChild(li);
        //let f1 = window.localStorage.getItem(idz);
        window.localStorage.removeItem(idz)
    }

 }   
    