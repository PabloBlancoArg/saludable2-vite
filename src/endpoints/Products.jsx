import requestDecorator from '../../decorators/RequestDecorator';
import { stringify } from '../../utilities/queryUtils';
import { API_PATH } from '../BaseUrl';

const PRODUCTS = 'products';

export function* listProducts(params, cbResponse) {
	yield requestDecorator(
		function* (params) {
			return yield fetch(`${API_PATH}/${PRODUCTS}${stringify(params)}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
		},
		params,
		cbResponse
	);
}

export function* showProduct(id, cbResponse) {
	yield requestDecorator(
		function* (id) {
			return yield fetch(`${API_PATH}/${PRODUCTS}/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
					// Authorization: `Bearer ${getAuthToken()}`
				}
			});
		},
		id,
		cbResponse
	);
}
