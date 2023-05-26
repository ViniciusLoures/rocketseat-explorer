import { GithubUser } from "./githubUser.js"

export class Favorites {
  constructor(root){
    
    this.root = document.querySelector(root)
    this.tbody = this.root.querySelector('table tbody')
    this.tableNull = this.root.querySelector('.none-users')
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username){
    try {

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists){
        throw new Error('Usuário já cadastrado!')
      }
      const user = await GithubUser.search(username)
  
      if(user.login === undefined){
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch (e) {
      alert(e.message)
    }

  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

export class FavoritesView extends Favorites {
  constructor(root){
    super(root)

    this.update()
    this.onAdd()
  }

  onAdd(){
    const btnAdd = this.root.querySelector('.search button')
    btnAdd.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow(user)
      console.log(row)
      this.tbody.append(row)
    
      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que dejsa deletar?')
        if(isOk){
          this.delete(user)
        }
      }



    })
    if(this.entries.length > 0){
      this.tbody.classList.remove('hide')
      this.tableNull.classList.add('hide')    
    }
    else{
      this.tbody.classList.add('hide')
      this.tableNull.classList.remove('hide') 
    }
  }

  removeAllTr(){
    this.tbody.querySelectorAll('tr').forEach(element => {
      element.remove()
    });
  }

  createRow(entrie) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/${entrie.login}.png" alt="">
        <a href="https://github.com/${entrie.login}" target="_blank">
          <p>${entrie.name}</p>
          <span>${entrie.login}</span>
        </a>
      </td>
      <td class="repositories">${entrie.public_repos}</td>
      <td class="followers">${entrie.followers}</td>
      <td><button class="remove">Remover</button></td>
      `
    return tr
  }

  toggleTable(){
    this.tbody.classList.toggle('hide')
    this.tableNull.classList.toggle('hide')
  }
}