/**
 * Converts CSV to Markdown Table
 *
 * @param {string} csvContent - The string content of the CSV
 * @param {string} delimiter - The character(s) to use as the CSV column delimiter
 * @param {boolean} hasHeader - Whether to use the first row of Data as headers
 * @param {boolean} useDoubleBarHeader - Whether the header uses double barlines for <th>
 * @returns {string}
 */
// tslint:disable-next-line:max-line-length
function csvToMarkdown(csvContent: string, delimiter: string = '\t', hasHeader: boolean = false, useDoubleBarHeader: boolean = false) {
	if (delimiter !== '\t') {
		csvContent = csvContent.replace(/\t/g, '    ');
	}

	const columns = csvContent.split('\n');

	const tabularData: string[][] = [];
	const maxRowLen: number[] = [];

	columns.forEach((e, i) => {
		if (typeof tabularData[i] === 'undefined') {
			tabularData[i] = [];
		}
		const regex = new RegExp(delimiter + '(?![^"]*"\\B)');
		const row = e.split(regex);
		row.forEach((ee, ii) => {
			if (typeof maxRowLen[ii] === 'undefined') {
				maxRowLen[ii] = 0;
			}

			maxRowLen[ii] = Math.max(maxRowLen[ii], ee.length);
			tabularData[i][ii] = ee;
		});
	});

	let headerOutput = '';
	let seperatorOutput = '';

	maxRowLen.forEach((len) => {
		const sizer = Array(len + 1 + 2);

		seperatorOutput += '|' + sizer.join('-');
		headerOutput += '|' + sizer.join(' ');
	});

	headerOutput += '| \n';
	seperatorOutput += '| \n';

	if (hasHeader) {
		headerOutput = '';
	}

	let rowOutput = '';
	tabularData.forEach((col, i) => {
		maxRowLen.forEach((len, y) => {
			const row = typeof col[y] === 'undefined' ? '' : col[y];
			let preSpaceCount = 1;
			let postSpaceCount = (len - row.length ) + 1;

			if (useDoubleBarHeader) {
				if (i > 0 ) {
					postSpaceCount++;
					preSpaceCount++;
					if (y > 0) {
						preSpaceCount--;
					}
				}
				if (!hasHeader && i === 0) {
					postSpaceCount++;
					if (y === 0) {
						preSpaceCount++;
					}
				}
			}

			const preSpacing = Array(preSpaceCount + 1).join(' ');
			const spacing = Array(postSpaceCount + 1).join(' ');
			const out = `|${preSpacing}${row}${spacing}`;

			if (hasHeader && i === 0) {
				headerOutput += out;
			} else {
				rowOutput += out;
			}
		});

		if (hasHeader && i === 0) {
			headerOutput += '| \n';
		} else {
			rowOutput += '| \n';
		}
	});

	if (useDoubleBarHeader) {
		headerOutput = headerOutput.replace(/\|/g, '||');
		seperatorOutput = '';
	}

	return headerOutput + seperatorOutput + rowOutput;
}

if (typeof module !== 'undefined') {
	module.exports = csvToMarkdown;
}
