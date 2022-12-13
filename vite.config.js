import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [houdini(), sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src'),
			$assets: resolve('./src/assets'),
			$houdini: resolve('.', '$houdini')
		}
	}
};

export default config;
