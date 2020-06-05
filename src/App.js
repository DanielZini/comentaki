import React, { useState, useEffect, useContext } from 'react'
import GlobalStyle from './styles/global'

import NewComment from './components/NewComment'
import Comments from './components/Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'

//  prop deilling
function App() {
  return (
    <>
      <AuthProvider>
        <div className="full-container">
          <div className="container">
            <h1>Comentaki</h1>
            <NewComment />
            <Comments />
            <CreateUser />
            <UserInfo />
            <SignInUser />
          </div>
        </div>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
