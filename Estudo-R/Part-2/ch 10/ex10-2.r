cat("ex a ----------------\n")
mynum = 3
if (mynum == 1) {
  foo = 12
} else if (mynum == 2) {
  foo = 34
} else if (mynum == 3) {
  foo = 56
} else if (mynum == 4) {
  foo = 78
} else if (mynum == 5) {
  foo = NA
}
print(foo);
mynum = 0
if (mynum == 1) {
  foo2 = 12
} else if (mynum == 2) {
  foo2 = 34
} else if (mynum == 3) {
  foo2 = 56
} else if (mynum == 4) {
  foo2 = 78
} else if (mynum == 5) {
  foo2 = NA
}
try(print(foo2));

cat("\n\nex b ----------------\n")
#lowdose <- 12.5
#meddose <- 25.3
#highdose <- 58.1

doselevel <- factor(c("Low", "High", "High", "High", "Low", "Med", "Med"), 
    levels = c("Low", "Med", "High"))

#doselevel <- factor(c("Low", "Low", "Low", "Med", "Low", "Med","Med"), 
#    levels = c("Low", "Med", "High"))
lowdose <- 9
meddose <- 49
highdose <- 61
#doselevel <- factor(c("Low", "Med", "Med"),
#    levels = c("Low", "Med", "High"))
if (any(doselevel == "High")) {
  if (lowdose >= 10) {
    lowdose = 10
  } else {
    lowdose = lowdose / 2
  }
  if (meddose >= 26) {
    meddose = 26
  }
  if (highdose < 60) {
    highdose = 60
  } else {
    highdose = highdose * 1.5
  }
  dosage = rep(lowdose, times = length(doselevel))
  dosage[doselevel == "Med"] = meddose
  dosage[doselevel == "High"] = highdose
} else {
  doselevel = factor(ifelse(doselevel == "Low", "Small", "Large"))
  if (lowdose < 15 && meddose < 35) {
    lowdose = lowdose * 2
    meddose = meddose + highdose
  }
  dosage = rep(lowdose, times = length(doselevel))
  dosage[doselevel == "Large"] = meddose
}
print(dosage)
print(doselevel)

cat("\n\nex c ----------------\n")

mynum = 5
res = switch(mynum+1, "zero", "um", "dois", "tres", "quatro", 
    "cinco", "seis", "sete", "oito", "nove")
print(res);

