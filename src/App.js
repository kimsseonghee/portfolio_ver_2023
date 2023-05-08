import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from 'route/Detail';
import Index from 'route/Index';
import Loading from 'route/Loading';
import Project from 'route/Project';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

      {loading ? (
        <Route path="/" element={<Loading/>}/>
          ) : (
            <>
        <Route path='/' element={<Index/>}/>
        <Route path='Project' element={<Project/>}/>
        <Route path='Detail' element={<Detail/>}/>
            </>
          )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;