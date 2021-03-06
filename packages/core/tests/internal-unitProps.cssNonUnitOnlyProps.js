export const cssNonUnitOnlyProps = new Set([
	'align-content',
	'align-items',
	'align-self',
	'alignment-baseline',
	'all',
	'animation',
	'animation-direction',
	'animation-fill-mode',
	'animation-iteration-count',
	'animation-name',
	'animation-play-state',
	'animation-timing-function',
	'appearance',
	'aspect-ratio',
	'backface-visibility',
	'background',
	'background-attachment',
	'background-blend-mode',
	'background-clip',
	'background-color',
	'background-image',
	'background-origin',
	'background-position',
	'background-repeat',
	'baseline-shift',
	'baseline-source',
	'block-ellipsis',
	'block-step',
	'block-step-align',
	'block-step-insert',
	'block-step-round',
	'block-step-size',
	'bookmark-label',
	'bookmark-level',
	'bookmark-state',
	'border-block-color',
	'border-block-end-color',
	'border-block-end-style',
	'border-block-start-color',
	'border-block-start-style',
	'border-block-style',
	'border-bottom-color',
	'border-bottom-style',
	'border-boundary',
	'border-collapse',
	'border-color',
	'border-image',
	'border-image-outset',
	'border-image-repeat',
	'border-image-slice',
	'border-image-source',
	'border-image-width',
	'border-inline',
	'border-inline-color',
	'border-inline-end-color',
	'border-inline-end-style',
	'border-inline-start-color',
	'border-inline-start-style',
	'border-inline-style',
	'border-left-color',
	'border-left-style',
	'border-right-color',
	'border-right-style',
	'border-style',
	'border-top-color',
	'border-top-style',
	'box-decoration-break',
	'box-shadow',
	'box-sizing',
	'box-snap',
	'break-after',
	'break-before',
	'break-inside',
	'caption-side',
	'caret',
	'caret-color',
	'caret-shape',
	'chains',
	'clear',
	'clip',
	'clip-path',
	'clip-rule',
	'color',
	'color-adjust',
	'color-interpolation-filters',
	'color-scheme',
	'column-count',
	'column-fill',
	'column-rule-color',
	'column-rule-style',
	'column-span',
	'columns',
	'contain',
	'content',
	'content-visibility',
	'continue',
	'counter-increment',
	'counter-reset',
	'counter-set',
	'cue',
	'cue-after',
	'cue-before',
	'cursor',
	'direction',
	'display',
	'dominant-baseline',
	'empty-cells',
	'fill',
	'fill-break',
	'fill-color',
	'fill-image',
	'fill-opacity',
	'fill-origin',
	'fill-position',
	'fill-repeat',
	'fill-rule',
	'fill-size',
	'filter',
	'flex',
	'flex-direction',
	'flex-flow',
	'flex-grow',
	'flex-shrink',
	'flex-wrap',
	'float',
	'float-defer',
	'float-offset',
	'float-reference',
	'flood-color',
	'flood-opacity',
	'flow',
	'flow-from',
	'flow-into',
	'font',
	'font-family',
	'font-feature-settings',
	'font-kerning',
	'font-language-override',
	'font-optical-sizing',
	'font-palette',
	'font-size-adjust',
	'font-stretch',
	'font-style',
	'font-synthesis',
	'font-synthesis-small-caps',
	'font-synthesis-style',
	'font-synthesis-weight',
	'font-variant',
	'font-variant-alternates',
	'font-variant-caps',
	'font-variant-east-asian',
	'font-variant-emoji',
	'font-variant-ligatures',
	'font-variant-numeric',
	'font-variant-position',
	'font-variation-settings',
	'font-weight',
	'footnote-display',
	'footnote-policy',
	'forced-color-adjust',
	'glyph-orientation-vertical',
	'grid',
	'grid-area',
	'grid-auto-flow',
	'grid-column',
	'grid-column-end',
	'grid-column-start',
	'grid-row',
	'grid-row-end',
	'grid-row-start',
	'grid-template',
	'grid-template-areas',
	'hanging-punctuation',
	'hyphenate-character',
	'hyphenate-limit-chars',
	'hyphenate-limit-last',
	'hyphenate-limit-lines',
	'hyphenate-limit-zone',
	'hyphens',
	'image-orientation',
	'image-rendering',
	'image-resolution',
	'initial-letter',
	'initial-letter-align',
	'initial-letter-wrap',
	'inline-sizing',
	'isolation',
	'justify-content',
	'justify-items',
	'justify-self',
	'leading-trim',
	'lighting-color',
	'line-break',
	'line-clamp',
	'line-grid',
	'line-height',
	'line-height-step',
	'line-padding',
	'line-snap',
	'list-style',
	'list-style-image',
	'list-style-position',
	'list-style-type',
	'margin-break',
	'margin-trim',
	'marker',
	'marker-end',
	'marker-knockout-left',
	'marker-knockout-right',
	'marker-mid',
	'marker-pattern',
	'marker-segment',
	'marker-side',
	'marker-start',
	'mask',
	'mask-border',
	'mask-border-mode',
	'mask-border-outset',
	'mask-border-repeat',
	'mask-border-slice',
	'mask-border-source',
	'mask-border-width',
	'mask-clip',
	'mask-composite',
	'mask-image',
	'mask-mode',
	'mask-origin',
	'mask-position',
	'mask-repeat',
	'mask-size',
	'mask-type',
	'max-lines',
	'mix-blend-mode',
	'nav-down',
	'nav-left',
	'nav-right',
	'nav-up',
	'object-fit',
	'object-position',
	'offset',
	'offset-anchor',
	'offset-path',
	'offset-position',
	'opacity',
	'order',
	'orphans',
	'outline-color',
	'outline-style',
	'overflow',
	'overflow-anchor',
	'overflow-block',
	'overflow-inline',
	'overflow-wrap',
	'overflow-x',
	'overflow-y',
	'overscroll-behavior',
	'overscroll-behavior-block',
	'overscroll-behavior-inline',
	'overscroll-behavior-x',
	'overscroll-behavior-y',
	'page',
	'page-break-after',
	'page-break-before',
	'page-break-inside',
	'pause',
	'pause-after',
	'pause-before',
	'perspective-origin',
	'place-content',
	'place-items',
	'place-self',
	'position',
	'property-name',
	'quotes',
	'region-fragment',
	'resize',
	'rest',
	'rest-after',
	'rest-before',
	'rotate',
	'ruby-align',
	'ruby-merge',
	'ruby-overhang',
	'ruby-position',
	'running',
	'scale',
	'scroll-behavior',
	'scroll-snap-align',
	'scroll-snap-stop',
	'scroll-snap-type',
	'scrollbar-color',
	'scrollbar-gutter',
	'scrollbar-width',
	'shape-image-threshold',
	'shape-inside',
	'shape-outside',
	'spatial-navigation-action',
	'spatial-navigation-contain',
	'spatial-navigation-function',
	'speak',
	'speak-as',
	'string-set',
	'stroke',
	'stroke-align',
	'stroke-alignment',
	'stroke-break',
	'stroke-color',
	'stroke-dash-corner',
	'stroke-dash-justify',
	'stroke-dashadjust',
	'stroke-dasharray',
	'stroke-dashcorner',
	'stroke-dashoffset',
	'stroke-image',
	'stroke-linecap',
	'stroke-linejoin',
	'stroke-miterlimit',
	'stroke-opacity',
	'stroke-origin',
	'stroke-position',
	'stroke-repeat',
	'stroke-size',
	'stroke-width',
	'tab-size',
	'table-layout',
	'text-align',
	'text-align-all',
	'text-align-last',
	'text-combine-upright',
	'text-decoration-color',
	'text-decoration-line',
	'text-decoration-skip',
	'text-decoration-skip-box',
	'text-decoration-skip-ink',
	'text-decoration-skip-inset',
	'text-decoration-skip-self',
	'text-decoration-skip-spaces',
	'text-decoration-style',
	'text-edge',
	'text-emphasis',
	'text-emphasis-color',
	'text-emphasis-position',
	'text-emphasis-skip',
	'text-emphasis-style',
	'text-group-align',
	'text-justify',
	'text-orientation',
	'text-overflow',
	'text-shadow',
	'text-space-collapse',
	'text-space-trim',
	'text-spacing',
	'text-transform',
	'text-underline-position',
	'text-wrap',
	'transform',
	'transform-box',
	'transform-origin',
	'transform-style',
	'transition',
	'transition-property',
	'transition-timing-function',
	'translate',
	'unicode-bidi',
	'user-select',
	'visibility',
	'voice-balance',
	'voice-duration',
	'voice-family',
	'voice-pitch',
	'voice-range',
	'voice-rate',
	'voice-stress',
	'voice-volume',
	'white-space',
	'widows',
	'will-change',
	'word-boundary-detection',
	'word-boundary-expansion',
	'word-break',
	'word-wrap',
	'wrap-after',
	'wrap-before',
	'wrap-flow',
	'wrap-inside',
	'wrap-through',
	'writing-mode',
	'z-index',
])
