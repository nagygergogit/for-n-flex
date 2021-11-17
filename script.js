const generateArray = function(amount) {
    let returnArray = [];

    /*
    let amountConverted = parseInt(amount);
        amount = amountConverted;
    */

    amount = parseInt(amount);
    //console.log(amount);

    if (!Number.isNaN(amount)) {
        //console.log("az amount egy szám");
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
        }
    } else {
        //console.log("az amount nem egy szám");
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött.");
    
    //console.log(generateArray("100"));
    //console.log(generateArray(15));
    //console.log(generateArray("kiskutya"));
    //console.log(generateArray([2]));

    const root = document.getElementById("root");
    const list = generateArray(200);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`)
        }
    }
}

window.addEventListener("load", loadEvent)

/*
window.addEventListener("load", function() {
    ez is jó!
})
*/

/*
window.addEventListener("load", () => {
    ez is jó!
})
*/