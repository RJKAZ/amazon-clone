import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function privateRoute({component: Component, ...rest}) {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <Route
    {...rest}
    render={(props) =>
    userInfo ? (
      <Component {...props}></Component>
    ): (
      <Redirect to="/signin"/>
    )
  }
  ></Route>
  );
}
