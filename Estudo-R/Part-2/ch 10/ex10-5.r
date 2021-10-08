foo <- matrix(1:12, 4, 3)
foo = apply(foo, 1, sort, decreasing = TRUE)
print(foo)
cat("ex a ----------------\n")

mult = 0
print(apply(foo, 2, prod))


cat("\n\nex b ----------------\n")
matlist <- list(matrix(c(T, F, T, T), 2, 2),
matrix(c("a", "c", "b", "z", "p", "q"), 3, 2),
matrix(1:8, 2, 4))
print(matlist)
matlist = lapply(matlist, t)
print(matlist)

cat("\n\nex c ----------------\n")
qux <- array(96:1,dim=c(4,4,2,3))


#print()
print(apply(qux[,,2,], 3, diag))
cat("\n")
print(apply(apply(qux[,4,,], 3, dim),1,sum) )