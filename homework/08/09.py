def most_common(nums):
    if not nums:
        return None
    counts = {}
    for num in nums:
        counts[num] = counts.get(num, 0) + 1
    max_num = None
    max_count = 0
    for num, count in counts.items():
        if count > max_count:
            max_count = count
            max_num = num
    return max_num

print(most_common([2, 2, 2, 3, 3, 4, 4]))
print(most_common([]))
print(most_common([1, 1, 2, 2]))
