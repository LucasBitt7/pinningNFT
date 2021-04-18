import './App.css';
import React, { Component } from "react";
import MyUploader from './uploader'
 export default class App extends Component  {

 render() {
  return (     
    <div className="App">
      <header className="App-header">
      <MyUploader />
       <div className="app-col-2">
      </div>
      </header>
    </div>
  );}}

