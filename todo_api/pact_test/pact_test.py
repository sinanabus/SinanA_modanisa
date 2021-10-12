from pact import Verifier
verifier = Verifier(provider='UserService',
                    provider_base_url="/localhost:8080")

output, logs = verifier.verify_pacts('frontendwebsite-productservice.json')