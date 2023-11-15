/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FED93D",
        secondary: "#222128",
        button: "#FFC107",
        buttonHover: "#FFD43B",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gray: "#515151",
        placeholder: "rgba(0, 0, 0, 0.2)",
        red: "#FF0000",
        lightred: "#f7454a",
        gray: "#515151"
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        //styling for logo
        logo: "40px",
        menu: "20px",
        
        title: "clamp(1.0rem, 8vw, 3.75rem)",
        subtext: "clamp(1.0rem, 8vw, 2.5rem)",
        subtitle: "clamp(1.0rem, 8vw, 2.5rem)",
        buttontext: "clamp(1.0rem, 5vw, 2rem)",
        
        //styling for Items Listing
        auctioneername: "clamp(12px, 2vw, 20px)",
        auctiontitle: "clamp(16px, 2vw, 22px)",
        auctionsubtitle: "clamp(8px, 2vw, 15px)",
        auctioninfo: "clamp(12px, 2vw, 20px)",

        //styling for Testimonial
        testimonial: "clamp(1.0rem, 3vw, 2.5rem)",

        //Styling for Contact Us
        contactus: "clamp(1.0rem, 3vw, 2.5rem)",

        //styling for footer
        footertext: "clamp(1.0rem, 3vw, 2.5rem)",
        
        //mobile Menu
        mobilemenu: "20px",
        mobilemenutitle: "30px",

        //sell page
        selltext: "clamp(1.0rem, 2vw, 2.5rem)",

        medium: "clamp(1.0rem, 5vw, 1.5rem)",
        large: "clamp(1.0rem, 5vw, 2.0rem)",


      },
      padding: {
        vertical: "clamp(20px, 2vw, 30px)",
        button: "clamp(30px, 3vw, 60px)"
      },
      width: {
        image: "clamp(250px, 100%, 550px)",
        listing: "clamp(16rem, 12vw, 25rem)",
        listingimage: "clamp(260px, 100%, 388px)",
        testimonial: "clamp(361px, 100%, 794px)",
        contactus: "clamp(223px, 35vw, 516px)",
        sendbutton: "clamp(139px, 30vw, 322px)",
        socialmedia: "clamp(50px, 75px, 100px)",
        search: "clamp(300px, 35vw, 880px)",
        menu: "clamp(25px, 8vw, 40px)",
        searchmobile: "clamp(200px, 100%, 900px)",
        filter: "clamp(125px, 100%, 200px)",

        //sell page styling
        sellimage: "clamp(250px, 100%, 550px)",
        selltextwidth: "clamp(250px, 100%, 700px)",
        
        //detail page
        detailInputText: "clamp(200px, 20vw, 400px)",
        deleteButton: "clamp(200px, 100%, 300px)",
        
        //SignIn Page
        signInInputText: "clamp(200px, 100%, 550px)",
        signInPad: "clamp(200px, 100%, 600px)",
        
        
      },
      minWidth: {
        listing: "clamp(16rem, 20rem, 25rem)",
        listinglg: "20rem",
        listingmd: "17rem",
        listingxs: "16rem"
      },
      minHeight: {
        listing: "clamp(16rem, 20rem, 25rem)",
        listinglg: "22rem",
        listingmd: "24rem",
        listingxs: "33rem",
      },
      maxWidth: {
        listing: "clamp(16rem, 20rem, 25rem)",
        listinglg: "23rem",
        listingmd: "20rem",
        listingxs: "16rem",
        testimonial: "clamp(361px, 100%, 794px)",
        socialmedia: "clamp(50px, 10vw, 100px)",


      },
      maxHeight: {
        listing: "clamp(16rem, 20rem, 25rem)",
        listinglg: "22rem",
        listingmd: "24rem",
        listingxs: "33rem"
      },
      height: {
        listing: "clamp(348px, 380px, 520px)",

      },
      boxShadow:{
        custom: '0 0 10px rgba(255, 255, 255, 0.3)'
      },

      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
  ],
};