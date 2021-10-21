# conditional.1.py
late = True 
if late: print('I need to call my manager!')

# conditional.2.py
late = False 
if late: print('I need to call my manager!') #1 
else: print('no need to call my manager...') #2


# taxes.py
income = 15000 
if income < 10000: tax_coefficient = 0.0 #1 
elif income < 30000: tax_coefficient = 0.2 #2 
elif income < 100000: tax_coefficient = 0.35 #3 
else: tax_coefficient = 0.45 #4 
print('I will pay:', income * tax_coefficient, 'in taxes')


# ternary.py
order_total = 247 # GBP 
# classic if/else form 
if order_total > 100: discount = 25 # GBP 
else: discount = 0 # GBP 
print(order_total, discount) # ternary operator 

discount = 25 if order_total > 100 else 0 
print(order_total, discount)



