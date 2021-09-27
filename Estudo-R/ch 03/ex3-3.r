cat("ex a ----------------\n")
A = array(seq(4.8,0.1, length.out = (6*4*2) ), dim=c(4,2,6))
print(A)

cat("\nex b ----------------\n")
B = A[c(4,1),2,]
print(B)

cat("\nex c ----------------\n")
C = array(rep(B[2,],4), dim = c(2,2,2,3))
print(C)

cat("\nex d ----------------\n")
D = A[,,-6]
print(D);

cat("\nex e ----------------\n")
E = D
E[c(2,4), 2, c(1,3,5)] = -99
print(E)