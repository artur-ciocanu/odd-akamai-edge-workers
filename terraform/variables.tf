variable "contract_id" {
  type = string
}

variable "group_id" {
  type = string
}

variable "product_id" {
  type = string
}

variable "product_name" {
  type = string
}

variable "cp_code_name" {
  type = string
}

variable "property_name" {
  type = string
}

variable "property_version" {
  type = number
}

variable "edge_hostname" {
  type = string
}

variable "external_hostname" {
  type = string
}

variable "origin_hostname" {
  type = string
}

variable "certifiate_enrollment_id" {
  type = number
}

variable "contact_emails" {
  type    = list(string)
  default = ["ciocanu@adobe.com"]
}

variable "edge_worker_id" {
  type = string
}

variable "edge_worker_debug_secret" {
  type = string
}
