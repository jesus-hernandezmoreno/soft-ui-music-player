import colors from './colors';

const theme = {
  common: {
    boxShadow: '5px 5px 10px #c3cad6, -5px -5px 10px #ffffff',
    activeBoxShadow: 'inset 5px 5px 10px #c3cad6, inset -5px -5px 10px #ffffff',
    blueBoxShadow: '5px 5px 10px #6580d9, -10px -10px 10px #ffffff',
    blueActiveBoxShadow: ' inset 8px 8px 15px #6580d9, inset -8px -8px 15px #89adff'
  },
  background: {
    main: colors.white
  },
  typography: {
    defaultBoxModel: {
      margin: '0 0 2rem 0',
      textAlign: 'center'
    },
    hero: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '2.8rem'
      }
    },
    subhero: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '1.8rem'
      }
    },

    paragraph: {
      mainColor: colors.darkBlue,
      fontSizes: {
        mobile: '1.4rem'
      }
    }
  }
};

export default theme;
