export { fetchImages };
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29500844-6244608a48f9a94de2bd748ef';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
