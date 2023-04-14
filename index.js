countDownDate = new Date("May 29, 2023 15:37:25").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes,seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // displaying the count down 
    let second = document.querySelector(".second");
    
    if(seconds.toString().length === 1){
        second.innerText="0"+seconds;
        animate(3)
        setTimeout(()=>{
         stop(3)
        },400)

    }else{
        animate(3)
        second.innerText=seconds;
        
        setTimeout(()=>{
         stop(3)
        },100) 
    }




    let minute = document.querySelector(".minute");
    if ( minutes.toString().length === 1){
        minute.innerText = "0"+minutes;
        animate(2)
        setTimeout(()=>{
         stop(2)
        },100)

    }else{
        minute.innerText = minutes;
        animate(2)
        setTimeout(()=>{
         stop(2)
        },100)
    }

    let hour = document.querySelector(".hour");
    if ( hours.toString().length === 1){
        hour.innerText = "0"+hours;
        animate(1)
        setTimeout(()=>{
         stop(1)
        },100)
    }else{
        hour.innerText = hours;
        animate(1)
        setTimeout(()=>{
         stop(1)
        },100)
    }

    let day = document.querySelector(".day");

    if(days.toString().length === 1){
        day.innerText = "0"+days;
        animate(0)
        setTimeout(()=>{
         stop(0)
        },100)
    }else{
        day.innerText = days;
        animate(0)
        setTimeout(()=>{
         stop(0)
        },100)
    }


    if(day.innerText.length > 2){
        document.querySelector(".day").classList.remove("time")
        document.querySelector(".day").classList.add("dayStyle")
        animate(0)
        setTimeout(()=>{
         stop(0)
        },100)
    }else{
        document.querySelector(".day").classList.add("time")
        document.querySelector(".day").classList.remove("dayStyle")
        animate(0)
        setTimeout(()=>{
         stop(0)
        },100)  
    }
    


    
  
  }, 1000);

  










  function animate(index){
    document.querySelectorAll(".countdown-bottomcard")[index].classList.add("flipcard");
    document.querySelectorAll(".countdown-bottomcard")[index].classList.remove("flipback");
    document.querySelector(".second").classList.remove("showNumber");
    document.querySelector(".second").classList.add("hideNumber");
}

function stop(index){
    document.querySelector(".second").classList.remove("hideNumber");
    document.querySelector(".second").classList.add("showNumber");
    document.querySelectorAll(".countdown-bottomcard")[index].classList.remove("flipcard");
    document.querySelectorAll(".countdown-bottomcard")[index].classList.add("flipback");

}





