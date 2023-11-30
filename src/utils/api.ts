import { v4 as uuidv4 } from "uuid";


const generateRandomDate = (): string => {
    const startDate = new Date('2023-01-01').getTime();
    const endDate = new Date('2024-01-01').getTime();
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    return randomDate.toISOString().split('T')[0];
  };

  const generateRandomMBS = (): number => {
    const mbs = Math.floor(Math.random() * 10)
    return mbs;
  };

  function generateRandomFloatInRange(min: number, max: number) {
    const randomFloat = Math.random() * (max - min) + min;
    const roundedFloat = Math.round(randomFloat * 100) / 100; // Noktadan sonraki iki basamağı alır
  
    return roundedFloat;
  }
  
  const generateBetOptions = (betName: string): Option[] => {
    switch (betName) {
      case 'Maç Sonucu':
        return [
          { id: 1, optionNumber: 1, name: 'Ev Sahibi Kazanır', odd: generateRandomFloatInRange(1,5) },
          { id: 2, optionNumber: 0, name: 'Beraberlik', odd: generateRandomFloatInRange(1,5) },
          { id: 3, optionNumber: 2, name: 'Deplasman Kazanır', odd: generateRandomFloatInRange(1,5) },
        ];
      case 'Toplam Gol':
        return [
          { id: 4, name: 'Gol', odd: generateRandomFloatInRange(1,5) },
          { id: 5, name: 'Alt', odd: generateRandomFloatInRange(1,5) },
          { id: 6, name: 'Üst', odd: generateRandomFloatInRange(1,5) },
        ];
      default:
        return [];
    }
  };
  
  const generateRandomBets = (betNames: string[]): Bet[] => {
    return betNames.map((name, index) => ({
      id: index + 1,
      name,
      options: generateBetOptions(name),
    }));
  };

  function getIsLive() {
    return Math.random() < 0.5;
  }
  
  export const generateMockData = (page: number, pageSize: number): Match[] => {
    const mockMatches: Match[] = [];
    const teams: string[] = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
    const betNames: string[] = ['Maç Sonucu', 'Toplam Gol'];
  

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    
    for (let i = startIndex; i <= endIndex; i++) {
      const homeTeamIndex = Math.floor(Math.random() * teams.length);
      let awayTeamIndex = Math.floor(Math.random() * teams.length);
      while (awayTeamIndex === homeTeamIndex) {
        awayTeamIndex = Math.floor(Math.random() * teams.length);
      }
    
      const homeTeam: string = teams[homeTeamIndex];
      const awayTeam: string = teams[awayTeamIndex];
      const date: string = generateRandomDate();
    
      const match: Match = {
          id: i,
          mbs: generateRandomMBS(),
          isLive: getIsLive(),
          homeTeam,
          awayTeam,
          date,
          bets: generateRandomBets(betNames),
        };
    
        mockMatches.push(match);
    } 
    return mockMatches;
  };