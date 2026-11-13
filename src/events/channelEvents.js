import { channelCard } from "../ui/channelCard.js";
import { channelDescription, channelPreview } from "../ui/preview.js";

export function eventContainer(){
const toggleBtn = document.getElementById('toggleBtn');
const appContainer = document.getElementById('app-container');
// const collapse = 'grid '.split(' ');

    toggleBtn.addEventListener('click', ()=>{
        appContainer.classList.toggle('grid-cols-[70px_1fr]');
    })
}

const categoryCardContainer = document.getElementById("categories-channels")

export function categoryEvent(channels){
    categoryCardContainer.addEventListener('click', (e)=>{
        
        const categoryCard = e.target.closest("[data-id]");

        if(!categoryCard){
            return;
        }

        const selectedCategory = categoryCard.dataset.id;
        
        const filtredChannels = channels.filter(channel =>{
            return channel.category === selectedCategory
        });

        channelCard(filtredChannels);
        toggleMenu()
        
    })
    
}

const backBtn = document.getElementById('back-btn');

function toggleMenu(){
    if(categoryCardContainer){
        categoryCardContainer.style.display = 'none';
        document.getElementById('channels-container').style.display = ''
        backBtn.classList.remove('hidden');
    }
    if(backBtn){
        backBtn.addEventListener('click', ()=>{
        categoryCardContainer.style.display = '';
        document.getElementById('channels-container').style.display = 'none';
        })
    }      
}

// function returnCatMenu(){
//     backBtn.classList.remove('hidden');
// }

const channelsContainer = document.getElementById("channels-container");

export function channelSelectionEvent(channels){
    channelsContainer.addEventListener('click', (e)=>{
        
        const selectCard = e.target.closest("[data-id]");

        if(!selectCard){
            return;
        }

        
        const selectedChannels = channels.find(channel =>{
            return channel.id === selectCard.dataset.id
        });

        if(selectedChannels){
            channelDescription(selectedChannels);
            channelPreview(selectedChannels)
        }
        
    })
    
}