variable "GIT_SHA" {
  default = "latest"
}

target "server" {
  context    = "."
  dockerfile = "docker/Dockerfile.server"
  tags = [
    "inogai/noname-server:latest",
    "inogai/noname-server:${substr(GIT_SHA, 0, 7)}"
  ]
  platforms = ["linux/amd64", "linux/arm64"]
}
