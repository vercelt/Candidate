import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Loading.css'
const LoadingPage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if (!isAuthenticated) {
      // 如果用户未登录，重定向到登录页面
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);
    return (
      <div className='container'>
        <p className="loading-text"> Loading...</p>
      </div>
    );
  };
  
  export default LoadingPage;