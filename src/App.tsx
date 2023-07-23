import { useEffect, useRef, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Background from './pages/Background';
import GlobalStyles from './components/styles/Global';
import { LoadingPage } from './pages/LoadingPage';
import NavBar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { Routes } from './Routes';

import { Properties } from "./helper/Constants";
import { ThemeContext } from './providers/ThemeContext';


const App = () => {
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(1);
    const id: any = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer(timer - 1);
        }, 500);
    });

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    //theme state
    const [theme, setTheme] = useState("darkTheme")

    const getTheme = () => {
        return theme === "darkTheme" ? Properties.darkTheme : Properties.lightTheme;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={getTheme}>
                <GlobalStyles />
                <Background />
                {preloader ? (
                    <LoadingPage />
                ) : (
                    <>
                        <NavBar />
                        <RouterProvider router={Routes} />
                    </>
                )}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}

export default App