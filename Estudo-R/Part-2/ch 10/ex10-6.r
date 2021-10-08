cat("ex a ----------------\n")
foo <- 5
bar <- c(2, 3, 1.1, 4, 0, 4.1, 3)
loop1.result <- rep(NA, length(bar))
for (i in 1:length(bar)) {
    temp <- foo / bar[i]
    if (is.finite(temp)) {
        loop1.result[i] <- temp
    }
}
print(loop1.result)

loop3.result = ifelse(is.finite(foo / bar), foo / bar, NA)
print(loop3.result)

cat("\n\nex b ----------------\n")
mynumbers <- c(4, 5, 1, 2, 6, 2, 4, 6, 6, 2)
for (i in mynumbers) {
    if (i > 5) break;
    print(diag(i))
}
cat("\n-----\n")
i = 1
repeat {
    if (mynumbers[i] > 5) break;
    print(diag(mynumbers[i]))
    i = i + 1
}
cat("\n\nex c ----------------\n")

#matlist1 <- list(matrix(1:4,2,2),matrix(1:4),matrix(1:8,4,2))
#matlist2 <- matlist1
matlist1 <- list(matrix(1:4, 2, 2), matrix(2:5, 2, 2), matrix(1:16, 4, 2))
matlist2 <- list(matrix(1:8, 2, 4), matrix(10:7, 2, 2), matrix(9:2, 4, 2))
reslist = list()
index = 1
for (mat1 in matlist1) {
    for (mat2 in matlist2) {
        if (ncol(mat1) != nrow(mat2)) {
            reslist[[index]] = "Nao e possivel"
        }
        else {
            teste = mat1 %*% mat2
            reslist[[index]] = mat1 %*% mat2
        }
        index = index + 1
    }
}
print(reslist)