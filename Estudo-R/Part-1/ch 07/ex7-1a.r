cat("ex a ----------------\n")
plot(-3:3, y = 7:13, type = 'n', main = "")
text(x = 0, y = 10, "ALGO\nPROFUNDO")
abline(v = c(-3, 3), col = "black", lty = 2, lwd = 1)
abline(h = c(7, 13), col = "black", lty = 2, lwd = 1)

arrows(x0 = -2.5, y0 = 12.5, x1 = -1, y1 = 10.5)
arrows(x0 = 2.5, y0 = 12.5, x1 = 1, y1 = 10.5)
arrows(x0 = -2.5, y0 = 10, x1 = -1, y1 = 10)
arrows(x0 = 2.5, y0 = 10, x1 = 1, y1 = 10)
arrows(x0 = -2.5, y0 = 7.5, x1 = -1, y1 = 9.5)
arrows(x0 = 2.5, y0 = 7.5, x1 = 1, y1 = 9.5)

cat("ex a ----------------\n")
