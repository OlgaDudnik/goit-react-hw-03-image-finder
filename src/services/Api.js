import axios from "axios";

const ENDPOINT = "https://pixabay.com/api/";
const MY_KEY = "27728709-f63cbd1e0c095508b1fe784c9";
const per_page = 12;

export default function SearchApi({ value, page }) {
  return axios
    .get(
      `${ENDPOINT}?q=${value}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then((response) => response.data)
    .catch((error) => new Error(error));
}
