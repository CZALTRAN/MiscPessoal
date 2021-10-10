cat("ex a ----------------\n")
foo <- list("a", c("b", "c", "d", "e"), "f", c("g", "h", "i"))
foo = lapply(foo, function(x) {
    return(paste(x, "!", sep = ""))
})
print(foo)

cat("\n\nex b ----------------\n")
fat = function(num) {
    if (num == 0) {
        return(1)
    } else {
        return(fat(num - 1) * num)
    }
}
print(fat(5))
print(fat(12))
print(fat(0))

cat("\n\nex b ----------------\n")
geolist = function(list) {
    mediaGeo = function(vec) {
        return(prod(vec) ^ (1 / length(vec)))
    }
    retList = list
    count = 1
    for (member in list) {
        if (is.vector(member)) {
            retList[count] = mediaGeo(member)
        }else if(is.matrix(member)){
            retList[[count]] = apply(member, 1, mediaGeo)
            #retList[count] = apply(member, 1, mediaGeo)
        }
        count = count + 1
    }
    return(retList)
}

foo <- list(1:3,
    matrix(c(3.3,3.2,2.8,2.1,4.6,4.5,3.1,9.4),4,2),
    matrix(c(3.3,3.2,2.8,2.1,4.6,4.5,3.1,9.4),2,4)
)
print(geolist(foo))

bar <- list(1:9,
    matrix(1:9,1,9),
    matrix(1:9,9,1),
    matrix(1:9,3,3)
)
print(geolist(bar))

