def summary(data):
    for student in data:
        name = student['name']
        scores = student['scores']
        total = sum(scores)
        avg = round(total / len(scores), 1) if scores else 0
        print(f"{name} 總分: {total}, 平均: {avg}")

students = [
    {'name': 'Andy', 'scores': [90, 80, 70]},
    {'name': 'jack', 'scores': [60, 85, 95]},
    {'name': 'alan', 'scores': [160, 185, 195]},
]

summary(students)
