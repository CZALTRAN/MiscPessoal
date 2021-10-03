cat("ex a ----------------\n")
dframe = data.frame(
    person = c("Stan", "Francine", "Steve", "Roger", "Hayley", "Klaus"),
    sex = factor(c("M", "F", "M", "M", "F", "M")),
    funny = factor(c("High", "Med", "Low", "High", "Med", "Med"))
)
print(dframe);

cat("\nex b ----------------\n")
dframe$age = c(41, 41, 15, 1600, 21, 60)
print(dframe);


cat("\nex c ----------------\n")
dframe = dframe[, c(1, 4, 2, 3)]
print(dframe);

cat("\nex d ----------------\n")
#criando mydata igual o livro
mydata <- data.frame(
    person = c("Peter", "Lois", "Meg", "Chris", "Stewie"),
    age = c(42, 40, 17, 14, 1),
    sex = factor(c("M", "F", "F", "M", "M"))
)
mydata <- rbind(mydata,data.frame(
    person = "Brian", age = 7,
    sex = factor("M", levels = levels(mydata$sex))
))
mydata <- cbind(mydata, funny=factor(c("High","High","Low","Med","High","Med")))
mydata$age.mon <- mydata$age*12
mydata2 = mydata[,-5]
print(mydata)    
print(mydata2)    

cat("\nex e ----------------\n")
mydataframe = rbind(dframe, mydata2)
print(mydataframe)

cat("\nex f ----------------\n")
print(mydataframe[mydataframe$funny!="Low",1:2])

cat("\nex g ----------------\n")
print(mydataframe[substr(mydataframe$person,1,1)=="S",1:2])

