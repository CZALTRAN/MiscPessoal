cat("ex a ----------------\n")
cat("\"The quick brown fox\n\tjumped over\n\t\tthe lazy dogs\"")

cat("\nex b ----------------\n")
B1 = 4
B2 = 0.75
print(paste("The result of multiplying ", B1, "by ", B2, " is ", B1 * B2))

cat("\nex c ----------------\n")
print(sub("tdavies", "czaltran", "/Users/tdavies/Documents/RBook/"));

cat("\nex d ----------------\n")
D1 = "How much wood could a woodchuck chuck"
print(D1)
D2 = paste(D1, "if", "a", "woodchuck", "could", "chuck", "wood")
print(D2)
print(gsub("wood", "metal", D2))


cat("\nex e ----------------\n")
D = "Two 6-packs for $12.99"
print(substr(D, 5,10)=="6-pack")
print(sub("12.99","10.99",D))
