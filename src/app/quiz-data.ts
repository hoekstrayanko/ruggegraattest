export type Option = {
  text: string;
  points: 0 | 1 | 2 | 3;
  reaction: string;
};

export type Question = {
  scenario: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    scenario:
      "Vrijdagavond, 23:47. Je ietwat-te-toevallige buurman Kevin appt: “Ben je nog wakker? 😏 Zin om ergens iets te gaan drinken... of niet-drinken? 👀” Morgen om 7 uur moet je je schoonouders ophalen van Schiphol.",
    options: [
      {
        text: "Tuurlijk kom ik! Ik meld me morgen wel 'ziek', schoonouders overleven heus wel een Uber 😏🍾",
        points: 0,
        reaction: "OEPS 🙈",
      },
      {
        text: "Oke, één drankje dan. Om half 1 lig ik weer in bed, beloofd... waarschijnlijk 🙃",
        points: 1,
        reaction: "TWIJFELAAR 🫠",
      },
      {
        text: "Nee joh, ik moet fris zijn voor Schiphol. Volgende keer, Kevin! 🚕✋",
        points: 2,
        reaction: "GERANDE MAN/VROUW 💪",
      },
      {
        text: "Ik stuur een preek terug over grenzen en blokkeer 'm daarna voor de zekerheid 🚫📵",
        points: 3,
        reaction: "KOMPAS OP NOORD 🧭",
      },
    ],
  },
  {
    scenario:
      "Je collega Fleur stuurt om 16:58 een paniekbericht: “Kun je mijn rapport nog even afmaken? Ik heb over een uur een date met iemand die eruitziet als een jonge Brad Pitt 😍” Dit is al de derde keer deze maand.",
    options: [
      {
        text: "Tuurlijk Fleur, veel plezier! Ik zat toch alleen maar hier te bestaan 😩💻",
        points: 0,
        reaction: "DOETJE 🫡",
      },
      {
        text: "Oke, deze laatste keer dan. Maar ik wil wel alle details morgenochtend! 👀☕",
        points: 1,
        reaction: "NIEUWSGIERIG AAGJE 👂",
      },
      {
        text: "Nee Fleur, doe het zelf. Brad Pitt kan wachten, jouw deadline niet ⏰",
        points: 2,
        reaction: "BAASJE 😎",
      },
      {
        text: "Ik stuur een 4 pagina's tellende officiële klacht naar HR, met bijlagen en een tijdlijn 📎😤",
        points: 3,
        reaction: "PROCESMONSTER ⚖️",
      },
    ],
  },
  {
    scenario:
      "Bij het kerstdiner proeft je schoonmoeder van je zelfgemaakte stamppot, kijkt je aan en zegt hardop: “Nou zeg... net als bij het opmaken van een bed, presentatie is duidelijk niet je sterkste kant 😬”",
    options: [
      {
        text: "Je hebt helemaal gelijk, ik kook (en maak bedden) nooit meer voor iemand 😭",
        points: 0,
        reaction: "PLAT GESLAGEN 🥀",
      },
      {
        text: "Hahaha, gewoon een geintje zeker! Ik oefen wel wat meer, beloofd 😅",
        points: 1,
        reaction: "NERVEUS LACHJE 😅",
      },
      {
        text: "Bedankt voor de tip, maar ik kook zoals ík het lekker vind. Eet smakelijk 🍽️😌",
        points: 2,
        reaction: "ONVERSTOORBAAR 😌",
      },
      {
        text: "Ik sta op, laat mijn stamppot achter als statement en verlaat het pand met opgeheven hoofd 🚪👑",
        points: 3,
        reaction: "EXIT KONINGIN/KONING 👑",
      },
    ],
  },
  {
    scenario:
      "Je vriendengroep boekt een vrijgezellenfeest in een all-you-can-eat schaaldierenrestaurant, waar jij acuut van opzwelt als een strandbal 🎈. “Kom op, we leven maar één keer!”",
    options: [
      {
        text: "Prima, ik neem stiekem wel een banaan mee en houd mijn EpiPen binnen handbereik 🍌💉",
        points: 0,
        reaction: "STIEKEME OVERLEVER 🍌",
      },
      {
        text: "Nou vooruit, ik waag het erop. Wie durft wint, toch? 🎲😬",
        points: 1,
        reaction: "GOKKER 🎰",
      },
      {
        text: "Nee, we zoeken een plek waar ik niet acuut doodga, dat lijkt me een redelijke eis 🦞🚫",
        points: 2,
        reaction: "REDELIJK MENS 🙏",
      },
      {
        text: "Ik boek eigenhandig een compleet nieuw feest inclusief stripper en stuur de factuur door 💃📄",
        points: 3,
        reaction: "EVENTPLANNER DES DOODS 💃",
      },
    ],
  },
  {
    scenario:
      "Zaterdagochtend, 8:03 uur. Je baas appt: “Kun je even 'snel' inloggen? Trouwens: 'snel' betekent hele dag, en 'even' betekent onbetaald 😇”",
    options: [
      {
        text: "Natuurlijk baas, mijn zaterdag was toch niks bijzonders van plan 🥲💻",
        points: 0,
        reaction: "MUURVLOER 🫥",
      },
      {
        text: "Oke, maar dan wil ik wel een dag vrij terug én een taart 🍰",
        points: 1,
        reaction: "ONDERHANDELAAR 🤝",
      },
      {
        text: "Nee, dat staat niet in mijn contract. Fijn weekend! 🌴🙅",
        points: 2,
        reaction: "GRENSBEWAKER 🛂",
      },
      {
        text: "Ik stuur mijn ontslagbrief, opgemaakt in Comic Sans, als eindstatement 📄🎉",
        points: 3,
        reaction: "LEGENDE 🔥",
      },
    ],
  },
  {
    scenario:
      "Op de verjaardag van tante Corrie vraagt oom Henk voor de 47e keer, met een por in je zij: “Zeg, wanneer gaan jullie nou eens aan de kinderen? Het bed staat toch al klaar? 😉😉”",
    options: [
      {
        text: "Haha oom, jij hebt vast helemaal gelijk. Nog een bitterbal? 🙃",
        points: 0,
        reaction: "BITTERBAL-VLUCHTELING 🫣",
      },
      {
        text: "Ik mompel iets over 'nog even geduld' en duik snel de bittergarnituurtafel in 🫣🍤",
        points: 1,
        reaction: "STRATEGISCHE AFTOCHT 🍤",
      },
      {
        text: "Dat is echt mijn eigen zaak oom, zullen we het over de jarige hebben? 🎂🙅",
        points: 2,
        reaction: "ONVERSTOORBARE HELD 🛡️",
      },
      {
        text: "Ik geef ter plekke, met flip-over, een presentatie over waarom dat 'm geen ene moer aangaat 📊🔥",
        points: 3,
        reaction: "KEYNOTE SPEAKER 🎤",
      },
    ],
  },
];

export const maxScore = questions.length * 3;

export type Profile = {
  name: string;
  emoji: string;
  minScore: number;
  maxScore: number;
  description: string;
  videoSrc?: string;
};

export const profiles: Profile[] = [
  {
    name: "De Blubberpudding",
    emoji: "🍮",
    minScore: 0,
    maxScore: 3,
    description:
      "Alarm, alarm! Jouw ruggegraat heeft de stevigheid van een vla die drie dagen in de zon heeft liggen zweten. Je zegt overal “ja hoor!” tegen, buigt mee met elke zuchtje wind en je eigen grenzen zijn voor jou blijkbaar net zo'n vage suggestie als “met mate drinken”. Knap eigenlijk, dat je nog rechtop aan tafel kan zitten zonder in je bord te glijden. 🫠 Doe eens gek: zeg vandaag één keer hardop “nee” — desnoods tegen de spiegel.",
    videoSrc: "/ruggegraat-breekt.mp4",
  },
  {
    name: "De Dropveter",
    emoji: "🫧",
    minScore: 4,
    maxScore: 7,
    description:
      "Je hébt een mening, hoor! Ergens diep vanbinnen, goed verstopt. Maar zodra iemand een klein beetje druk zet, plooi je sneller dan een drop­veter om een vinger. Je bent taai genoeg om niet meteen te knappen, maar buigzaam genoeg om binnen vijf minuten toch weer 'ja' te zeggen tegen iets waar je stiekem he-le-maal geen zin in had. Chapeau voor het volhouden van de illusie dat je 'nee' overweegt. 😏",
  },
  {
    name: "De Gemiddelde Hollander",
    emoji: "🇳🇱",
    minScore: 8,
    maxScore: 12,
    description:
      "Recht voor z'n raap, een beetje bot, maar over het algemeen redelijk. Jij zegt nee als het moet, ja als het kan, en durft prima tegen je schoonmoeder in te gaan over de stamppot — al schrik je er zelf een beetje van. Geen heldhaftige ruggegraat, maar wel eentje waar de rest van de borrel gewoon normaal mee kan omgaan. Fiets recht, blik strak vooruit. 🚲",
  },
  {
    name: "IJzeren Ruggegraat",
    emoji: "🤖",
    minScore: 13,
    maxScore: 16,
    description:
      "Jij weet wat je wil en zegt het ook — hardop, met stemverheffing indien nodig. Grenzen zijn voor jou geen suggestie, maar een levensstijl. Petje af, echt. Al vraagt de rest van de familiegroepsapp zich inmiddels stiekem af of het van jou een tandje minder fel had gemogen, en of oom Henk nog wel bij zinnen is na die laatste woordenwisseling. 🔥",
  },
  {
    name: "De Betonnen Bunker",
    emoji: "🪨",
    minScore: 17,
    maxScore: 18,
    description:
      "Er is geen kroeg, collega, schoonmoeder, oom Henk of stripper op aarde die jou nog ook maar íets uit je handen laat praten. Jouw ruggegraat is gegoten in gewapend beton met een dun laagje titanium eroverheen, voor de show. Indrukwekkend, maar wel zo dat de familie-app inmiddels alleen nog memes stuurt en niemand meer durft te vragen of je 'misschien een keertje' iets wil. Legendarisch. Eenzaam op de troon, maar legendarisch. 👑🪨",
  },
];

export function getProfile(score: number): Profile {
  return (
    profiles.find((p) => score >= p.minScore && score <= p.maxScore) ??
    profiles[profiles.length - 1]
  );
}
