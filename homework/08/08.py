def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
      
    limit = int(n**0.5) + 1
    for i in range(3, limit, 2):
        if n % i == 0:
            return False
    return True
  
print(is_prime(1))
print(is_prime(2))
print(is_prime(-1))
print(is_prime(19))
print(is_prime(51))
print(is_prime(97))
print(is_prime(100))
