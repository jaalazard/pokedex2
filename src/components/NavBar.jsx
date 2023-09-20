function NavBar(props) {
    const redirect = (index) => {
        props.setPokemonIndex(index) 
    }
    return (
        <div>
        {props.pokemonList.map((pokemon, index) => (
            <button type="submit" key={pokemon.name} onClick={() => redirect(index)}>{pokemon.name.toUpperCase()}</button>
        ))}
          </div>
    );
}

export default NavBar;