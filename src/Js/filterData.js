export  const getDataUsingId = (data,id)=>{
    const arr = data.filter((element)=> element.channelId === id)
    return arr[0];
}

