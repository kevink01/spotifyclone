import { extendTheme } from '@chakra-ui/react';

import colors from './color';
import config from './config';
import fonts from './fonts';

const extension = {
	colors,
	config,
	fonts,
};

const spotifyTheme = extendTheme(extension);

export default spotifyTheme;
