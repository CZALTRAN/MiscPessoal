cat("ex a ----------------\n")
A = c(7, 1, 7, 10, 5, 9, 10, 3, 10, 8)
print(A > 5 | A == 2)
print(A > 5 || A == 2)

cat("\nex b ----------------\n")
B = c(8, 8, 4, 4, 5, 1, 5, 6, 6, 8)
print(B <= 6 & B != 4)
print(B <= 6 && B != 4)

cat("\nex c ----------------\n")
print((A > 5 | A == 2) & (B <= 6 & B != 4))
print((A > 5 | A == 2) && (B <= 6 & B != 4))

cat("\nex d ----------------\n")
D = A + B
print(D)
print(D >= 14 & D != 15)
print(D >= 14 && D != 15)
D1 = D / A
print(D1)
print(D1 > 4 | D1 <= 2)
print(D1 > 4 || D1 <= 2)
cat("\nex e ----------------\n")
