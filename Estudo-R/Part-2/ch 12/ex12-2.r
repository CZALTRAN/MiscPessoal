cat("ex a ----------------\n")
prog_test_fancy <- function(n, ...) {
    result <- 0
    progbar <- txtProgressBar(min = 0, max = n, ...)
    for (i in 1:n) {
        result <- result + 1
        Sys.sleep(0.1)
        setTxtProgressBar(progbar, value = i)
    }
    close(progbar)
    return(result)
}
prog_test_fancy(20, char = "r", style = 2)

cat("\n\nex b ----------------\n")
myfibrec2 <- function(n) {
    if (n < 0) {
        warning("Assuming you meant 'n' to be positive -- doing that instead")
        n <- n * -1
    } else if (n == 0) {
        stop("'n' is uninterpretable at 0")
    }
    if (n == 1 || n == 2) {
        return(1)
    } else {
        return(myfibrec2(n - 1) + myfibrec2(n - 2))
    }
}

myfibvectorTRY <- function(nvec) {
    nterms <- length(nvec)
    result <- rep(0, nterms)
    progbar <- txtProgressBar(min = 0, max = nterms, style = 2, char = "#")
    for (i in 1:nterms) {
        setTxtProgressBar(progbar, value = i)
        attempt <- try(myfibrec2(nvec[i]), silent = T)
        if (class(attempt) == "try-error") {
            result[i] <- NA
        } else {
            result[i] <- attempt
        }
    }
    return(result)
}

print(myfibvectorTRY(c(3, 2, 7, 0, 9, 13)))

print(myfibvectorTRY(c(5, 10, 15, 20, 35)))

cat("\n\nex c ----------------\n")
myfibloop <- function(n) {
    ret = c(1, 1)
    if (n < 0) {
        warning("Assuming you meant 'n' to be positive -- doing that instead")
        n <- n * -1
    } else if (n == 0) {
        stop("'n' is uninterpretable at 0")
    }
    if (n == 1 || n == 2) {
        return(1)
    } else {
        for (i in 3:n) {
            ret = c(ret, (ret[i - 1] + ret[i - 2]))
        }
    }
    return(ret[n])
}

print(myfibloop(35))
