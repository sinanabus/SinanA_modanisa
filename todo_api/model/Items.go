package model

import "github.com/google/uuid"

type Items struct {
	UID   uuid.UUID         `db:"UID" json:"UID"`
	items map[string]string `db:"items" json:"items"`
}
