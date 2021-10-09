package pact_test

import (
	"testing"

	"github.com/pact-foundation/pact-go/dsl"
	"github.com/pact-foundation/pact-go/types"
	"github.com/stretchr/testify/suite"
)

type PactS struct {
	suite.Suite
}

func TestPactS(t *testing.T) {
	suite.Run(t, new(PactS))
}

func (s *PactS) Test() {
	pact := dsl.Pact{
		Provider: "BackEndService",
	}

	_, err := pact.VerifyProvider(
		s.T(),
		types.VerifyRequest{
			ProviderBaseURL: "http://localhost:8080",
			PactURLs:        []string{"/home/abuse/Desktop/SinanA_modanisa/todo_client/pacts/frontendwebsite-productservice.json"},
			Provider:        "1.0.0",
		},
	)
	s.NoError(err)
}
