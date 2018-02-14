import HttpClient from '../../src/httpClient'

describe('http client', () => {
    const categoriesUrl = 'http://mobcategories.s3-website-eu-west-1.amazonaws.com/';

    test('should return a Promise', () => {
        expect.assertions(1);
        return HttpClient.getCategories().then(data => {
            expect(data.config.url).toBe(categoriesUrl);
        });
    });
});