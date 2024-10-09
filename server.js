const express = require(`express`);
const cors = require(`cors`);

const youtubeShows = require(`./controllers/youtube-shows`);
const anime = require(`./controllers/anime`);
const cartoons = require(`./controllers/cartoons`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(`/youtube-shows`, youtubeShows.youtubeShows);
app.get(`/youtube-shows/:youtubeShowsId`, youtubeShows.getYoutubeShows);

app.get(`/anime`, anime.anime);
app.get(`/anime/:animeId`, anime.getAnime);

app.get(`/cartoons`, cartoons.cartoons);
app.get(`/cartoons/:cartoonsId`, cartoons.getCartoons);

app.listen(PORT, ()=> console.log(`Server running ${PORT}`));