(function() {

    "use strict";

    //===== Prealoder

    window.onload = function() {
        window.setTimeout(fadeout, 200);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function() {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };


  

    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
    });
    cu.start();


    //======= portfolio-btn active
    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {

            // remove class from sibling

            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    //remove class
                    el.classList.remove("active");

                }
                // pass to the new sibling
                el = el.nextSibling;
            }

            this.classList.add("active");
        };
    }


    var navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.target.parentNode.childNodes.forEach(function(node) {
                if (!node.isEqualNode(event.target) && node.classList) {
                    node.classList.toggle("show");
                }
            });
        });
    });

    navLinks.forEach(e =>
        e.addEventListener('click', () => {
            e.classList.toggle('show');
        })
    )


})();

 
// $(document).ready(function(){
//     $(".cstm-acrdngs .cstm-acrdng .cstm_acrdng_ctn_div").slideUp();

//     $(".cstm-acrdngs .cstm-acrdng a").click(function(){ 
//         $(".cstm-acrdngs .cstm-acrdng .cstm_acrdng_ctn_div").slideUp(); 
//         $(this).next(".cstm_acrdng_ctn_div").slideDown(); 
//         $(".cstm-acrdngs .cstm-acrdng").removeClass("active"); 
//         $(this).parent().parent(".cstm-acrdng").addClass("active"); 
//     });
    
// }); 

 
$(document).ready(function(){
    $(".cstm-acrdngs .cstm-acrdng .cstm_acrdng_ctn_div").slideUp();
    $(".cstm-acrdngs .cstm-acrdng:nth-child(1)").addClass("active");
    $(".cstm-acrdngs .cstm-acrdng:nth-child(1) .cstm_acrdng_ctn_div").slideDown();

    $(".cstm-acrdngs .cstm-acrdng").click(function(){  
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).children().find(".cstm_acrdng_ctn_div").slideDown();
        $(this).siblings().find(".cstm_acrdng_ctn_div").slideUp(); 
    });

}); 
 