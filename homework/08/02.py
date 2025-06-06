def average(nums):
    if not nums:
        return None
    avg = sum(nums) / len(nums)
    return round(avg, 1)

print(average([1, 2, 3, 4, 5, 6]))
print(average([-3, 5, -2]))
print(average([]))
