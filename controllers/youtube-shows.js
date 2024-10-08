const youtube = [
  {
    name: `Good Mythical Morning`,
    launchDate: `January 9, 2012`,
    firstEpisode: `Extremely OCD Morning Routine`,
    latestEpisode: `We Found Extremely Rare Toys In These Disney Blind Boxes`,
    creators: [
      {
        name: `Rhett James McLaughlin`,
      },
      {
        name: `Link Neal`,
      },
    ],
    host: true,
    isItStillRunning: true,
    numOfSeasons: 26,
    numOfEpisodes: 2679,
  },
  {
    name: `Rhett & Link's Wonderhole`,
    launchDate: `August 23, 2024`,
    firstEpisode: `We Took The World's Most Expensive First Class Flight`,
    latestEpisode: `We Made Giant 400 Pound Gummies of Ourselves`,
    creators: [
      {
        name: `Rhett James McLaughlin`,
      },
      {
        name: `Link Neal`,
      },
    ],
    host: true,
    isItStillRunning: true,
    numOfSeasons: 1,
    numOfEpisodes: 6,
  },
  {
    name: `Mythical Kitchen`,
    launchDate: `June 8, 2019`,
    firstEpisode: `Nashville Hot Brains Sandwich Taste Test | FOOD FEARS`,
    latestEpisode: `Serj Tankian Eats His Last Meal`,
    creator: `Josh Scherer`,
    host: true,
    isItStillRunning: true,
    numOfSeasons: 1,
    numOfEpisodes: 995
  },
];

const youtubeShows = (req, res) => {
    res.json(youtube);
};

const getYoutubeShows = (req, res) => {
    res.json(youtube[req.params.youtubeShowsId]);
}

module.exports = {
    youtubeShows,
    getYoutubeShows
}