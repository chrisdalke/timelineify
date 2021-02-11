import './RootScreen.scss';
import Menu from '../../features/Menu/Menu';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import SearchScreen from '../SearchScreen/SearchScreen';
import ArtistScreen from '../ArtistScreen/ArtistScreen';
import AboutScreen from '../AboutScreen/AboutScreen';
import {Container, Flex, Spacer} from '@chakra-ui/layout';
import Footer from '../../features/Footer/Footer';
import AuthScreen from '../AuthScreen/AuthScreen';
import { SpotifyContextProvider } from '../../../context/SpotifyContext';
import GlobalModals from '../../features/GlobalModals/GlobalModals';

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    fonts: {
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n" +
            "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
            "    sans-serif",
        heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n" +
            "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
            "    sans-serif",
        mono: "Menlo, monospace",
    }
});

function RootScreen() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <SpotifyContextProvider>
                    <Menu />
                    <Container maxW={"1000px"} mb={10}>
                        <Switch>
                            <Route exact path="/auth">
                                <AuthScreen />
                            </Route>
                            <Route exact path="/">
                                <SearchScreen />
                            </Route>
                            <Route exact path="/about">
                                <AboutScreen />
                            </Route>
                            <Route path="/artist">
                                <ArtistScreen />
                            </Route>
                            <Route>
                                <Redirect to={"/"} />
                            </Route>
                        </Switch>
                    </Container>
                    <Spacer />
                    <Footer />
                    <GlobalModals />
            </SpotifyContextProvider>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default RootScreen;