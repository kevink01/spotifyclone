import SpotifyProvider from '@/components/provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SpotifyProvider>
			<Component {...pageProps} />
		</SpotifyProvider>
	);
}
