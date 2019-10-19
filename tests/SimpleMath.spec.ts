import { SimpleMath } from '../src/SimpleMath';

describe('Simple math tests', () => {
  it('Plus operation', () => {
    const simpleMath = new SimpleMath();

    expect(simpleMath.plus(3)).toBe(3);
    expect(simpleMath.plus(9)).toBe(12);
  });

  it('Minus operation', () => {
    const sm = new SimpleMath();

    expect(sm.minus(5)).toBe(-5);
    expect(sm.minus(7)).toBe(-12);
  });

  it('Div operation', () => {
    const sm = new SimpleMath(50);

    expect(sm.div(5)).toBe(10);
    expect(sm.div(2)).toBe(5);
  });

  it('Mod operation', () => {
    const sm = new SimpleMath(10);

    expect(sm.mod(7)).toBe(3);
    expect(sm.mod(2)).toBe(1);
  });

  it('Mul operation', () => {
    const sm = new SimpleMath(3);

    expect(sm.mul(2)).toBe(6);
    expect(sm.mul(3)).toBe(18);
  });

  it('Sqr operation', () => {
    const sm = new SimpleMath(4);

    expect(sm.sqr()).toBe(16);
    expect(sm.sqr()).toBe(256);
  });

  it('Sqrt operation', () => {
    const sm = new SimpleMath(81);

    expect(sm.sqrt()).toBe(9);
    expect(sm.sqrt()).toBe(3);
  });

  it('Pow operation', () => {
    const sm = new SimpleMath(9);

    expect(sm.pow(1)).toBe(9);
    expect(sm.pow(5)).toBe(59049);
  });

  it('Complex', () => {
    const sm = new SimpleMath(0);

    expect(sm.plus(7)).toBe(7);
    expect(sm.sqr()).toBe(49);
    expect(sm.minus(-1)).toBe(50);
    expect(sm.div(10)).toBe(5);
    expect(sm.mod(2)).toBe(1);
    expect(sm.pow(1024)).toBe(1);
    expect(sm.mul(512)).toBe(512);

    expect(`${sm}`).toBe('512');
  });
});
