module.exports = {
   mode: "jit",
   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            jam: "'Bai Jamjuree', sans-serif",
            expanded: "'Encode Sans Expanded', sans-serif",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require("tailwind-scrollbar-hide")],
};
