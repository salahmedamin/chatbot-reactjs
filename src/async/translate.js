import axios from "axios"
//eng
//ara
//fra
const langs = ["en","fr","ar"]

export const translate = async ({input,from,to})=>{
    if(!langs.includes(from) || !langs.includes(to)) return;
    return (await axios.get(
        "http://localhost:9800/translate?from="+from+"&to="+to+"&input="+input
    )).data
}
