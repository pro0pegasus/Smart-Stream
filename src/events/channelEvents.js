
export function eventContainer(){
const toggleBtn = document.getElementById('toggleBtn');
const appContainer = document.getElementById('app-container');
// const collapse = 'grid '.split(' ');

    toggleBtn.addEventListener('click', ()=>{
            appContainer.classList.toggle('grid-cols-[70px_1fr]');
            
    })
}