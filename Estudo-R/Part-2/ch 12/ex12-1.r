cat("ex a ----------------\n")
fat = function(num) {
    if (num < 0) {
        stop("Insira um numero positivo")
    }
    if (num == 0) {
        return(1)
    } else {
        return(fat(num - 1) * num)
    }
}
try(print(fat(5)))
try(print(fat(8)))
try(print(fat(-8)))

cat("\n\nex B ----------------\n")
listInv = function(x, noninv = NA, nonmat = "not a matrix", silent = TRUE) {
    if (!silent) {
        if (!is.list(x)) stop("x precisa ser uma lista");
        if (length(x) == 0) stop("x é uma lista vazia");
    }
    if (!is.character(nonmat)) {
        warning("nommat não é uma string")
        nonmat = try(as.character(nonmat))
    }
    ret = list();
    if (length(x) == 0) return(ret)
    for (i in 1:length(x)) {
        if (is.matrix(x[[i]])) {
            res = try(solve(x[[i]]))
            if (any(class(res) == "try-error")) {
                ret[[i]] = noninv
            } else {
                ret[[i]] = res
            }
        }
        else {
            ret[[i]] = nonmat;
        }
    }
    return(ret);
}
foo = list(1:4, matrix(1:4, 1, 4), matrix(1:4, 4, 1), matrix(1:4, 2, 2))
print(listInv(foo))
cat("----\n")
print(listInv(foo, nonmat = 666))
cat("----\n")
print(listInv(foo, nonmat = 666, silent = FALSE))

cat("----\n")
foo = list(diag(9), matrix(c(0.2, 0.4, 0.2, 0.1, 0.1, 0.2), 3, 3),
rbind(c(5, 5, 1, 2), c(2, 2, 1, 8), c(6, 1, 5, 5), c(1, 0, 2, 0)),
matrix(1:6, 2, 3), cbind(c(3, 5), c(6, 5)), as.vector(diag(2)))

print(listInv(foo, noninv = "unsuitable matrix"))

try(print(listInv("asda", silent=FALSE)))
try(print(listInv(list(), silent=FALSE)))

