const animeList = [
  {
    name: `Tokyo Ghoul`,
    launchDate: `July 4, 2014`,
    firstEpisode: `Tragedy`,
    lastEpisode: `Re: Episode 24`,
    creator: `Sui Ishida`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 4,
    numOfEpisodes: 48,
  },
  {
    name: `My Hero Academia`,
    launchDate: `April 3, 2016`,
    firstEpisode: `Izuku Midoriya: Origin`,
    lastEpisode: `A Girl's Ego`,
    creator: `Kōhei Horikoshi`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 7,
    numOfEpisodes: 158,
  },
  {
    name: `Jujutsu Kaisen`,
    launchDate: `October 3, 2020`,
    firstEpisode: `Ryomen Sukuna`,
    lastEpisode: `Shibuya Incident - Gate, Close`,
    creator: `Gege Akutami`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 2,
    numOfEpisodes: 47,
  },
];

const anime = (req, res) => {
    res.json(animeList);
}

const getAnime = (req, res) => {
    res.json(animeList[req.params.animeId]);
}

module.exports = {
    anime,
    getAnime
}