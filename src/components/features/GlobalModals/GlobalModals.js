import {useContext} from 'react';
import SpotifyContext from '../../../context/SpotifyContext';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react"

function GlobalModals() {
    const {
        loginFailed,
        setLoginFailed
    } = useContext(SpotifyContext);

    return (
        <>
            <AlertDialog
                isOpen={loginFailed}
                onClose={() => setLoginFailed(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Login to Spotify Failed
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Timelineify could not login to Spotify. Please try again.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={() => setLoginFailed(false)}>
                                Continue
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default GlobalModals;