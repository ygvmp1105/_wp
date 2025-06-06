def classify_even_odd(numbers):
    result = {
        'even': [],
        'odd': []
    }
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result
  
print(classify_even_odd([1, 2, 3, 4, 5, 6]))
print(classify_even_odd([-3, -2, -1, 0, 1 ,2 ,3]))
print(classify_even_odd([]))
