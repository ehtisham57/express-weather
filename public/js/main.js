const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_Name = document.getElementById("city_Name")
const temp_realVal = document.getElementById("temp_realVal")
const temp_status = document.getElementById("temp_status")
const middle_layer = document.querySelector(".middle_layer")



const getInfo = async (e)=>{
    e.preventDefault()
   let cityNamevalue = cityName.value     
    if(cityNamevalue === ""){
        city_Name.innerText = "Plz Enter The City Name Before Search"
        middle_layer.classList.add('data_hide')
    }
    else{
         try{
            let ApiKey = "8d029498b023f7fc5e2fb47e9f4db0c9"
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNamevalue}&appid=${ApiKey}&units=metric`
            const response =await fetch(url)
            const data =await response.json()
            const arrData = [data]


            temp_realVal.innerText = arrData[0].main.temp
            temp_status.innerText = arrData[0].weather[0].main
            city_Name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`

            let tempMod = arrData[0].weather[0].main
            if(tempMod === "clear"){
                temp_status.innerHTML = '<i class="fa fa-sun" style = "color : #eccc68;"></i>'
            }
            else  if(tempMod === "clouds"){
                temp_status.innerHTML = '<i class="fa fa-cloud" style = "color:#f1f2f6;"></i>'
            }
            else if(tempMod === "rain"){
                temp_status.innerHTML = '<i class="fa fa-cloud-rain" style = "color:#a4b0be;"></i>'
            }
            else {
                temp_status.innerHTML = '<i class="fa fa-cloud" style = "color : #f1f2f6;"></i>'
            }
            middle_layer.classList.remove('data_hide')

         }
         catch{
             city_Name.innerText = "Plz Enter The City Name Properly"
         }
    }
}

submitBtn.addEventListener('click' , getInfo)