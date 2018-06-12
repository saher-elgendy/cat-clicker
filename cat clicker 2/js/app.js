 (() => {
	   const model = {
       currentCatSrc: 'images/2.jpg',
       currentName: 'Lucy',
       cats: [
         {
           name: 'Lucy',
           clicks: 0,
           src: 'images/2.jpg'
         },

         {
            name: 'Julia',
            clicks: 0,
            src: 'images/3.jpg'
         },

         {
           name: 'Katie',
           clicks: 0,
           src: 'images/4.jpg' 
         },

         {
            name: 'Judi',
            clicks: 0,
            src: 'images/5.jpg' 
         }   
       ]
     }

     const controller = {
       init: () => {
         catView.render();
         listView.render();
       },
         
       getCat: () => model.currentCatSrc,
           
       

       increment: () =>  {
         model.cats.forEach(cat => {
           if (cat.src === model.currentCatSrc) {
             cat.clicks++;
             catView.updateClickNum(cat);
           }
         });
       },

       getCatName: () => model.currentName,

       changeCat: function(e){
         const target = e.target;
         const selectedCat = target.selectedIndex;
         model.currentCatSrc = target.value;
         model.currentName = target.options[selectedCat].text;
              
         catView.clicksCount.innerHTML = model.cats[selectedCat].clicks;
  
         catView.updateCatView();
        }            
     }

     const catView = {
       render: function() {
         this.img = document.querySelector('.cat-img');
         this.clicksCount = document.querySelector('.click-num');
         this.catName = document.querySelector('.cat-name');

         this.img.src = controller.getCat();
         this.catName.innerHTML = controller.getCatName();
         this.addClickEvent();
       },

       addClickEvent: function() {
         this.img.addEventListener('click', controller.increment);
       },

       updateCatView: function() {   
         this.img.src =  model.currentCatSrc;
         this.catName.innerHTML = model.currentName;  
       },
       
       updateClickNum: function(cat) {
         this.clicksCount.innerHTML = cat.clicks;
       }
    }

     const listView = {
       render: function() {
         this.select = document.querySelector('#select');
        
         model.cats.forEach(cat => {
           let option = document.createElement('option');
           option.value = cat.src;
           option.textContent = cat.name;
           this.select.appendChild(option);
         });

         this.addChangeEvent();
         catView.updateCatView();
       },

       addChangeEvent: function() {  
         this.select.addEventListener('change', controller.changeCat);     
       }   
     }
     
      controller.init();    
})();
