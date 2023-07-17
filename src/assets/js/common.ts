import { ethers } from "ethers";

const providerfun=function(){
    return new ethers.providers.Web3Provider(window.ethereum);
}
const Conctract=function(contractAddress:any, contractABI:any) {
    const provider = providerfun();
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    );
    return Contract;
}
const setToken=function(tokenKey:any, token:any) {
        return sessionStorage.setItem(tokenKey, token)
}

const getToken=function(tokenKey:any) {
    return sessionStorage.getItem(tokenKey)
}

const removeToken=function(tokenKey:any) {
    return sessionStorage.removeItem(tokenKey)
}
const stringToHex=function(str:String) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += str.charCodeAt(i).toString(16);
    }
    return hex;
  }
const stringToBool=function(str:any) {
    let bool=true
    if(str==='true'||str===true){
        bool=true
    }else if(str==='false'||str===false){
        bool=false
    }
    return bool;
  }
export  {
    Conctract,
    setToken,
    getToken,
    removeToken,
    stringToHex,
    stringToBool
}

