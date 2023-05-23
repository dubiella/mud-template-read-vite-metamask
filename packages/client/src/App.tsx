import {useComponentValue} from "@latticexyz/react";
import {useMUD} from "./MUDContext";
import {createContext, useContext} from "react";
import {walletContext} from './WalletConnection'

import {Button, Grid, Paper} from '@mui/material';

export const App = () => {
    const {wallet} = useContext(walletContext);

    const {
        components: {Counter},
        systemCalls: {increment},
        network: {singletonEntity},
    } = useMUD();

    const counter = useComponentValue(Counter, singletonEntity);

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={1}
            >
                <Grid item>
                    <Paper variant="outlined" sx={{py: 1, px: 3}}>
                        Counter:
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper variant="outlined" sx={{py: 1, px: 3}}>
                        {counter?.value ?? "??"}
                        {/*Counter: <span>{counter?.value ?? "??"}</span>*/}
                    </Paper>
                </Grid>
                <Grid item>
                    <Button
                        size="large"
                        variant="outlined"
                        onClick={async (event) => {
                            event.preventDefault();
                            console.log("new counter value:", await increment());
                        }}
                        disabled={wallet.accounts.length <= 0}
                    >
                        Increment
                    </Button>
                </Grid>

            </Grid>
        </>
    );
};
