export const request = async (url, method = 'GET', data = null) => {
	try {
		const config = {
			method,
			headers: {
				'content-type': 'application/json',
			},
			credentials: 'include',
		};

		if (data && method !== 'GET') {
			config.body = JSON.stringify(data);
		}

		const response = await fetch(url, config);

		let responseBody;

		try {
			responseBody = await response.json();
		} catch (e) {
			responseBody = {
				error: `HTTP: ${response.status}: ${response.statusText}, error: ${e.message}`,
			};
		}

		if (!response.ok) {
			return {
				error:
					responseBody.error ||
					`Request failed with status ${response.status}`,
				res: null,
			};
		}

		return {
			error: null,
			res: responseBody,
		};
	} catch (error) {
		return {
			error: `Network error: ${error.message}`,
			res: null,
		};
	}
};
