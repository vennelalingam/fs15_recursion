
function factorial(x){
    if(x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

// "Base Case": Is where we give the condition to stop 
// recursion. 
// In the above code, if condition is the  base case to stop.
// "Recursive case" : This is where we write the formula to
// solve or execute the problem
// In the above code, return factorial is the recursive case


/*---------------------------

*****
    *   +   ****
                *   +   ***
                            *   +   **
                                    *   +   *
                                            *   +   ""
                                                    ""
                                                    
----------------------------*/       
/*------------

Factorial:

n! = n(n-1)(n-2)(n-3)....

5! = 5(5-1)(5-2)(5-3)(5-4)
    = 5 * 4 * 3 * 2 * 1 
    = 120

5!  = 5 * (5-1)!
    = 5 * 4 * (4-1)!
    = 5 * 4 * 3 * (3-1)!
    = 5 * 4 * 3 * 2 * 1
    = 120

5! = 5 * 4!  
    = 5 * 4 * 3!
    = 5 * 4 * 3 * 2!
    = 5 * 4 * 3 * 2 * 1
    = 120
----------*/