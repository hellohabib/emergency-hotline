function callFunc (name, number){
  
    const serviceName = document.getElementById('name').innerText;
    //console.log(serviceName);
    const serviceNumber = document.getElementById('number').innerText;
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
    const txnDate=new Date().toLocaleDateString();
    const txnTime=new Date().toLocaleTimeString();
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
    let callHistoryItems=document.getElementById('call-history-items');
    callHistoryItems.appendChild(div);
  
}