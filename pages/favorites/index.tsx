import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritesPokemons } from '../../components/ui/FavoritesPokemons';


const Favorites = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, [])
  
  return (
    <Layout title='Pokemon favoritos'>
      {
        favoritesPokemons.length === 0
        ? (<NoFavorites/>)
        : (<FavoritesPokemons favoritesPokemons={favoritesPokemons} />)
      }
      
    </Layout>
  )
}

export default Favorites