import { errorMessage } from "../ui/error.js"
import { loader } from "../ui/loading.js";
import { errorComponent } from "../ui/error.js";
import { setStorage } from "../storage/storage.js";


export async function fetchChannels(){
    try{

        setTimeout(()=>{ loader()}, 500);

        const res = await fetch('https://6af341f9d2377d6c3704c784.mockapi.io/channels/')

        if(!res.ok){
            errorMessage(res);
            errorComponent(res)
        }

        if(res.status == 200){
            console.error('succès');
        }

        const data = await res.json()
        setStorage('channels', data);
        return data;

    } catch(error){
        console.error(error)
    } finally {

        

    }
}