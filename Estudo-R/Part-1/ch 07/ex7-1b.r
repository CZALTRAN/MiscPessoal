cat("ex b ----------------\n")
data = data.frame(
    peso = c(55,85,75,42,93,63,58,75,89,67),
    altura = c(161,185,174,154,188,178,170,167,181,178),
    sexo = c(
        "female","male","male","female",
        "male","male","female","male",
        "male","female"
    )
)
print(data)
plot(c(50,100), y =c(150,190),
     type = 'n', 
     main = "", 
     xlab = "Peso", 
     ylab = "Altura"
)
points(
    data$peso[data$sexo=="male"],
    data$altura[data$sexo=="male"],
    col="blue",
    pch=7
)

points(
    data$peso[data$sexo=="female"],
    data$altura[data$sexo=="female"],
    col="red",
    pch=8
)
