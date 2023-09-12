i = 0
while i <= 4:
    if i == 1 or i == 3:
        i += 1
        continue
    print(i)
    i += 1
    
i = 0
while i <= 4:
    if i % 2 != 0:
        i += 1
        continue
    print(i)
    i += 1
