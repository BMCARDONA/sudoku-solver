

hundredNewBoards = []
for i in range(1):
    newBoard = []
    
    base  = 3
    side  = base * base
    
    # pattern for a baseline valid solution
    def pattern(r,c): return (base*(r%base)+r//base+c)%side
    
    # randomize rows, columns and numbers (of valid base pattern)
    from random import sample
    def shuffle(s): return sample(s,len(s)) 
    rBase = range(base) 
    rows  = [ g*base + r for g in shuffle(rBase) for r in shuffle(rBase) ] 
    cols  = [ g*base + c for g in shuffle(rBase) for c in shuffle(rBase) ]
    nums  = shuffle(range(1,base*base+1))
    
    # produce board using randomized baseline pattern
    board = [ [nums[pattern(r,c)] for c in cols] for r in rows ]
    
    for line in board: newBoard.append(line)
    
    # from random import randrange
    import random
    counter = 0

    # Here, 17 is the # of NUMBERED squares on the grid
    while counter < (81- 17):
        i = random.randint(0, 8)
        j = random.randint(0, 8)
        if newBoard[i][j] != 0:
            newBoard[i][j] = 0;
            counter += 1;

    hundredNewBoards.append(newBoard)
print(hundredNewBoards)



