
cat("ex a ----------------\n")
print(ls("package:methods")[1:20])

cat("\n\nex b ----------------\n")
print(environment(read.table))
print(environment(data))
print(environment(matrix))
print(environment(jpeg))


cat("\n\nex c ----------------\n")
list = ls('package:graphics')

print(list[list=="smoothScatter"])

