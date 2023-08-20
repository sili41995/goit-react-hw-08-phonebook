import initialState from 'redux/initialState';

class ContactsServiceApi {
  #BASE_URL = 'https://connections-api.herokuapp.com';
  #TOKEN = initialState.auth.token;

  registerUser(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/users/signup`, options).then((response) =>
      response.json()
    );
  }

  loginUser(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/users/login`, options).then((response) =>
      response.json()
    );
  }

  // fetchContacts() {
  //   return fetch(this.#BASE_URL).then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Loading contacts failed');
  //     }
  //     return response.json();
  //   });
  // }

  // addContact(data) {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   };
  //   return fetch(this.#BASE_URL, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Adding a contact failed');
  //     }
  //     return response.json();
  //   });
  // }

  // deleteContact(id) {
  //   const options = {
  //     method: 'DELETE',
  //   };

  //   return fetch(`${this.#BASE_URL}/${id}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Deleting a contact failed');
  //     }
  //     return response.json();
  //   });
  // }
}

const contactsServiceApi = new ContactsServiceApi();

export default contactsServiceApi;
