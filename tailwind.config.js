module.exports = {
  // NOTE: Include the paths to all files that contain NativeWind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // NativeWind preset is required so NativeWind can process Tailwind config correctly
  presets: [require("nativewind/preset")],
  plugins: [],
};
