

const channelDescriotionContainer = document.getElementById("channel-description");
const playerContent = document.getElementById("player-content");

export function channelPreview(channel){
    playerContent.innerHTML = `
        <img src="${channel.previewImage}" class="w-full h-full">

        <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
        <i class="fa-solid fa-tv mr-2"></i>
        ${channel.name}
        </div>
    `
}


export function channelDescription(channel){

    const epg = channel.epg || {};

    channelDescriotionContainer.innerHTML = '';

    const description = `
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-xl font-bold">${channel.name}</h2>
                    <p class="text-sm text-gray-400 mt-1">${channel.category}</p>

                    <span class="text-sm text-gray-400 font-semibold">
                    <i class="fa-solid fa-circle text-xs mr-1"></i>
                    LIVE
                    <span>
                </div>

                <div class="border-t border-[##1E2A4A] pt-4">
                    <h3 class="text-sm text-gray-400 mb-2">
                        NOW PLAYING
                    </h3>

                    
                </div>

            </div>
        </div>
    `
    channelDescriotionContainer.innerHTML = description;

}
