var elList, addBtn, counter, newEl, newText, listItems;
 elList = document.getElementById("listItems");
 addBtn = document.getElementById("listButton");
 counter = document.getElementById("counter");
 

console.log(elList, addBtn, counter);


function addItem(e) {
	e.preventDefault();
	newEl = document.createElement("li");
	newText = document.createTextNode("New stuff added to list");
	console.log(newText);
	newEl.appendChild(newText);
	elList.appendChild(newEl);
};

function counterTotal() {
	listItems = elList.getElementsByTagName("li").length;
	counter.innerHTML = listItems;
};

addBtn.addEventListener("click", addItem, false);
elList.addEventListener("DOMNodeInserted", counterTotal, false );

