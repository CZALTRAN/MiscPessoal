cat("ex a ----------------\n")
foo <- array(data = 1:36, dim = c(3, 3, 4))
print(class(foo))
bar <- as.vector(foo)
print(class(bar))
baz <- as.character(bar)
print(class(baz))
qux <- as.factor(baz)
print(class(qux))
quux <- bar + c(-0.1, 0.1)
print(class(quux))

cat("ex b ----------------\n")
B = factor(c(
    is.numeric(foo) + is.integer(foo),
    is.numeric(bar) + is.integer(bar),
    is.numeric(baz) + is.integer(baz),
    is.numeric(qux) + is.integer(qux),
    is.numeric(quux) + is.integer(quux)
))
print(B)

print(B == as.numeric(B))

cat("ex c ----------------\n")
C = matrix(2:13, 3, 4)
print(C)

Carray = c(t(C))
print(Carray)

cat("ex d ----------------\n")
D = rbind(
    c(34, 0, 1),
    c(23, 1, 2),
    c(33, 1, 1),
    c(42, 0, 1),
    c(41, 0, 2)
)
D = data.frame(D)
D[2] = as.logical(D[[2]])
D[3] = as.factor(D[[3]])
print(D$X1)
print(D$X2)
print(D$X3)