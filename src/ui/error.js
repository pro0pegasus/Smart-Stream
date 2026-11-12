import { fetchChannels } from "../services/api.js";

export async function errorMessage(res){

    if(res.status == 404){
        throw Error(`Error is: ${res.status}`);
    }
    if (res.status == 500){
        throw Error(`Error is: ${res.status}`);
    }
}

export function errorComponent(res){

    const card = document.getElementById('error-div')

    card.innerHTML = `
        <div class="flex flex-col items-center text-center p-6 my-4 mx-auto max-w-md border border-red-300 bg-red-50 text-red-900 rounded-lg shadow-sm font-sans">
            <button id="err-card" class="border rounded-lg px-1 font-semibold hover:bg-gray-400">
                <i class="fa-solid fa-x text-xs hover:text-white"></i>
            </button>
            <h3 class="m-0 mb-2 text-lg font-semibold flex items-center gap-2">Erreur</h3>
            <p class="m-0 mb-4 text-sm leading-relaxed text-red-800"> ${(res.status == 404) ? 'Nous n avons pas pu récupérer ces informations. Cet élément a peut-être été supprimé ou le lien n est plus valide.' : 'Nous n avons pas pu charger vos données en raison d un problème temporaire sur nos serveurs. Ce n est pas de votre faute !'} </p>
            <button id="refresh-fetch">
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </button>
        </div>
    `;

    const closeBtn = document.querySelector('#err-card');
    closeBtn.addEventListener('click', ()=>{
        card.style.display = 'none';
    });

    const refreshFetch = document.getElementById('refresh-fetch');

    if(refreshFetch){
    refreshFetch.addEventListener('click', ()=>{
        fetchChannels();
        card.style.display = 'none';
    })
    }

    return card;
}