import CategoriesCard from './CategoriesCard';
import useFetchDB from '../hooks/useFetchDB';

function Home() {
  const [categories, setCategories] = useFetchDB([], 'categories');

  return <CategoriesCard categories={categories} />;
}

export default Home;
