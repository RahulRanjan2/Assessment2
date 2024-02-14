








var outsideClick = function (e) {
    var container = document.getElementsByClassName(".customDrp")
    if (!container.e.target.innerText && container.e.target.innerText.length === 0 && container.border(':visible')) {
       container.removeClass("active");
       window.bind("click", outsideClick);
    }
 };
 const custmonDropDwon = document.getElementsByClassName(".custmonDropDwon");
 

    custmonDropDwon.addEventListener("click",function (e) {

       if (e.target.className==="crossString" || e.target.className==="bowiro") {
          return false;
       }
 
       if (e.target.innerText=="a") {
          return true;
       }
 
       e.preventDefault();
 
       console.log(e.target);
 
       if (e.target.className==="language" || $e.target.parentElement.className==="language") {
          languageFunc();
 
       }
 
       if (window.matchMedia('(max-width: 1170px)').matches) {
          document.body.style.overflow = 'hidden';
       }
 
       if (e.target.className==="searchCoinDrp") {
          document.getElementById('tokensearch1').focus();
       }
 
       if (e.target.next(".customDrp").length) {
        e.target.next(".customDrp").addClass("active");
       } else {
        e.target.children(".customDrp").addClass("active");
       }
 
       e.stopPropagation();
       window.bind("click", outsideClick);
    });
 
    let basic_banner_read_btn = false;
    const basic_banner_read = document.getElementsByClassName(".basic_banner_read_btn");

   basic_banner_read.addEventListener("click",function (e) {
       if (basic_banner_read_btn == false) {
        e.target.innerHTML("Read Less");
        basic_banner_read.slideToggle(500);
          basic_banner_read_btn = true;
       } else {
        basic_banner_read.slideToggle(500);
        e.target.innerHTML("Read More");
          basic_banner_read_btn = false;
       }
    });

    const filterToggel = document.getElementsByClassName(".filterToggelBtn");
 
    filterToggel.addEventListener("click",function () {
        filterToggel.slideToggle("active");
    });

    const hideCustomDrp = document.getElementsByClassName(".hideCustomDrp");
 
    hideCustomDrp.addEventListener("click", function () {
        hideCustomDrp.removeClass("active");
    });

    const closeIcon = document.getElementsByClassName(".hideCustomDrp");
 
    closeIcon.addEventListener("click",function () {
        document.getElementsByClassName(".customPopup").removeClass("active");
        document.getElementsByClassName(".commonPopup").removeClass("active");
 
       if (!document.querySelector(".headerMain").classList.contains("active")) {
          document.body.style.overflow = 'auto';
       }
    });

    const mainTable = document.getElementsByClassName(".hideCustomDrp");
 
    mainTable.addEventListener("scroll", function (e) {
       let isScroll = e.currentTarget.scrollLeft;
       if (isScroll) {
        document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").addClass("before");
       } else {
        document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").removeClass("before");
       }
    });
