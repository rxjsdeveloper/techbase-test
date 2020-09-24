import { getData } from './index';
describe('Country', () => {
  it('Search Viet Nam status', () => {
    const expected = [
      [
        {
          "name": "Viet Nam",
          "key": "VN",
          "newConfirmed": 1,
          "newDeaths": 0,
          "newRecovered": 34,
          "confirmed": 1069,
          "deaths": 35,
          "recovered": 991
        }
      ],
      {
        "NewConfirmed": 262645,
        "TotalConfirmed": 31774394,
        "NewDeaths": 5562,
        "TotalDeaths": 975040,
        "NewRecovered": 265924,
        "TotalRecovered": 21886648
      }
    ]
    getData('Viet Nam').then(([countries, totals]) => {
      expect([countries, totals]).toEqual(expected);
		});
        
  });
});