module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      cursor: {
        custom: "url(/resources/textures/gui_amn_mm_pointer_normal.png), auto",
      },
      fontFamily: {
        "item-header": ["Stonehenge", "serif"],
        "item-desc": ["'Book Antiqua'", "sans-serif"],
        "game-default": ["'Bookman Old Style'", "sans-serif"],
      },
      backgroundImage: {
        mono: "url(/resources/textures/preview_mono_800x600.png)",
      },
    },
  },
  plugins: [],
};
