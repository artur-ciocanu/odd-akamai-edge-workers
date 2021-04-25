

data "akamai_property_rules_template" "rules" {
  template_file = abspath("${path.root}/property-snippets/rules.json")

  variables {
    name  = "edge_worker_id"
    type  = "string"
    value = var.edge_worker_id
  }

  variables {
    name  = "edge_worker_debug_secret"
    type  = "string"
    value = var.edge_worker_debug_secret
  }

  variables {
    name  = "cp_code_id"
    type  = "number"
    value = replace(akamai_cp_code.cp_code.id, "cpc_", "")
  }

  variables {
    name  = "cp_code_name"
    type  = "string"
    value = var.cp_code_name
  }

  variables {
    name  = "origin_hostname"
    type  = "string"
    value = var.origin_hostname
  }

  variables {
    name  = "product_name"
    type  = "string"
    value = var.product_name
  }

}

resource "akamai_cp_code" "cp_code" {
  name        = var.cp_code_name
  contract_id = var.contract_id
  group_id    = var.group_id
  product_id  = var.product_id
}

resource "akamai_edge_hostname" "hostname" {
  product_id    = var.product_id
  contract_id   = var.contract_id
  group_id      = var.group_id
  edge_hostname = var.edge_hostname
  ip_behavior   = "IPV6_COMPLIANCE"
  certificate   = var.certificate_enrollment_id
}

resource "akamai_property" "property" {
  name        = var.property_name
  product_id  = var.product_id
  contract_id = var.contract_id
  group_id    = var.group_id

  hostnames {
    cname_from             = var.external_hostname
    cname_to               = var.edge_hostname
    cert_provisioning_type = "DEFAULT"
  }

  rule_format = "v2020-03-04"
  rules       = data.akamai_property_rules_template.rules.json
}

resource "akamai_property_activation" "staging" {
  property_id = akamai_property.property.id
  network     = "STAGING"
  version     = var.property_version
  contact     = var.contact_emails
}

resource "akamai_property_activation" "production" {
  property_id = akamai_property.property.id
  network     = "PRODUCTION"
  version     = var.property_version
  contact     = var.contact_emails
}
