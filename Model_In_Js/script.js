    function displayArea(){
        const radius = parseFloat(document.getElementById('radius-input').value);

    const area = calculateArea(radius);
    document.getElementById('result').innerText =`The area is:${area.toFixed(2)}`;
    }
    document.getElementById('Calculate-button').addEventListener('click',displayArea);

    document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff7e5f,rgb(125, 123, 254))`;
    });