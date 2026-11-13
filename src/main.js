import './style.css'
import { fetchChannels } from './services/api.js';
import { eventContainer, categoryEvent, channelSelectionEvent } from './events/channelEvents.js';
// import { channelCard } from './ui/channelCard.js';
import { channelCategories } from './ui/sidebar.js';
import { channelDescription } from './ui/preview.js';



async function app(){
  const channels = await fetchChannels();
  eventContainer();

  if(channels){
    // channelCard(channels)
    channelCategories(channels);
    categoryEvent(channels)
    channelDescription(channels);
  }

  
  
}


document.addEventListener('DOMContentLoaded', app);