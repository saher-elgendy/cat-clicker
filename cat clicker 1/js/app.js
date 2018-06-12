(() => {
        const imgContainer = document.querySelector('.img-cont');
        const clickNumCont = document.querySelector('.click-num');
        const currentCat = document.querySelector('.cat-img')
        const catList = document.getElementById('select');
        // array of cats objects
        const cats = [
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
         // a functionto create a list of cats names 
       const catsListCreate = () => {     
         cats.forEach(cat => {
           const option = document.createElement('option');
           option.value = cat.src;
           catList.appendChild(option);
           // change the name to the selected cat name
           option.textContent = cat.name;
         });
       }
       // this function change the cat image and namein response to selection from the list 
       const chooseCat = (e) => {
         const img = document.querySelector('.cat-img');
         const catName = document.querySelector('.cat-name');
         const target = e.target;
         
         let selectedCat = target.selectedIndex;
         // change the cat image to selected one
         img.src = target.value;
         // changing the name
         catName.textContent = target.options[selectedCat].text;
         // showing the the number of clicks of selected cat
         clickNumCont.innerHTML = cats[selectedCat].clicks; 
       }
       // this function update number of clicks
       const increment = (e) => {
         cats.forEach(cat => {
           if(cat.src === currentCat.getAttribute('src')){
             cat.clicks++;
             clickNumCont.innerHTML = cat.clicks;
           }
         })
       }
       
       const allList = catsListCreate()
    
       catList.onchange = chooseCat;
   
      currentCat.addEventListener('click', increment);      
})();
   
  


