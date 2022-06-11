// grab icons

const tabItems = document.querySelectorAll('.tab-item');

const tabContentItems = document.querySelectorAll('.tab-content-item');

// loop through tabitems wich is a nodelist basiclly our icons

// select tab item with a function 

function selectItem(e) {
//call a function that removes all the previous borders before our new border
          removeBorder();
          removeShow();
         //add border to current tab
         this.classList.add('tab-border');
         // Grab content item from DOM
         const tabContentItem = document.querySelector(`#${this.id}-content`);
         //add showclass
         tabContentItem.classList.add('show');
}

// create our removeBorder function 
// then we hide content inittially with css

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

//remove showclasses

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}


tabItems.forEach(item => item.addEventListener('click',selectItem));

