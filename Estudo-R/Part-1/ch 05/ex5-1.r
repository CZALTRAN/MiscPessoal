cat("ex a ----------------\n")
A = list(
    seq(-4, 4, length.out = 20),
    matrix(c(F, T, T, T, F, T, T, F, F), 3, 3),
    c("don", "quixote"),
    factor(c("LOW", "MED", "LOW", "MED", "MED", "HIGH"))
)
print(A)

print(A[[2]][2:1, 2:3])

A[[3]][1] = sub("dom", "Dom", A[[3]][1])
A[[3]][2] = sub("quixote", "Quixote", A[[3]][2])

cat("\n\n\"Windmills! ATTACK!\"\n","\t-\\", paste(A[[3]]),"/-\n\n",sep="")

print(A[[1]][which(A[[1]]>1)])

print(which(A[[4]]=="MED"))


cat("\nex b ----------------\n")
B <- list(
    facs=A[[4]],
    nums=c(3,2.1,3.3,4,1.5,4.9),
    oldList= A[1:3]
)
print(B)

print(B$facs[which(B$nums>=3)])

B$flags = rep(B$oldList[[2]][,3], times=2)
print(B$flags)

B$oldList[[3]] = "Don Quixote"
print(B$oldList)

