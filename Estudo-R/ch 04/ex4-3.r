cat("ex a ----------------\n")
A = c(7, 5, 6, 1, 2, 10, 8, 3, 8, 2)
A1 = A[A >= 5]
cat("i  ->\n")
print(A1)
cat("ii ->\n")
print(A[-which(A >= 5)]);

cat("\nex b ----------------\n")
B = matrix(A1, 2, 3, TRUE)
print(B);

cat("i  ->\n")
B[which(B == 8)] = B[1, 2] ^ 2;
print(B);
cat("ii ->\n")
print(all(B > 4 & B <= 25))

cat("\nex c ----------------\n")
C = array(c(10, 5, 1, 4, 7, 4, 3, 3, 1, 3, 4, 3, 1, 7, 8, 3, 7, 3), dim = c(3, 2, 3))
print(C);
cat("i  ->\n")
print(which((C == 4 | C == 3), arr.ind=T))
cat("ii ->\n")
C[which((C < 3 | C>=7), arr.ind=T)] = 100
print(C)

cat("\nex d ----------------\n")

print(A[c(F,T)])
print(A[c(0,1)])



