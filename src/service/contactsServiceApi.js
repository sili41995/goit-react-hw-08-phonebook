class ContactsServiceApi {
  #BASE_URL = 'https://648c40eb8620b8bae7ec8cc7.mockapi.io/phonebook/contacts';

  fetchContacts() {
    return fetch(this.#BASE_URL).then((response) => {
      if (!response.ok) {
        throw new Error('Loading contacts failed');
      }
      return response.json();
    });
  }

  addContact(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return fetch(this.#BASE_URL, options).then((response) => {
      if (!response.ok) {
        throw new Error('Adding a contact failed');
      }
      return response.json();
    });
  }

  deleteContact(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${this.#BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Deleting a contact failed');
      }
      return response.json();
    });
  }
}

const contactsServiceApi = new ContactsServiceApi();

export default contactsServiceApi;
