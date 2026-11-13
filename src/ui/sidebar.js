
const categoryCardContainer = document.getElementById("categories-channels")


function categories(channels){

    const allCategories = []

    channels.forEach(channel => {
        if(!allCategories.includes(channel.category)){
            allCategories.push(channel.category);
        }
    });

    return allCategories;
}

export function channelCategories(channels){

    const filtredChannels = categories(channels)

    categoryCardContainer.innerHTML = '';
    
    const card = filtredChannels.map(category =>{
        return `
            <article data-id=${category} class = "flex flex-row items-center gap-2 my-2 p-2 bg-[#050A1E] border rounded-lg border-purple-400 shrink-0 cursor-pointer" >
                <div>
                    <h3>${category}</h3>
                </div>
            </article>
        `
    }).join('')

    categoryCardContainer.innerHTML = card;
}   