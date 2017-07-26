export const convertQueryParameters = (params) => params.replace(/(^\?)/,'')
    .split("&")
    .map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];

export const makeQueryString = (query) => {
    if(Object.keys(query).length === 0 && query.constructor === Object) return '';

    if('state_territory' in query) {
        const queryString = 'state_territory=' + query.state_territory;

        return '?' + queryString;
    }

    return '';
};
