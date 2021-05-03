import { createCss } from '../src/index.js'

describe('Tokens', () => {
	test('Authors can use a regular token', () => {
		{
			const { global, toString } = createCss({
				theme: {
					colors: {
						red: 'tomato',
					},
				},
			})

			global({
				article: {
					color: '$red',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxrrtg8{--colors-red:tomato;}` +
				`article{color:var(--colors-red);}`
			)
		}

		{
			const { global, toString } = createCss({
				theme: {
					shadows: {
						red: 'tomato',
					},
				},
			})

			global({
				article: {
					boxShadow: '0 0 0 1px $red',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxkoahg{--shadows-red:tomato;}` +
				`article{box-shadow:0 0 0 1px var(--shadows-red);}`
			)
		}
	})

	test('Authors can use a relative token', () => {
		{
			const { global, toString } = createCss({
				theme: {
					colors: {
						red: 'tomato',
						red500: '$red',
					},
				},
			})

			global({
				article: {
					color: '$red500',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxg0xb8{--colors-red:tomato;--colors-red500:var(--colors-red);}` +
				`article{color:var(--colors-red500);}`
			)
		}

		{
			const { global, toString } = createCss({
				theme: {
					shadows: {
						red: 'tomato',
						red500: '$red',
						redUnique: '$$red'
					},
				},
			})

			global({
				article: {
					boxShadow: '0 0 0 1px $red500',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxukjub{--shadows-red:tomato;--shadows-red500:var(--shadows-red);--shadows-redUnique:var(---red);}` +
				`article{box-shadow:0 0 0 1px var(--shadows-red500);}`
			)
		}
	})

	test('Authors can use an absolute token', () => {
		{
			const { global, toString } = createCss({
				theme: {
					colors: {
						red: 'tomato',
					},
				},
			})

			global({
				article: {
					boxShadow: '0 0 0 1px $colors$red',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxrrtg8{--colors-red:tomato;}` +
				`article{box-shadow:0 0 0 1px var(--colors-red);}`
			)
		}

		{
			const { global, toString } = createCss({
				theme: {
					colors: {
						red: 'tomato',
					},
				},
			})

			global({
				article: {
					boxShadow: '0 0 0 1px $colors$red',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxrrtg8{--colors-red:tomato;}` +
				`article{box-shadow:0 0 0 1px var(--colors-red);}`
			)
		}
	})

	test('Authors can use a negative token', () => {
		{
			const { global, toString } = createCss({
				theme: {
					space: {
						sp1: '100px',
						sp2: '200px',
					},
				},
			})

			global({
				article: {
					marginLeft: '-$sp1',
					marginTop: '-$sp2',
				},
			})()

			expect(toString()).toBe(
				`:root,.sx5wzk8{--space-sp1:100px;--space-sp2:200px;}` +
				`article{margin-left:calc(var(--space-sp1)*-1);margin-top:calc(var(--space-sp2)*-1);}`
			)
		}

		{
			const { global, toString } = createCss({
				theme: {
					sizes: {
						sp1: '10px',
						sp2: '20px',
						sp3: '30px',
					},
				},
			})

			global({
				article: {
					marginLeft: '-$sizes$sp1',
					width: '$sp1',
				},
			})()

			expect(toString()).toBe(
				`:root,.sxpobec{--sizes-sp1:10px;--sizes-sp2:20px;--sizes-sp3:30px;}` +
				`article{margin-left:calc(var(--sizes-sp1)*-1);width:var(--sizes-sp1);}`
			)
		}
	})

	test('Authors can use tokens from the global theme object', () => {
		const { global, theme, toString } = createCss({
			theme: {
				space: {
					sp1: '100px',
					sp2: '200px',
				},
			},
		})

		global({
			article: {
				marginLeft: theme.space.sp1,
				marginTop: theme.space.sp2,
			},
		})()

		expect(toString()).toBe(
			`:root,.sx5wzk8{--space-sp1:100px;--space-sp2:200px;}` +
			`article{margin-left:var(--space-sp1);margin-top:var(--space-sp2);}`,
		)
	})

	test('Authors can use tokens from a new theme object', () => {
		const { global, theme, toString } = createCss()

		const mytheme = theme('my-theme', {
			space: {
				sp1: '100px',
				sp2: '200px',
			},
		})

		global({
			article: {
				marginLeft: mytheme.space.sp1,
				marginTop: mytheme.space.sp2,
			},
		})()

		expect(toString()).toBe(
			`article{margin-left:var(--space-sp1);margin-top:var(--space-sp2);}`,
		)

		mytheme.className

		expect(toString()).toBe(
			`.my-theme{--space-sp1:100px;--space-sp2:200px;}` +
			`article{margin-left:var(--space-sp1);margin-top:var(--space-sp2);}`,
		)
	})

	test('Authors can use tokens from the global theme object', () => {
		const { global, theme, toString } = createCss({
			theme: {
				space: {
					sp1: '100px',
					sp2: '200px',
				},
			},
		})

		global({
			article: {
				marginLeft: theme.space.sp1,
				marginTop: theme.space.sp2,
			},
		})()

		expect(toString()).toBe(
			`:root,.sx5wzk8{--space-sp1:100px;--space-sp2:200px;}` +
			`article{margin-left:var(--space-sp1);margin-top:var(--space-sp2);}`,
		)
	})

	test('Authors can use the class from the root theme object', () => {
		const { theme, toString } = createCss({
			prefix: 'pedro',
			theme: {
				colors: {
					blue: 'dodgerblue',
				},
			}
		})

		expect(`<div class="${theme}"></div>`).toBe(`<div class="pedrofy0qk"></div>`)

		expect(toString()).toBe(
			`:root,.pedrofy0qk{--pedro-colors-blue:dodgerblue;}`,
		)
	})
}) // prettier-ignore
