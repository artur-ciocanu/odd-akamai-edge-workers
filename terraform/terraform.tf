provider "akamai" {
  edgerc         = "~/.edgerc"
  config_section = "default"
}

terraform {
  required_providers {
    akamai = {
      source = "akamai/akamai"
    }
  }
}
