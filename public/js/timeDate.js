const day = document.getElementById("day")
    // let weathercon = document.getElementById("weathercon")
    // const tempStatus = "{%tempStatus%}"
    // if("Sunny"){
    //     weathercon.innerHTML =`<i class="fa fa-street-view" style="color: #eccc68;"></i>`
    // }
    const getcurDay = ()=>{
        let currentTime = new Date()
        var weekday = new Array(7)
        weekday[0] = "sunday"
        weekday[1] = "monday"
        weekday[2] = "tuesday"
        weekday[3] = "wednesday"
        weekday[4] = "thursday"
        weekday[5] = "friday"
        weekday[6] = "saturday"
        var  date = weekday[currentTime.getDay()]
        day.innerText = date
    }
    getcurDay()
    // const getcurrenttime = ()=>{
    //     var months = [
    //         "Jan",
    //         "Feb",
    //         "Mar",
    //         "Apr",
    //         "May",
    //         "Jun",
    //         "Jul",
    //         "Aug",
    //         "Sep",
    //         'Oct',
    //         "Nov",
    //         "Dec"
    //     ]
    //     var now = new Date()
    //     var month = months[now.getMonth() + 1]
    //     var date = now.getDate()
    //     let hourse = now.getHours()
    //     let mins = now.getMinutes()

    //     let perios = "AM"

    //     if(hourse > 11){
    //         perios ="PM"
    //         if(hourse>12){
    //             hourse -= 12
    //         }
    //     }
    //     if(mins < 10){
    //         mins = "0" + mins
    //     }
        
    //     return `${month} ${date} | ${hourse}:${mins} ${perios}`
    // }

    // curDate.innerHTML = getcurDay( ) + " | " + getcurrenttime()
