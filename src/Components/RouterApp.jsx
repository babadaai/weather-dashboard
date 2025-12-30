import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function Router() {
  return (
    <Routes>
      
      <Route exact path='/' element={<Dashboard />} />
      
     
      <Route path='dashboard' element={<Dashboard />} />
      
      
      <Route path='map' element={<Navigate to="/" />} />
      
      
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}