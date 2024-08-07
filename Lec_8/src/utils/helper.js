

export function SearchBynames(restaurant,searchtext){
    const newres= restaurant.filter((obj,i)=>obj.info.name.toLowerCase().includes(searchtext.toLowerCase()))
    // console.log(prevres=>newres)
    return newres
}

