package mocks

import (
	"context"
	"/todo_api/model"
	"github.com/google/uuid"
	"github.com/stretchr/testify/mock"
)

// this is a mock type for model.ItemsService
type MockItemsService struct {
	mock.Mock
}

// Get is mock of ItemsService Get
func (m *MockItemsService) Get(ctx context.Context, uid uuid.UUID) (*model.Items, error) {
	ret := m.Called(ctx, uid)

	// first value passed to "Return"
	var r0 *model.Items
	if ret.Get(0) != nil {
		r0 = ret.Get(0).(*model.Items)
	}

	var r1 error
	if ret.Get(1) != nil {
		r1 = ret.Get(1).(error)
	}
	return r0, r1
}
