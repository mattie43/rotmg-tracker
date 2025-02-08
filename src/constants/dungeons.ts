export type TDungeon = {
  name: string;
  difficulty: number;
  src: string;
};

export type TDungeonType = {
  name: string;
  dungeons: TDungeon[];
  fame?: number;
  bonusPercent?: number;
};

export const REALM_DUNGEONS = [
  {
    name: "Pirate Cave",
    difficulty: 1,
    src: "https://i.imgur.com/OqzVQuc.png",
  },
  {
    name: "Forest Maze",
    difficulty: 1,
    src: "https://i.imgur.com/m0AO506.png",
  },
  {
    name: "Spider Den",
    difficulty: 1.5,
    src: "https://i.imgur.com/up93OlG.png",
  },
  {
    name: "Forbidden Jungle",
    difficulty: 1.5,
    src: "https://i.imgur.com/beQHm21.png",
  },
  {
    name: "The Hive",
    difficulty: 2,
    src: "https://i.imgur.com/6WiS9zQ.png",
  },
  {
    name: "Snake Pit",
    difficulty: 2,
    src: "https://i.imgur.com/Mhtm0aR.png",
  },
  {
    name: "Sprite World",
    difficulty: 2.5,
    src: "https://i.imgur.com/K0dJRrF.png",
  },
  {
    name: "Cave of a Thousand Treasures",
    difficulty: 2.5,
    src: "https://i.imgur.com/6lgodhZ.png",
  },
  {
    name: "Ancient Ruins",
    difficulty: 3,
    src: "https://i.imgur.com/4gtP9OQ.png",
  },
  {
    name: "Magic Woods",
    difficulty: 3,
    src: "https://i.imgur.com/nmLtcBD.png",
  },
  {
    name: "Candyland Hunting Grounds",
    difficulty: 3.5,
    src: "https://i.imgur.com/BKoSv6j.png",
  },
  {
    name: "Undead Lair",
    difficulty: 3.5,
    src: "https://i.imgur.com/pR8Dgth.png",
  },
  {
    name: "Puppet Master's Theatre",
    difficulty: 4,
    src: "https://i.imgur.com/6diBou4.png",
  },
  {
    name: "Toxic Sewers",
    difficulty: 4,
    src: "https://i.imgur.com/4Iv5apz.png",
  },
  {
    name: "Cursed Library",
    difficulty: 4,
    src: "https://i.imgur.com/9nQ7nSz.gif",
  },
  {
    name: "Mad Lab",
    difficulty: 4,
    src: "https://i.imgur.com/x6dyxMp.gif",
  },
  {
    name: "Abyss of Demons",
    difficulty: 4,
    src: "https://i.imgur.com/wId2zPS.png",
  },
  {
    name: "Manor of the Immortals",
    difficulty: 4,
    src: "https://i.imgur.com/paEB8Qu.png",
  },
  {
    name: "Haunted Cemetery",
    difficulty: 4.5,
    src: "https://i.imgur.com/VB6hMsm.gif",
  },
  {
    name: "The Machine",
    difficulty: 4.5,
    src: "https://i.imgur.com/Yhd1MCq.png",
  },
  {
    name: "Davy Jones Locker",
    difficulty: 5,
    src: "https://i.imgur.com/Hqmoe5U.gif",
  },
  {
    name: "Ice Cave",
    difficulty: 5,
    src: "https://i.imgur.com/PCB2ged.png",
  },
  {
    name: "Ocean Trench",
    difficulty: 5,
    src: "https://i.imgur.com/9GR3Ypw.png",
  },
  {
    name: "The Crawling Depths",
    difficulty: 5.5,
    src: "https://i.imgur.com/V1rfmTa.gif",
  },
  {
    name: "Woodland Labyrinth",
    difficulty: 5.5,
    src: "https://i.imgur.com/jyKYlZg.gif",
  },
  {
    name: "Deadwater Docks",
    difficulty: 5.5,
    src: "https://i.imgur.com/baXW11C.png",
  },
  {
    name: "Puppet Master's Encore",
    difficulty: 5.5,
    src: "https://i.imgur.com/UhdCm8R.png",
  },
  {
    name: "Cnidarian Reef",
    difficulty: 5.5,
    src: "https://i.imgur.com/pXFqErd.png",
  },
  {
    name: "Sulfurous Wetlands",
    difficulty: 6,
    src: "https://i.imgur.com/88fMxeA.png",
  },
  {
    name: "Parasite Chambers",
    difficulty: 6,
    src: "https://i.imgur.com/O43mDnf.gif",
  },
  {
    name: "Mountain Temple",
    difficulty: 6,
    src: "https://i.imgur.com/fGgckZI.png",
  },
  {
    name: "Lair of Draconis",
    difficulty: 6,
    src: "https://i.imgur.com/QjX8g5O.png",
  },
  {
    name: "Tomb of the Ancients",
    difficulty: 6,
    src: "https://i.imgur.com/E6a3nHx.png",
  },
  {
    name: "The Third Dimension",
    difficulty: 6,
    src: "https://i.imgur.com/X3j3GrM.png",
  },
  {
    name: "Lair of Shaitan",
    difficulty: 6,
    src: "https://i.imgur.com/px7FwlI.png",
  },
  {
    name: "Secluded Thicket",
    difficulty: 6.5,
    src: "https://i.imgur.com/IeOHusO.png",
  },
  {
    name: "High Tech Terror",
    difficulty: 6.5,
    src: "https://i.imgur.com/2SwppYx.png",
  },
  {
    name: "Moonlight Village",
    difficulty: 9,
    src: "https://i.imgur.com/CHqjDCE.png",
  },
];

export const EVENT_DUNGEONS = [
  {
    name: "Beachzone",
    difficulty: 0,
    src: "https://i.imgur.com/Ns31EKU.png",
  },
  {
    name: "The Tavern",
    difficulty: 5.5,
    src: "https://i.imgur.com/DwtjA17.png",
  },
  {
    name: "The Nest",
    difficulty: 7,
    src: "https://i.imgur.com/4oOmRd4.png",
  },
  {
    name: "Cultist Hideout",
    difficulty: 7,
    src: "https://i.imgur.com/Xa9mjsG.png",
  },
  {
    name: "Fungal Cavern",
    difficulty: 7.5,
    src: "https://i.imgur.com/CLzxdEM.png",
  },
  {
    name: "Crystal Cavern",
    difficulty: 7.5,
    src: "https://i.imgur.com/Cd6RD9G.png",
  },
  {
    name: "Spectral Penitentiary",
    difficulty: 8,
    src: "https://i.imgur.com/o9yNqBT.png",
  },
  {
    name: "Kogbold Steamworks",
    difficulty: 8,
    src: "https://i.imgur.com/dohicSR.png",
  },
  {
    name: "Lost Halls",
    difficulty: 8,
    src: "https://i.imgur.com/DwuQOQQ.png",
  },
  {
    name: "The Void",
    difficulty: 8.5,
    src: "https://i.imgur.com/ijlxjJM.png",
  },
  {
    name: "Advanced Kogbold Steamworks",
    difficulty: 10,
    src: "https://i.imgur.com/4V6j3wj.png",
  },
  {
    name: "Advanced Nest",
    difficulty: 10,
    src: "https://i.imgur.com/ZZssHia.png",
  },
  {
    name: "The Shatters",
    difficulty: 10,
    src: "https://i.imgur.com/yA4tlry.png",
  },
];

export const WORMHOLE_DUNGEONS = [
  {
    name: "Malogia",
    difficulty: 5,
    src: "https://i.imgur.com/RNrgJ5t.png",
  },
  {
    name: "Untaris",
    difficulty: 5,
    src: "https://i.imgur.com/WlZyR9Z.png",
  },
  {
    name: "Katalund",
    difficulty: 5,
    src: "https://i.imgur.com/EvOyU7Z.png",
  },
  {
    name: "Forax",
    difficulty: 5,
    src: "https://i.imgur.com/KyAxJXQ.png",
  },
];

export const ORYX_DUNGEONS = [
  {
    name: "Court of Oryx",
    difficulty: 3.5,
    src: "https://i.imgur.com/AUfvKkf.png",
  },
  {
    name: "Oryx's Chamber",
    difficulty: 4.5,
    src: "https://i.imgur.com/dLVOZiv.png",
  },
  {
    name: "Wine Cellar",
    difficulty: 6,
    src: "https://i.imgur.com/ozNWFFN.png",
  },
  {
    name: "Oryx's Sanctuary",
    difficulty: 9.5,
    src: "https://i.imgur.com/JGnMCv2.png",
  },
];

export const HEROIC_DUNGEONS = [
  {
    name: "Heroic Undead Lair",
    difficulty: 5,
    src: "https://i.imgur.com/G4CcZWp.png",
  },
  {
    name: "Heroic Abyss of Demons",
    difficulty: 5,
    src: "https://i.imgur.com/qpULefS.png",
  },
];

export const SPECIAL_DUNGEONS = [
  {
    name: "Rainbow Road",
    difficulty: 0,
    src: "https://i.imgur.com/MDVaDzN.png",
  },
  {
    name: "Santa's Workshop",
    difficulty: 0,
    src: "https://i.imgur.com/oX3aVA2.png",
  },
  {
    name: "Ice Tomb",
    difficulty: 6,
    src: "https://i.imgur.com/zhWVACc.png",
  },
  {
    name: "Battle for the Nexus",
    difficulty: 5,
    src: "https://i.imgur.com/zyCjq2l.png",
  },
  {
    name: "Belladonna's Garden",
    difficulty: 5.5,
    src: "https://i.imgur.com/iIG3NIj.png",
  },
  {
    name: "Queen Bunny Chamber",
    difficulty: 5.5,
    src: "https://i.imgur.com/li7XrWv.png",
  },
  {
    name: "Mad God Mayhem",
    difficulty: 6,
    src: "https://i.imgur.com/U9HeRQ4.png",
  },
  {
    name: "Hidden Interregnum",
    difficulty: 7,
    src: "https://i.imgur.com/voULRFc.png",
  },
  {
    name: "White Snake Invasion I",
    difficulty: 6.5,
    src: "https://i.imgur.com/SW85m6U.png",
  },
  {
    name: "White Snake Invasion II",
    difficulty: 7.5,
    src: "https://i.imgur.com/F1WWPv7.png",
  },
  {
    name: "White Snake Invasion III",
    difficulty: 8.5,
    src: "https://i.imgur.com/aicgQzn.png",
  },
];

export const COMBINED_DUNGEONS_ALPHABETICAL = [
  ...REALM_DUNGEONS,
  ...EVENT_DUNGEONS,
  ...WORMHOLE_DUNGEONS,
  ...ORYX_DUNGEONS,
  ...HEROIC_DUNGEONS,
  ...SPECIAL_DUNGEONS,
].sort((a, b) => a.name.localeCompare(b.name));

export const COMBINED_DUNGEONS_DIFFICULTY = [
  ...REALM_DUNGEONS,
  ...EVENT_DUNGEONS,
  ...WORMHOLE_DUNGEONS,
  ...ORYX_DUNGEONS,
  ...HEROIC_DUNGEONS,
  ...SPECIAL_DUNGEONS,
].sort((a, b) => a.difficulty - b.difficulty);

export const DUNGEONS_OBJ = COMBINED_DUNGEONS_ALPHABETICAL.reduce(
  (acc, dungeon) => {
    const key = dungeon.name;
    acc[key] = dungeon;
    return acc;
  },
  {} as Record<string, TDungeon>
);

export const DUNGEON_TYPES: TDungeonType[] = [
  {
    name: "Realm Dungeons",
    dungeons: REALM_DUNGEONS,
  },
  {
    name: "Event Dungeons",
    dungeons: EVENT_DUNGEONS,
  },
  {
    name: "Wormhole Dungeons",
    dungeons: WORMHOLE_DUNGEONS,
  },
  {
    name: "Oryx Dungeons",
    dungeons: ORYX_DUNGEONS,
  },
  {
    name: "Heroic Dungeons",
    dungeons: HEROIC_DUNGEONS,
  },
  {
    name: "Special Dungeons",
    dungeons: SPECIAL_DUNGEONS,
  },
];

export const DUNGEON_FAME_BONUSES: TDungeonType[] = [
  {
    name: "First Steps",
    dungeons: [
      DUNGEONS_OBJ["Pirate Cave"],
      DUNGEONS_OBJ["Forest Maze"],
      DUNGEONS_OBJ["Forbidden Jungle"],
      DUNGEONS_OBJ["Spider Den"],
      DUNGEONS_OBJ["The Hive"],
    ],
    fame: 100,
    bonusPercent: 2.5,
  },
  {
    name: "King of the Mountains",
    dungeons: [
      DUNGEONS_OBJ["Snake Pit"],
      DUNGEONS_OBJ["Sprite World"],
      DUNGEONS_OBJ["Abyss of Demons"],
      DUNGEONS_OBJ["Toxic Sewers"],
      DUNGEONS_OBJ["Mad Lab"],
      DUNGEONS_OBJ["Magic Woods"],
      DUNGEONS_OBJ["Puppet Master's Theatre"],
      DUNGEONS_OBJ["Haunted Cemetery"],
      DUNGEONS_OBJ["Cursed Library"],
      DUNGEONS_OBJ["Ancient Ruins"],
      DUNGEONS_OBJ["Sulfurous Wetlands"],
      DUNGEONS_OBJ["Spectral Penitentiary"],
    ],
    fame: 1000,
    bonusPercent: 5,
  },
  {
    name: "Epic Battles",
    dungeons: [
      DUNGEONS_OBJ["Deadwater Docks"],
      DUNGEONS_OBJ["Woodland Labyrinth"],
      DUNGEONS_OBJ["The Crawling Depths"],
      DUNGEONS_OBJ["The Nest"],
      DUNGEONS_OBJ["Secluded Thicket"],
    ],
    fame: 2000,
    bonusPercent: 7.5,
  },
  {
    name: "Far Out",
    dungeons: [
      DUNGEONS_OBJ["Malogia"],
      DUNGEONS_OBJ["Untaris"],
      DUNGEONS_OBJ["Forax"],
      DUNGEONS_OBJ["Katalund"],
    ],
    fame: 2000,
    bonusPercent: 5,
  },
  {
    name: "Tunnel Rat",
    dungeons: [
      DUNGEONS_OBJ["Pirate Cave"],
      DUNGEONS_OBJ["Forbidden Jungle"],
      DUNGEONS_OBJ["Spider Den"],
      DUNGEONS_OBJ["Snake Pit"],
      DUNGEONS_OBJ["Undead Lair"],
      DUNGEONS_OBJ["Abyss of Demons"],
      DUNGEONS_OBJ["Manor of the Immortals"],
      DUNGEONS_OBJ["Ocean Trench"],
      DUNGEONS_OBJ["Tomb of the Ancients"],
      DUNGEONS_OBJ["Oryx's Chamber"],
      DUNGEONS_OBJ["Wine Cellar"],
    ],
    fame: 3000,
    bonusPercent: 7.5,
  },
  {
    name: "Explosive Journey",
    dungeons: [
      DUNGEONS_OBJ["Davy Jones Locker"],
      DUNGEONS_OBJ["Mad Lab"],
      DUNGEONS_OBJ["Candyland Hunting Grounds"],
      DUNGEONS_OBJ["Haunted Cemetery"],
      DUNGEONS_OBJ["Cave of a Thousand Treasures"],
      DUNGEONS_OBJ["Lair of Draconis"],
      DUNGEONS_OBJ["Deadwater Docks"],
      DUNGEONS_OBJ["Woodland Labyrinth"],
      DUNGEONS_OBJ["The Crawling Depths"],
      DUNGEONS_OBJ["The Shatters"],
      DUNGEONS_OBJ["Lair of Shaitan"],
      DUNGEONS_OBJ["Puppet Master's Theatre"],
      DUNGEONS_OBJ["Ice Cave"],
    ],
    fame: 3000,
    bonusPercent: 7.5,
  },
  {
    name: "Enemy of the Court",
    dungeons: [
      DUNGEONS_OBJ["Lair of Shaitan"],
      DUNGEONS_OBJ["Puppet Master's Encore"],
      DUNGEONS_OBJ["Cnidarian Reef"],
      DUNGEONS_OBJ["Secluded Thicket"],
      DUNGEONS_OBJ["High Tech Terror"],
    ],
    fame: 3000,
    bonusPercent: 7.5,
  },
  {
    name: "Conqueror of the Realm",
    dungeons: [
      DUNGEONS_OBJ["Davy Jones Locker"],
      DUNGEONS_OBJ["Ice Cave"],
      DUNGEONS_OBJ["Lair of Draconis"],
      DUNGEONS_OBJ["Mountain Temple"],
      DUNGEONS_OBJ["The Third Dimension"],
      DUNGEONS_OBJ["Ocean Trench"],
      DUNGEONS_OBJ["Tomb of the Ancients"],
      DUNGEONS_OBJ["The Shatters"],
      DUNGEONS_OBJ["The Nest"],
      DUNGEONS_OBJ["Fungal Cavern"],
      DUNGEONS_OBJ["Crystal Cavern"],
      DUNGEONS_OBJ["Lost Halls"],
      DUNGEONS_OBJ["Kogbold Steamworks"],
    ],
    fame: 4000,
    bonusPercent: 10,
  },
  {
    name: "Travel of the Decade",
    dungeons: [
      DUNGEONS_OBJ["Puppet Master's Encore"],
      DUNGEONS_OBJ["The Hive"],
      DUNGEONS_OBJ["Toxic Sewers"],
      DUNGEONS_OBJ["Mountain Temple"],
      DUNGEONS_OBJ["The Third Dimension"],
      DUNGEONS_OBJ["The Nest"],
      DUNGEONS_OBJ["Lost Halls"],
      DUNGEONS_OBJ["Cultist Hideout"],
      DUNGEONS_OBJ["The Void"],
      DUNGEONS_OBJ["Cnidarian Reef"],
      DUNGEONS_OBJ["Parasite Chambers"],
      DUNGEONS_OBJ["Magic Woods"],
      DUNGEONS_OBJ["Secluded Thicket"],
      DUNGEONS_OBJ["Cursed Library"],
      DUNGEONS_OBJ["Oryx's Sanctuary"],
      DUNGEONS_OBJ["Ancient Ruins"],
      DUNGEONS_OBJ["High Tech Terror"],
      DUNGEONS_OBJ["Sulfurous Wetlands"],
      DUNGEONS_OBJ["Spectral Penitentiary"],
    ],
    fame: 5000,
    bonusPercent: 10,
  },
  {
    name: "Hero of the Nexus",
    dungeons: [
      DUNGEONS_OBJ["Pirate Cave"],
      DUNGEONS_OBJ["Forest Maze"],
      DUNGEONS_OBJ["Spider Den"],
      DUNGEONS_OBJ["Snake Pit"],
      DUNGEONS_OBJ["Forbidden Jungle"],
      DUNGEONS_OBJ["The Hive"],
      DUNGEONS_OBJ["Ancient Ruins"],
      DUNGEONS_OBJ["Magic Woods"],
      DUNGEONS_OBJ["Sprite World"],
      DUNGEONS_OBJ["Candyland Hunting Grounds"],
      DUNGEONS_OBJ["Cave of a Thousand Treasures"],
      DUNGEONS_OBJ["Undead Lair"],
      DUNGEONS_OBJ["Abyss of Demons"],
      DUNGEONS_OBJ["Manor of the Immortals"],
      DUNGEONS_OBJ["Puppet Master's Theatre"],
      DUNGEONS_OBJ["Toxic Sewers"],
      DUNGEONS_OBJ["Cursed Library"],
      DUNGEONS_OBJ["Haunted Cemetery"],
      DUNGEONS_OBJ["Mad Lab"],
      DUNGEONS_OBJ["Parasite Chambers"],
      DUNGEONS_OBJ["Davy Jones Locker"],
      DUNGEONS_OBJ["Mountain Temple"],
      DUNGEONS_OBJ["The Third Dimension"],
      DUNGEONS_OBJ["Lair of Draconis"],
      DUNGEONS_OBJ["Deadwater Docks"],
      DUNGEONS_OBJ["Woodland Labyrinth"],
      DUNGEONS_OBJ["The Crawling Depths"],
      DUNGEONS_OBJ["Ocean Trench"],
      DUNGEONS_OBJ["Ice Cave"],
      DUNGEONS_OBJ["Tomb of the Ancients"],
      DUNGEONS_OBJ["Fungal Cavern"],
      DUNGEONS_OBJ["Crystal Cavern"],
      DUNGEONS_OBJ["The Nest"],
      DUNGEONS_OBJ["The Shatters"],
      DUNGEONS_OBJ["Lost Halls"],
      DUNGEONS_OBJ["Cultist Hideout"],
      DUNGEONS_OBJ["The Void"],
      DUNGEONS_OBJ["Sulfurous Wetlands"],
      DUNGEONS_OBJ["Kogbold Steamworks"],
      DUNGEONS_OBJ["Oryx's Chamber"],
      DUNGEONS_OBJ["Lair of Shaitan"],
      DUNGEONS_OBJ["Puppet Master's Encore"],
      DUNGEONS_OBJ["Cnidarian Reef"],
      DUNGEONS_OBJ["Secluded Thicket"],
      DUNGEONS_OBJ["High Tech Terror"],
      DUNGEONS_OBJ["Wine Cellar"],
      DUNGEONS_OBJ["Oryx's Sanctuary"],
      DUNGEONS_OBJ["Belladonna's Garden"],
      DUNGEONS_OBJ["Ice Tomb"],
      DUNGEONS_OBJ["Mad God Mayhem"],
      DUNGEONS_OBJ["Battle for the Nexus"],
      DUNGEONS_OBJ["Santa's Workshop"],
      DUNGEONS_OBJ["The Machine"],
      DUNGEONS_OBJ["Malogia"],
      DUNGEONS_OBJ["Untaris"],
      DUNGEONS_OBJ["Forax"],
      DUNGEONS_OBJ["Katalund"],
      DUNGEONS_OBJ["Rainbow Road"],
      DUNGEONS_OBJ["Beachzone"],
      DUNGEONS_OBJ["Spectral Penitentiary"],
    ],
    fame: 5000,
    bonusPercent: 12.5,
  },
  {
    name: "Season's Beatins",
    dungeons: [
      DUNGEONS_OBJ["Belladonna's Garden"],
      DUNGEONS_OBJ["Ice Tomb"],
      DUNGEONS_OBJ["Mad God Mayhem"],
      DUNGEONS_OBJ["Battle for the Nexus"],
      DUNGEONS_OBJ["Santa's Workshop"],
      DUNGEONS_OBJ["The Machine"],
      DUNGEONS_OBJ["Malogia"],
      DUNGEONS_OBJ["Untaris"],
      DUNGEONS_OBJ["Forax"],
      DUNGEONS_OBJ["Katalund"],
      DUNGEONS_OBJ["Rainbow Road"],
      DUNGEONS_OBJ["Beachzone"],
    ],
    fame: 5000,
    bonusPercent: 12.5,
  },
  {
    name: "Realm of the Mad God",
    dungeons: [
      DUNGEONS_OBJ["Pirate Cave"],
      DUNGEONS_OBJ["Forest Maze"],
      DUNGEONS_OBJ["Spider Den"],
      DUNGEONS_OBJ["Snake Pit"],
      DUNGEONS_OBJ["Forbidden Jungle"],
      DUNGEONS_OBJ["The Hive"],
      DUNGEONS_OBJ["Ancient Ruins"],
      DUNGEONS_OBJ["Magic Woods"],
      DUNGEONS_OBJ["Sprite World"],
      DUNGEONS_OBJ["Candyland Hunting Grounds"],
      DUNGEONS_OBJ["Cave of a Thousand Treasures"],
      DUNGEONS_OBJ["Undead Lair"],
      DUNGEONS_OBJ["Abyss of Demons"],
      DUNGEONS_OBJ["Manor of the Immortals"],
      DUNGEONS_OBJ["Puppet Master's Theatre"],
      DUNGEONS_OBJ["Toxic Sewers"],
      DUNGEONS_OBJ["Cursed Library"],
      DUNGEONS_OBJ["Haunted Cemetery"],
      DUNGEONS_OBJ["Mad Lab"],
      DUNGEONS_OBJ["Parasite Chambers"],
      DUNGEONS_OBJ["Davy Jones Locker"],
      DUNGEONS_OBJ["Mountain Temple"],
      DUNGEONS_OBJ["The Third Dimension"],
      DUNGEONS_OBJ["Lair of Draconis"],
      DUNGEONS_OBJ["Deadwater Docks"],
      DUNGEONS_OBJ["Woodland Labyrinth"],
      DUNGEONS_OBJ["The Crawling Depths"],
      DUNGEONS_OBJ["Ocean Trench"],
      DUNGEONS_OBJ["Ice Cave"],
      DUNGEONS_OBJ["Tomb of the Ancients"],
      DUNGEONS_OBJ["Fungal Cavern"],
      DUNGEONS_OBJ["Crystal Cavern"],
      DUNGEONS_OBJ["The Nest"],
      DUNGEONS_OBJ["The Shatters"],
      DUNGEONS_OBJ["Lost Halls"],
      DUNGEONS_OBJ["Cultist Hideout"],
      DUNGEONS_OBJ["The Void"],
      DUNGEONS_OBJ["Sulfurous Wetlands"],
      DUNGEONS_OBJ["Kogbold Steamworks"],
      DUNGEONS_OBJ["Oryx's Chamber"],
      DUNGEONS_OBJ["Lair of Shaitan"],
      DUNGEONS_OBJ["Puppet Master's Encore"],
      DUNGEONS_OBJ["Cnidarian Reef"],
      DUNGEONS_OBJ["Secluded Thicket"],
      DUNGEONS_OBJ["High Tech Terror"],
      DUNGEONS_OBJ["Wine Cellar"],
      DUNGEONS_OBJ["Oryx's Sanctuary"],
      DUNGEONS_OBJ["Belladonna's Garden"],
      DUNGEONS_OBJ["Ice Tomb"],
      DUNGEONS_OBJ["Mad God Mayhem"],
      DUNGEONS_OBJ["Battle for the Nexus"],
      DUNGEONS_OBJ["Santa's Workshop"],
      DUNGEONS_OBJ["The Machine"],
      DUNGEONS_OBJ["Malogia"],
      DUNGEONS_OBJ["Untaris"],
      DUNGEONS_OBJ["Forax"],
      DUNGEONS_OBJ["Katalund"],
      DUNGEONS_OBJ["Rainbow Road"],
      DUNGEONS_OBJ["Beachzone"],
      DUNGEONS_OBJ["Spectral Penitentiary"],
    ],
    fame: 10000,
    bonusPercent: 25,
  },
];
