import {useEffect,useState} from 'react'

function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("apikey", "Zd0ujpvZQW4PUKX3Y95kSHaKzkIa03rV");

        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };

        fetch("https://api.apilayer.com/exchangerates_data/latest?base=${currency}", requestOptions)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)

    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo