module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 8s linear infinite',
        },
        colors: {
          primary: '#00d9ff',
          accent: '#00ffa2',
          dark: '#0f172a',
        }
      },
    },
    plugins: [],
  };
  