
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./redux/store/createStore";

import GlobalThemeProvider from "./components/GlobalThemeProvider";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

const store = configureStore();

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
          <GlobalThemeProvider>
            <>
              <Navigation />
              <Routes />
            </>
         </GlobalThemeProvider>
      </Router>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<Provider store={store}><App /></Provider>, ROOT);

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./index", () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        ROOT
      );
    });
  }
}
