import { describe, it, expect } from 'vitest';
import { NapiIdojaras } from '../lib/NapiIdojaras.ts';

describe('Időjárás rendszer tesztek', () => {
  it('NapiIdojaras osztály példányosítás és toString', () => {
    const item = new NapiIdojaras(2, 20, 10, "napos");
    expect(item.toString()).toContain("Kedd");
    expect(item.maxTemp).toBe(20);
  });

  it('Hibás nap esetén kivételt dob', () => {
    expect(() => new NapiIdojaras(7, 20, 10, "esős")).toThrow();
  });
});
