

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

    channelDescriotionContainer.innerHTML = '';

    const description = `
        <div class="flex flex-col gap-2">
            <div class="flex flex-col w-full items-center justify-between gap-4">
                <div class="w-full">
                    <h3 class="text-xl text-gray-400 font-bold">${channel.name}</h3>
                    <p class="text-sm text-gray-400 mt-1">${channel.category}</p>

                    <span class="text-sm text-gray-400 font-semibold">
                    <i class="fa-solid fa-circle" style="color: rgb(99, 230, 190);"></i>
                    LIVE
                    <span>
                </div>

                <div class="border-t border-[##1E2A4A] pt-4 w-full">
                    <h3 class="text-sm text-gray-400 mb-2">
                        NOW PLAYING
                    </h3>

                    <div class="flex items-center justify-between gap-4">
                        <h3 class="text-gray-400">
                            ${channel.epg.currentProgram}
                        </h3>

                        <p>${channel.epg.startTime} - ${channel.epg.endTime}</p>
                    </div>

                    
                    <div class="bg-purple-500 h-2 rounded-full" style=width:"${channel.epg.progressPercentage}%"></div>
                    <p class="text-xs text-gray-500 mt-5 text-right"> ${channel.epg.progressPercentage}% Completed</p>
                </div>

            </div>
        </div>
    `
    channelDescriotionContainer.innerHTML = description;

}
