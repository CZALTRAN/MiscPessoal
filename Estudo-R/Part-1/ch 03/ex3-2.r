cat("ex a ----------------\n")
A1 = matrix(c(1,2,7,2,4,6), nrow=3, ncol=2)
A2 = matrix(seq(10,30,10),nrow=3, ncol=2)
write.table(2/7*(A1-A2),sep = "\t", row.names = FALSE, col.names = FALSE)

cat("\nex b ----------------\n")
B1 = matrix(c(1,2,7))
B2 = matrix(c(3,4,8))
cat("\n  i -> \n")
try(write.table(B1%*%B2,sep = "\t", row.names = FALSE, col.names = FALSE))
cat("\n ii -> \n")
try(write.table(t(B1)%*%B2,sep = "\t", row.names = FALSE, col.names = FALSE))
cat("\niii -> \n")
try(write.table(t(B2)%*%(B1%*%t(B1)),sep = "\t", row.names = FALSE, col.names = FALSE))
cat("\n iv -> \n")
try(write.table((B1%*%t(B1))%*%t(B2),sep = "\t", row.names = FALSE, col.names = FALSE))
cat("\n  v -> \n")
try(write.table(solve((B2%*%t(B2))+(B1%*%t(B1)-(100*diag(3)))),sep = "\t", row.names = FALSE, col.names = FALSE))

cat("\nex c ----------------\n")
C = diag(c(2,3,5,-1))
try(write.table(solve(C)%*%C - diag(4),sep = "\t", row.names = FALSE, col.names = FALSE))

