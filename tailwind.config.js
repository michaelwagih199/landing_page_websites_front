/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],

  theme: {
    extend: {
      colors: {
        mediumGrey: "#6D6D6D",
        orange: "#E05D09",
        dark: "#111827",
        maize: "#F2C94C",
        coralPink: "#EB5757",
        darkGrey: "#3C3C3C",
        veryLightPink: "#FFF7ED",
        paleGray: "#F9FAFB",
        borderGray: "#667085",
        formBorderGray:"#344054",
        btnGradient: {
          orange1: "#FA751A",
          orange2: "#DD5B07",
          orangeHover1: "#D66512",
          orangeHover2: "#B34905"
        }
      },
      backgroundImage: {
        'bg-event-details': "url('/assets/images/bg_event_details.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        title: ["Playfair Display", "Public Sans", "sans-serif"],
      },

      maxWidth: {
        container: "75rem",
      },
      spacing: {
        '0.25': '0.25rem',
        'custom-line': '0.1875rem',
        'hero-section': '37.9375rem',
        'service-section': '45.438rem',
        'about-us-sec': '31.125rem',
        'btn-width': '10.0625rem',
      }
    }
  },
  plugins: [],
};
