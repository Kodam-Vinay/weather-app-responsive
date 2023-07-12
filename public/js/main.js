const city_name = document.getElementById("city_name");
const enterCityName = document.getElementById("enterCityName");
const submitButton = document.getElementById("submitButton");
const dataHide = document.querySelector(".temp_show-container") //here it return the dom element which satisified the condition first
const actual_temp = document.getElementById("actual_temp")
const temp_status = document.getElementById("temp_status")
const day = document.getElementById("day")
const today_date = document.getElementById("today_date")
const spinner = document.getElementById("spinner")
const temp_actual_status = document.getElementById("temp_actual_status")
const presenet_time = document.getElementById("presenet_time")

let date = null;
const getDay = () =>{
    date = new Date()
    let datesArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let presentDay = datesArray[date.getDay()]
    
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    let presentMonth = monthsArray[date.getMonth()]
    day.innerText = presentDay
    today_date.innerText = `${date.getDate()} ${presentMonth.toUpperCase()}`
}
getDay()
getResults = async(event) => {
    event.preventDefault();
    let cityValue = enterCityName.value;
    if(cityValue === ""){
        city_name.innerText = 'Please Enter a City Name before Search'
        dataHide.classList.add('data_hide')
        presenet_time.innerText = ""
    }else{
        try {
            spinner.classList.remove('show-spinner')
            dataHide.classList.add('data_hide')
            //metrics is used to display temp in celcius
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a3547addf902f2a1e709f062a2e801dd`
            const response = await fetch(apiUrl)
            const data = await response.json()
            const arrData = [data]
            spinner.classList.add('show-spinner')
            dataHide.classList.remove('data_hide')
            city_name.innerText = `${arrData[0]?.name}, ${arrData[0]?.sys.country}`
            
            actual_temp.innerText = arrData[0]?.main.temp
            
            const tempStatus = arrData[0]?.weather[0]?.main;
            temp_actual_status.innerText = tempStatus
            presenet_time.innerText = date.toLocaleTimeString()
            if(tempStatus === "Sunny"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #FFE87C'></i>"
            }else if(tempStatus === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
            }else if(tempStatus === "Drizzle" || tempStatus === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #FFE87C'></i>"
            }
        } catch{
            city_name.innerText = `Please Enter Correct City Name`
            dataHide.classList.add('data_hide')
            presenet_time.innerText = ""
        }
    }
    getDay()
    
}

submitButton.addEventListener("click", getResults);