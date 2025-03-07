function generateBars() {
    const barsContainer = document.getElementById("bars");
    barsContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
        let height = Math.floor(Math.random() * 160) + 50;
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = height + "px";
        barsContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, 300));
            
            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);
            
            if (height1 > height2) {
                bars[j].style.height = height2 + "px";
                bars[j + 1].style.height = height1 + "px";
            }
            bars[j].style.backgroundColor = "#007bff";
            bars[j + 1].style.backgroundColor = "#007bff";
        }
        bars[len - i - 1].style.backgroundColor = "green";
    }
    bars[0].style.backgroundColor = "green";
}

generateBars();