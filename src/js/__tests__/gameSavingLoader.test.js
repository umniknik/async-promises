import GameSavingLoader from '../gameSavingLoader';

test('should load the game saving', () => {
  const expectedSaving = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(expectedSaving);
  });
});

test('should handle an error if failed to load the game saving', () => {
  expect.assertions(1); 
  GameSavingLoader.load().catch((error) => {
    //expect(error).toEqual(new Error('Failed to load game saving'));
    expect(error.name).toBe('Failed to load game saving');
  });
});
