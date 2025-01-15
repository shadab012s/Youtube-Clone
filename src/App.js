import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { useState } from 'react';

/* Layout Component */
const Layout = () => {
  const [showSearchResult, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <Head
        setShowSearchResults={setShowSearchResults}
        setSearchResults={setSearchResults}
        
      />
      {/* Dynamic content based on route */}
      <div className="flex-grow overflow-auto">
        <Body
          showSearchResult={showSearchResult}
          searchResults={searchResults}
        />
        
      </div>
    </div>
  );
};

/* Define routes with nested structure */
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Common layout for Header and Body
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
