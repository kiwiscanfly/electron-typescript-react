/**
 * Starting point for render thread of main window
 */
import MainView from './mainview.js';
import * as React from 'react';
import * as ReactDOM from "react-dom"

const greeting = new MainView();

greeting.hello();