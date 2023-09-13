import initialState from 'redux/initialState';

class ContactsServiceApi {
  #BASE_URL = 'https://connections-api.herokuapp.com';
  #TOKEN = initialState.auth.token;

  get token() {
    return this.#TOKEN;
  }

  set token(newToken) {
    this.#TOKEN = newToken;
  }

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

  loginUser(data, signal) {
    const options = {
      signal,
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

  logoutUser() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/users/logout`, options).then((response) =>
      response.json()
    );
  }

  refreshUser() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/users/current`, options).then((response) =>
      response.json()
    );
  }

  fetchContacts(signal) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/contacts`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading contacts failed');
      }
      return response.json();
    });
  }

  addContact(data, signal) {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/contacts`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Adding a contact failed');
      }
      return response.json();
    });
  }

  deleteContact(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Deleting a contact failed');
        }
        return response.json();
      }
    );
  }

  updateContact({ id, contact: data }, signal) {
    const options = {
      signal,
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.#TOKEN}`,
      },
    };

    return fetch(`${this.#BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Contact update failed');
        }
        return response.json();
      }
    );
  }
}

const contactsServiceApi = new ContactsServiceApi();

export default contactsServiceApi;
