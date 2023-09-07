import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import spotifyTheme from '@/theme';

type ProviderProps = {
	children: React.ReactNode;
};

export default function SpotifyProvider({ children }: ProviderProps) {
	return <ChakraProvider theme={spotifyTheme}>{children}</ChakraProvider>;
}
