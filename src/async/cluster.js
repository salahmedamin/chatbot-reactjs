const obj = {
    "Information Technology":["laptop","desktop","smartphone","mobile","phone","gamer","gaming","mouse","keyboard","headset","GPU","CPU","Cartoon","smart"],
    Furnitures: ["bench","bed","desk","blender","chair","TV","plasma","television","board","door","air conditionner","window","house","home","garden","room","lamp"],
    Children: ["kindergarten","child","children","daughter","son","young","father","mother","uncle","gift","toys"],
    Vehicles: ["car","bus","bike","boat","airplane","vehicle","truck","cab","taxi","mototruck","motorcycle","motorbike"]
}
export const verif = ({
    array
})=>{
    let result = []
    array.forEach(a=>{
        Object.keys(obj).forEach(e=>{
            if(obj[e].includes(a.value) && !result.some(a=>a === e)) result = [...result, e]
        })
    })
    return result.map(a=>({
        value:a
    }))
}