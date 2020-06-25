import React from 'react';
/* Views */
import Main from './Views/Main';
/* Layout */
import Phone from './Layout/Phone';
/* Custom Hooks */
import useWindowResize from './hooks/useWindowResize';

const App = () => {
  const { width } = useWindowResize();
  const isMobile = width <= 500;
  if (isMobile) {
    return <Main />;
  } else {
    return (
      <Phone>
        <Main />
      </Phone>
    );
  }
};

export default App;
