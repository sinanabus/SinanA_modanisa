package main

import (
	"todo_api/handler"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	handler.HandlerFactory(&handler.Config{}) //initialize the router with required functionality

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
