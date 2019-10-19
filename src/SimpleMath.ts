export class SimpleMath {
  constructor(private base: number = 0) {}

  public toString() { return this.base.toString(); }

  public readonly plus = (arg: number): number => this.base += arg;

  public readonly minus = (arg: number): number => this.base -= arg;

  public readonly mul = (arg: number): number => this.base *= arg;

  public readonly div = (arg: number): number => this.base /= arg;

  public readonly mod = (arg: number): number => this.base %= arg;

  public readonly sqr = (): number => this.base *= this.base;

  public readonly sqrt = (): number => this.base = Math.sqrt(this.base);

  public readonly pow = (arg: number): number => this.base = this.base ** arg;
}
