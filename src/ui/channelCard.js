const channelCardContainer = document.getElementById("channels-container")

export function channelCard(channels){
    
    channelCardContainer.innerHTML = '';

    const card = channels.map(channel =>{
        return `
            <article data-id="${channel.id}" class="flex flex-row items-center gap-2 my-2 p-2 bg-[#050A1E] border rounded-lg border-purple-400 shrink-0 cursor-pointer" >
                <img src=${channel.logo} class="rounded-lg">
                <div>
                    <h3>${channel.name}</h3>
                </div>
            </article>
        `
    }).join('')

    channelCardContainer.innerHTML = card;
}   