cat("ex a ----------------\n")
A = seq(5,-11,-0.3)
cat(A,"\n")
cat("\nex b ----------------\n")
A = sort(A)
cat(A,"\n")
A = rev(A)
cat(A,"\n")
A = rev(A);
cat("\nex c ----------------\n")
B = c(-1,3,-5,7,-9);
B = rep(B, times=2, each=10);
cat(B,"\n")
B = sort(B, TRUE);
cat(B,"\n")

cat("\nex d ----------------\n")
C = c(6:12, rep(5.3,3), -3, seq(102,length(B), length.out=9))
cat(C,"\n")

cat("\nex e ----------------\n")
cat("Tamanho: ", length(C),"\n\n");
