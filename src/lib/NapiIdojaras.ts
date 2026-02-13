export class NapiIdojaras {
  public dayOfWeek: number;
  public maxTemp: number;
  public minTemp: number;
  public weatherType: string;

  constructor(dayOfWeek: number, maxTemp: number, minTemp: number, weatherType: string) {
    if (dayOfWeek < 0 || dayOfWeek > 6) {
      throw new Error("Érvénytelen nap: 0 és 6 közötti érték szükséges!");
    }
    this.dayOfWeek = Number(dayOfWeek);
    this.maxTemp = Number(maxTemp);
    this.minTemp = Number(minTemp);
    this.weatherType = weatherType.trim();
  }

  toString = (): string => {
    const days = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
    return `${days[this.dayOfWeek]}: Max: ${this.maxTemp}°C, Min: ${this.minTemp}°C, Időjárás: ${this.weatherType}`;
  };
}
