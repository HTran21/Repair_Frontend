import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import className from "classnames/bind";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DeafultLayout from './components/Layouts/DefaultLayout/DefaultLayout';

import Loader from './components/Loader/Loader';

import ScrollButton from './components/ScrollButton/ScrollButton';

import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
    fakeDataFetch()
  }, [])

  return (
    <BrowserRouter>

      <Routes>
        {publicRoutes.map((route, index) => {
          // const Layout = route.layout === null ? Fragment : DeafultLayout
          let Layout = DeafultLayout;

          if (route.layout) {
            Layout = route.layout
          }
          else if (route.layout === null) {
            Layout = Fragment
          }

          const Page = route.component
          return <Route key={index}
            path={route.path}
            element={
              <Layout>


                <Page />

                <Toaster position='top-right' />

                <ScrollButton />



              </Layout>



            } />
        })}
      </Routes>

    </BrowserRouter>

  )
}

export default App
