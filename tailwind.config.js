module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            jam: "'Bai Jamjuree', sans-serif",
            expanded: "'Encode Sans Expanded', sans-serif",
         },
         screens: {
            "2xl": "2000px",
            // => @media (min-width: 2000px) { ... }
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
