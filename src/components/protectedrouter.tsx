import { Navigate } from 'react-router';
import { isTokenExpired } from '../services/token';
import type { JSX } from 'react';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('access_token');
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}