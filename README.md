API de acesso à base de dados

A estrutura da base de dados pode ser consultada [a link] https://github.com/Kartic23/ServerSide/sql/database.sql

API Users

- Todos os utilizadores:
  GET http://localhost:3000/users
  retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...]
    
- Busca os utilizadores com um certo email:
      GET http://localhost:3000/users/:email
      retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...] ou null

- Busca os utilizadores com um certo id:
      GET http://localhost:3000/users/id/:id
      retorna: JSON string [{"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"},...] ou null
    
- Registo de um utilizador:
    POST http://localhost:3000/users
    Body: JSON string {"name" :"Kartic Premgi","email": "a71379@ualg.pt","password_digest": "segredo", "created_at": "2023-11-23"}
    retorna: JSON string {"message": "User added"} ou null

- Atualização de um utilizador:
    PUT http://localhost:3000/users/:id
    Body: JSON string {"email": "Kartic23@ualg.pt"}
    retorna: JSON string { "message": "User updated" } ou null

  - Apagar um utilizador:
    DELETE http://localhost:3000/users/:id
    retorna: JSON string { "message": "User deleted" } ou null
