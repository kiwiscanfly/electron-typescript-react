/**
 * Starting point for main thread
 */
import { app,BrowserWindow } from 'electron';
import Main from './Main';

Main.main(app,BrowserWindow);