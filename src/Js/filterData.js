export  const getDataUsingId = (data,id)=>{
    const arr = data.filter((element)=> element._id === id)
    return arr[0];
}

