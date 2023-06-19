import './App.css';
import '../src/Fonts/fonts.css'
import NavigationBar from "./Components/Navigation";
import HomePage from "./Pages/Home";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationBar/>
      <HomePage/>
    </QueryClientProvider>
  );
}

export default App;
