class APIHandler {
	constructor(baseUrl) {
		this.api = axios.create({
			baseURL: baseUrl
		})
	}

	getFullList() {
		return this.api
				.get()
				.then(result => console.log(result.data))
				.catch(e => console.log(`Something went wrong getting all characters ${e}`));
  }

  getOneRegister (characterId) {
    get(`/characters/${characterId}`)
    .then(result => console.log(result.data))
				.catch(e => console.log(`Something went wrong getting characters by ID ${e}`));
  }

  createOneRegister (characterInfo) {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}

