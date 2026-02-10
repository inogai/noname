group "default" {
  targets = ["noname"]
}

target "noname" {
  context    = "."
  dockerfile = "Dockerfile"
  platforms  = ["linux/amd64", "linux/arm64"]
}
