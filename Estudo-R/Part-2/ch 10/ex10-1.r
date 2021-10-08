cat("ex a ----------------\n")
vec1 <- c(2, 1, 1, 3, 2, 1, 0)
vec2 <- c(3, 8, 2, 2, 0, 0, 0)

if ((vec1[1] + vec2[2]) == 10) { cat("1 Print me!\n") }
if (vec1[1] >= 2 && vec2[1] >= 2) { cat("2 Print me!\n") }
if (all((vec2 - vec1)[c(2, 6)] < 7)) { cat("3 Print me!\n") }
if (!is.na(vec2[3])) { cat("4 Print me!\n") }

cat("\n\nex b ----------------\n")
B = ifelse((vec1 + vec2) > 3, vec1 * vec2, vec1 + vec2)
print(B)

cat("\n\nex c ----------------\n")
mymat <- matrix(as.character(1:16), 4, 4)
if (all(substr(diag(mymat), 1, 1) != "g")) {
  mymat = diag(length(diag(mymat)))
} else {
  mymat[(substr(diag(mymat), 1, 1) == "g"),
    (substr(diag(mymat), 1, 1) == "g")] = "HERE"
}
print(mymat)


mymat <- matrix(c("DANDELION", "Hyacinthus", "Gerbera",
    "MARIGOLD", "geranium", "ligularia",
    "Pachysandra", "SNAPDRAGON", "GLADIOLUS"), 3, 3)
if (all(substr(diag(mymat), 1, 1) != "g")) {
  mymat = diag(length(diag(mymat)))
} else {
  mymat[(substr(diag(mymat), 1, 1) == "g"),
    (substr(diag(mymat), 1, 1) == "g")] = "HERE"
}
print(mymat)

mymat <- matrix(c("GREAT", "exercises", "right", "here"),
    2, 2, byrow = T)
if (all(substr(diag(mymat), 1, 1) != "g")) {
  mymat = diag(length(diag(mymat)))
} else {
  mymat[(substr(diag(mymat), 1, 1) == "g"),
    (substr(diag(mymat), 1, 1) == "g")] = "HERE"
}
print(mymat)
