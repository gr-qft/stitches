/** Returns a filled value with a dash prefix. */
const dash = (value) => (value ? '-' + value : '')

/** CSS token value, name, and scale. */
class ThemeToken {
	constructor(value, token, scale = '', prefix = '') {
		this.value = value
		this.token = token
		this.scale = scale
		this.prefix = prefix
	}

	/** Returns a serialized CSS var() representing the token. */
	get computedValue() {
		return 'var(' + this.variable + ')'
	}

	/** Returns a serialized name representing the token. */
	get variable() {
		return '-' + dash(this.prefix) + dash(this.scale) + '-' + this.token
	}

	/** Returns a serialized CSS var() representing the token. */
	toString() {
		return this.computedValue
	}
}

export default ThemeToken
