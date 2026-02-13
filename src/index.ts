import { NapiIdojaras } from './lib/NapiIdojaras.ts';
import { beolvas, maiidojaras, mentIdojaras } from './lib/idojaraskezeles.ts';

const main = async () => {
  try {
    const test = new NapiIdojaras(1, 25, 15, "napos");
    console.log("Osztály tesztelés:");
    console.log(test.toString());

    let weatherList = await beolvas('./idojaras.csv');
    console.log(`\nSikeresen beolvasva ${weatherList.length} adat.`);

    const today = await maiidojaras();
    weatherList = [...weatherList, today];

    const hottest = weatherList.reduce((prev, curr) =>
      curr.maxTemp > prev.maxTemp ? curr : prev
    );

    console.log("\nA legmelegebb nap adatai:");
    console.log(hottest.toString());

    await mentIdojaras('./idojaras-uj.csv', weatherList);
    console.log("\nAz adatok elmentve az idojaras-uj.csv fájlba.");

  } catch (err: any) {
    console.error("Hiba történt:", err.message);
  }
};

main();
