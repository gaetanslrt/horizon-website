    document.addEventListener("DOMContentLoaded", function () {
        const text = "Stay ahead of the storm with Horizon.";
        const speed = 45; 
        const startDelay = 1400; 
        let i = 0;
        const typewriter = document.querySelector(".typewriter");

        function type() {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    typewriter.classList.add("done");
                }, startDelay); 
            }
        }

        
        setTimeout(type, startDelay);
    })
