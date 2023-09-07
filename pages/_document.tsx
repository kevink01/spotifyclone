import theme from '@/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<NextScript />
				<div className='container'>
					<div id='sidebar'>
						<div className='sidebar-content'>Hello</div>
					</div>
					<div id='resize'></div>
					<div id='main'>
						<Main />
					</div>
				</div>
			</body>
		</Html>
	);
}
