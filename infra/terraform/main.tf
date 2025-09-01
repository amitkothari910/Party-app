terraform {
  required_version = ">= 1.3.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "party-app-terraform-state"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "party-app-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}

module "networking" {
  source = "./modules/networking"
  vpc_cidr = "10.0.0.0/16"
}

module "eks" {
  source = "./modules/eks"
  vpc_id = module.networking.vpc_id
  private_subnets = module.networking.private_subnets
}

module "rds" {
  source = "./modules/rds"
  vpc_id = module.networking.vpc_id
  db_name = "partydb"
}

module "s3" {
  source = "./modules/s3"
  bucket_name = "party-app-media"
}
