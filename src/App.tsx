import { useEffect, useMemo, useState } from 'react'
import Background from './pages/Background';
import GlobalStyles from './components/styles/Global';
import NavBar from './components/Navbar';
import { ThemeProvider } from 'styled-components';

import { Properties } from "./helper/Constants";
import { ThemeContext } from './providers/ThemeContext';
import { Theme } from './models/Theme';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Router from './Router';


const App = () => {
    // const [preloader, setPreloader] = useState(true);
    // const [timer, setTimer] = useState(1);
    // const id: any = useRef(null);

    // const clear = () => {
    //     window.clearInterval(id.current);
    //     setPreloader(false);
    // };

    // useEffect(() => {
    //     id.current = window.setInterval(() => {
    //         setTimer(timer - 1);
    //     }, 500);
    // });

    // useEffect(() => {
    //     if (timer === 0) {
    //         clear();
    //     }
    // }, [timer]);


    // Theme
    const [theme, setTheme] = useState("");
    // Check if theme is stored in local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme ?? Theme.Dark);
    }, []);

    const getTheme = () => {
        return theme === Theme.Dark ? Properties.darkTheme : Properties.lightTheme;
    }
    const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);


    return (
        <BrowserRouter basename="/">
            <ThemeContext.Provider value={themeMemo}>
                <ThemeProvider theme={getTheme}>
                    <GlobalStyles />
                    <Background />
                    <>
                        <NavBar />
                        <Router />
                    </>
                    {/* {preloader ? (
                <LoadingPage />
            ) : (
                
            )} */}
                </ThemeProvider>
            </ThemeContext.Provider>
        </BrowserRouter>


    )
}

export default App