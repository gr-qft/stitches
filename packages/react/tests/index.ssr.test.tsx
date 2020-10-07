/**
 * @jest-environment node
 */
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createStyled, _ATOM } from '../src';

const config = {
  showFriendlyClassnames: true,
  breakpoints: {
    breakpointOne: (rule: string) => `@media(min-width:400px){${rule}}`,
    breakpointTwo: (rule: string) => `@media(min-width:800px){${rule}}`,
  },
} as const;
let { styled, css } = createStyled(config);

beforeEach(() => {
  const newStyled = createStyled(config);
  styled = newStyled.styled;
  css = newStyled.css;
});

afterEach(() => {
  (css as any).dispose();
});

describe('styled', () => {
  test('it matches compound variants across different breakpoints', () => {
    const Button = styled('button', {
      color: 'gray',
      variants: {
        color: {
          red: {
            background: 'red',
          },
          yellow: {
            background: 'yellow',
          },
        },
        size: {
          small: {
            height: 20,
          },
          big: {
            height: 40,
          },
        },
      },
    });

    Button.compoundVariant(
      {
        color: 'red',
        size: 'big',
      },
      {
        backgroundColor: 'potato',
      }
    );

    const { styles } = css.getStyles(() => {
      renderer.create(
        <Button color={{ breakpointOne: 'red' }} size={{ breakpointTwo: 'big' }}>
          Responsive compound variants
        </Button>
      );
      // @ts-ignore
      return '';
    });
    expect(styles.length).toBe(6);
    expect(styles[5]).toMatchInlineSnapshot(`
      "/* STITCHES:_COMPOUND_VARIANTS */
      @media (min-width:400px) AND (min-width:800px){./*X*/__COMPOUND_VARIANTS_bc_jzqgSz/*X*/{background-color:potato;}}"
    `);
  });

  test('it matches compound variants matching multiple times at different breakpoints', () => {
    const Button = styled('button', {
      color: 'gray',

      variants: {
        color: {
          red: {
            background: 'red',
          },
          yellow: {
            background: 'yellow',
          },
        },
        size: {
          small: {
            height: 20,
          },
          big: {
            height: 40,
          },
        },
      },
    });

    Button.compoundVariant(
      {
        color: 'red',
        size: 'big',
      },
      {
        backgroundColor: 'potato',
      }
    );
    const { styles } = css.getStyles(() => {
      renderer.create(
        <Button color={{ breakpointOne: 'red', breakpointTwo: 'red' }} size={{ breakpointOne: 'big' }}>
          Responsive compound variants
        </Button>
      );
      // @ts-ignore
      return '';
    });
    expect(styles.length).toBe(6);
    expect(styles[5]).toMatchInlineSnapshot(`
      "/* STITCHES:_COMPOUND_VARIANTS */
      @media (min-width:400px), (min-width:800px) AND (min-width:400px){./*X*/__COMPOUND_VARIANTS_bc_ibdIrp/*X*/{background-color:potato;}}"
    `);
  });

  test('it does\nt merge medias with "AND" when they\'re the same', () => {
    const Button = styled('button', {
      color: 'gray',

      variants: {
        color: {
          red: {
            background: 'red',
          },
          yellow: {
            background: 'yellow',
          },
        },
        size: {
          small: {
            height: 20,
          },
          big: {
            height: 40,
          },
        },
      },
    });

    Button.compoundVariant(
      {
        color: 'red',
        size: 'big',
      },
      {
        backgroundColor: 'potato',
      }
    );
    const { styles } = css.getStyles(() => {
      renderer.create(
        <Button color={{ breakpointOne: 'red' }} size={{ breakpointOne: 'big' }}>
          Responsive compound variants
        </Button>
      );
      // @ts-ignore
      return '';
    });
    expect(styles.length).toBe(6);
    expect(styles[5]).toMatchInlineSnapshot(`
      "/* STITCHES:_COMPOUND_VARIANTS */
      @media (min-width:400px){./*X*/__COMPOUND_VARIANTS_bc_fMEIfK/*X*/{background-color:potato;}}"
    `);
  });

  test('Handles compound variant with implicit initial values', () => {
    const Button = styled('button', {
      backgroundColor: 'gray',
      variants: {
        variant: {
          red: {
            backgroundColor: 'red',
          },
        },
        size: {
          1: {
            height: 30,
          },
          2: {
            height: 60,
          },
        },
      },
    }).compoundVariant(
      {
        variant: 'red',
        size: 1,
      },
      {
        backgroundColor: 'compoundColor',
      }
    );

    const { styles } = css.getStyles(() => {
      renderer.create(
        <Button variant="red" size={1}>
          compound
        </Button>
      );
      // @ts-ignore
      return '';
    });
    expect(styles.length).toBe(6);
    expect(styles[5]).toMatchInlineSnapshot(`
      "/* STITCHES:_COMPOUND_VARIANTS */
      ./*X*/__COMPOUND_VARIANTS_bc_fhWNnZ/*X*/ {background-color:compoundColor;}"
    `);
  });

  test.only('it matches non-implicit initial values', () => {
    const Button = styled('button', {
      color: 'gray',

      variants: {
        variant: {
          red: {
            background: 'red',
          },
          yellow: {
            background: 'yellow',
          },
        },
        size: {
          1: {
            height: 20,
          },
          2: {
            height: 40,
          },
        },
      },
    });

    Button.compoundVariant(
      {
        variant: 'red',
        size: 2,
      },
      {
        backgroundColor: 'potato',
      }
    );
    const { styles } = css.getStyles(() => {
      renderer.create(
        <Button variant={{ initial: 'red' }} size={{ initial: 2 }}>
          compound
        </Button>
      );
      // @ts-ignore
      return '';
    });
    expect(styles.length).toBe(6);
    expect(styles[5]).toMatchInlineSnapshot(`
      "/* STITCHES:_COMPOUND_VARIANTS */
      ./*X*/__COMPOUND_VARIANTS_bc_dfppQs/*X*/ {background-color:potato;}"
    `);
  });
});