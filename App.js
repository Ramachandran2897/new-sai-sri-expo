import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import Navigation from "./src/utils/Navigation"
const queryclient = new QueryClient();
import './src/utils/interceptor'
import { StatusBar } from "react-native";
import colors from "./src/sai-sri-config/colors";
import './src/globalVariable';
import { Provider } from "react-redux";
import { store } from "./src/Redux-toolkit/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryclient}>
        <StatusBar backgroundColor={colors.primary} />
        <Navigation />
      </ QueryClientProvider>
    </Provider>
  )
}
export default App