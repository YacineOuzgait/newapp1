import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './screens/baseScreen';
import React, { Suspense } from 'react';
import LoadingSpinner from './components/layouts/LoadingSpinner';
const HomeScreen = React.lazy(() => import("./screens/homeScreen"));
const CategoryScreen = React.lazy(() => import("./screens/categoryScreen"));
const GenderScreen = React.lazy(() => import("./screens/genderScreen"));
const ProductScreen = React.lazy(() => import("./screens/productScreen"));
const NotFoundScreen = React.lazy(() => import("./screens/notFoundScreen"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomeScreen />
              </Suspense>
            } />
          <Route path="/category"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CategoryScreen />
              </Suspense>
            } />
            <Route path="/category/:id"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CategoryScreen />
              </Suspense>
            } />
          <Route path="/gender"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GenderScreen />
              </Suspense>
            } />
            <Route path="/gender/:id"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GenderScreen />
              </Suspense>
            } />
          <Route path="/product"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProductScreen />
              </Suspense>
            } />
          <Route path="*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundScreen />
              </Suspense>
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
