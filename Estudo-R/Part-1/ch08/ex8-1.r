cat("ex a ----------------\n")
quakes5 = quakes[quakes$mag >= 5,]
#print(quakes5)
write.table(
    quakes5,
    "./q5.txt",
    sep = "!",
    row.names = F
)
q5.dframe = read.table("./q5.txt", header = T, sep = "!")
#print(q5.dframe)

cat("\n\nex b ----------------\n")
library(car);
Duncan
png(filename="./ex8-1-b.png",500,500)
plot(c(0, 100), y = c(0, 100),
     type = 'n',
     main = "",
     xlab = "Educacao",
     ylab = "Salario"
)
lessthan80 = Duncan[Duncan$prestige <= 80,]
morethan80 = Duncan[Duncan$prestige > 80,]

points(
    lessthan80$education,
    lessthan80$income,
    col = "black",
    pch = 1
)
points(
    morethan80$education,
    morethan80$income,
    col = "blue",
    pch = 16
)

legend("topleft",
    legend = c("Prestigio <= 80", "Prestigio > 80"),
    pch = c(1, 19), 
    col = c("black", "blue"),
    pt.cex = c(1, 1)
)
dev.off()

cat("\n\nex c ----------------\n")
exer = list(quakes, q5.dframe, Duncan)
dput(exer, "./ex8-1.txt")
list.of.dataframes = dget("./ex8-1.txt")
print(list.of.dataframes);

