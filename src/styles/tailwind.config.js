module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.preflight': {
          '*, ::before, ::after': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
        },
      });
    },
  ],
};