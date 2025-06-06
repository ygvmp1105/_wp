def grade(score):
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score <= 89:
        return 'B'
    elif 70 <= score <= 79:
        return 'C'
    elif 60 <= score <= 69:
        return 'D'
    elif 0 <= score <= 59:
        return 'F'
    else:
        return '無效成績'

print(grade(90))
print(grade(89))
print(grade(72))
print(grade(60))
print(grade(59))
print(grade(-1))
print(grade(101))
