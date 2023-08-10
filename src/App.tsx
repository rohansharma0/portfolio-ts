import { useEffect, useMemo, useState, useRef } from 'react'
import Background from './pages/Background';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';

import { Properties } from "./helper/Constants";
import { ThemeContext } from './providers/ThemeContext';
import { Theme } from './models/Theme';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


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

    //locomotive scroll
    const containerRef = useRef(null)

    return (
        <BrowserRouter basename="/">
            <ThemeContext.Provider value={themeMemo}>
                <ThemeProvider theme={getTheme}>
                    <LocomotiveScrollProvider
                        options={
                            {
                                smooth: true,
                                // ... all available Locomotive Scroll instance options 
                            }
                        }
                        watch={
                            [
                                //..all the dependencies you want to watch to update the scroll.
                                //  Basicaly, you would want to watch page/location changes
                                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                            ]
                        }
                        containerRef={containerRef}
                    >
                        <GlobalStyles />
                        <Background />
                        <main data-scroll-container ref={containerRef}>
                            <Header />
                            <Router />
                            <Footer />
                        </main>

                        {/* {preloader ? (
                <LoadingPage />
            ) : (
                
            )} */}
                    </LocomotiveScrollProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </BrowserRouter>


    )
}

export default App