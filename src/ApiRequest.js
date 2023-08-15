const ApiRequest = async (url = '', methodsObj = null , errorMSG = null) => {
  try{
    const response = await fetch(url,methodsObj)
    if(!response.ok) throw("Error while performing operations...")
  }
  catch(err){
    errorMSG = err
  }
  finally{
    return errorMSG
}
}
export default ApiRequest