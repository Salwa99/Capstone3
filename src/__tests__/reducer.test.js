import charactersSlice, { fetchCharactersAction, charactersActions } from '../redux/reducer/reducer';

describe('Fetch Coin', () => {
  test('gets the correct data', async () => {
    const data = fetchCharactersAction('bitcoin');
    expect(data).toBeInstanceOf(Object);
    expect(data.id).not.toBeNull();
  });
});

describe('charactersSlice', () => {
  describe('reducers', () => {
    it('adds a character to the state', () => {
      const initialState = { characters: [] };
      const state = charactersSlice(initialState, charactersActions.addCharacter({ name: 'Harry Potter', house: 'Gryffindor' }));
      expect(state.characters).toHaveLength(1);
      expect(state.characters[0]).toEqual({ name: 'Harry Potter', house: 'Gryffindor' });
    });
  });
});
