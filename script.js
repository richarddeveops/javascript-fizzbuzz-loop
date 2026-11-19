let show = document.getElementById('display')
for(let x = 1; x<= 150; x++){

    if(x%3 == 0 && x%5 == 0){
        show.innerHTML += `<p style="color: white;">${x} FIZZ BUZZ</p>`
    }else if(x%3 == 0){
        show.innerHTML += `<p style="color: blue;">${x} FIZZ</p>`
    }else if(x%5 == 0){
        show.innerHTML += `<p style="color: black;">${x} BUZZ</p>`
    }else{
        show.innerHTML += `<p style="color: darkred;">${x} neither FIZZ nor BUZZ</p>`

    }
}