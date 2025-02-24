    document.addEventListener("DOMContentLoaded", function () {
        const text = "Stay ahead of the storm with Horizon.";
        const speed = 45; 
        const startDelay = 1350; 
        let i = 0;
        const typewriter = document.querySelector(".typewriter");
        const dwnb = document.querySelector(".download-btn");
        dwnb.style.visibility = "hidden";

        function show() {
            setTimeout(() => {
                dwnb.style.transition = "opacity 0.2s linear";
                dwnb.style.visibility = "visible";
                dwnb.style.opacity = 1;
            }, 4500);
        }
        dwnb.style.opacity = 0;

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
        show();
    })
