package handler

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestGETtodos(t *testing.T) {
	gin.SetMode(gin.TestMode)
	todos := map[string]string{
		"1": "TASK 1",
		"2": "TASK 2",
	}

	t.Run("success", func(t *testing.T) {
		uid, _ := uuid.NewRandom()
		mockItemsResponse := &model.Items{
			UID:   uid,
			items: todos,
		}

		mockItemsService := new(mocks.MockItemsService)
		mockItemsService.On("Get", mock.AnythingOfType("*context.emptyCtx"), uid).Return(mockItemsResponse, nil)

		// a response recorder
		rr := httptest.NewRecorder()

		// use gin to set context for test
		router := gin.Default()
		router.Use(func(c *gin.Context) {
			c.Set("items", &model.Items{
				UID: uid,
			},
			)
		})

		HandlerFactory(&Config{
			R:            router,
			ItemsService: ItemsService,
		})

		request, err := http.NewRequest(http.MethodGet, "/todos", nil)
		assert.NoError(t, err)
		router.ServeHTTP(rr, request)
		respBody, err := json.Marshal(gin.H{
			"user": mockItemsResponse,
		})

		assert.NoError(t, err)
		assert.Equal(t, http.StatusOK, rr.Code)
		assert.Equal(t, respBody, rr.Body.Bytes())
		mockItemsService.AssertExpectations(t)
	})
}
