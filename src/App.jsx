import {HashRouter as Router} from "react-router-dom";
import RouterLink from "./router/router";
import GlobalStyle from "./utils/GlobalStyle";
import store,{persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {

  return (
    <>
        <PersistGate loading={null} persistor={persistor} >
            <Provider store={store}>
                <Router>
                    <RouterLink />
                </Router>
                <GlobalStyle />
            </Provider>
        </PersistGate>

    </>
  )
}

export default App
