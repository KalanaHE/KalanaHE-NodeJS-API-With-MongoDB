# KalanaHE-NodeJS-API-With-MongoDB

#ENDPOINTS
  - GET http://localhost:4000/posts/   (returns list of posts)
  - GET http://localhost:4000/posts/{PostID}   (returns a specific post)
  - POST http://localhost:4000/posts/   (Adds a new post to database) 
    {
        "title": "Harry Potter updated",
        "description": "avada kedavra updated",
    }
    
  - PATCH  http://localhost:4000/posts/{PostID}  (updates specific post)
     {
        "title": "Harry Potter updated",
        "description": "avada kedavra updated",
    }
    
  - GET http://localhost:4000/posts/{PostID}   (deletes a post)
