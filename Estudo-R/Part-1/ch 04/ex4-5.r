cat("ex a ----------------\n")
sex = rep("M", each=20)
sex[c(1,5:7,12,14:16)] = "F"
print (sex);

parties = rep("National", each=20)
parties[c(1,4,12,15,16,19)] = "Labour"
parties[c(6,9,11)] = "Greens"
parties[c(10,20)] = "Other"

print (parties);

# "National","Labour","Greens", "Maori", "Other"
cat("\nex b ----------------\n")
sex.fac = factor(sex)
print(sex.fac)
parties.fac = factor(parties, levels= c("National","Labour","Greens", "Maori", "Other"));
print(parties.fac)

cat("\nex c ----------------\n")
cat("i  --->\n")
print(parties[sex.fac == "M"])
cat("ii --->\n")
print(sex[parties.fac == "National"])

cat("\nex d ----------------\n")
sex = c(sex,"M","M","F","F","F","M")
sex.fac = factor(sex)
#print (sex);
print (sex.fac);

parties = c(parties,"National","Maori","Maori","Labour","Greens","Labour")
parties.fac = factor(parties, levels= c("National","Labour","Greens", "Maori", "Other"));
#print (parties);
print (parties.fac);

cat("\nex e ----------------\n")
confidence =  c(93, 55, 29, 100, 52, 84, 56, 0, 33, 
52, 35, 53, 55, 46, 40, 40, 56, 45, 64, 31, 10, 29, 40,95, 18, 61)

confidence.cut = cut(confidence, c(0,30,70,100), right = T, 
    include.lowest = T, labels = c("Baixo", "Moderado", "Alto"))

print(confidence)
print(confidence.cut)

cat("\nex f ----------------\n")

print(confidence.cut[parties.fac=="Labour"])
print(confidence.cut[parties.fac=="National"])
