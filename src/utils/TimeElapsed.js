import ArticleCard from "../components/ArticleCard"
import { formatDistanceToNow } from 'date-fns';

function TimeElapsed({ created_at }) {
  console.log('created_at:', created_at);
  const distance = formatDistanceToNow(new Date(created_at), { addSuffix: true });
  return `Posted ${distance}`;
}

export default TimeElapsed;
  

