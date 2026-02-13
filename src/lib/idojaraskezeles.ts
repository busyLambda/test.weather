import * as fs from 'node:fs/promises';
import * as readline from 'node:readline/promises';
import { NapiIdojaras } from './NapiIdojaras.ts';

export const maiidojaras = async (): Promise<NapiIdojaras> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const minStr = await rl.question('Kérem a mai minimum hőmérsékletet: ');
    const maxStr = await rl.question('Kérem a mai maximum hőmérsékletet: ');
    const type = await rl.question('Kérem az időjárás jellegét: ');
    const currentDay = new Date().getDay();

    return new NapiIdojaras(currentDay, Number(maxStr), Number(minStr), type);
  } finally {
    rl.close();
  }
};

export const beolvas = async (path: string): Promise<NapiIdojaras[]> => {
  const content = await fs.readFile(path, 'utf-8');
  return content
    .trim()
    .split('\n')
    .slice(1)
    .map((line) => {
      const [day, min, max, type] = line.split(';');
      return new NapiIdojaras(Number(day), Number(max), Number(min), type);
    });
};

export const mentIdojaras = async (path: string, data: NapiIdojaras[]): Promise<void> => {
  const header = "nap;min;max;időjárás\n";
  const rows = data
    .map((i) => `${i.dayOfWeek};${i.minTemp};${i.maxTemp};${i.weatherType}`)
    .join('\n');
  await fs.writeFile(path, header + rows, 'utf-8');
};
