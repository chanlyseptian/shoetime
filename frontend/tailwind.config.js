module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        primary: "#FD5544",
        myyellow: "#DFAC59",
        mygray: "#EFEFEF",
        mysecondarygray: "#F5F5F5",
        myfont: "#666666",
      },
    },
  },
  plugins: [],
};
