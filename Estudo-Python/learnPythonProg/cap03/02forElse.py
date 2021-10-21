# for.else.py
class DriverException(Exception):
    pass

people = [('James', 17), ('Kirk', 19), ('Lars', 13), ('Robert', 8)]
for person, age in people:
    print(person)
    if age >= 18:
        driver = (person, age)
        break
else:
    raise DriverException('Driver not found.')

