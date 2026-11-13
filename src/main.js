import './style.css'
import { fetchChannels } from './services/api.js';
import { eventContainer } from './events/channelEvents.js';

// function lisntners(){
//   const refreshFetch = document.getElementById('refresh-fetch');

//   if(refreshFetch){
//     refreshFetch.addEventListener('click', ()=>{
//       fetchChannels();
//       console.log('clicked')
//     })
//   }

// }

function app(){
  fetchChannels();
  eventContainer();
  categoriesChannels()
}


document.addEventListener('DOMContentLoaded', app);