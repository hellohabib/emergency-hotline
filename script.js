
let heartCount = parseInt(document.getElementById('heart-count').innerText);

//emergency-heart
document.getElementById('emergency-heart').addEventListener('click', function () {
    heartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = heartCount;
})

//police-heart
document.getElementById('police-heart').addEventListener('click', function () {
    heartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = heartCount;
})
// fire-heart
document.getElementById('fire-heart').addEventListener('click', function () {
    heartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = heartCount;
})
// ambulance-heart
document.getElementById('ambulance-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
    
    document.getElementById('heart-count').innerText = heartCount;
})
// woman-heart
document.getElementById('woman-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
})
// dudok-heart
document.getElementById('dudok-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
})
// biddut-heart
document.getElementById('biddut-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
})
// ngo-heart
document.getElementById('ngo-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
})

// railway-heart
document.getElementById('railway-heart').addEventListener('click', function () {
        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
})
// Call Button Functionality

/////////////////////////////////////////
// Function Defination START
/////////////////////////////////////////

function callFunc(name, number) {

    const serviceName = document.getElementById(name).innerText;
    //console.log(serviceName);
    const serviceNumber = document.getElementById(number).innerText;
    //console.log(serviceNumber);
    alert("Service Name: " + serviceName + "\n" + "Service Number: " + serviceNumber);
    //alert("Alert me");
    if (coinBalance < 20) {
        alert("You dont have sufficient coin to call");
        return;
    } else {
        coinBalance = coinBalance - 20;
        document.getElementById('coin-balance').innerText = coinBalance;
    }
    const txnDate = new Date().toLocaleDateString();
    const txnTime = new Date().toLocaleTimeString();
    console.log(txnTime);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#f2f2f2] rounded-[10px] m-[20px] p-[20px]">
                        <div>
                            <p class="">${serviceName}</p>
                            <p>${serviceNumber}</p>
                        </div>
                        <div>
                            <p>${txnDate}</p>
                            <p>${txnTime}</p>
                        </div>
                    </div>
    
    `
    let callHistoryItems = document.getElementById('call-history-items');
    callHistoryItems.appendChild(div);

}
/////////////////////////////////////////
// Function Defination END
/////////////////////////////////////////
let coinBalance = parseInt(document.getElementById('coin-balance').innerText);
// Emergency
document.getElementById('emergency-call').addEventListener('click', function () {
    callFunc('emergency-name', 'emergency-number');
})
//Police
document.getElementById('police-call').addEventListener('click', function () {
    callFunc('police-name', 'police-number');
})
//fire
document.getElementById('fire-call').addEventListener('click', function () {
    callFunc('fire-name', 'fire-number');
})
//ambulance
document.getElementById('ambulance-call').addEventListener('click', function () {
    callFunc('ambulance-name', 'ambulance-number');
})
//woman
document.getElementById('woman-call').addEventListener('click', function () {
    callFunc('woman-name', 'woman-number');
})
//dudok
document.getElementById('dudok-call').addEventListener('click', function () {
    callFunc('dudok-name', 'dudok-number');
})
//biddut
document.getElementById('biddut-call').addEventListener('click', function () {
    callFunc('biddut-name', 'biddut-number');
})
//ngo
document.getElementById('ngo-call').addEventListener('click', function () {
    callFunc('ngo-name', 'ngo-number');
})
//railway
document.getElementById('railway-call').addEventListener('click', function () {
    callFunc('railway-name', 'railway-number');
})

// clear call history
document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('call-history-items').style.display = 'none';
});

// Copy to clipboard
//---------- Function Defination START
function copyToClip(num) {
    const textToCopy = document.getElementById(num).innerText;
    alert("\n'" + textToCopy + "'" + " copied on clipboard." + "\n\n" + "Open any tex or word file and press Ctl+V to paste it.");
    copyCount = copyCount + 1;
    document.getElementById('copy-count').innerText = copyCount;
    navigator.clipboard.writeText(textToCopy);
}
//---------- Function Defination END
let copyCount = parseInt(document.getElementById('copy-count').innerText);
//emergency
document.getElementById('emergency-copy').addEventListener('click', function () {
    copyToClip('emergency-number');
})
//police
document.getElementById('police-copy').addEventListener('click', function () {
    copyToClip('police-number');
})
//fire
document.getElementById('fire-copy').addEventListener('click', function () {
    copyToClip('fire-number');
})
//ambulance
document.getElementById('ambulance-copy').addEventListener('click', function () {
    copyToClip('ambulance-number');
})
//woman
document.getElementById('woman-copy').addEventListener('click', function () {
    copyToClip('woman-number');
})
//dudok
document.getElementById('dudok-copy').addEventListener('click', function () {
    copyToClip('dudok-number');
})
//biddut
document.getElementById('biddut-copy').addEventListener('click', function () {
    copyToClip('biddut-number');
})
//ngo
document.getElementById('ngo-copy').addEventListener('click', function () {
    copyToClip('ngo-number');
})
//railway
document.getElementById('railway-copy').addEventListener('click', function () {
    copyToClip('railway-number');
})