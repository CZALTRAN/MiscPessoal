cat("ex a ----------------\n")
mylist <- list()
counter <- 1
#mynumbers <- c(4, 5, 1, 2, 6, 2, 4, 6, 6, 2)

#mynumbers <- c(2,2,2,2,5,2)
#mynumbers <- 2:20
mynumbers <- c(10, 1, 10, 1, 2)


mycondition <- mynumbers[counter] <= 5
while (mycondition) {
  mylist[[counter]] <- diag(mynumbers[counter])
  counter <- counter + 1
  if (counter <= length(mynumbers)) {
    mycondition <- mynumbers[counter] <= 5
  } else {
    mycondition <- FALSE
  }
}

print(mylist)

cat("\n\nex b ----------------\n")
mynum = 0
fac = 1
while (mynum > 0) {
  fac = fac * mynum
  mynum = mynum - 1
}
print(fac)


cat("\n\nex c ----------------\n")

mystring <- "R fever"
mystring <- "beautiful"
mystring <- "ECCENTRIC"
mystring <- "ElAbOrAte"
mystring <- "eeeeek!"

index <- 1
ecount <- 0
result <- mystring
while (ecount < 2 && index <= nchar(mystring)) {
  c = substr(mystring, index, index)
  if (c == "e" || c == "E") ecount = ecount + 1
  if (ecount == 2) {
    result = substr(mystring, 1, index - 1)
  }
  index = index + 1
  # several omitted operations #
}
print(result)