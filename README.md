API de acesso à base de dados (MySQL)


A estrutura da base de dados pode ser consultada [a link](https://github.com/Kartic23/ServerSide/blob/main/sql/database.sql)

API Users

- Todos os utilizadores:  <br />
  GET http://localhost:3000/users  <br />
  retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...]
    
- Busca os utilizadores com um certo email: <br />
      GET http://localhost:3000/users/:email <br />
      retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...] ou null

- Busca os utilizadores com um certo id: <br />
      GET http://localhost:3000/users/id/:id <br />
      retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...] ou null
    
- Registo de um utilizador: <br />
    POST http://localhost:3000/users <br />
    Body: JSON string {"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"} <br />
    retorna: JSON string {"message": "User added"} ou null

- Atualização de um utilizador: <br />
    PUT http://localhost:3000/users/:id <br />
    Body: JSON string {"email": "Kartic23@ualg.pt"} <br />
    retorna: JSON string { "message": "User updated" } ou null
- Apagar um utilizador: <br />
  DELETE http://localhost:3000/users/:id  <br />
  retorna: JSON string { "message": "User deleted" } ou null <br />



API Posts


- Todos os posts:  <br />
  GET http://localhost:3000/posts  <br />
  retorna: JSON string [{"title" :"Post 1","content": "Text Post 1","user_id": "1", "created_at": "2023-11-23"},...] ou []
    

- Busca os Posts com um certo id: <br />
      GET http://localhost:3000/posts/:id <br />
      retorna: JSON string [{"title" :"Post 1","content": "Text Post 1","user_id": "1", "created_at": "2023-11-23"},...] ou null
    
- Registo de um Post: <br />
    POST http://localhost:3000/posts <br />
    Body: JSON string {"title" :"Post 1","content": "Text Post 1","user_id": "1", "created_at": "2023-11-23"} <br />
    retorna: JSON string {"message": "Post added"} ou null

- Atualização de um Post: <br />
    PUT http://localhost:3000/posts/:id <br />
    Body: JSON string {"content": "Text Post 1 Updated"} <br />
    retorna: JSON string { "message": "Post updated" } ou null
  
- Apagar um Post: <br />
  DELETE http://localhost:3000/posts/:id  <br />
  retorna: JSON string { "message": "Post deleted" } ou null <br />

