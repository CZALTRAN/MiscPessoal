cat("ex a ----------------\n")
A = c(
    seq(3, 6, length.out=5),
    rep(c(2,-5.1,-33),2),
    (7/42+2)
)
cat(A,"\n");

cat("\nex b ----------------\n")
B = c(A[1], A[length(A)]);
cat(B,"\n")

cat("\nex c ----------------\n")
C = A[c(-1, -length(A))]

cat(C,"\n")
cat("\nex d ----------------\n")
cat(c(B[1],C,B[2]),"\n")

cat("\nex e ----------------\n")
A = sort(A);
cat(A,"\n");

cat("\nex f ----------------\n")
cat(A[length(A):1],"\n")
cat(sort(A, decreasing=TRUE),"\n")

cat("\nex g ----------------\n")
D = c(rep(C[3],3),rep(C[6],4), C[length(C)])
cat(D,"\n");

cat("\nex h ----------------\n")
E = A
E[c(1,5:7,length(E))] = 99:95
cat(E,"\n");
