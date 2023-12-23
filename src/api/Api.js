 export const fetchPlantsList = async (url,payload) => {
    try {
        const resp = await fetch(url,{
            method:'GET'
        });
        const data = await resp.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.log('error:',error)
    }

}

// export const fetchPlantDetail = async (url,payload) => {
//     try {
//         const resp = await fetch(url,{
//             method:'GET'
//         });
//         const data = await resp.json();
//         console.log(data)
//     } catch (error) {
//         console.log('error:',error)
//     }

// }