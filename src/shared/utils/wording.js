/**
 * Correlation table for key
 * @param {String} key Key to search in the object wordings
 * @returns {String}) Text corresponding to the key or an empty string
 */
export default function (key) {
	const wordings = {
		url_scope: 'URL',
		code_scope: 'Code',
		selector_scope: 'Selector',
		cookie_scope: 'Cookie',
		ip_scope: 'Ip'
	}

	return wordings[key] || ''
}
