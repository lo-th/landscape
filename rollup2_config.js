import resolve from '@rollup/plugin-node-resolve'; // locate and bundle dependencies in node_modules (mandatory)
import terser from '@rollup/plugin-terser'; // code minification (optional)

export default {
	input: 'src/Landscape.js',
	external: ['three', 'three/webgpu', 'three/tsl'],
	output: [
		{
			format: 'umd',
			name: 'LANDSCAPE',
			file: 'bundle/Landscape.js'
		}
	],
	plugins: [ resolve(), terser() ]
};
