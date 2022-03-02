const { Transformer } = require('@parcel/plugin');
const hjson = require('hjson');

const transfomer = new Transformer({
	async transform({ asset }) {
		const contents = await asset.getCode();
		const compiledResult = hjson.parse(contents);

		const outputJSON = JSON.stringify(compiledResult);
		asset.type = 'json';
		asset.setCode(outputJSON);
		return [asset];
	},
});

module.exports = transfomer;
