import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Update the import statement

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IVF from './pages/IVF';
import Gynecology from './pages/Gynecology';
import Maternity from './pages/Maternity';

import Fertility from './pages/Fertility';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Global
          styles={css`
            /* Global styles here, if any */
          `}
        />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ivf" component={IVF} />
          <Route path="/gynecology" component={Gynecology} />
          <Route path="/maternity" component={Maternity} />
          <Route path="/fertility" component={Fertility} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/book-appointment" component={BookAppointment} />
        </Switch>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
//How to implement this code in Hosting.