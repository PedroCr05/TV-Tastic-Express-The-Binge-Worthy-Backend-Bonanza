const cartoonList = [
  {
    name: `The Regular Show`,
    launchDate: `September 6, 2010`,
    firstEpisode: `The Power`,
    lastEpisode: `A Regular Show Epic Final Battle: The Power`,
    creator: `J. G. Quintel`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 8,
    numOfEpisodes: 244,
  },
  {
    name: `Adventure Time`,
    launchDate: `April 5, 2010`,
    firstEpisode: `Slumber Party Panic`,
    lastEpisode: `Come Along with Me`,
    creator: `Pendleton Ward`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 10,
    numOfEpisodes: 283,
  },
  {
    name: `Bluey`,
    launchDate: `October 1, 2018`,
    firstEpisode: `The Magic Xylophone`,
    lastEpisode: `Surprise`,
    creator: `Joe Burmm`,
    host: false,
    isItStillRunning: false,
    numOfSeasons: 3,
    numOfEpisodes: 154
  },
];

const cartoons = (req, res) => {
    res.json(cartoonList);
};

const getCartoons = (req, res) => {
    res.json(cartoonList[req.params.cartoonsId]);
};

module.exports = {
    cartoons,
    getCartoons
}