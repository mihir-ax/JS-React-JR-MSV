// King - MiHiR SEN
let add = document.querySelector("#add");
let form = document.querySelector("#callForm");
let dp = document.querySelector("#dp-url");
let namme = document.querySelector("#fullName");
let place = document.querySelector("#homeTown");
let purpose = document.querySelector("#purpose");
let emergency = document.querySelector("#emergency");
let important = document.querySelector("#important");
let urgent = document.querySelector("#urgent");
let norush = document.querySelector("#norush");
let close = document.querySelector(".btn-secondary");
let submit = document.querySelector(".btn-primary");
let error = document.querySelector(".error");

let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let main = document.querySelector(".main-card-wrapper");

let nothing = document.querySelector(".nothing");

let userData = [];
let tempObj = {};
let i = 0;

userData = JSON.parse(localStorage.getItem("callCards")) || [];
let totalCards = userData.length - 1;

if (totalCards === -1) {
  nothing.classList.remove("hidden");
} else {
    card(userData[i]);
    nothing.classList.add("hidden");
}
// localStorage.clear();

// FORM -->

add.addEventListener("click", e => {
    form.classList.toggle("hidden");
})

close.addEventListener("click", e => {
    form.classList.add("hidden");
})

// saving model data !
submit.addEventListener("click", e => {
    e.preventDefault();
    if (dp.value && namme.value && place.value && purpose.value ){
        submitObj(dp.value, namme.value, place.value, purpose.value);
        userData = JSON.parse(localStorage.getItem("callCards")) || [];
        totalCards = userData.length - 1;
        card(userData[i]);
        form.classList.add("hidden");
        nothing.classList.add("hidden");
    } else {
        error.classList.remove("hidden")
        setTimeout(function(ee){
            error.classList.add("hidden");
        }, 3000)
    }
})

// storing data !
function submitObj (dpp, nam, plce, pupse) {
    tempObj.pic = dpp;
    tempObj.name = nam;
    tempObj.place = plce;
    tempObj.purpose = pupse;

    userData.push(tempObj);
    tempObj = {};
    let str = JSON.stringify(userData)
    localStorage.setItem("callCards", `${str}`)
}

// console.log(userData);  // ==============================||

// cards


next.addEventListener("click", function(e){

    if (i >= totalCards){
        i = 0;
    } else {
        i++;
    }
    // console.log (i);
    card(userData[i]);
})

previous.addEventListener("click", function(e){

    if (i <= 0 ){
        i = totalCards;
    } else {
        i--;
    }

    // console.log (i);
    card(userData[i]);

})

// CARDS - RENDARING !
function card (cards){

    main.innerHTML = "";

    // cards.forEach(partt => {
        // importing
        let cardHeader = document.createElement("div");  //done
            let img = document.createElement("img");   // done
            let cdiv = document.createElement("div");  // --
                let cardName = document.createElement("div");   // done
                let cardPurpose = document.createElement("div");
        let cardMeta = document.createElement("div");
            let metaRow = document.createElement("div");
                let cspan = document.createElement("span");
                let cardHometown = document.createElement("span");  // done
            let metaRoww = document.createElement("div");
                let mspan = document.createElement("span"); // done
                let cardBookings = document.createElement("span");
        let cardActions = document.createElement("div");
            let call = document.createElement("button");
            let message = document.createElement("button");

        // adding - classes || ids

        cardHeader.classList.add("card-header");
            img.classList.add("card-avatar");
            img.id = "cardAvatar";
            // cdiv
                cardName.classList.add("card-name");
                cardName.classList.add("cardName");
                cardPurpose.classList.add("cardPurpose");
                cardPurpose.style = "color: #666; font-size: 13px;";

        cardMeta.classList.add("card-meta");
            metaRow.classList.add("meta-row");
                // cspan
                cardHometown.classList.add("cardHometown");
            metaRoww.classList.add("meta-row");
                // mspan
                cardBookings.classList.add("cardBookings");

        cardActions.classList.add("card-actions");
            call.classList.add("btn-call");
            message.classList.add("btn-message");

        img.setAttribute("src", `${cards.pic}`);
        cardName.textContent = cards.name;
        cardPurpose.textContent = cards.purpose;
        cspan.textContent = "Home town";
        cardHometown.textContent = cards.place;
        mspan.textContent = "Bookings";
        cardBookings.textContent = "3 Times";
        call.innerHTML = "<i class='fas fa-phone'></i> Call";
        message.textContent = "Message";

        main.append(cardHeader);
        cardHeader.append(img);
        cardHeader.append(cdiv);
        cdiv.append(cardName);
        cdiv.append(cardPurpose);

        main.append(cardMeta);
        cardMeta.append(metaRow);
        metaRow.append(cspan);
        metaRow.append(cardHometown);

        cardMeta.append(metaRoww);
        metaRoww.append(mspan);
        metaRoww.append(cardBookings);

        main.append(cardActions);
        cardActions.append(call);
        cardActions.append(message);
    // });
}



// theme !

let black = document.querySelector(".black");
let purple = document.querySelector(".purple");
let brown = document.querySelector(".brown");
let teal = document.querySelector(".teal");
let cardd = document.querySelector(".card");

black.addEventListener("click", (e) => {
    black.classList.add("active");
    purple.classList.remove("active");
    brown.classList.remove("active");
    teal.classList.remove("active");

    cardd.style.background = "#2A2A2A";
})

purple.addEventListener("click", (e) => {
    purple.classList.add("active");
    black.classList.remove("active");
    brown.classList.remove("active");
    teal.classList.remove("active");

    cardd.style.background = "#13091b";
})

brown.addEventListener("click", (e) => {
    brown.classList.add("active");
    purple.classList.remove("active");
    black.classList.remove("active");
    teal.classList.remove("active");

    cardd.style.background = "#3f1f15";
})

teal.addEventListener("click", (e) => {
    teal.classList.add("active");
    black.classList.remove("active");
    brown.classList.remove("active");
    purple.classList.remove("active");

    cardd.style.background = "#123a37";
})
