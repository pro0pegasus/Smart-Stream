import { channelCard } from "../ui/channelCard.js";
import { channelDescription, channelPreview } from "../ui/preview.js";
import { channelCategories } from "../ui/sidebar.js";

export function eventContainer(){
const toggleBtn = document.getElementById('toggleBtn');
const appContainer = document.getElementById('app-container');
// const collapse = 'grid '.split(' ');

    toggleBtn.addEventListener('click', ()=>{
        appContainer.classList.toggle('grid-cols-[70px_1fr]');
    })
}

const categoryCardContainer = document.getElementById("categories-channels")
const channelsContainer = document.getElementById("channels-container");
const backBtn = document.getElementById('back-btn');
const searchInput = document.getElementById('filter')

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
        
        categoryCardContainer.classList.add('hidden');
        channelsContainer.classList.remove('hidden')
        backBtn.classList.remove('hidden');
        
    })

    backBtn.addEventListener('click', ()=>{
        categoryCardContainer.classList.remove('hidden');
        channelsContainer.classList.add('hidden')
        backBtn.classList.add('hidden');
        })
}


// function toggleMenu(){
//     if(categoryCardContainer){
//         categoryCardContainer.style.display = 'none';
//         document.getElementById('channels-container').style.display = ''
//         backBtn.classList.remove('hidden');
//     }
//     if(backBtn){
//         backBtn.addEventListener('click', ()=>{
//         categoryCardContainer.style.display = '';
//         document.getElementById('channels-container').style.display = 'none';
//         })
//     }      
// }

// function returnCatMenu(){
//     backBtn.classList.remove('hidden');
// }


export function channelSelectionEvent(channels){
    channelsContainer.addEventListener('click', (e)=>{
        
        const selectCard = e.target.closest("[data-id]");
        console.log(selectCard)

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

export function searchEvent(channels){
    searchInput.addEventListener('input', (e)=>{

        const searchedTerm = e.target.value.toLowerCase().trim();

        if(!searchedTerm){
            channelCategories(channels)

            categoryCardContainer.classList.remove('hidden');
            channelsContainer.classList.add('hidden');

            channelsContainer.innerHTML = '';

            backBtn.classList.add('hidden');
            return;
        }

        const filtredCategories = channels.filter(channel =>{
            return channel.category.toLowerCase().includes(searchInput)
        })

        const filtredChannels = channels.filter(channel =>{
        return channel.name.toLowerCase().includes(searchedTerm) || toString(channel.channelNumber).includes(searchedTerm)
        })

        channelCategories(filtredCategories);
        channelCard(filtredChannels);

        categoryCardContainer.classList.toggle('hidden', filtredCategories.length === 0)
        channelsContainer.classList.toggle('hidden', filtredChannels.length === 0)

        if(filtredCategories.length === 0 && filtredChannels.length === 0){
            categoryCardContainer.innerHTML = `
                <p>No result found</p>
            `
            categoryCardContainer.classList.remove('hidden')
        }
        backBtn.classList.add('hidden');
    })

}