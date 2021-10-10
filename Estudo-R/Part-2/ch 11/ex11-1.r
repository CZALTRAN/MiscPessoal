cat("ex a ----------------\n")
myfib4 <- function(thresh, printme) {
    fibseq <- c(1, 1)
    counter <- 2
    repeat {
        fibseq <- c(fibseq, fibseq[counter - 1] + fibseq[counter])
        counter <- counter + 1
        if (fibseq[counter] > thresh) {
            break
        }
    }
    if (printme) {
        cat(fibseq, "\n")
    } else {
        return(fibseq)
    }
}

myfib4(thresh = 150, printme = TRUE)
myfib4(1000000, T)
myfib4(150, FALSE)
myfib4(1000000, printme = F)

cat("\n\nex b ----------------\n")
myfac = function(num) {
    mynum = num
    fac = 1
    while (mynum > 0) {
        fac = fac * mynum
        mynum = mynum - 1
    }
    return(fac)
}
print(myfac(5))
print(myfac(12))
print(myfac(0))

cat("\n")

myfac2 = function(num) {
    if (num < 0) return(NaN)
    mynum = num
    fac = 1
    while (mynum > 0) {
        fac = fac * mynum
        mynum = mynum - 1
    }
    return(fac)
}
print(myfac2(5))
print(myfac2(12))
print(myfac2(0))
print(myfac2(-6))
