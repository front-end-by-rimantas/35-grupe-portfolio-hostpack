// component imports

// components execution

/* header: start */

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    const header = document.getElementsByTagName('header')[0]; 
    const banner = document.getElementsByClassName('banner')[0];
    console.log(banner)
    if(scroll > 150) {
       header.classList.add("header-fixed");
       banner.classList.add("header-margin");
    } else {
        header.classList.remove("header-fixed");
        banner.classList.remove("header-margin");
    }
    // console.log(scroll)
}); 


/* header: end */

/* hero: start */
/* hero: end */

/* domains name search and price: start */
/* domains name search and price: end */

/* install: start */
/* install: end */

/* hosting plans: start */
/* hosting plans: end */

/* review - success rating: start */
/* review - success rating: end */

/* Our best services: start */
/* Our best services: end */

/* Start with Hostpack: start */
/* Start with Hostpack: end */

/* Hostpack services: start */
/* Hostpack services: end */

/* subscribe newsletter: start */
/* subscribe newsletter: end */

/* global data center locations: start */
function changeLocation(location)
{
    let countryList = document.getElementsByClassName("country-tag");
    for(let i = 0; i < countryList.length; i++)
    {
        countryList[i].style.display = "none";
    }

    let focusCountry = document.getElementById(location);
    focusCountry.style.display = "block";
}
/* global data center locations: end */

/* testimonials: start */
/* testimonials: end */

/* blog: start */
/* blog: end */

/* footer: start */
/* footer: end */