# Background
We are using `Terraform` to provision all the required resources for `Akamai EdgeWorkers`.

To be able to use `Terraform` with `Akamai EdgeWorkers` you'll need the details like:
- contract ID
- group ID
- Akamai credentials
Akamai recommends putting credentials in the so called `.edgerc` file. The credentials can be retrieved using Akamai IAM.


# Creating all the resources
There are a few resources that we need to be able expose `Akamai EdgeWorkers` via an HTTP endpoint:
- Edge host name
- Property
Property is really important since it contains references to both edge host name and edge worker code.

Every resource has it's own properties, so please check the `main.tf` files for details.

To provision everything we should execute:
1. run `terraform init`
2. run `terraform plan -var-file=dev.tfvars -out dev.tfplan`
3. run `terraform apply "dev.tfplan"`
