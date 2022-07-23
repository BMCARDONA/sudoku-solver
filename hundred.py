
hundredNewBoards = []

for i in range(100):
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
    
    from random import randrange
    for i in range(9):
        for j in range(9):
            if (randrange(2)) == 1:
                newBoard[i][j] = 0;

    for line in newBoard:
        print(line)

    hundredNewBoards.append(newBoard)
print(hundredNewBoards)