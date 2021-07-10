

const distance = document.getElementById('distance')
const speed = document.getElementById('speed')
const cal_arrival = document.getElementById('cal_arrival')
const est_arrival_calculator = document.getElementById('est-arrival-calculator')
const arrival_time = document.getElementById('arrival-time')


function error(input) {
    input.classList = "error"
}

function success(input) {
    input.classList = "success"
}

est_arrival_calculator.addEventListener('submit', function (e) {
    e.preventDefault()
    let time = parseInt(distance.value) / parseInt(speed.value)

    console.log(time)
    let current_datetime = new Date()
    let arrival_date = new Date(current_datetime.setHours(current_datetime.getHours() + time))


    if (speed.value.trim() === "") {
        error(speed);
        arrival_time.innerHTML = `Please Enter A Valid Value For The Speed Input`;
       
    }
    else {
        success(speed);

    }

    if (distance.value.trim() === "") {
        error(distance)
        arrival_time.innerHTML = `Please Enter A Valid Value For The Distance Input`;
        
    }
    else {
        success(distance);
    }

    if (distance.value.trim() === "" && speed.value.trim() === "" ) {
        // error(distance,speed)
        arrival_time.innerHTML = `Please Enter A Valid Value For The Both Inputs`;
        
    }
    // else {
    //     success(distance,speed);
    // }



    if(speed.value.trim() != "" && distance.value.trim() != ""){
        document.getElementById("wheels").classList.add("move");
        document.getElementById("car").classList.add("move");
        document.getElementById("track").classList.add("move");
        arrival_time.innerHTML = `Estimate Arrival time: <br> ${arrival_date}`;
    } else {
        
        document.getElementById("wheels").classList.remove("move");
        document.getElementById("car").classList.remove("move");
        document.getElementById("track").classList.remove("move");
    }

});





