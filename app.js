setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    let s = document.querySelector("#time");
    s.innerHTML = `${hr}:${min}:${sec}`;

    hri = d.getUTCHours();
    mini = d.getUTCMinutes();
    seci = d.getUTCSeconds();
    hr_rotationi = 30 * hri + mini / 2; //converting current time
    min_rotationi = 6 * mini;
    sec_rotationi = 6 * seci;
    houri.style.transform = `rotate(${hr_rotationi}deg)`;
    minutei.style.transform = `rotate(${min_rotationi}deg)`;
    secondi.style.transform = `rotate(${sec_rotationi}deg)`;
    let a = document.querySelector("#timei");
    a.innerHTML = `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
}, 1000);
