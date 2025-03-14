function generateLottery() {
    let number = Math.floor(100000 + Math.random() * 900000); // ৬ ডিজিটের নম্বর
    document.getElementById("lotteryNumber").innerText = number;
}
