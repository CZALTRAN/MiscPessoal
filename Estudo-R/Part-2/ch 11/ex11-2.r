cat("ex a ----------------\n")


finan = function(P, i, t = 12, y, plotit = TRUE, ...) {
    innerfinan = function(P, i, t, y) {
        f = P * (1 + i / (100 * t)) ^ (t * y)
        return(f);
    }

    if (plotit) {
        xvalues = 1:y;
        yvalues = 1:y;
        for (index in 1:length(xvalues)) {
            yvalues[index] = innerfinan(P, i, t, xvalues[index])
        }

        plot(xvalues, yvalues, type = 's', ...)

    } else {
        return(innerfinan(P, i, t, y))
    }

}
print(finan(5000, 4.4, y = 10, plotit = FALSE))
#print(finan(100, 22.9, 12, 20))
#print(finan(100, 22.9, 1, 20))

cat("\n\nex a ----------------\n")
bhaskara = function(A, B, C) {
    delta = B ^ 2 - 4 * A * C;
    if (delta > 0) {
        return(c(
            (-B - delta ^ 0.5) / (2 * A),
            (-B + delta ^ 0.5) / (2 * A)
        ))
    } else if (delta == 0) {
        return(c(-B / (2 * A)))
    } else {
        cat("Nao existem raizes reais!\n")
        return(c())
    }
}

print(bhaskara(2, -1, -5))
print(bhaskara(1, 1, 1))

print(bhaskara(1.3, -8, -3.13))
print(bhaskara(2.25, -3, 1))
print(bhaskara(1.4, -2.2, -5.1))
print(bhaskara(-5, 10.11, -9.9))

print(bhaskara(-5, -9.9))

