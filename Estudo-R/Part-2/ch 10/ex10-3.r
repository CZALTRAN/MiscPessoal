cat("ex a ----------------\n")
loopvec1 <- 5:7
loopvec2 <- 9:6
foo <- matrix(NA, length(loopvec1), length(loopvec2))


for (i in 1:length(loopvec1)) {
  foo[i,] <- loopvec1[i] * loopvec2
}
print(foo)

cat("\n\nex b ----------------\n")
nomes = c("Peter", "Homer", "Lois", "Stewie", "Maggie", "Bart")
numeros = c();
for (nome in nomes) {
  numeros = c(numeros,
        switch(EXPR = nome, Homer = 12, Marge = 34,
            Bart = 56, Lisa = 78, Maggie = 90, NA)
        )
}
print(numeros);

cat("\n\nex c ----------------\n")
count = 0;
mylist <- list(aa=c(3.4,1),bb=matrix(1:4,2,2),
    cc=matrix(c(T,T,F,T,F,F),3,2),dd="string here",
    ee=list(c("hello","you"),matrix(c("hello","there"))),
    ff=matrix(c("red","green","blue","yellow"))
)
for (item in mylist){
    if(is.matrix(item)){
        count = count + 1
    }
}
print (count)

count = 0
mylist <- list("tricked you",as.vector(matrix(1:6,3,2)))
for (item in mylist){
    if(is.matrix(item)){
        count = count + 1
    }
}
print (count)

count = 0
mylist <- list(list(1,2,3),list(c(3,2),2),
    list(c(1,2),matrix(c(1,2))),
    rbind(1:10,100:91)
)
for (item in mylist){
    if(is.matrix(item)){
        count = count + 1
    }
}
print (count)

