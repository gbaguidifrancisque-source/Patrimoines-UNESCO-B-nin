document.addEventListener("DOMContentLoaded", function () {

    const buttons =
    document.querySelectorAll(".info-button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const content =
            this.nextElementSibling;

            content.classList.toggle("open");

            const plus =
            this.querySelector(".plus");

            if(content.classList.contains("open")){

                plus.textContent = "−";

            }else{

                plus.textContent = "+";

            }

        });

    });

});