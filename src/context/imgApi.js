import axios from "axios";
import config from "../config";

const getMyImage = async () => {
  const page = Math.floor(Math.random() * 20 + 1);
  const imgurl = `${config.url}search/photos?page=${page}&query=Computer&client_id=${config.client_key}`;

  const response = await axios.get(imgurl);
  const photos = response.data.results.map((img) => ({
    id: img.id,
    thumb: img.urls.thumb,
    full: img.urls.full,
    user: {
      username: img.user.username,
      link: img.user.links.html,
    },
  }));
  return photos;
};

export { getMyImage };
