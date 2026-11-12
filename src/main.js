import './style.css'
import { fetchChannels } from './services/api.js';

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
}


document.addEventListener('DOMContentLoaded', app);