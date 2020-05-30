import React, { useState, useEffect, useContext } from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'

//  prop deilling
function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <UserInfo />
        <SignInUser />
      </div>
    </AuthProvider>
  );
}

export default App;
