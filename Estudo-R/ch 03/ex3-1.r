cat("ex a ----------------\n")
A = matrix(c(4.3, 3.1, 8.2, 8.2, 3.2, 0.9, 1.6, 6.5),nrow=4,ncol=2)
write.table(A,sep = "\t", row.names = FALSE, col.names = FALSE)

cat("\nex b ----------------\n")
cat(dim(A[-2,]),"\n")

cat("\nex c ----------------\n")
A[,2] = sort(A[,2])
write.table(A,sep = "\t", row.names = FALSE, col.names = FALSE)

cat("\nex d ----------------\n")
B = matrix(A[-4,-1])
write.table(B,sep = "\t", row.names = FALSE, col.names = FALSE)

cat("\nex e ----------------\n")
E = A[-1:-2,]
write.table(E,sep = "\t", row.names = FALSE, col.names = FALSE)

cat("\nex f ----------------\n")
F1 = diag(E);
F = A
F[c(4,1), 2:1] = -F1/2
write.table(F,sep = "\t", row.names = FALSE, col.names = FALSE)
