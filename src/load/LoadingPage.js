import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Loading.css'
const LoadingPage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // 如果用户未登录，重定向到登录页面
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

    return (
      <div className='container'>
        Please sign in first
      </div>
    );
  };
  
  export default LoadingPage;