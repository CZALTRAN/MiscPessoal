cat("ex a ----------------\n")
foo = c(13563, -14156, -14319, 16981, 12921, 11979, 9568, 8833, -12968, 8133)
print((foo ^ 75)[is.finite(foo ^ 75)])
cat("\n")
print((foo ^ 75)[(foo ^ 75) != -Inf])
cat("\nex b ----------------\n")
bar = rbind(
    c(77875.40, 27551.45, 23764.30, -36478.88),
    c(-35466.25, -73333.85, 36599.69, -70585.69),
    c(-39803.81, 55976.34, 76694.82, 47032.00)
)
print(bar ^ 65 / Inf)
print(which(is.nan(bar ^ 65 / Inf), arr.ind = T))
cat("\n")
print(!is.nan(bar ^ 67 + Inf))
print((bar ^ 67)!=-Inf)
cat("\n")
print((bar ^ 67)!=Inf)

