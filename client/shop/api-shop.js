const create = (params, credentials, shop) => {
 return fetch('/api/shops/by/'+ params.userId, {
 method: 'POST',
 headers: {
 'Accept': 'application/json',
 'Authorization': 'Bearer ' + credentials.t
 },
 body: shop
 })
 .then((response) => {
 return response.json()
 }).catch((err) => console.log(err))
}

export {
	create
}