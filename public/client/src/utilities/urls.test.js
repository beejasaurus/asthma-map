import {convertQueryParameters, makeQueryString} from './urls';

describe('convertQueryParameters', () => {
    it('converts ?foo=bar into {foo: bar}', () => {
        const url = '?foo=bar';
        expect(convertQueryParameters(url)).toEqual({ foo: 'bar' });
    });

    it('converts empty string to nothing', () => {
        const url = '';
        expect(convertQueryParameters(url)).toEqual({});
    });
});

describe('makeQueryString', () => {
    it('converts { activity: foo } into ?state_territory=foo', () => {
        const urlParam = {activity: 'foo'}
        expect(makeQueryString(urlParam)).toEqual('?state_territory=foo');
    });

    it('converts empty object to nothing', () => {
        const urlParam = {};
        expect(makeQueryString(urlParam)).toEqual('');
    });

    it('converts { foo: bar } into ?', () => {
        const urlParam = {foo: 'bar'};
        expect(makeQueryString(urlParam)).toEqual('');
    });

    test('makeQueryString, convertQueryParameters integration on empty string', () => {
        const url = '';
        const urlParam = convertQueryParameters(url);
        expect(makeQueryString(urlParam)).toEqual('');
    });

    test('makeQueryString, convertQueryParameters integration on whitelisted string', () => {
        const url = '?activity=foo';
        const urlParam = convertQueryParameters(url);
        expect(makeQueryString(urlParam)).toEqual('?state_territory=foo');
    });

    test('makeQueryString, convertQueryParameters integration on non-whitelisted string', () => {
        const url = '?foo=bar';
        const urlParam = convertQueryParameters(url);
        expect(makeQueryString(urlParam)).toEqual('');
    });
});