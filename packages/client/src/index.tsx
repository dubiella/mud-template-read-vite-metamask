import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import WalletConnection from "./WalletConnection";

import MUDSetup from "./ MUDSetup";

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
        },
    },
});

const rootElement = document.getElementById("react-root");
if (!rootElement) throw new Error("React root not found");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <WalletConnection>
                <MUDSetup>
                    <App/>
                </MUDSetup>
            </WalletConnection>
        </ThemeProvider>
    </>
)