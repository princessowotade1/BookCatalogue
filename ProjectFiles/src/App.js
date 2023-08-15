import './App.css';
import '../src/Fonts/fonts.css';
import NavigationBar from './Components/Navigation';
import HomePage from './Pages/Home';
//import BookDetails from "./Pages/Book";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationBar />
      {/*<BookDetails title="catching fire" author='suzanne collins'/>*/}
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
