class User {
  static #list = []
  static #count = 1

  constructor({ email, password }) {
    this.id = User.#count++
    this.email = String(email).toLowerCase()
    this.password = String(password)

    this.isConfirm = false
  }
  static create(email, password) {
    const newUser = new User(email, password)
    console.log(newUser)

    this.#list.push(newUser)
    console.log(this.#list)

    return newUser
  }
  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }
  static getById(id) {
    return (
      this.#list.find((user) => user.id === Number(id)) ||
      null
    )
  }

  static getList = () => this.#list
}

module.exports = { User }
