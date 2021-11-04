import axios from "axios"
import { store } from "../redux/store"
import { verif } from "./cluster"
import { translate } from "./translate"

export const getImageTags = async({
    image
})=>{
    const lang = store.getState().language
    const formData = new FormData()
    formData.append("image",image)
    const returnal = (await axios.post(
        "https://api.imagga.com/v2/tags",
        formData,
        {
            headers:{
                Authorization:"Basic YWNjXzBjMjc2MDU2NjBlZGE0NjpiZWVmNjdiZGEzMDYzYzg4MzUxZmNiMTE0N2RmYmM2YQ==",
                'Content-Type': 'multipart/form-data'
            }
        }
    )).data.result.tags.filter((a,i)=>i<12).map(a=>({
        percentage: a.confidence,
        value: a.tag.en
    }))
    const verified = verif({
        array: returnal
    })
    if(lang.current === "en") return verified
    else{
        let all = []
        for(let val of verified){
            const nw = {
                ...val,
                originalValue: val.originalValue || val.value,
                value: await translate({
                    from: lang.previous,
                    to: lang.current,
                    input: val.value
                })
            }
            all=[
                ...all,
                nw
            ]
        }
        return all
    }
}